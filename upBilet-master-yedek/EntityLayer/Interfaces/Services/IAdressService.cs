﻿using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Interfaces.Services
{
    public interface IAdressService : IGenericService<AdressEntity>
    {
        Task<IEnumerable<AdressEntity>> GetAddressesByUserIdAsync(int userId);

    }
}