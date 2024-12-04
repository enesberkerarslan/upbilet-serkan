namespace ApiLayer.Models.User.BuyTicket
{
    public class AddSalesViewModel
    {
        public int SalesPiece { get; set; }

        public int Price { get; set; }
        public int Piece { get; set; }

        public int AdvertId { get; set; }

        public List<CustomerInformationViewModel> CustomerInformation { get; set; }
    }
}
