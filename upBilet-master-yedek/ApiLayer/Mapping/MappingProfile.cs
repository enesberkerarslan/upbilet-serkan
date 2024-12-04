using ApiLayer.Models.AdminPanel;
using ApiLayer.Models.AdminPanel.Activity;
using ApiLayer.Models.AdminPanel.League;
using ApiLayer.Models.AdminPanel.PaymentPeriod;
using ApiLayer.Models.AdminPanel.Stadium;
using ApiLayer.Models.AdminPanel.Team;
using ApiLayer.Models.User;
using ApiLayer.Models.User.Advert;
using ApiLayer.Models.User.BuyTicket;
using ApiLayer.Models.User.UserLogin_Register;
using EntityLayer.Concrete;

namespace ApiLayer.Mapping
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<RegisterViewModel, UserEntity>()
                .ReverseMap();
            CreateMap<UpdateViewModel, UserEntity>()
                .ReverseMap();

            CreateMap<AdressViewModel, AdressEntity>()
                .ReverseMap();
            CreateMap<BankAccountViewModel, BankAccountEntity>()
                .ReverseMap();
            CreateMap<AddAdvertViewModel,AdvertEntity>()
                .ReverseMap();


            CreateMap<AddSalesViewModel, SalesEntity>();
            CreateMap<CustomerInformationViewModel, CustomerInformationEntity>();
            CreateMap<MyTicketsViewModel, MyTicketsEntity>();



            //adminPanel
            CreateMap<UserEntity, UsersViewModel>();
            CreateMap<UserEntity, UserDetailsViewModel>()
                .ReverseMap();
            CreateMap<UserEntity, UserLoginViewModel>()
                .ReverseMap();
            CreateMap<UserEntity, UserLoginResponseViewModel>()
               .ReverseMap();

            CreateMap<CategoryEntity, CategoryViewModel>()
                .ReverseMap();
            CreateMap<StadiumEntity, StadiumViewModel>()
               .ReverseMap();
            CreateMap<StadiumCategoryEntity, StadiumCategoryViewModel>()
               .ReverseMap();
            CreateMap<StadiumCategoryBlockEntity, StadiumCategoryBlockViewModel>()
               .ReverseMap();

            CreateMap<StadiumEntity, StadiumDetailsViewModel>()
               .ReverseMap();
            CreateMap<StadiumCategoryEntity, StadiumCategoryDetailsViewModel>()
                .ReverseMap();
            CreateMap<ActivityViewModel, ActivityEntity>()
                .ReverseMap();
            CreateMap<NewActivityViewModel, ActivityEntity>()
                .ReverseMap();
            CreateMap<ActivityDetailsViewModel, ActivityEntity>()
                .ReverseMap();
            CreateMap<AdvertEntity, AdvertViewModel>()
                .ReverseMap();
            CreateMap<ActivityUpdateViewModel, ActivityEntity>()
                .ReverseMap();


            CreateMap<PaymentPeriodViewModel, PaymentPeriodEntity>()
                .ForMember(dest => dest.CreateDate, opt => opt.MapFrom(src => src.PeriodDate))
               .ReverseMap();
            CreateMap<NewPaymentPeriodViewModel, PaymentPeriodEntity>()
              .ReverseMap();

            CreateMap<TeamViewModel, TeamEntity>()
               .ReverseMap();
            CreateMap<NewTeamViewModel, TeamEntity>()
              .ReverseMap();

            CreateMap<LeagueViewModel, LeagueEntity>()
               .ReverseMap();
            CreateMap<NewLeagueViewModel, LeagueEntity>()
              .ReverseMap();


        }
    }
}
