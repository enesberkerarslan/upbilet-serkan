using DataAccessLayer.Repository;
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
    public class ActivityManager : IActivityServis
    {
        IActivityRepository _activityRepository;

        public ActivityManager(IActivityRepository activityRepository)
        {
            _activityRepository = activityRepository;
        }

        public int Add(ActivityEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<ActivityEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(ActivityEntity entity)
        {
            return _activityRepository.AddAsync(entity);
        }

        public Task<int> AddAsync(IEnumerable<ActivityEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<ActivityEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<ActivityEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<ActivityEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<ActivityEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<ActivityEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(ActivityEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(ActivityEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return _activityRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<ActivityEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<ActivityEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<ActivityEntity> FirstOrDefaultAsync(Expression<Func<ActivityEntity, bool>> predicate, bool noTracking = true, params Expression<Func<ActivityEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<ActivityEntity> Get(Expression<Func<ActivityEntity, bool>> predicate, bool noTracking = true, params Expression<Func<ActivityEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<ActivityEntity>> GetAll(bool noTracking = true)
        {
            return _activityRepository.GetAll();
        }

        public async Task<IEnumerable<ActivityEntity>> GetByIdAllIAdvertsAsync(int advertId)
        {
            var advert = await _activityRepository.GetByIdAllIAdvertsAsync(advertId);
            if (advert != null)
            {
                // Kullanıcı varsa, onu bir koleksiyon olarak döndür
                return new List<ActivityEntity> { advert };
            }
            // Kullanıcı bulunamadıysa null döndür
            return null;

        }

        public  Task<ActivityEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<ActivityEntity, object>>[] includes)
        {
            return _activityRepository.GetByIdAsync(id);

        }



        public Task<List<ActivityEntity>> GetList(Expression<Func<ActivityEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<ActivityEntity>, IOrderedQueryable<ActivityEntity>> orderBy = null, params Expression<Func<ActivityEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<ActivityEntity> GetSingleAsync(Expression<Func<ActivityEntity, bool>> predicate, bool noTracking = true, params Expression<Func<ActivityEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(ActivityEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(ActivityEntity entity)
        {
            return _activityRepository.UpdateAsync(entity);
        }
    }
}
