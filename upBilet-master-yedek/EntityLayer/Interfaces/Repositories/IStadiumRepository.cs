using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Interfaces.Repositories
{
    public interface IStadiumRepository : IGenericRepository<StadiumEntity>
    {
        Task<StadiumEntity> GetByIdAllItemsAsync(int stadiumId);

    }
}
