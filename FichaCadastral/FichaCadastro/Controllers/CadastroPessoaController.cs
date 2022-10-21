using FichaCadastro.Models.Entities;
using FichaCadastro.Models.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace FichaCadastro.Controllers
{
    public class CadastroPessoaController : Controller
    {
        private readonly IPessoaRepository pessoaRepository;
        private readonly ISituacaoEmpregoRepository situacaoEmpregoRepository;
        public CadastroPessoaController(IPessoaRepository pessoaRepository, ISituacaoEmpregoRepository situacaoEmpregoRepository)
        {
            this.pessoaRepository = pessoaRepository;
            this.situacaoEmpregoRepository = situacaoEmpregoRepository;
        }
        public IActionResult Inserir()
        {
            return View("InserirPessoa");
        }
    }
}
