using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class LeagueEntity
    {
        [Key]
        public int LeagueId { get; set; }
        public string LeagueName { get; set; }
        public DateTime createDate { get; set; }

        public virtual ICollection<ActivityEntity> Activities { get; set; }
    }
}
