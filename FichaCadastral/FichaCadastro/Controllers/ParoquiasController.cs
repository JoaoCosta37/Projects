using Microsoft.AspNetCore.Mvc;

namespace FichaCadastro.Controllers
{
    public class ParoquiasController : Controller
    {
        public IActionResult Index()
        {
            return View("Paroquias");
        }
    }
}
