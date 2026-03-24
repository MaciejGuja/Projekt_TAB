using Microsoft.AspNetCore.Mvc;
using web_api_backend.Models;
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(new { message = "Hello from backend!" });
    }

    [HttpPost]
    public IActionResult CreateProduct([FromBody] Product product)
    {
        return Ok(product);
    }
}