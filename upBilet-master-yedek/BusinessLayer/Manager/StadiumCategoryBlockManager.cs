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
    public class StadiumCategoryBlockManager : IStadiumCategoryBlockService
    {
        IStadiumCategoryBlockRepository _stadiumCategoryBlockRepository;

        public StadiumCategoryBlockManager(IStadiumCategoryBlockRepository stadiumCategoryBlockRepository)
        {
            _stadiumCategoryBlockRepository = stadiumCategoryBlockRepository;
        }

        public int Add(StadiumCategoryBlockEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<StadiumCategoryBlockEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(StadiumCategoryBlockEntity entity)
        {
            return _stadiumCategoryBlockRepository.AddAsync(entity);
        }

        public Task<int> AddAsync(IEnumerable<StadiumCategoryBlockEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<StadiumCategoryBlockEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<StadiumCategoryBlockEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<StadiumCategoryBlockEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<StadiumCategoryBlockEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<StadiumCategoryBlockEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(StadiumCategoryBlockEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(StadiumCategoryBlockEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return _stadiumCategoryBlockRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<StadiumCategoryBlockEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<StadiumCategoryBlockEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public override bool Equals(object? obj)
        {
            return obj is StadiumCategoryBlockManager manager &&
                   EqualityComparer<IStadiumCategoryBlockRepository>.Default.Equals(_stadiumCategoryBlockRepository, manager._stadiumCategoryBlockRepository);
        }

        public Task<StadiumCategoryBlockEntity> FirstOrDefaultAsync(Expression<Func<StadiumCategoryBlockEntity, bool>> predicate, bool noTracking = true, params Expression<Func<StadiumCategoryBlockEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<StadiumCategoryBlockEntity> Get(Expression<Func<StadiumCategoryBlockEntity, bool>> predicate, bool noTracking = true, params Expression<Func<StadiumCategoryBlockEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<StadiumCategoryBlockEntity>> GetAll(bool noTracking = true)
        {
            return _stadiumCategoryBlockRepository.GetAll();
        }

        public Task<StadiumCategoryBlockEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<StadiumCategoryBlockEntity, object>>[] includes)
        {
            return _stadiumCategoryBlockRepository.GetByIdAsync(id, noTracking, includes);
        }

        public Task<List<StadiumCategoryBlockEntity>> GetList(Expression<Func<StadiumCategoryBlockEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<StadiumCategoryBlockEntity>, IOrderedQueryable<StadiumCategoryBlockEntity>> orderBy = null, params Expression<Func<StadiumCategoryBlockEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<StadiumCategoryBlockEntity> GetSingleAsync(Expression<Func<StadiumCategoryBlockEntity, bool>> predicate, bool noTracking = true, params Expression<Func<StadiumCategoryBlockEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(StadiumCategoryBlockEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(StadiumCategoryBlockEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
