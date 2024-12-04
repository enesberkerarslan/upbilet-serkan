namespace ApiLayer.Models.User.BuyTicket
{
    public class MyTicketsViewModel
    {
        public int Count { get; set; }
        public int Costs { get; set; }
        public List<CustomerInformationViewModel> CustomerInformation { get; set; }
    }
}
