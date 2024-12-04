using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class AdressEntity
    {
        [Key]
        public int AdressId { get; set; }
        public string AdressName { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PostCode { get; set; }
        public DateTime createDate { get; set; }

        public int UserId { get; set; }
        public virtual UserEntity user { get; set; }


    }
}
