using DataAccessLayer.Repository;
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
    public class StadiumManager : IStadiumService
    {
        IStadiumRepository _stadiumRepository;

        public StadiumManager(IStadiumRepository stadiumRepository)
        {
            _stadiumRepository = stadiumRepository;
        }

        public int Add(StadiumEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<StadiumEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(StadiumEntity entity)
        {
            return _stadiumRepository.AddAsync(entity); 
        }

        public Task<int> AddAsync(IEnumerable<StadiumEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<StadiumEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<StadiumEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<StadiumEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<StadiumEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<StadiumEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(StadiumEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(StadiumEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return _stadiumRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<StadiumEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<StadiumEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<StadiumEntity> FirstOrDefaultAsync(Expression<Func<StadiumEntity, bool>> predicate, bool noTracking = true, params Expression<Func<StadiumEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<StadiumEntity> Get(Expression<Func<StadiumEntity, bool>> predicate, bool noTracking = true, params Expression<Func<StadiumEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<StadiumEntity>> GetAll(bool noTracking = true)
        {
            return _stadiumRepository.GetAll();
        }

        public async Task<IEnumerable<StadiumEntity>> GetByIdAllItemsAsync(int stadiumId)
        {

            var stadium = await _stadiumRepository.GetByIdAllItemsAsync(stadiumId);
            if (stadium != null)
            {
                // Kullanıcı varsa, onu bir koleksiyon olarak döndür
                return new List<StadiumEntity> { stadium };
            }
            // Kullanıcı bulunamadıysa null döndür
            return null;
        }

        public async Task<StadiumEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<StadiumEntity, object>>[] includes)
        {
            return await _stadiumRepository.GetByIdAsync(id);
        }

        public Task<List<StadiumEntity>> GetList(Expression<Func<StadiumEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<StadiumEntity>, IOrderedQueryable<StadiumEntity>> orderBy = null, params Expression<Func<StadiumEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<StadiumEntity> GetSingleAsync(Expression<Func<StadiumEntity, bool>> predicate, bool noTracking = true, params Expression<Func<StadiumEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(StadiumEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(StadiumEntity entity)
        {
            return _stadiumRepository.UpdateAsync(entity);  
        }
    }
}
