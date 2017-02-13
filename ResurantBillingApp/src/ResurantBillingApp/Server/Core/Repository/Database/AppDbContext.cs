using Microsoft.EntityFrameworkCore;
using ResurantBillingApp.Server.Core.Interface.Repository;
using ResurantBillingApp.Server.Core.Model;

namespace ResurantBillingApp.Server.Core.Repository.Database
{
    public class AppDbContext : DbContext, IDatabaseContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./resturant.db");
            //Database.EnsureDeleted();
            //Database.EnsureCreated();
        }

        public DbSet<Menu> Menus { get; set; }

        

    }
}
