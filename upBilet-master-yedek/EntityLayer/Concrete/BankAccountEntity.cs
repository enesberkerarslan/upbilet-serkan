using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class BankAccountEntity
    {
        [Key]
        public int BandAccountId { get; set; }
        public string BankAccountName { get; set; }
        public string BankAccountType { get; set; }
        public string Currency { get; set; }
        public DateTime createDate { get; set; }

        public int UserId { get; set; }
        public virtual UserEntity user { get; set; }

    }
}
