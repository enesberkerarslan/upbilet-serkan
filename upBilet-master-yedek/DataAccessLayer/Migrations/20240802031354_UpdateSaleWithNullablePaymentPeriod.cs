using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSaleWithNullablePaymentPeriod : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PaymentPeriodId",
                table: "Sales",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "PaymentPeriods",
                columns: table => new
                {
                    PaymentPeriodId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PeriodName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreateDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentPeriods", x => x.PaymentPeriodId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Sales_PaymentPeriodId",
                table: "Sales",
                column: "PaymentPeriodId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sales_PaymentPeriods_PaymentPeriodId",
                table: "Sales",
                column: "PaymentPeriodId",
                principalTable: "PaymentPeriods",
                principalColumn: "PaymentPeriodId",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sales_PaymentPeriods_PaymentPeriodId",
                table: "Sales");

            migrationBuilder.DropTable(
                name: "PaymentPeriods");

            migrationBuilder.DropIndex(
                name: "IX_Sales_PaymentPeriodId",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "PaymentPeriodId",
                table: "Sales");
        }
    }
}
