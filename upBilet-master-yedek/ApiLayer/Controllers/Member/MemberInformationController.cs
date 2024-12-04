using ApiLayer.Models.User;
using AutoMapper;
using BusinessLayer.Infrastructure;
using BusinessLayer.Manager;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;



namespace ApiLayer.Controllers.Member
{
    [Route("api/Member/[controller]")]
    [ApiController]
    public class MemberInformationController : ControllerBase
    {
        private readonly UserManager usermanager;
        private readonly IMapper _mapper;


        public MemberInformationController(UserManager usermanager, IMapper mapper)
        {
            this.usermanager = usermanager;
            _mapper = mapper;

        }
        //userbilgi update.

        [HttpPut("updateCustomerInformation")]
        [Authorize(Roles = "Member,Broker")]
        public async Task<IActionResult> UpdateAsync([FromBody] UpdateViewModel model)
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
                var existingUser = await usermanager.GetByIdAsync(int.Parse(userId));

                if (existingUser == null)
                {
                    return NotFound("Kullanıcı bulunamadı.");
                }

                // ViewModel'den gelen verileri mevcut kullanıcı nesnesine güncelle
                _mapper.Map(model, existingUser);

                // Güncellenmiş kullanıcıyı veritabanında güncelle
                var result = await usermanager.UpdateAsync(existingUser);

                if (result > 0)
                {
                    return Ok("Kullanıcı başarıyla güncellendi.");
                }

                return BadRequest("Kullanıcı güncellenemedi.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndürme
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


    }
}
