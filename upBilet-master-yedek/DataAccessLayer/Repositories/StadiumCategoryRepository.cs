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
    public class StadiumCategoryRepository : GenericRepository<StadiumCategoryEntity>, IStadiumCategoryRepository
    {


        public StadiumCategoryRepository(MyDbContext dbContext) : base(dbContext)
        {

        }



    }
}
