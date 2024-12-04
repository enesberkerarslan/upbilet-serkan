using DataAccessLayer.Context;
using BusinessLayer.Container;
using ApiLayer.ExceptionHandle;
using BusinessLayer.Infrastructure;
using Microsoft.OpenApi.Models;



var builder = WebApplication.CreateBuilder(args);






builder.Services.ConfigureAuth(builder.Configuration);
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddScoped<MyDbContext>();


builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddScoped<MyDbContext>();

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });

    // Adding JWT Authentication
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});

//Scoped eklemeleri
builder.Services.ContainerDependencies();

builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5000); // Burada 5000 portunu belirliyoruz
});




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(policy =>
{
    policy.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader();
});

//Exception handling
app.UseMiddleware<ExceptionMiddleware>();

app.UseHttpsRedirection();

app.UseAuthentication(); // Authentication middleware'i
app.UseAuthorization();  // Authorization middleware'i
app.UseStaticFiles();



app.MapControllers();

app.Run();
