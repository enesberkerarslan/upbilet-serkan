using ApiLayer.Models.AdminPanel;
using ApiLayer.Models.AdminPanel.Activity;
using ApiLayer.Models.AdminPanel.PaymentPeriod;
using AutoMapper;
using BusinessLayer.Manager;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApiLayer.Controllers.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentPeriodController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly PaymentPeriodManager _paymentPeriod;

        public PaymentPeriodController(IMapper mapper, PaymentPeriodManager paymentPeriod)
        {
            _mapper = mapper;
            _paymentPeriod = paymentPeriod;
        }



        [HttpGet("getAllPaymentPeriod")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllPaymentPeriodAsync()
        {
            var result = await _paymentPeriod.GetAll();
            if (result.Count == 0)
            {
                return NotFound("Payment Period bulunamadı.");
            }

            var periods = _mapper.Map<List<PaymentPeriodViewModel>>(result);
            return Ok(periods);
        }

        [HttpPost("addPaymentPeriod")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddCategoryAsync([FromBody] NewPaymentPeriodViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                PaymentPeriodEntity paymentEntity = _mapper.Map<PaymentPeriodEntity>(model);
                paymentEntity.CreateDate = DateTime.Now;
                var result = await _paymentPeriod.AddAsync(paymentEntity);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("Payment period başarıyla kaydedildi.");
                }
                return BadRequest(ModelState);

            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        [HttpDelete("deletePaymentPeriod")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeletePaymentPeriod(int id)
        {
            try
            {
                var result = await _paymentPeriod.DeleteAsync(id);
                if (result > 0)
                {
                    return Ok("_paymentPeriod Başarıyla silindi.");
                }


                return Ok("_paymentPeriod silinirken hata oluştu.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


    }
}
