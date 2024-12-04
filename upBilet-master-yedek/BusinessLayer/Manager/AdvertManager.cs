using EntityLayer.Concrete;
using EntityLayer.Interfaces.Repositories;
using EntityLayer.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Manager
{
    public class AdvertManager : IAdvertService
    {
        IAdvertRepository _advertRepository;

        public AdvertManager(IAdvertRepository advertRepository)
        {
            _advertRepository = advertRepository;
        }

        public int Add(AdvertEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<AdvertEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(AdvertEntity entity)
        {
            return _advertRepository.AddAsync(entity);
        }

        public Task<int> AddAsync(IEnumerable<AdvertEntity> entities)
        {
            return _advertRepository.AddAsync(entities);
        }

        public IQueryable<AdvertEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<AdvertEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<AdvertEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<AdvertEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<AdvertEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(AdvertEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(AdvertEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return _advertRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<AdvertEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<AdvertEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<AdvertEntity> FirstOrDefaultAsync(Expression<Func<AdvertEntity, bool>> predicate, bool noTracking = true, params Expression<Func<AdvertEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<AdvertEntity> Get(Expression<Func<AdvertEntity, bool>> predicate, bool noTracking = true, params Expression<Func<AdvertEntity, object>>[] includes)
        {
            return _advertRepository.Get(predicate, noTracking, includes);
        }

        public Task<List<AdvertEntity>> GetAll(bool noTracking = true)
        {
            return _advertRepository.GetAll();
        }

        public  Task<AdvertEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<AdvertEntity, object>>[] includes)
        {
            return  _advertRepository.GetByIdAsync(id);
        }

        public Task<List<AdvertEntity>> GetList(Expression<Func<AdvertEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<AdvertEntity>, IOrderedQueryable<AdvertEntity>> orderBy = null, params Expression<Func<AdvertEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<AdvertEntity> GetSingleAsync(Expression<Func<AdvertEntity, bool>> predicate, bool noTracking = true, params Expression<Func<AdvertEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(AdvertEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(AdvertEntity entity)
        {
            return _advertRepository.UpdateAsync(entity);
        }
    }
}
