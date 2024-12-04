using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class SalesEntity
    {
        [Key]
        public int SalesId { get; set; }
        public int SalesPiece { get; set; }
        public int Price { get; set; }
        public string SalesSituation { get; set; }
        public DateTime createDate { get; set; }

        public int UserId { get; set; }
        public int AdvertId { get; set; }
        public virtual UserEntity User { get; set; }

        public virtual AdvertEntity Advert { get; set; }

        public virtual ICollection<CustomerInformationEntity> CustomerInformation { get; set; }

        public int? PaymentPeriodId { get; set; }
        public virtual PaymentPeriodEntity PaymentPeriod { get; set; }


    }
}
