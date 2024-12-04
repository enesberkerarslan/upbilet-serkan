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
    public class CategoryManager : ICategoryService
    {
        ICategoryRepository _categoryRepository;

        public CategoryManager(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public int Add(CategoryEntity entity)
        {
            return _categoryRepository.Add(entity);
        }

        public int Add(IEnumerable<CategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(CategoryEntity entity)
        {
            return _categoryRepository.AddAsync(entity);
        }

        public Task<int> AddAsync(IEnumerable<CategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<CategoryEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<CategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<CategoryEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<CategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<CategoryEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(CategoryEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(CategoryEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return _categoryRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<CategoryEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<CategoryEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<CategoryEntity> FirstOrDefaultAsync(Expression<Func<CategoryEntity, bool>> predicate, bool noTracking = true, params Expression<Func<CategoryEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<CategoryEntity> Get(Expression<Func<CategoryEntity, bool>> predicate, bool noTracking = true, params Expression<Func<CategoryEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public async Task<List<CategoryEntity>> GetAll(bool noTracking = true)
        {
            var categories = await _categoryRepository.GetAll(); 
            return categories;
        }

        public Task<CategoryEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<CategoryEntity, object>>[] includes)
        {
            return _categoryRepository.GetByIdAsync(id);
        }

        public Task<List<CategoryEntity>> GetList(Expression<Func<CategoryEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<CategoryEntity>, IOrderedQueryable<CategoryEntity>> orderBy = null, params Expression<Func<CategoryEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<CategoryEntity> GetSingleAsync(Expression<Func<CategoryEntity, bool>> predicate, bool noTracking = true, params Expression<Func<CategoryEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(CategoryEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(CategoryEntity entity)
        {
            return _categoryRepository.UpdateAsync(entity);
        }
    }
}
