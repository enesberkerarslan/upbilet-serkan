using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class CustomerInformationEntity
    {
        [Key]
        public int CustomerInformationId { get; set; }

        public string Name { get; set;}

        public string Nation { get; set;}

        public string Status { get; set;}

        public string Image { get; set;}
        public DateTime createDate { get; set; }

        public int SalesId { get; set;}
        public int MyTicketsId { get; set;}
        public virtual MyTicketsEntity MyTickets { get; set; }
        public virtual SalesEntity Sales {  get; set;}    
    }
}
