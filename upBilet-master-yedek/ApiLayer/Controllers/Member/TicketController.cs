using ApiLayer.Models.User.BuyTicket;
using AutoMapper;
using BusinessLayer.Infrastructure;
using BusinessLayer.Manager;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ApiLayer.Controllers.Member
{
    [Route("api/Member/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly SalesManager salesManager;
        private readonly MyTicketsManager myTicketsInformationManager;
        private readonly CustomerInformationManager customerInformationManager;
        private readonly AdvertManager advertManager;

        public TicketController(IMapper mapper, SalesManager salesManager, MyTicketsManager myTicketsInformationManager, CustomerInformationManager customerInformationManager, AdvertManager advertManager)
        {
            _mapper = mapper;
            this.salesManager = salesManager;
            this.myTicketsInformationManager = myTicketsInformationManager;
            this.customerInformationManager = customerInformationManager;
            this.advertManager = advertManager;
        }

        [HttpPost("addSales")]
        [Authorize]
        public async Task<IActionResult> AddSalesAsync([FromBody] AddSalesViewModel model)
        {
            
            var userId = TokenHelper.GetUserIdFromToken(HttpContext);
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized("Token geçersiz veya kullanıcı ID'si bulunamadı.");
            }


            var myTicketsEntity = new MyTicketsEntity
            {
                UserId = int.Parse(userId),
                Count = model.Piece,
                Costs = model.Price,
                createDate = DateTime.Now,
                
            };

            var myTicketsResult = await myTicketsInformationManager.AddAsync(myTicketsEntity);
            if (myTicketsResult <= 0)
                {
                    return BadRequest("MyTicketsEntity kaydedilemedi.");
                }


            var advert = await  advertManager.GetByIdAsync(model.AdvertId);
            // SalesEntity oluşturma ve ekleme
            var salesEntity = _mapper.Map<SalesEntity>(model);
            salesEntity.UserId = advert.UserId;
            salesEntity.SalesPiece = model.Piece;
            salesEntity.createDate = DateTime.Now;
            salesEntity.CustomerInformation = null;
            salesEntity.SalesSituation = "Onay bekliyor.";
            var salesResult = await salesManager.AddAsync(salesEntity);
            if (salesResult <= 0)
                {
                    return BadRequest("Sales eklenemedi.");
                }
            // CustomerInformationEntity oluşturma ve ekleme
            foreach (var customerInfo in model.CustomerInformation)
            {
               
                var customerEntity = _mapper.Map<CustomerInformationEntity>(customerInfo);
                customerEntity.SalesId = salesEntity.SalesId; // İlişkilendirme
                customerEntity.MyTicketsId = myTicketsEntity.MyTicketsId; // İlişkilendirme
                customerEntity.createDate = DateTime.Now;
                await customerInformationManager.AddAsync(customerEntity);
            }

            return Ok("Sales başarıyla kaydedildi.");
            
           
        }
      
    }
}
