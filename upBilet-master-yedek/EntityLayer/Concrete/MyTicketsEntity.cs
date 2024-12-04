using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class MyTicketsEntity
    {
        [Key]
        public int MyTicketsId {  get; set; }
        public int Count { get; set; }
        public int Costs { get; set; }
        public DateTime createDate { get; set; }

        public int UserId { get; set; }
        public virtual ICollection<CustomerInformationEntity> CustomerInformation { get; set; }
        public virtual UserEntity user { get; set; }

    }
}
