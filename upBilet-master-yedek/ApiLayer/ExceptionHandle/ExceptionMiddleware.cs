using ApiLayer.Models;
using Newtonsoft.Json;
using System.Net;

namespace ApiLayer.ExceptionHandle
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                //ekrana hatayı yazan bu
                _logger.LogError(ex, ex.Message);
                await HandleExceptionAsync(httpContext, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            var response = new ApiResponse<string>(true, "Sunucu hatası: " + exception.Message);

            return context.Response.WriteAsync(JsonConvert.SerializeObject(response));
        }
    }
}
