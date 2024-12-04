using ApiLayer.Models.AdminPanel;
using AutoMapper;
using BusinessLayer.Manager;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApiLayer.Controllers.Admin
{
    [Route("api/Admin/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly UserManager userManager;

        public UserController(IMapper mapper, UserManager userManager)
        {
            _mapper = mapper;
            this.userManager = userManager;
        }


        [Authorize(Roles = "Admin")]
        [HttpGet("getAllUser")]
        public async Task<IActionResult> GetAllUserAsync()
        {
            try
            {
                var result = await userManager.GetAll();
                if (result == null)
                {
                    return NotFound("Üyeler getirilemedi");
                }

                var users = _mapper.Map<List<UsersViewModel>>(result);

                if (users != null && users.Any())
                {
                    return Ok(users);
                }

                return NotFound("Üyeler getirilemedi");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [Authorize(Roles = "Admin")]
        [HttpGet("getUserByUserId")]
        public async Task<IActionResult> GetUserByUserIdAsync(int id)
        {
            try
            {
                var users = await userManager.GetByIdAllItemsAsync(id);
                if (users != null && users.Any())
                {
                    // Kullanıcı koleksiyonundan sadece ilk öğeyi al
                    var user = users.First();

                    var userDetail = _mapper.Map<UserDetailsViewModel>(user);

                    return Ok(userDetail);
                }
                else
                {
                    return NotFound("Kullanıcı bulunamadı");
                }
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [Authorize(Roles = "Admin")]
        [HttpPut("updateUserRole")]
        public async Task<IActionResult> UpdateUserRole(int id, [FromBody] string newRole)
        {
            try
            {
                // Belirtilen ID'ye sahip kullanıcıyı bul
                var user = await userManager.GetByIdAsync(id);
                if (user == null)
                {
                    return NotFound("Kullanıcı bulunamadı.");
                }

                // Kullanıcı rolünü güncelle
                user.UserRole = newRole;

                // Kullanıcıyı güncelle
                await userManager.UpdateAsync(user);

                return Ok("Kullanıcı rolü başarıyla güncellendi.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


    }
}
