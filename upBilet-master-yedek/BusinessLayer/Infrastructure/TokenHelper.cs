using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Infrastructure
{
    public static class TokenHelper
    {
        public static string GetUserIdFromToken(HttpContext httpContext)
        {
            var authHeader = httpContext.Request.Headers["Authorization"].ToString();
            if (string.IsNullOrEmpty(authHeader))
            {
                return null;
            }

            var token = authHeader.Replace("Bearer ", "");
            var handler = new JwtSecurityTokenHandler();
            var jsonToken = handler.ReadToken(token) as JwtSecurityToken;

            if (jsonToken == null)
            {
                return null;
            }

            var userIdClaim = jsonToken.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
            return userIdClaim?.Value;
        }
    }
}
