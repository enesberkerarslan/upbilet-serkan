using ApiLayer.Models.User;

namespace ApiLayer.Models.AdminPanel.Stadium
{
    public class StadiumDetailsViewModel
    {

        public string StadiumName { get; set; }

        public string StadiumImage { get; set; }

        public List<StadiumCategoryDetailsViewModel> StadiumCategories { get; set; }

    }
}
