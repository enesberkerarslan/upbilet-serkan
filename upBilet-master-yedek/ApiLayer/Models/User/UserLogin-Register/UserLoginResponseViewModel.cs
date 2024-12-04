namespace ApiLayer.Models.User.UserLogin_Register
{
    public class UserLoginResponseViewModel
    {
        public int? UserId { get; set; }
        public string UserMail { get; set; }

        public string? Name { get; set; }

        public string? Surname { get; set; }

        public string? PhoneNumber { get; set; }
        public string? Token { get; set; }
    }
}
