namespace ApiLayer.Models.User
{
    public class UpdateBankAccountViewModel
    {
        public int Id { get; set; } 
        public string BankAccountName { get; set; }
        public string BankAccountType { get; set; }
        public string Currency { get; set; }
    }
}
