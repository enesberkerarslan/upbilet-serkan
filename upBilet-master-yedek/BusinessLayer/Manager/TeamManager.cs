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
    public class TeamManager : ITeamService
    {
        ITeamRepository teamRepository;

        public TeamManager(ITeamRepository teamRepository)
        {
            this.teamRepository = teamRepository;
        }

        public int Add(TeamEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Add(IEnumerable<TeamEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(TeamEntity entity)
        {
            return teamRepository.AddAsync(entity);
        }

        public Task<int> AddAsync(IEnumerable<TeamEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TeamEntity> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public Task BulkAdd(IEnumerable<TeamEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(Expression<Func<TeamEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task BulkDelete(IEnumerable<TeamEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task BulkUpdate(IEnumerable<TeamEntity> entities)
        {
            throw new NotImplementedException();
        }

        public int Delete(TeamEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(TeamEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(int id)
        {
            return teamRepository.DeleteAsync(id);
        }

        public bool DeleteRange(Expression<Func<TeamEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteRangeAsync(Expression<Func<TeamEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<TeamEntity> FirstOrDefaultAsync(Expression<Func<TeamEntity, bool>> predicate, bool noTracking = true, params Expression<Func<TeamEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TeamEntity> Get(Expression<Func<TeamEntity, bool>> predicate, bool noTracking = true, params Expression<Func<TeamEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<TeamEntity>> GetAll(bool noTracking = true)
        {
            return teamRepository.GetAll(noTracking);
        }

        public Task<TeamEntity> GetByIdAsync(int id, bool noTracking = true, params Expression<Func<TeamEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<List<TeamEntity>> GetList(Expression<Func<TeamEntity, bool>> predicate, bool noTracking = true, Func<IQueryable<TeamEntity>, IOrderedQueryable<TeamEntity>> orderBy = null, params Expression<Func<TeamEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public Task<TeamEntity> GetSingleAsync(Expression<Func<TeamEntity, bool>> predicate, bool noTracking = true, params Expression<Func<TeamEntity, object>>[] includes)
        {
            throw new NotImplementedException();
        }

        public int Update(TeamEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateAsync(TeamEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
