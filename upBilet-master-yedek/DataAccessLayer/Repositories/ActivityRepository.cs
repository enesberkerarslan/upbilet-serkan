using DataAccessLayer.Context;
using EntityLayer.Concrete;
using EntityLayer.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repository
{
    public class ActivityRepository : GenericRepository<ActivityEntity>, IActivityRepository
    {
        private readonly MyDbContext _dbContext;
        public ActivityRepository(MyDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<ActivityEntity> GetByIdAllIAdvertsAsync(int activityId)
        {
            return await _dbContext.Activities
                .Include(u => u.Adverts)
                .FirstOrDefaultAsync(u => u.ActivityId == activityId);

        }


    }
}
