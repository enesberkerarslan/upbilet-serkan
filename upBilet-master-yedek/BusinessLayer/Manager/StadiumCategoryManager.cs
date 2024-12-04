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
    public class StadiumCategoryManager : IStadiumCategoryService
    {
        IStadiumCategoryRepository _stadiumCategoryRepository;

        public StadiumCategoryManager(IStadiumCategoryRepository stadiumCategoryRepository)
        {
            _stadiumCategoryRepository = stadiumCategoryRepository;
        }

        public int Add(StadiumCategoryEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<StadiumCategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(StadiumCategoryEntity entity)
        {
            return _stadiumCategoryRepository.AddAsync(entity);
        }

        public Task<int> AddAsync(IEnumerable<StadiumCategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<StadiumCategoryEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<StadiumCategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<StadiumCategoryEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<StadiumCategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<StadiumCategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(StadiumCategoryEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(StadiumCategoryEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return _stadiumCategoryRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<StadiumCategoryEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<StadiumCategoryEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<StadiumCategoryEntity> FirstOrDefaultAsync(Expression<Func<StadiumCategoryEntity, bool>> predicate, bool noTracking = true, params Expression<Func<StadiumCategoryEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<StadiumCategoryEntity> Get(Expression<Func<StadiumCategoryEntity, bool>> predicate, bool noTracking = true, params Expression<Func<StadiumCategoryEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<StadiumCategoryEntity>> GetAll(bool noTracking = true)
        {
            return _stadiumCategoryRepository.GetAll();
        }

        public Task<StadiumCategoryEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<StadiumCategoryEntity, object>>[] includes)
        {
            return _stadiumCategoryRepository.GetByIdAsync(id, noTracking, includes);
        }



        public Task<List<StadiumCategoryEntity>> GetList(Expression<Func<StadiumCategoryEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<StadiumCategoryEntity>, IOrderedQueryable<StadiumCategoryEntity>> orderBy = null, params Expression<Func<StadiumCategoryEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<StadiumCategoryEntity> GetSingleAsync(Expression<Func<StadiumCategoryEntity, bool>> predicate, bool noTracking = true, params Expression<Func<StadiumCategoryEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(StadiumCategoryEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(StadiumCategoryEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
