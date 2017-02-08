using System;
using ResurantBillingApp.Server.Core.Model;

namespace ResurantBillingApp.Server.Core.Interface.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Menu> MenuRepository { get; }
        IRepository<Order> OrderRepository { get; }

        void SaveChanges();
    }
}
