using ApiLayer.Models.AdminPanel;
using ApiLayer.Models.User;
using AutoMapper;
using BusinessLayer.Manager;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApiLayer.Controllers.Admin
{
    [Route("api/Admin/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly CategoryManager categoryManager;

        public CategoryController(IMapper mapper, CategoryManager categoryManager)
        {
            _mapper = mapper;
            this.categoryManager = categoryManager;
        }

        
        [HttpGet("getAllCategories")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllCategoriesAsync()
        {
            try
            {
                var result = await categoryManager.GetAll();
                if (result.Count == 0)
                {
                    return NotFound("Kategori bulunamadı.");
                }

                var categories = _mapper.Map<List<CategoryViewModel>>(result);
                return Ok(categories);



            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        
        [HttpPost("addCategory")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddCategoryAsync([FromBody] CategoryViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                CategoryEntity categoryEntity = _mapper.Map<CategoryEntity>(model);
                categoryEntity.createDate = DateTime.Now;
                var result = await categoryManager.AddAsync(categoryEntity);

                if (result > 0) // Burada Succeeded özelliğine erişim
                {
                    return Ok("Kategori adresi başarıyla kaydedildi.");
                }
                return BadRequest(ModelState);

            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        
        [HttpPut("updateCategory")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateCategoryAsync(int id, [FromBody] CategoryViewModel updatedCategory)
        {
            try
            {
                // Güncellenmek istenen adresin mevcut olup olmadığını kontrol edin
                var existingAdress = await categoryManager.GetByIdAsync(id);
                if (existingAdress == null)
                {
                    return NotFound("Güncellenmek istenen kategori bulunamadı.");
                }
                existingAdress.CategoryName = updatedCategory.CategoryName;
                existingAdress.CategoryDescription = updatedCategory.CategoryDescription;



                await categoryManager.UpdateAsync(existingAdress);

                return Ok("Kategori başarıyla güncellendi.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }

        
        [HttpDelete("deleteCategory")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            try
            {
                var result = await categoryManager.DeleteAsync(id);
                if (result >0 )
                {
                    return Ok("Kategori Başarıyla silindi.");
                }


                return Ok("Kategori silinirken hata oluştu.");
            }
            catch (Exception ex)
            {
                // Hata durumunda uygun yanıtı döndür
                return StatusCode(500, "Sunucu hatası: " + ex.Message);
            }
        }


    }
}
