using System;
using ResurantBillingApp.Server.Core.Interface.Repository;
using ResurantBillingApp.Server.Core.Model;

namespace ResurantBillingApp.Server.Core.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDatabaseContext _dbContext;

        public UnitOfWork(IDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }

        public IRepository<Menu> MenuRepository => new Repository<Menu>(_dbContext);
        public IRepository<Order> OrderRepository => new Repository<Order>(_dbContext);

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}
