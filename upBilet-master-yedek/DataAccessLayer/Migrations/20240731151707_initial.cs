using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Leagues",
                columns: table => new
                {
                    LeagueId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LeagueName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leagues", x => x.LeagueId);
                });

            migrationBuilder.CreateTable(
                name: "Stadiums",
                columns: table => new
                {
                    StadiumId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StadiumName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StadiumImage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stadiums", x => x.StadiumId);
                });

            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    TeamId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeamName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.TeamId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserMail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserRole = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Surname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "StadiumCategories",
                columns: table => new
                {
                    StadiumCategoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    StadiumId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StadiumCategories", x => x.StadiumCategoryId);
                    table.ForeignKey(
                        name: "FK_StadiumCategories_Stadiums_StadiumId",
                        column: x => x.StadiumId,
                        principalTable: "Stadiums",
                        principalColumn: "StadiumId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Activities",
                columns: table => new
                {
                    ActivityId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ActivityName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ActivityDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MainPage = table.Column<bool>(type: "bit", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    StadiumId = table.Column<int>(type: "int", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    HomeTeamId = table.Column<int>(type: "int", nullable: true),
                    AwayTeamId = table.Column<int>(type: "int", nullable: true),
                    LeagueId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activities", x => x.ActivityId);
                    table.ForeignKey(
                        name: "FK_Activities_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Activities_Leagues_LeagueId",
                        column: x => x.LeagueId,
                        principalTable: "Leagues",
                        principalColumn: "LeagueId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Activities_Stadiums_StadiumId",
                        column: x => x.StadiumId,
                        principalTable: "Stadiums",
                        principalColumn: "StadiumId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Activities_Teams_AwayTeamId",
                        column: x => x.AwayTeamId,
                        principalTable: "Teams",
                        principalColumn: "TeamId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Activities_Teams_HomeTeamId",
                        column: x => x.HomeTeamId,
                        principalTable: "Teams",
                        principalColumn: "TeamId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Adresses",
                columns: table => new
                {
                    AdressId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdressName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adresses", x => x.AdressId);
                    table.ForeignKey(
                        name: "FK_Adresses_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BankAccounts",
                columns: table => new
                {
                    BandAccountId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BankAccountName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BankAccountType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Currency = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankAccounts", x => x.BandAccountId);
                    table.ForeignKey(
                        name: "FK_BankAccounts_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MyTickets",
                columns: table => new
                {
                    MyTicketsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Count = table.Column<int>(type: "int", nullable: false),
                    Costs = table.Column<int>(type: "int", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MyTickets", x => x.MyTicketsId);
                    table.ForeignKey(
                        name: "FK_MyTickets_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "StadiumCategoryBlocks",
                columns: table => new
                {
                    StadiumCategoryBlockId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StadiumCategoryBlockName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    StadiumCategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StadiumCategoryBlocks", x => x.StadiumCategoryBlockId);
                    table.ForeignKey(
                        name: "FK_StadiumCategoryBlocks_StadiumCategories_StadiumCategoryId",
                        column: x => x.StadiumCategoryId,
                        principalTable: "StadiumCategories",
                        principalColumn: "StadiumCategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Adverts",
                columns: table => new
                {
                    AdvertId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdvertTicketPrice = table.Column<int>(type: "int", nullable: false),
                    TribuneCategory = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TribuneBlok = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TribuneLine = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SalesType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TotalPiece = table.Column<int>(type: "int", nullable: false),
                    SoldPiece = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Adminapproval = table.Column<bool>(type: "bit", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    ActivityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adverts", x => x.AdvertId);
                    table.ForeignKey(
                        name: "FK_Adverts_Activities_ActivityId",
                        column: x => x.ActivityId,
                        principalTable: "Activities",
                        principalColumn: "ActivityId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Adverts_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Sales",
                columns: table => new
                {
                    SalesId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SalesPiece = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    SalesSituation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    AdvertId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sales", x => x.SalesId);
                    table.ForeignKey(
                        name: "FK_Sales_Adverts_AdvertId",
                        column: x => x.AdvertId,
                        principalTable: "Adverts",
                        principalColumn: "AdvertId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Sales_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CustomerInformations",
                columns: table => new
                {
                    CustomerInformationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SalesId = table.Column<int>(type: "int", nullable: false),
                    MyTicketsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerInformations", x => x.CustomerInformationId);
                    table.ForeignKey(
                        name: "FK_CustomerInformations_MyTickets_MyTicketsId",
                        column: x => x.MyTicketsId,
                        principalTable: "MyTickets",
                        principalColumn: "MyTicketsId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CustomerInformations_Sales_SalesId",
                        column: x => x.SalesId,
                        principalTable: "Sales",
                        principalColumn: "SalesId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Activities_AwayTeamId",
                table: "Activities",
                column: "AwayTeamId");

            migrationBuilder.CreateIndex(
                name: "IX_Activities_CategoryId",
                table: "Activities",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Activities_HomeTeamId",
                table: "Activities",
                column: "HomeTeamId");

            migrationBuilder.CreateIndex(
                name: "IX_Activities_LeagueId",
                table: "Activities",
                column: "LeagueId");

            migrationBuilder.CreateIndex(
                name: "IX_Activities_StadiumId",
                table: "Activities",
                column: "StadiumId");

            migrationBuilder.CreateIndex(
                name: "IX_Adresses_UserId",
                table: "Adresses",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Adverts_ActivityId",
                table: "Adverts",
                column: "ActivityId");

            migrationBuilder.CreateIndex(
                name: "IX_Adverts_UserId",
                table: "Adverts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_BankAccounts_UserId",
                table: "BankAccounts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerInformations_MyTicketsId",
                table: "CustomerInformations",
                column: "MyTicketsId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerInformations_SalesId",
                table: "CustomerInformations",
                column: "SalesId");

            migrationBuilder.CreateIndex(
                name: "IX_MyTickets_UserId",
                table: "MyTickets",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_AdvertId",
                table: "Sales",
                column: "AdvertId");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_UserId",
                table: "Sales",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_StadiumCategories_StadiumId",
                table: "StadiumCategories",
                column: "StadiumId");

            migrationBuilder.CreateIndex(
                name: "IX_StadiumCategoryBlocks_StadiumCategoryId",
                table: "StadiumCategoryBlocks",
                column: "StadiumCategoryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Adresses");

            migrationBuilder.DropTable(
                name: "BankAccounts");

            migrationBuilder.DropTable(
                name: "CustomerInformations");

            migrationBuilder.DropTable(
                name: "StadiumCategoryBlocks");

            migrationBuilder.DropTable(
                name: "MyTickets");

            migrationBuilder.DropTable(
                name: "Sales");

            migrationBuilder.DropTable(
                name: "StadiumCategories");

            migrationBuilder.DropTable(
                name: "Adverts");

            migrationBuilder.DropTable(
                name: "Activities");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Leagues");

            migrationBuilder.DropTable(
                name: "Stadiums");

            migrationBuilder.DropTable(
                name: "Teams");
        }
    }
}
