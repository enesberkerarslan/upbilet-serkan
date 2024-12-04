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
    public class CustomerInformationRepository : GenericRepository<CustomerInformationEntity>,ICustomerInformationRepository
    {
        public CustomerInformationRepository(MyDbContext Context) : base(Context)
        {
        }
    }
}
