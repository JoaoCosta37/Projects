using FichaCadastro.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace FichaCadastro.Controllers
{
    public class ConsultaFamiliaController : Controller
    {
        private readonly IFamiliaRepository familiaRepository;

        public ConsultaFamiliaController(IFamiliaRepository familiaRepository)
        {
            this.familiaRepository = familiaRepository;
        }

        public IActionResult Consultar()
        {
            var familias = familiaRepository.GetAll()
                //.Where(x => x.Bairro == "Quitauna")

                .Select(x => new
            {
                IdFamilia = x.Id ,
                x.Responsavel.Nome, 
                x.EstaRecebendoCestaBasica,
                x.Endereco,
                x.NumeroEndereco,
                x.Bairro
            }).ToList();

            return View("ConsultaFamilia",familias);
        }


    }
}
