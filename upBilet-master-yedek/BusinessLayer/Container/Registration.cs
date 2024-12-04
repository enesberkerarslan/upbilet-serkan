using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Container
{
    public static class Registration
    {
        public static IServiceCollection AddApplicationRegistration(this IServiceCollection services)
        {
            var assm = Assembly.GetExecutingAssembly();



            services.AddValidatorsFromAssembly(assm);

            return services;
        }
    }
}
