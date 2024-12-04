using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class UserEntity
    {
        [Key]
        public int UserId { get; set; }

        public string UserMail { get; set; }

        public string Password { get; set; }

        public string PhoneNumber { get; set; }

        public string UserRole { get; set; }

        public string? Name { get; set; }

        public string? Surname { get; set; }
        public DateTime createDate { get; set; }


        public virtual ICollection<BankAccountEntity>bankAccounts { get; set; }
        public virtual ICollection<AdressEntity> adresses { get; set; }
        public virtual ICollection<MyTicketsEntity> tickets { get; set; }
        public virtual ICollection<SalesEntity> sales { get; set; }
        public virtual ICollection<AdvertEntity> adverts { get; set; }



        
    }
}
