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
    public class MyTicketsInformationManager : IMyTicketsService
    {
        IMyTicketsRepository _ticketsRepository;

        public MyTicketsInformationManager(IMyTicketsRepository ticketsRepository)
        {
            _ticketsRepository = ticketsRepository;
        }

        public int Add(MyTicketsEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<MyTicketsEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(MyTicketsEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(IEnumerable<MyTicketsEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<MyTicketsEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<MyTicketsEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<MyTicketsEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<MyTicketsEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<MyTicketsEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(MyTicketsEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(MyTicketsEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public bool DeleteRange(Expression<Func<MyTicketsEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<MyTicketsEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<MyTicketsEntity> FirstOrDefaultAsync(Expression<Func<MyTicketsEntity, bool>> predicate, bool noTracking = true, params Expression<Func<MyTicketsEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<MyTicketsEntity> Get(Expression<Func<MyTicketsEntity, bool>> predicate, bool noTracking = true, params Expression<Func<MyTicketsEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<MyTicketsEntity>> GetAll(bool noTracking = true)
        {
            throw new NotImplementedException();
        }

        public Task<MyTicketsEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<MyTicketsEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<MyTicketsEntity>> GetList(Expression<Func<MyTicketsEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<MyTicketsEntity>, IOrderedQueryable<MyTicketsEntity>> orderBy = null, params Expression<Func<MyTicketsEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<MyTicketsEntity> GetSingleAsync(Expression<Func<MyTicketsEntity, bool>> predicate, bool noTracking = true, params Expression<Func<MyTicketsEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(MyTicketsEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(MyTicketsEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
