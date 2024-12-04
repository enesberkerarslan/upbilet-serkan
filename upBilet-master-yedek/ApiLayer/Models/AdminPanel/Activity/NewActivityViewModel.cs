namespace ApiLayer.Models.AdminPanel.Activity
{
    public class NewActivityViewModel
    {
        public string ActivityName { get; set; }
        public DateTime ActivityDate { get; set; }
        public bool MainPage { get; set; }
        public string Image { get; set; }
        public bool IsActive { get; set; }
        public int CategoryId { get; set; }
        public int StadiumId { get; set; }
        public int HomeTeamId { get; set; }
        public int? AwayTeamId { get; set; }
        public int? LeagueId { get; set; }
    }
}
