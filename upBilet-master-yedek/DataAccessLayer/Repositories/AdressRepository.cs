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
    public class AdressRepository : GenericRepository<AdressEntity>,IAdressRepository
    {
        private readonly MyDbContext _dbContext;

        public AdressRepository(MyDbContext context) : base(context)
        {
            _dbContext = context;
        }

        public async Task<IEnumerable<AdressEntity>> GetAddressesByUserIdAsync(int userId)
        {
            return await _dbContext.Adresses.Where(a => a.UserId == userId).ToListAsync();
        }
    }
}
