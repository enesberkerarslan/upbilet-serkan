using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class ActivityEntity
    {
        [Key]
        public int ActivityId { get; set; }
        public string ActivityName { get; set; }
        public DateTime ActivityDate { get; set; }
        public bool MainPage { get; set; }
        public string Image {get; set; }
        public bool IsActive { get; set; }
        public int CategoryId { get; set; }
        public int StadiumId { get; set; }
        public DateTime createDate { get; set; }

        public virtual StadiumEntity Stadium { get; set; }

        public virtual CategoryEntity Category { get; set; }

        public virtual ICollection<AdvertEntity> Adverts { get; set; }


        public int? HomeTeamId { get; set; }
        public int? AwayTeamId { get; set; }
        public virtual TeamEntity HomeTeam { get; set; }
        public virtual TeamEntity AwayTeam { get; set; }

        public int? LeagueId { get; set; }  // Nullable yaparak her etkinliğin bir lige ait olması zorunluluğunu kaldırıyoruz.
        public virtual LeagueEntity League { get; set; }

        
    }
}
