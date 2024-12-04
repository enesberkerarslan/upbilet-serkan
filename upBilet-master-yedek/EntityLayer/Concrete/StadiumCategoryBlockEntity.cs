using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class StadiumCategoryBlockEntity
    {
        public int StadiumCategoryBlockId { get; set; }

        public string StadiumCategoryBlockName { get; set; }
        public DateTime createDate { get; set; }

        public int StadiumCategoryId { get; set; }

        public StadiumCategoryEntity StadiumCategory { get; set; }
    }
}
