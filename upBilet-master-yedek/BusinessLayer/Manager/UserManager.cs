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
    public class UserManager : IUserService
    {
        IUserRepository _userRepository;

        public UserManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public int Add(UserEntity entity)
        {
            return _userRepository.Add(entity);
        }

        public int Add(IEnumerable<UserEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(UserEntity entity)
        {
            return _userRepository.AddAsync(entity);
        }

        public Task<int> AddAsync(IEnumerable<UserEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<UserEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<UserEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<UserEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<UserEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<UserEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(UserEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(UserEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public bool DeleteRange(Expression<Func<UserEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<UserEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<UserEntity> FirstOrDefaultAsync(Expression<Func<UserEntity, bool>> predicate, bool noTracking = true, params Expression<Func<UserEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<UserEntity> Get(Expression<Func<UserEntity, bool>> predicate, bool noTracking = true, params Expression<Func<UserEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public async Task<List<UserEntity>> GetAll(bool noTracking = true)
        {
            return await _userRepository.GetAll();
        }

        public async Task<IEnumerable<UserEntity>> GetByIdAllItemsAsync(int userId)
        {
            var user = await _userRepository.GetByIdAllItemsAsync(userId);
            if (user != null)
            {
                // Kullanıcı varsa, onu bir koleksiyon olarak döndür
                return new List<UserEntity> { user };
            }
            // Kullanıcı bulunamadıysa null döndür
            return null;
        }

        public Task<UserEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<UserEntity, object>>[] includes)
        {
            return  _userRepository.GetByIdAsync(id);
        }

        public Task<List<UserEntity>> GetList(Expression<Func<UserEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<UserEntity>, IOrderedQueryable<UserEntity>> orderBy = null, params Expression<Func<UserEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public async Task<UserEntity> GetSingleAsync(Expression<Func<UserEntity, bool>> predicate, bool noTracking = true, params Expression<Func<UserEntity, object>>[] includes)
        {
            return await _userRepository.GetSingleAsync(predicate, noTracking, includes);
        }


        public int Update(UserEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(UserEntity entity)
        {
            return _userRepository.UpdateAsync(entity);
        }
    }
}
