using ApiLayer.Models.AdminPanel.Activity;
using AutoMapper;
using BusinessLayer.Manager;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApiLayer.Controllers.Admin
{
    [Route("api/Admin/[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ActivityManager activityManager;

        public ActivityController(IMapper mapper, ActivityManager activityManager)
        {
            _mapper = mapper;
            this.activityManager = activityManager;
        }


        [HttpGet("getAllActivities")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllActivitiesAsync()
        {          
            var result = await activityManager.GetAll();
            if (result.Count == 0)
            {
                return NotFound("Event bulunamadı.");
            }

            var categories = _mapper.Map<List<ActivityViewModel>>(result);
            return Ok(categories);    
        }


        [HttpPost("addActivity")]
        public async Task<IActionResult> AddActivityAsync([FromBody] NewActivityViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            string filePath = null;

            if (!string.IsNullOrEmpty(model.Image))
            {
                try
                {
                    // Dosya yolu ve dosya adı oluşturma
                    var fileName = Guid.NewGuid().ToString() + ".jpg"; // Dosya adı için benzersiz bir ad oluşturun
                    var uploads = Path.Combine("wwwroot/ActivityImage", fileName);
                    filePath = Path.Combine(uploads);

                    // Base64 string'i byte array'e dönüştürme ve dosyayı kaydetme
                    byte[] imageBytes = Convert.FromBase64String(model.Image);
                    await System.IO.File.WriteAllBytesAsync(filePath, imageBytes);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, "Dosya yükleme sırasında bir hata oluştu: " + ex.Message);
                }
            }

            try
            {
                ActivityEntity activityEntity = _mapper.Map<ActivityEntity>(model);
                if (!string.IsNullOrEmpty(filePath))
                {
                    activityEntity.Image = filePath;
                }
                activityEntity.createDate = DateTime.Now;
                var result = await activityManager.AddAsync(activityEntity);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("Event başarıyla kaydedildi.");
                }
                return BadRequest(ModelState);

            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpPut("updateActivity")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateActivityAsync([FromBody] ActivityUpdateViewModel updateActivity)
        {

            try
            {
                // Güncellenmek istenen adresin mevcut olup olmadığını kontrol edin
                var existingActivity = await activityManager.GetByIdAsync(updateActivity.ActivityId);
                if (existingActivity == null)
                {
                    return NotFound("Güncellenmek istenen activity bulunamadı.");
                }
                _mapper.Map(updateActivity, existingActivity);



                await activityManager.UpdateAsync(existingActivity);

                return Ok("Kategori başarıyla güncellendi.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpDelete("deleteActivity")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteActivity(int id)
        {
            try
            {
                var result = await activityManager.DeleteAsync(id);
                if (result > 0)
                {
                    return Ok("Activity Başarıyla silindi.");
                }


                return Ok("Activity silinirken hata oluştu.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpGet("getActivityAdvertsById")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetActivityAdvertsByIdAsync(int id)
        {
            try
            {
                var adverts = await activityManager.GetByIdAllIAdvertsAsync(id);
                if (adverts != null && adverts.Any())
                {
                    // Kullanıcı koleksiyonundan sadece ilk stadyumu al
                    var activity = adverts.First();

                    var activityDetails = _mapper.Map<ActivityDetailsViewModel>(activity);

                    return Ok(activityDetails);
                }
                else
                {
                    return NotFound("Activity bulunamadı");
                }
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }




    }
}
