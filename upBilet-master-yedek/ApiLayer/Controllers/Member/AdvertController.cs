using ApiLayer.Models.User;
using ApiLayer.Models.User.Advert;
using AutoMapper;
using BusinessLayer.Infrastructure;
using BusinessLayer.Manager;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Security.Claims;

namespace ApiLayer.Controllers.Member
{
    [Route("api/Member/[controller]")]
    [ApiController]
    public class AdvertController : ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly AdvertManager _advertManager;

        public AdvertController(IMapper mapper, AdvertManager advertManager)
        {
            _mapper = mapper;
            _advertManager = advertManager;
        }

        //Add Advert
        [HttpPost("addAdvert")]
        [Authorize(Roles = "Admin,Member,Broker")]
        public async Task<IActionResult> AddAdvertAsync([FromBody] AddAdvertViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var userId = TokenHelper.GetUserIdFromToken(HttpContext);
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("Token geçersiz veya kullanıcı ID'si bulunamadı.");
                }
                AdvertEntity advert = _mapper.Map<AdvertEntity>(model);
                var userRole = User.FindFirst(ClaimTypes.Role)?.Value;
                advert.IsActive = true;
                advert.UserId = int.Parse(userId);
                advert.SoldPiece = 0;
                advert.createDate = DateTime.Now;
                if (userRole == "Broker")
                {
                    advert.Adminapproval = true;
                }
                else if (userRole == "Member")
                {
                    advert.Adminapproval = false;
                }

                var result = await _advertManager.AddAsync(advert);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("Ilan başarıyla admin onayına yollandı.");
                }
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }

            return BadRequest(ModelState);


        }

        //getall advert
        [HttpGet("getAllAdvert")]
        [Authorize(Roles = "Admin,Member,Broker")]
        public async Task<IActionResult> GetAllAdvertAsync()
        {
            var userId = TokenHelper.GetUserIdFromToken(HttpContext);
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized("Token geçersiz veya kullanıcı ID'si bulunamadı.");
            }
            // Kullanıcıya ait advert'leri almak için predicate'i oluşturun
            Expression<Func<AdvertEntity, bool>> predicate = advert => advert.UserId == int.Parse(userId);

            // Veritabanından belirli bir kullanıcıya ait advert'leri getir
            var adverts = await _advertManager.Get(predicate).ToListAsync();

            // Adresler varsa, 200 (OK) durum kodu ile birlikte adresleri döndür
            if (adverts != null && adverts.Any())
            {
                var advertViewModel = _mapper.Map<List<AdvertViewModel>>(adverts);
                return Ok(advertViewModel);
            }

            // Eğer adres bulunamadıysa, 404 (Not Found) durum kodunu döndür
            return NotFound("Kullanıcıya ait advert bulunamadı.");
        }


        [HttpPut("updateAdvert")]
        [Authorize(Roles = "Admin,Member,Broker")]
        public async Task<IActionResult> UpdateAdvertAsync([FromBody] UpdateAdvertViewModel updatedAdvert)
        {
            try
            {
                // Güncellenmek istenen adresin mevcut olup olmadığını kontrol edin
                var existingAdvert = await _advertManager.GetByIdAsync(updatedAdvert.Id);
                var userRole = User.FindFirst(ClaimTypes.Role)?.Value;

                if (existingAdvert == null)
                {
                    return NotFound("Güncellenmek istenen ilan bulunamadı.");
                }
                existingAdvert.AdvertTicketPrice = updatedAdvert.AdvertTicketPrice;
                existingAdvert.TribuneCategory = updatedAdvert.TribuneCategory;
                existingAdvert.TribuneBlok = updatedAdvert.TribuneBlok;
                existingAdvert.TribuneLine = updatedAdvert.TribuneLine;
                existingAdvert.SalesType = updatedAdvert.SalesType;
                existingAdvert.TotalPiece = updatedAdvert.TotalPiece;
                existingAdvert.IsActive = updatedAdvert.IsActive;
                
                if (userRole == "Broker")
                {
                    existingAdvert.Adminapproval = true;
                }
                else if (userRole == "Member")
                {
                    existingAdvert.Adminapproval = false;
                }
                await _advertManager.UpdateAsync(existingAdvert);
                return Ok("İlan başarıyla güncellendi.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        //ilan aktif pasife alma
        [HttpPut("closeAdvert")]
        [Authorize(Roles = "Admin,Member,Broker")]
        public async Task<IActionResult> closeAdvertAsync(int id)
        {

            // Güncellenmek istenen adresin mevcut olup olmadığını kontrol edin
            var existingAdvert = await _advertManager.GetByIdAsync(id);
            if (existingAdvert == null)
            {
                return NotFound("Güncellenmek istenen ilan bulunamadı.");
            }
            existingAdvert.IsActive = !existingAdvert.IsActive;

            await _advertManager.UpdateAsync(existingAdvert);

            return Ok("İlan başarıyla güncellendi.");
        }


        [HttpDelete("deleteAdvert")]
        [Authorize(Roles = "Admin,Member,Broker")]
        public async Task<IActionResult> DeleteAdvertAsync(int id)
        {
            var existingAdvert = await _advertManager.GetByIdAsync(id);
            
            if(existingAdvert == null)
            {
                return NotFound("Silinmek istenen İlan bulunamadı.");

            }
            else
            {
                if (existingAdvert.SoldPiece > 0)
                {
                    return BadRequest("İlanda satış yapılmış silinemez");
                }
                else
                {
                    var result = await _advertManager.DeleteAsync(id);
                    if (result > 0)
                    {
                        return Ok("İlan başarıyla silindi.");
                    }

                }
            }
            return NotFound("Silinmek istenen İlan bulunamadı.");


        }
    }
}
