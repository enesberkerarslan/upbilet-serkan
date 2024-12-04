using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class AdvertEntity
    {
        [Key]
        public int AdvertId { get; set; }
        public int AdvertTicketPrice { get; set; }
        public string TribuneCategory {  get; set; }
        public string? TribuneBlok { get; set; }
        public string? TribuneLine { get; set; }
        public string SalesType { get; set; }
        public int TotalPiece { get; set; }
        public int SoldPiece { get; set; }
        public bool IsActive { get; set; }
        public bool Adminapproval { get; set; }
        public DateTime createDate { get; set; }


        public int UserId { get; set; }
        public int ActivityId { get; set; }


        public virtual UserEntity user { get; set; }
        public virtual ActivityEntity activity { get; set; }

        public virtual ICollection<SalesEntity> sales { get; set; }


    }
}
