using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Infrastructure
{
    public static class AuthRegistration
    {
        public static IServiceCollection ConfigureAuth(this IServiceCollection services, IConfiguration configuration)
        {
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["AuthConfig:Secret"]));

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = signingKey,
                    ClockSkew = TimeSpan.Zero // Token süresi bittiğinde hemen geçersiz kılınmasını sağlar

                };
            });

            return services;
        }
    }
}
