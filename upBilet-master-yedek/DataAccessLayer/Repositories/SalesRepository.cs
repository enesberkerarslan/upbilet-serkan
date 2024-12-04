using DataAccessLayer.Context;
using EntityLayer.Concrete;
using EntityLayer.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repository
{
    public class SalesRepository : GenericRepository<SalesEntity>,ISalesRepository
    {
        public SalesRepository(MyDbContext Context) : base(Context)
        {
        }
    }
}
