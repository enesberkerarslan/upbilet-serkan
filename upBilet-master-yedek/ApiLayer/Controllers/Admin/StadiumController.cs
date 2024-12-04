using ApiLayer.Models.AdminPanel.Stadium;
using AutoMapper;
using BusinessLayer.Manager;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ApiLayer.Controllers.Admin
{
    [Route("api/Admin/[controller]")]
    [ApiController]
    public class StadiumController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly StadiumManager stadiumManager;
        private readonly StadiumCategoryManager stadiumCategoryManager;
        private readonly StadiumCategoryBlockManager stadiumCategoryBlockManager;

        public StadiumController(IMapper mapper, StadiumManager stadiumManager, StadiumCategoryManager stadiumCategoryManager, StadiumCategoryBlockManager stadiumCategoryBlockManager)
        {
            _mapper = mapper;
            this.stadiumManager = stadiumManager;
            this.stadiumCategoryManager = stadiumCategoryManager;
            this.stadiumCategoryBlockManager = stadiumCategoryBlockManager;
        }

        [HttpGet("getAllStadiums")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllStadiumsAsync()
        {
            try
            {
                var result = await stadiumManager.GetAll();
                if (result.Count == 0)
                {
                    return NotFound("Stadyum bulunamadı.");
                }

                var categories = _mapper.Map<List<StadiumViewModel>>(result);
                return Ok(categories);

            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpPost("addStadium")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddStadiumAsync([FromBody] StadiumViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                StadiumEntity stadiumEntity = _mapper.Map<StadiumEntity>(model);
                stadiumEntity.createDate = DateTime.Now;

                var result = await stadiumManager.AddAsync(stadiumEntity);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("Stadium başarıyla kaydedildi.");
                }
                return BadRequest(ModelState);

            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpPut("updateStadium")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateStadiumAsync(int id, [FromBody] StadiumViewModel updateStadium)
        {
            try
            {
                // Güncellenmek istenen adresin mevcut olup olmadığını kontrol edin
                var existingAdress = await stadiumManager.GetByIdAsync(id);
                if (existingAdress == null)
                {
                    return NotFound("Güncellenmek istenen stadyum bulunamadı.");
                }
                existingAdress.StadiumName = updateStadium.StadiumName;
                existingAdress.StadiumImage = updateStadium.StadiumImage;



                await stadiumManager.UpdateAsync(existingAdress);

                return Ok("Stadyum başarıyla güncellendi.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpDelete("deleteStadium")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteStadium(int id)
        {
            try
            {
                var result = await stadiumManager.DeleteAsync(id);
                if (result > 0)
                {
                    return Ok("Stadyum Başarıyla silindi.");
                }


                return Ok("Staydum silinirken hata oluştu.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpGet("getStadiumByStadiumId")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetStadiumByStadiumIdAsync(int id)
        {
            try
            {
                var stadiums = await stadiumManager.GetByIdAllItemsAsync(id);
                if (stadiums != null && stadiums.Any())
                {
                    // Kullanıcı koleksiyonundan sadece ilk stadyumu al
                    var stadium = stadiums.First();

                    var stadiumDetails = _mapper.Map<StadiumDetailsViewModel>(stadium);

                    return Ok(stadiumDetails);
                }
                else
                {
                    return NotFound("Stadyum bulunamadı");
                }
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }




        //STADYUM Kategori EKLEME

        [HttpPost("addStadiumCategory")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddStadiumCategıryAsync([FromBody] StadiumCategoryViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                StadiumCategoryEntity stadiumEntity = _mapper.Map<StadiumCategoryEntity>(model);
                stadiumEntity.createDate = DateTime.Now;

                var result = await stadiumCategoryManager.AddAsync(stadiumEntity);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("Stadium kategoresi başarıyla kaydedildi.");
                }
                return BadRequest(ModelState);

            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        [HttpDelete("deleteStadiumCategory")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteStadiumCategory(int id)
        {
            try
            {
                var result = await stadiumCategoryManager.DeleteAsync(id);
                if (result > 0)
                {
                    return Ok("Stadyum kategori Başarıyla silindi.");
                }


                return Ok("Staydum kategori silinirken hata oluştu.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        //STADYUM BLOK EKLEME

        [HttpPost("addStadiumCategoryBlock")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddStadiumCategoryBlock([FromBody] StadiumCategoryBlockViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                StadiumCategoryBlockEntity stadiumCategoryBlockEntity = _mapper.Map<StadiumCategoryBlockEntity>(model);
                stadiumCategoryBlockEntity.createDate= DateTime.Now;

                var result = await stadiumCategoryBlockManager.AddAsync(stadiumCategoryBlockEntity);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("Kategoriye block başarıyla kaydedildi.");
                }
                return BadRequest(ModelState);

            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpDelete("deleteStadiumCategoryBlock")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteStadiumCategoryBlock(int id)
        {
            try
            {
                var result = await stadiumCategoryBlockManager.DeleteAsync(id);
                if (result > 0)
                {
                    return Ok("Block Başarıyla silindi.");
                }


                return Ok("Block silinirken hata oluştu.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

    }
}
