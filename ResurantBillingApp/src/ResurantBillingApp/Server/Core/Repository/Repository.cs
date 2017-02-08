using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using ResurantBillingApp.Server.Core.Interface.Repository;
using System.Linq;

namespace ResurantBillingApp.Server.Core.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class 
    {
        private readonly DbSet<TEntity> _dbSet;
        public Repository(IDatabaseContext dbContext)
        {
            _dbSet = dbContext.Set<TEntity>();
        }

        public void Add(TEntity entity)
        {
            _dbSet.Add(entity);
        }

        public IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null)
        {
            if (filter == null)
            {
                return _dbSet.ToList();
            }

            return _dbSet.Where(filter);
        }

        public TEntity SingleOrDefault(Expression<Func<TEntity, bool>> filter = null)
        {
            throw new NotImplementedException();
        }
    }
}
