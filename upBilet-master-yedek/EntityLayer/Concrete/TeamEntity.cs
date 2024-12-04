using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class TeamEntity
    {
        [Key]
        public int TeamId { get; set; }
        public string TeamName { get; set; }
        public DateTime createDate { get; set; }

        public virtual ICollection<ActivityEntity> HomeMatches { get; set; }
        public virtual ICollection<ActivityEntity> AwayMatches { get; set; }
    }
}
