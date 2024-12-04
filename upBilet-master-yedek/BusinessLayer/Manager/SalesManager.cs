using EntityLayer.Concrete;
using EntityLayer.Interfaces.Repositories;
using EntityLayer.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Manager
{
    public class SalesManager : ISalesService
    {
        ISalesRepository _salesRepository;

        public SalesManager(ISalesRepository salesRepository)
        {
            _salesRepository = salesRepository;
        }

        public int Add(SalesEntity entity)
        {
            return _salesRepository.Add(entity);    
        }

        public int Add(IEnumerable<SalesEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(SalesEntity entity)
        {
            return _salesRepository.AddAsync(entity);   
        }

        public Task<int> AddAsync(IEnumerable<SalesEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<SalesEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<SalesEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<SalesEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<SalesEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<SalesEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(SalesEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(SalesEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public bool DeleteRange(Expression<Func<SalesEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<SalesEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<SalesEntity> FirstOrDefaultAsync(Expression<Func<SalesEntity, bool>> predicate, bool noTracking = true, params Expression<Func<SalesEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<SalesEntity> Get(Expression<Func<SalesEntity, bool>> predicate, bool noTracking = true, params Expression<Func<SalesEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<SalesEntity>> GetAll(bool noTracking = true)
        {
            throw new NotImplementedException();
        }

        public Task<SalesEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<SalesEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<SalesEntity>> GetList(Expression<Func<SalesEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<SalesEntity>, IOrderedQueryable<SalesEntity>> orderBy = null, params Expression<Func<SalesEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<SalesEntity> GetSingleAsync(Expression<Func<SalesEntity, bool>> predicate, bool noTracking = true, params Expression<Func<SalesEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(SalesEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(SalesEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
