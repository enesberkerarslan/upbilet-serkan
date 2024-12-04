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
    public class BankAccountRepository : GenericRepository<BankAccountEntity>,IBankAccountRepository
    {
        private readonly MyDbContext _dbContext;

        public BankAccountRepository(MyDbContext context) : base(context)
        {
            _dbContext = context;

        }

        public async Task<IEnumerable<BankAccountEntity>> GetBankAccountsByUserIdAsync(int userId)
        {
            return await _dbContext.BankAccounts.Where(a => a.UserId == userId).ToListAsync();

        }
    }
}
