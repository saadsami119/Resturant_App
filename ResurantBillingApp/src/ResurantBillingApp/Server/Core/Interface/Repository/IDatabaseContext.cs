using System;
using Microsoft.EntityFrameworkCore;

namespace ResurantBillingApp.Server.Core.Interface.Repository
{
    public interface IDatabaseContext 
    {
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        int SaveChanges();
    }
}
