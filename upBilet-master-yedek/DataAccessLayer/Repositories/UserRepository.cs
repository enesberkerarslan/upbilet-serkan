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
    public class UserRepository : GenericRepository<UserEntity>, IUserRepository
    {
        private readonly MyDbContext _dbContext;

        public UserRepository(MyDbContext context) : base(context)
        {
            _dbContext = context;
        }

        public async Task<UserEntity> GetByIdAllItemsAsync(int id)
        {
            return await _dbContext.Users
                .Include(u => u.bankAccounts)
                .Include(u => u.adresses)
                .Include(u => u.tickets)
                .Include(u => u.sales)
                .Include(u => u.adverts)
                .FirstOrDefaultAsync(u => u.UserId == id);
        }
    }
}
