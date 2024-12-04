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
    public class BankAccountManager : IBankAccountService
    {
        IBankAccountRepository _bankAccountRepository;

        public BankAccountManager(IBankAccountRepository bankAccountRepository)
        {
            _bankAccountRepository = bankAccountRepository;
        }

        public int Add(BankAccountEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<BankAccountEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(BankAccountEntity entity)
        {
            return _bankAccountRepository.AddAsync(entity); 
        }

        public Task<int> AddAsync(IEnumerable<BankAccountEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<BankAccountEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<BankAccountEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<BankAccountEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<BankAccountEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<BankAccountEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(BankAccountEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(BankAccountEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return _bankAccountRepository.DeleteAsync(id);  
        }

        public bool DeleteRange(Expression<Func<BankAccountEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<BankAccountEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<BankAccountEntity> FirstOrDefaultAsync(Expression<Func<BankAccountEntity, bool>> predicate, bool noTracking = true, params Expression<Func<BankAccountEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<BankAccountEntity> Get(Expression<Func<BankAccountEntity, bool>> predicate, bool noTracking = true, params Expression<Func<BankAccountEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }



        public Task<List<BankAccountEntity>> GetAll(bool noTracking = true)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<BankAccountEntity>> GetBankAccountsByUserIdAsync(int userId)
        {
            return  _bankAccountRepository.GetBankAccountsByUserIdAsync(userId);
        }

        public Task<BankAccountEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<BankAccountEntity, object>>[] includes)
        {
            return _bankAccountRepository.GetByIdAsync(id);
        }

        public Task<List<BankAccountEntity>> GetList(Expression<Func<BankAccountEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<BankAccountEntity>, IOrderedQueryable<BankAccountEntity>> orderBy = null, params Expression<Func<BankAccountEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<BankAccountEntity> GetSingleAsync(Expression<Func<BankAccountEntity, bool>> predicate, bool noTracking = true, params Expression<Func<BankAccountEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(BankAccountEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(BankAccountEntity entity)
        {
            return _bankAccountRepository.UpdateAsync(entity); 
        }
    }
}
