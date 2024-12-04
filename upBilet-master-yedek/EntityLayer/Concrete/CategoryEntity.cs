using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class CategoryEntity
    {
        [Key]
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CategoryDescription { get; set; }
        public DateTime createDate { get; set; }

        public virtual ICollection<ActivityEntity> Activities { get; set; }  
    }
}
