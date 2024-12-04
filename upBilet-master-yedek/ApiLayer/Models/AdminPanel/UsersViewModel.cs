namespace ApiLayer.Models.AdminPanel
{
    public class UsersViewModel
    {
        public int UserId { get; set; }

        public string UserMail { get; set; }

        public string Password { get; set; }

        public string PhoneNumber { get; set; }

        public string UserRole { get; set; }

        public string? Name { get; set; }

        public string? Surname { get; set; }
    }
}
