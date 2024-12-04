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
    public class StadiumRepository : GenericRepository<StadiumEntity>, IStadiumRepository
    {
        private readonly MyDbContext _dbContext;


        public StadiumRepository(MyDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<StadiumEntity> GetByIdAllItemsAsync(int id)
        {
            return await _dbContext.Stadiums
                .Include(u => u.StadiumCategories).ThenInclude(sc => sc.StadiumCategoryBlocks)
                .FirstOrDefaultAsync(u => u.StadiumId == id); 
                
        }

    }
}
