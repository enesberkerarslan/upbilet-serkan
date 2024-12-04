using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Interfaces.Services
{
    public interface IStadiumService : IGenericService<StadiumEntity>
    {
        Task<IEnumerable<StadiumEntity>> GetByIdAllItemsAsync(int stadiumId);

    }
}
