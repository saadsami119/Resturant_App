using Microsoft.EntityFrameworkCore;
using ResurantBillingApp.Server.Core.Interface.Repository;

namespace ResurantBillingApp.Server.Core.Repository.Database
{
    public class AppDbContext : DbContext, IDatabaseContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./resturant.db");
        }

        //public DbSet<User> Users { get; set; }

        //public DbSet<Appointment> Appointments { get; set; }

    }
}
