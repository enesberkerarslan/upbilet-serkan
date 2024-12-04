using BusinessLayer.Manager;
using BusinessLayer.ValidationRules;
using DataAccessLayer.Repositories;
using DataAccessLayer.Repository;
using EntityLayer.Concrete;
using EntityLayer.Interfaces.Repositories;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Container
{
    public static class Extensions
    {
        public static void ContainerDependencies(this IServiceCollection services)
        {


            services.AddScoped<ActivityManager>();
            services.AddScoped<IActivityRepository, ActivityRepository>();

            services.AddScoped<AdressManager>();
            services.AddScoped<IAdressRepository, AdressRepository>();

            services.AddScoped<AdvertManager>();
            services.AddScoped<IAdvertRepository, AdvertRepository>();

            services.AddScoped<BankAccountManager>();
            services.AddScoped<IBankAccountRepository, BankAccountRepository>();

            services.AddScoped<CategoryManager>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();

            services.AddScoped<CustomerInformationManager>();
            services.AddScoped<ICustomerInformationRepository, CustomerInformationRepository>();

            services.AddScoped<MyTicketsManager>();
            services.AddScoped<IMyTicketsRepository, MyTicketsRepository>();

            services.AddScoped<SalesManager>();
            services.AddScoped<ISalesRepository, SalesRepository>();



            services.AddScoped<UserManager>();
            services.AddScoped<IUserRepository, UserRepository>();


            services.AddScoped<StadiumManager>();
            services.AddScoped<IStadiumRepository, StadiumRepository>();

            services.AddScoped<StadiumCategoryManager>();
            services.AddScoped<IStadiumCategoryRepository, StadiumCategoryRepository>();

            services.AddScoped<StadiumCategoryBlockManager>();
            services.AddScoped<IStadiumCategoryBlockRepository, StadiumCategoryBlockRepository>();

            services.AddScoped<PaymentPeriodManager>();
            services.AddScoped<IPaymentPeriodRepository, PaymentPeriodRepository>();

            services.AddScoped<LeagueManager>();
            services.AddScoped<ILeagueRepository, LeagueRepository>();

            services.AddScoped<TeamManager>();
            services.AddScoped<ITeamRepository, TeamRepository>();

        }

        public static void CustomerValidator(this IServiceCollection services)
        {

        }
    }
}
