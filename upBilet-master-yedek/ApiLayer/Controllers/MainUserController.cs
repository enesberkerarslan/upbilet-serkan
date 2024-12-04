using ApiLayer.Models;
using ApiLayer.Models.User;
using ApiLayer.Models.User.UserLogin_Register;
using AutoMapper;
using Azure.Core;
using BusinessLayer.Infrastructure;
using BusinessLayer.Manager;
using BusinessLayer.ValidationRules;
using EntityLayer.Concrete;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ApiLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainUserController : ControllerBase
    {
        private readonly UserManager usermanager;
        private readonly IMapper _mapper;
        private readonly IConfiguration configuration;

        public MainUserController(UserManager usermanager, IMapper mapper, IConfiguration configuration)
        {
            this.usermanager = usermanager;
            _mapper = mapper;
            this.configuration = configuration;
        }

        //kayıt olma
        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                
                UserEntity user = _mapper.Map<UserEntity>(model);

                var validator = new UserValidator();
                var validationResult = validator.Validate(user);

                user.Password = PasswordEncryptor.Encrpt(model.Password);
                if (!validationResult.IsValid)
                {
                    return BadRequest(validationResult.Errors);
                }

                user.UserRole = "Member";
                var result = await usermanager.AddAsync(user);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("Kullanıcı başarıyla kaydedildi.");
                }
               return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndürme
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] UserLoginViewModel model)
        {
 
            var dbUser = await usermanager.GetSingleAsync(i => i.UserMail == model.UserMail);
            model.UserPassword = PasswordEncryptor.Encrpt(model.UserPassword);
            if (dbUser == null)
            {
                var response = new  ApiResponse<string>(true, "An error occurred");
                return BadRequest(response);
            }
            if (dbUser.Password != model.UserPassword)
            {
                var response = new ApiResponse<string>(true, "An error occurred");
                return BadRequest(response);
            }

            var result = _mapper.Map<UserLoginResponseViewModel>(dbUser);
            var claims = new Claim[]
            {
                    new Claim(ClaimTypes.NameIdentifier, dbUser.UserId.ToString()),
                    new Claim(ClaimTypes.Email, dbUser.UserMail),
                    new Claim(ClaimTypes.Role, dbUser.UserRole)

               };

            result.Token = GenerateToken(claims);
            var response2 = new ApiResponse<object>(false, "Request successful", result);
            return Ok(response2);

        }


        private string GenerateToken(Claim[] claims)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["AuthConfig:Secret"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expiry = DateTime.Now.AddHours(1);

            var token = new JwtSecurityToken(claims: claims,
                                             expires: expiry,
                                             signingCredentials: creds,
                                             notBefore: DateTime.Now);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
