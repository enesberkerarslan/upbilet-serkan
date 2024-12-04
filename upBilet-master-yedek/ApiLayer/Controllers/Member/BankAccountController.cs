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
    public class BankAccountController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly BankAccountManager bankAccountManager;

        public BankAccountController(IMapper mapper, BankAccountManager bankAccountManager)
        {
            _mapper = mapper;
            this.bankAccountManager = bankAccountManager;
        }

        //Add bankAccount
        [HttpPost("addBankAccount")]
        [Authorize(Roles = "Member,Broker")]
        public async Task<IActionResult> AddBankAccountAsync([FromBody] BankAccountViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {

                BankAccountEntity bank = _mapper.Map<BankAccountEntity>(model);
                bank.createDate = DateTime.Now;

                var result = await bankAccountManager.AddAsync(bank);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("Banka adresi başarıyla kaydedildi.");
                }
                return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndürme
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        //bütün adresleri
        [HttpGet("getAllBankAccount")]
        [Authorize(Roles = "Member,Broker")]
        public async Task<IActionResult> GetAllBankAccounts()
        {
            try
            {
                var userId = TokenHelper.GetUserIdFromToken(HttpContext);
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("Token geçersiz veya kullanıcı ID'si bulunamadı.");
                }
                // Veritabanından belirli bir kullanıcıya ait adresleri getir
                var bankAccounts = await bankAccountManager.GetBankAccountsByUserIdAsync(int.Parse(userId));

                // Adresler varsa, 200 (OK) durum kodu ile birlikte adresleri döndür
                if (bankAccounts != null)
                {

                    var bankAccountsViewModel = _mapper.Map<List<BankAccountViewModel>>(bankAccounts);
                    return Ok(bankAccountsViewModel);
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
        [HttpPut("updateBankAccount")]
        [Authorize(Roles = "Member,Broker")]
        public async Task<IActionResult> UpdateBankAccountAsync([FromBody] UpdateBankAccountViewModel updatedAdress)
        {
            try
            {
                // Güncellenmek istenen adresin mevcut olup olmadığını kontrol edin
                var existingAdress = await bankAccountManager.GetByIdAsync(updatedAdress.Id);
                if (existingAdress == null)
                {
                    return NotFound("Güncellenmek istenen adres bulunamadı.");
                }
                existingAdress.BankAccountType = updatedAdress.BankAccountType;
                existingAdress.BankAccountName = updatedAdress.BankAccountName;
                existingAdress.Currency = updatedAdress.Currency;



                await bankAccountManager.UpdateAsync(existingAdress);

                return Ok("Banka Adresi başarıyla güncellendi.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        
        
        [HttpDelete("deleteBankAccount")]
        [Authorize(Roles = "Member,Broker")]
        public async Task<IActionResult> DeleteBankAccountAsync(int id)
        {
            try
            {
                var result = await bankAccountManager.DeleteAsync(id);
                if (result > 0)
                {
                    return Ok("Banka Adresi başarıyla silindi.");
                }

                return NotFound("Silinmek istenen banka adresi bulunamadı.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }
    }
}
