using DataAccessLayer.Context;
using DataAccessLayer.Repository;
using EntityLayer.Concrete;
using EntityLayer.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repositories
{
    public class PaymentPeriodRepository : GenericRepository<PaymentPeriodEntity>, IPaymentPeriodRepository
    {
        public PaymentPeriodRepository(MyDbContext Context) : base(Context)
        {
        }
    }
}
