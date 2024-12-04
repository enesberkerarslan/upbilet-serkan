# Build aþamasý
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

# Projeleri kopyala
COPY *.csproj ./
COPY EntityLayer/EntityLayer.csproj ./EntityLayer/
COPY DataAccessLayer/DataAccessLayer.csproj ./DataAccessLayer/
COPY BusinessLayer/BusinessLayer.csproj ./BusinessLayer/
COPY ApiLayer/ApiLayer.csproj ./ApiLayer/

# NuGet paketlerini restore et
RUN dotnet restore "./ApiLayer/ApiLayer.csproj"
RUN dotnet restore "./BusinessLayer/BusinessLayer.csproj"
RUN dotnet restore "./DataAccessLayer/DataAccessLayer.csproj"
RUN dotnet restore "./EntityLayer/EntityLayer.csproj"


# Projeleri kopyala ve publish et
COPY . ./
RUN dotnet publish "./ApiLayer/ApiLayer.csproj" -c Release -o /app

# Runtime aþamasý
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app ./

EXPOSE 80

ENTRYPOINT ["dotnet", "ApiLayer.dll"]
