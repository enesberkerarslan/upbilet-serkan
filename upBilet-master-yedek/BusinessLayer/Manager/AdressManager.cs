
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
    public class AdressManager : IAdressService
    {
        IAdressRepository _adressRepository;

        public AdressManager(IAdressRepository adressRepository)
        {
            _adressRepository = adressRepository;
        }

        public int Add(AdressEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<AdressEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(AdressEntity entity)
        {
            return _adressRepository.AddAsync(entity);  
        }

        public Task<int> AddAsync(IEnumerable<AdressEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<AdressEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<AdressEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<AdressEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<AdressEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<AdressEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(AdressEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(AdressEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return _adressRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<AdressEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<AdressEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<AdressEntity> FirstOrDefaultAsync(Expression<Func<AdressEntity, bool>> predicate, bool noTracking = true, params Expression<Func<AdressEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<AdressEntity> Get(Expression<Func<AdressEntity, bool>> predicate, bool noTracking = true, params Expression<Func<AdressEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<AdressEntity>> GetAddressesByUserIdAsync(int userId)
        {
            return  _adressRepository.GetAddressesByUserIdAsync(userId);
        }

        public Task<List<AdressEntity>> GetAll(bool noTracking = true)
        {
            throw new NotImplementedException();
        }

        public Task<AdressEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<AdressEntity, object>>[] includes)
        {
            return _adressRepository.GetByIdAsync(id);
        }

        public Task<List<AdressEntity>> GetList(Expression<Func<AdressEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<AdressEntity>, IOrderedQueryable<AdressEntity>> orderBy = null, params Expression<Func<AdressEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<AdressEntity> GetSingleAsync(Expression<Func<AdressEntity, bool>> predicate, bool noTracking = true, params Expression<Func<AdressEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(AdressEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(AdressEntity entity)
        {
            return _adressRepository.UpdateAsync(entity);
        }
    }
}
