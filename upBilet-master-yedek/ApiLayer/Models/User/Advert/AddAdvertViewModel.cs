namespace ApiLayer.Models.User.Advert
{
    public class AddAdvertViewModel
    {
        public int AdvertTicketPrice { get; set; }
        public string TribuneCategory { get; set; }
        public string? TribuneBlok { get; set; }
        public string? TribuneLine { get; set; }
        public string SalesType { get; set; }
        public int TotalPiece { get; set; }
        public int ActivityId { get; set; }
    }
}
