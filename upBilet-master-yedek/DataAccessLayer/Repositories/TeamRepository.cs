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

    public class TeamRepository : GenericRepository<TeamEntity>, ITeamRepository
    {
        public TeamRepository(MyDbContext Context) : base(Context)
        {
        }
    }
}
