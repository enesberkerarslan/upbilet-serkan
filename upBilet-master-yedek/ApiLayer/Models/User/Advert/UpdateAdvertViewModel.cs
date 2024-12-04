namespace ApiLayer.Models.User.Advert
{
    public class UpdateAdvertViewModel
    {
        public int Id { get; set; } 
        public int AdvertTicketPrice { get; set; }
        public string TribuneCategory { get; set; }
        public string? TribuneBlok { get; set; }
        public string? TribuneLine { get; set; }
        public string SalesType { get; set; }
        public int TotalPiece { get; set; }
        public bool IsActive { get; set; }

    }
}
