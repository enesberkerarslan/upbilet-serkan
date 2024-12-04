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
    public class CustomerInformationManager : ICustomerInformationService
    {
        ICustomerInformationRepository _customerInformationRepository;

        public CustomerInformationManager(ICustomerInformationRepository customerInformationRepository)
        {
            _customerInformationRepository = customerInformationRepository;
        }

        public int Add(CustomerInformationEntity entity)
        {
            return _customerInformationRepository.Add(entity);  
        }

        public int Add(IEnumerable<CustomerInformationEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(CustomerInformationEntity entity)
        {
            return _customerInformationRepository.AddAsync(entity);
        }

        public Task<int> AddAsync(IEnumerable<CustomerInformationEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<CustomerInformationEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<CustomerInformationEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<CustomerInformationEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<CustomerInformationEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<CustomerInformationEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(CustomerInformationEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(CustomerInformationEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public bool DeleteRange(Expression<Func<CustomerInformationEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<CustomerInformationEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<CustomerInformationEntity> FirstOrDefaultAsync(Expression<Func<CustomerInformationEntity, bool>> predicate, bool noTracking = true, params Expression<Func<CustomerInformationEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<CustomerInformationEntity> Get(Expression<Func<CustomerInformationEntity, bool>> predicate, bool noTracking = true, params Expression<Func<CustomerInformationEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<CustomerInformationEntity>> GetAll(bool noTracking = true)
        {
            throw new NotImplementedException();
        }

        public Task<CustomerInformationEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<CustomerInformationEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<CustomerInformationEntity>> GetList(Expression<Func<CustomerInformationEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<CustomerInformationEntity>, IOrderedQueryable<CustomerInformationEntity>> orderBy = null, params Expression<Func<CustomerInformationEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<CustomerInformationEntity> GetSingleAsync(Expression<Func<CustomerInformationEntity, bool>> predicate, bool noTracking = true, params Expression<Func<CustomerInformationEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(CustomerInformationEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(CustomerInformationEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
