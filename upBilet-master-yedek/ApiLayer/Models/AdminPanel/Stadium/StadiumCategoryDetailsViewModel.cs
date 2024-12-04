namespace ApiLayer.Models.AdminPanel.Stadium
{
    public class StadiumCategoryDetailsViewModel
    {
        public string CategoryName { get; set; }
        public int StadiumId { get; set; }
        public List<StadiumCategoryBlockViewModel> StadiumCategoryBlocks { get; set; }

    }
}
