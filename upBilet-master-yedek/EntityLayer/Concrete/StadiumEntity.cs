using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class StadiumEntity
    {
        [Key]
        public int StadiumId { get; set; }

        public string StadiumName { get; set; }

        public string StadiumImage {  get; set; }
        public DateTime createDate { get; set; }


        public virtual ICollection<ActivityEntity> Activities { get; set; }
        public virtual ICollection<StadiumCategoryEntity> StadiumCategories { get; set; }
    }
}
