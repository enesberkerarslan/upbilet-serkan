namespace ApiLayer.Models.AdminPanel.Activity
{
    public class ActivityUpdateViewModel
    {
        public int ActivityId { get; set; }
        public string ActivityName { get; set; }
        public DateTime ActivityDate { get; set; }
        public bool MainPage { get; set; }
        public string Image { get; set; }
        public bool IsActive { get; set; }
        public int CategoryId { get; set; }
        public int StadiumId { get; set; }
    }
}
