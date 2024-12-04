using ApiLayer.Models.AdminPanel.PaymentPeriod;
using ApiLayer.Models.AdminPanel.Team;
using AutoMapper;
using BusinessLayer.Manager;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiLayer.Controllers.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly TeamManager _teamManager;

        public TeamController(IMapper mapper, TeamManager teamManager)
        {
            _mapper = mapper;
            _teamManager = teamManager;
        }


        [HttpGet("getAllTeam")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllTeamPeriodAsync()
        {
            var result = await _teamManager.GetAll();
            if (result.Count == 0)
            {
                return NotFound("takım  bulunamadı.");
            }

            var periods = _mapper.Map<List<TeamViewModel>>(result);
            return Ok(periods);
        }

        [HttpPost("addTeam")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddTeamAsync([FromBody] NewTeamViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                TeamEntity teamEntity = _mapper.Map<TeamEntity>(model);
                teamEntity.createDate = DateTime.Now;
                var result = await _teamManager.AddAsync(teamEntity);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("takım başarıyla kaydedildi.");
                }
                return BadRequest(ModelState);

            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


        [HttpDelete("deleteTeam")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteTeamAsync(int id)
        {
            try
            {
                var result = await _teamManager.DeleteAsync(id);
                if (result > 0)
                {
                    return Ok("_teamManager Başarıyla silindi.");
                }


                return Ok("_teamManager silinirken hata oluştu.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

    }
}
