using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace ResurantBillingApp.Server.Core.Interface.Repository
{
    public interface IRepository<TEntity>
    {
        void Add(TEntity entity);

        IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null);
        
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> filter = null);
    }
}
