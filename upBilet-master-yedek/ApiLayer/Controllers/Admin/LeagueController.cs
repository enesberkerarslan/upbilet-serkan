using ApiLayer.Models.AdminPanel.League;
using ApiLayer.Models.AdminPanel.PaymentPeriod;
using AutoMapper;
using BusinessLayer.Manager;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Xml;

namespace ApiLayer.Controllers.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeagueController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly LeagueManager leagueManager;

        public LeagueController(IMapper mapper, LeagueManager leagueManager)
        {
            _mapper = mapper;
            this.leagueManager = leagueManager;
        }

        [HttpGet("getAllLeague")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllLeaguedAsync()
        {
            var result = await leagueManager.GetAll();
            if (result.Count == 0)
            {
                return NotFound("lig bulunamadı.");
            }

            var periods = _mapper.Map<List<LeagueViewModel>>(result);
            return Ok(periods);
        }

        [HttpPost("addLeague")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddLeagueAsync([FromBody] NewLeagueViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                LeagueEntity ligEntity = _mapper.Map<LeagueEntity>(model);
                ligEntity.createDate = DateTime.Now;
                var result = await leagueManager.AddAsync(ligEntity);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("lig başarıyla kaydedildi.");
                }
                return BadRequest(ModelState);

            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpDelete("deleteLeague")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteLeague(int id)
        {
            try
            {
                var result = await leagueManager.DeleteAsync(id);
                if (result > 0)
                {
                    return Ok("leagueManager Başarıyla silindi.");
                }


                return Ok("leagueManager silinirken hata oluştu.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }
    }
}
