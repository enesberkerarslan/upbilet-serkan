using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class PaymentPeriodEntity
    {
        [Key]
        public int PaymentPeriodId { get; set; }

        public string PeriodName { get; set; } 
        public DateTime CreateDate { get; set; }

        public virtual ICollection<SalesEntity> Sales { get; set; } 
    }
}
