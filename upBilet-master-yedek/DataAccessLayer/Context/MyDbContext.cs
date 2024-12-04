using EntityLayer.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Context
{
    public class MyDbContext : DbContext
    {
        public DbSet<ActivityEntity> Activities { get; set; }
        public DbSet<AdressEntity> Adresses { get; set; }
        public DbSet<AdvertEntity> Adverts { get; set; }
        public DbSet<BankAccountEntity> BankAccounts { get; set; }
        public DbSet<CategoryEntity> Categories { get; set; }
        public DbSet<CustomerInformationEntity> CustomerInformations { get; set; }
        public DbSet<MyTicketsEntity> MyTickets { get; set; }
        public DbSet<SalesEntity> Sales { get; set; }
        public DbSet<StadiumCategoryEntity> StadiumCategories { get; set; }
        public DbSet<StadiumEntity> Stadiums { get; set; }
        public DbSet<StadiumCategoryBlockEntity> StadiumCategoryBlocks { get; set; }
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<LeagueEntity> Leagues { get; set; }
        public DbSet<TeamEntity> Teams { get; set; }
        public DbSet<PaymentPeriodEntity> PaymentPeriods { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            if (!optionsBuilder.IsConfigured)
            {
                var connStr = "Data Source=sqlpreview,1433;Initial Catalog=upBiletDB;User ID=sa;Password=Enesberk1;TrustServerCertificate=True;";
                optionsBuilder.UseSqlServer(connStr, opt =>
                {
                    opt.EnableRetryOnFailure();
                });
            }
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            // SalesEntity

            modelBuilder.Entity<SalesEntity>().
                HasKey(C => C.SalesId);

            modelBuilder.Entity<SalesEntity>()
                .HasOne(s => s.User)
                .WithMany(u => u.sales)
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<SalesEntity>()
                .HasOne(s => s.Advert)
                .WithMany(a => a.sales)
                .HasForeignKey(s => s.AdvertId)
                .OnDelete(DeleteBehavior.Restrict);

            // MyTicketsEntity

            modelBuilder.Entity<MyTicketsEntity>().
                HasKey(C => C.MyTicketsId);

            modelBuilder.Entity<MyTicketsEntity>()
               .HasOne(s => s.user)
               .WithMany(a => a.tickets)
               .HasForeignKey(s => s.UserId)
               .OnDelete(DeleteBehavior.Restrict);

            //CustomerInformationEntity

            modelBuilder.Entity<CustomerInformationEntity>().
               HasKey(C => C.CustomerInformationId);

            modelBuilder.Entity<CustomerInformationEntity>()
               .HasOne(s => s.Sales)
               .WithMany(a => a.CustomerInformation)
               .HasForeignKey(s => s.SalesId)
               .OnDelete(DeleteBehavior.Restrict);
            
            
            modelBuilder.Entity<CustomerInformationEntity>()
               .HasOne(c => c.MyTickets)
               .WithMany(t => t.CustomerInformation)
               .HasForeignKey(c => c.MyTicketsId);
            //BankAccountEntity

            modelBuilder.Entity<BankAccountEntity>().
              HasKey(C => C.BandAccountId);

            modelBuilder.Entity<BankAccountEntity>()
               .HasOne(s => s.user)
               .WithMany(a => a.bankAccounts)
               .HasForeignKey(s => s.UserId)
               .OnDelete(DeleteBehavior.Restrict);

            //AdvertEntity 

            modelBuilder.Entity<AdvertEntity>().
              HasKey(C => C.AdvertId);

            modelBuilder.Entity<AdvertEntity>()
               .HasOne(s => s.user)
               .WithMany(a => a.adverts)
               .HasForeignKey(s => s.UserId)
               .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<AdvertEntity>()
               .HasOne(s => s.activity)
               .WithMany(a => a.Adverts)
               .HasForeignKey(s => s.ActivityId)
               .OnDelete(DeleteBehavior.Restrict);

            //AdressEntity 

            modelBuilder.Entity<AdressEntity>().
              HasKey(C => C.AdressId);

            modelBuilder.Entity<AdressEntity>()
               .HasOne(s => s.user)
               .WithMany(a => a.adresses)
               .HasForeignKey(s => s.UserId)
               .OnDelete(DeleteBehavior.Restrict);

            //ActivityEntity 

            modelBuilder.Entity<ActivityEntity>().
              HasKey(C => C.ActivityId);

            modelBuilder.Entity<ActivityEntity>()
               .HasOne(s => s.Category)
               .WithMany(a => a.Activities)
               .HasForeignKey(s => s.CategoryId)
               .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ActivityEntity>()
                .HasOne(a => a.Stadium)
                .WithMany(s => s.Activities)
                .HasForeignKey(a => a.StadiumId)
                .OnDelete(DeleteBehavior.Restrict);
            
            modelBuilder.Entity<ActivityEntity>()
                .HasOne(a => a.League)
                .WithMany(l => l.Activities)
                .HasForeignKey(a => a.LeagueId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ActivityEntity>()
                .HasOne(a => a.HomeTeam)
                .WithMany(t => t.HomeMatches)
                .HasForeignKey(a => a.HomeTeamId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ActivityEntity>()
                .HasOne(a => a.AwayTeam)
                .WithMany(t => t.AwayMatches)
                .HasForeignKey(a => a.AwayTeamId)
                .OnDelete(DeleteBehavior.Restrict);


            //teamentity
            modelBuilder.Entity<TeamEntity>().
              HasKey(C => C.TeamId);

            //leagueentity
            modelBuilder.Entity<LeagueEntity>()
                .HasKey(C => C.LeagueId);

            modelBuilder.Entity<TeamEntity>()
                .HasMany(t => t.HomeMatches)
                .WithOne(a => a.HomeTeam)
                .HasForeignKey(a => a.HomeTeamId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<TeamEntity>()
                .HasMany(t => t.AwayMatches)
                .WithOne(a => a.AwayTeam)
                .HasForeignKey(a => a.AwayTeamId)
                .OnDelete(DeleteBehavior.Restrict);

            //paymenPeriod
            modelBuilder.Entity<PaymentPeriodEntity>()
                .HasKey(C => C.PaymentPeriodId);

            modelBuilder.Entity<PaymentPeriodEntity>()
                .HasMany(p => p.Sales)
                .WithOne(s => s.PaymentPeriod)
                .HasForeignKey(s => s.PaymentPeriodId)
                .OnDelete(DeleteBehavior.Restrict);








            //category
            modelBuilder.Entity<CategoryEntity>()
                .HasKey(C => C.CategoryId);

            //stadium için

            modelBuilder.Entity<StadiumEntity>()
                .HasKey(C => C.StadiumId);

            modelBuilder.Entity<StadiumCategoryEntity>().
                HasKey(C => C.StadiumCategoryId);

            modelBuilder.Entity<StadiumCategoryEntity>()
               .HasOne(sc => sc.Stadium)
               .WithMany(s => s.StadiumCategories)
               .HasForeignKey(sc => sc.StadiumId)
               .OnDelete(DeleteBehavior.Restrict);

            //stadiumcategoryblocksentity
            modelBuilder.Entity<StadiumCategoryBlockEntity>()
                .HasKey(C => C.StadiumCategoryBlockId);

            modelBuilder.Entity<StadiumCategoryEntity>()
                .HasMany(sc => sc.StadiumCategoryBlocks)
                .WithOne(scb => scb.StadiumCategory)
                .HasForeignKey(scb => scb.StadiumCategoryId);


            
        }


    }
}
