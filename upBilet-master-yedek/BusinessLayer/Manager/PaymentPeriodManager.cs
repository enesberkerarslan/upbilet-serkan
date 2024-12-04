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
    public class PaymentPeriodManager : IPaymentPeriodService
    {
        IPaymentPeriodRepository _periodRepository;

        public PaymentPeriodManager(IPaymentPeriodRepository periodRepository)
        {
            _periodRepository = periodRepository;
        }

        public int Add(PaymentPeriodEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<PaymentPeriodEntity> entities)
        {
            throw new NotImplementedException();
        }

        public async Task<int> AddAsync(PaymentPeriodEntity entity)
        {
            return await _periodRepository.AddAsync(entity);
        }

        public Task<int> AddAsync(IEnumerable<PaymentPeriodEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<PaymentPeriodEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<PaymentPeriodEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<PaymentPeriodEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<PaymentPeriodEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<PaymentPeriodEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(PaymentPeriodEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(PaymentPeriodEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return _periodRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<PaymentPeriodEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<PaymentPeriodEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<PaymentPeriodEntity> FirstOrDefaultAsync(Expression<Func<PaymentPeriodEntity, bool>> predicate, bool noTracking = true, params Expression<Func<PaymentPeriodEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<PaymentPeriodEntity> Get(Expression<Func<PaymentPeriodEntity, bool>> predicate, bool noTracking = true, params Expression<Func<PaymentPeriodEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public async Task<List<PaymentPeriodEntity>> GetAll(bool noTracking = true)
        {
            return await _periodRepository.GetAll(noTracking);
        }

        public Task<PaymentPeriodEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<PaymentPeriodEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<PaymentPeriodEntity>> GetList(Expression<Func<PaymentPeriodEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<PaymentPeriodEntity>, IOrderedQueryable<PaymentPeriodEntity>> orderBy = null, params Expression<Func<PaymentPeriodEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<PaymentPeriodEntity> GetSingleAsync(Expression<Func<PaymentPeriodEntity, bool>> predicate, bool noTracking = true, params Expression<Func<PaymentPeriodEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(PaymentPeriodEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(PaymentPeriodEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
