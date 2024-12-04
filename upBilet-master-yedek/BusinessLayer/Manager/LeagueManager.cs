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
    public class LeagueManager : ILeagueService
    {
        ILeagueRepository leagueRepository;

        public LeagueManager(ILeagueRepository leagueRepository)
        {
            this.leagueRepository = leagueRepository;
        }

        public int Add(LeagueEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<LeagueEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(LeagueEntity entity)
        {
            return leagueRepository.AddAsync(entity);   
        }

        public Task<int> AddAsync(IEnumerable<LeagueEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<LeagueEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<LeagueEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<LeagueEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<LeagueEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<LeagueEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(LeagueEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(LeagueEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return leagueRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<LeagueEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<LeagueEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<LeagueEntity> FirstOrDefaultAsync(Expression<Func<LeagueEntity, bool>> predicate, bool noTracking = true, params Expression<Func<LeagueEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<LeagueEntity> Get(Expression<Func<LeagueEntity, bool>> predicate, bool noTracking = true, params Expression<Func<LeagueEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<LeagueEntity>> GetAll(bool noTracking = true)
        {
            return leagueRepository.GetAll(noTracking);
        }

        public Task<LeagueEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<LeagueEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<LeagueEntity>> GetList(Expression<Func<LeagueEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<LeagueEntity>, IOrderedQueryable<LeagueEntity>> orderBy = null, params Expression<Func<LeagueEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<LeagueEntity> GetSingleAsync(Expression<Func<LeagueEntity, bool>> predicate, bool noTracking = true, params Expression<Func<LeagueEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(LeagueEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(LeagueEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
