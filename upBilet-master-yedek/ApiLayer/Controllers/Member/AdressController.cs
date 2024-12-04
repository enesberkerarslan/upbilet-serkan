using ApiLayer.Models.User;
using AutoMapper;
using BusinessLayer.Infrastructure;
using BusinessLayer.Manager;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApiLayer.Controllers.Member
{
    [Route("api/Member/[controller]")]
    [ApiController]
    public class AdressController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly AdressManager adressManager;

        public AdressController(IMapper mapper, AdressManager adressManager)
        {
            _mapper = mapper;
            this.adressManager = adressManager;
        }


        //Add Adress
        [HttpPost("addAdress")]
        [Authorize(Roles = "Member,Broker")]
        public async Task<IActionResult> AddAdressAsync([FromBody] AdressViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            AdressEntity adress = _mapper.Map<AdressEntity>(model);
            adress.createDate = DateTime.Now;

            var result = await adressManager.AddAsync(adress);

            if (result > 0) // Burada Succeeded özelliğine erişim
            {
                return Ok("Adres başarıyla kaydedildi.");
            }

            return BadRequest(ModelState);

        }

        //bütün adresleri
        [HttpGet("getAllAdress")]
        [Authorize(Roles = "Member,Broker")]
        public async Task<IActionResult> GetAllAdressAsync()
        {
            try
            {
                var userId = TokenHelper.GetUserIdFromToken(HttpContext);
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("Token geçersiz veya kullanıcı ID'si bulunamadı.");
                }
                // Veritabanından belirli bir kullanıcıya ait adresleri getir
                var adressler = await adressManager.GetAddressesByUserIdAsync(int.Parse(userId));

                // Adresler varsa, 200 (OK) durum kodu ile birlikte adresleri döndür
                if (adressler != null)
                {

                    var adressViewModels = _mapper.Map<List<AdressViewModel>>(adressler);
                    return Ok(adressViewModels);
                }
                // Eğer adres bulunamadıysa, 404 (Not Found) durum kodunu döndür
                return NotFound("Kullanıcıya ait adres bulunamadı.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        //adresupdate
        [HttpPut("updateAdress")]
        [Authorize(Roles = "Member,Broker")]
        public async Task<IActionResult> UpdateAdressAsync([FromBody] UpdateAdressViewModel updatedAdress)
        {
            try
            {
                // Güncellenmek istenen adresin mevcut olup olmadığını kontrol edin
                var existingAdress = await adressManager.GetByIdAsync(updatedAdress.Id);
                if (existingAdress == null)
                {
                    return NotFound("Güncellenmek istenen adres bulunamadı.");
                }
                existingAdress.AdressName = updatedAdress.AdressName;
                existingAdress.City = updatedAdress.City;
                existingAdress.Country = updatedAdress.Country;
                existingAdress.PostCode = updatedAdress.PostCode;



                await adressManager.UpdateAsync(existingAdress);

                return Ok("Adres başarıyla güncellendi.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        [HttpDelete("deleteAdress")]
        [Authorize(Roles = "Member,Broker")]
        public async Task<IActionResult> DeleteAdressAsync(int id)
        {
            try
            {
                var result = await adressManager.DeleteAsync(id);
                if (result > 0)
                {
                    return Ok("Adress başarıyla silindi.");
                }

                return NotFound("Silinmek istenen adres bulunamadı.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

    }
}
