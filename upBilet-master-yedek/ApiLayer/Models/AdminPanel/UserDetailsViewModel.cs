using ApiLayer.Models.User;
using ApiLayer.Models.User.Advert;

namespace ApiLayer.Models.AdminPanel
{
    public class UserDetailsViewModel
    {
        public int UserId { get; set; }

        public string UserMail { get; set; }


        public string PhoneNumber { get; set; }

        public string UserRole { get; set; }

        public string? Name { get; set; }

        public string? Surname { get; set; }

        public List<AdressViewModel> Adresses { get; set; }

        public List<BankAccountViewModel> BankAccounts { get; set; }

        public List<AdvertViewModel> Adverts { get; set; }


    }
}
