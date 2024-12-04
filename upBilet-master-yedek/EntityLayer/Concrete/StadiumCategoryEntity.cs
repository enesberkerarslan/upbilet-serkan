using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class StadiumCategoryEntity
    {
        [Key]
        public int StadiumCategoryId { get; set; }
        public string CategoryName { get; set; }
        public DateTime createDate { get; set; }

        public int StadiumId {  get; set; }
        public virtual StadiumEntity Stadium { get; set; }

        public virtual ICollection<StadiumCategoryBlockEntity> StadiumCategoryBlocks { get; set; }

    }
}
