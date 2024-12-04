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
    public class CategoryRepository : GenericRepository<CategoryEntity>,ICategoryRepository
    {
        public CategoryRepository(MyDbContext Context) : base(Context)
        {
        }
    
    }

}
