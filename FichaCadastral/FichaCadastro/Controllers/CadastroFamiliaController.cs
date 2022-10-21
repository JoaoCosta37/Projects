using AutoMapper;
using FichaCadastro.Models.Entities;
using FichaCadastro.Models.Repositories;
using FichaCadastro.Models.UnitsOfWork;
using FichaCadastro.ViewModel;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Linq;

namespace FichaCadastro.Controllers
{
    public class CadastroFamiliaController : Controller
    {
        private readonly IMapper mapper;
        private readonly IFamiliaRepository familiaRepository;
        private readonly ISituacaoEmpregoRepository situacaoEmpregoRepository;
        private readonly IEstadoCivilRepository estadoCivilRepository;
        private readonly IUnitOfWorkManager unitOfWorkManager;

        public CadastroFamiliaController(IMapper mapper,  IFamiliaRepository familiaRepository, ISituacaoEmpregoRepository situacaoEmpregoRepository, IEstadoCivilRepository estadoCivilRepository, IUnitOfWorkManager unitOfWorkManager)
        {
            this.mapper = mapper;
            this.familiaRepository = familiaRepository;
            this.situacaoEmpregoRepository = situacaoEmpregoRepository;
            this.estadoCivilRepository = estadoCivilRepository;
            this.unitOfWorkManager = unitOfWorkManager;
        }


        public IActionResult Editar(int idFamilia)
        {
           var familia = familiaRepository.Get(idFamilia);
           var familiaVm = mapper.Map<FamiliaViewModel>(familia);

            ViewData["situacoesEmprego"] = situacaoEmpregoRepository.GetAll().Select(x => mapper.Map<SituacaoEmpregoViewModel>(x));
            ViewData["estadoCivil"] = estadoCivilRepository.GetAll().Select(x => mapper.Map<EstadoCivilViewModel>(x));

            return View("EditarFamilia",familiaVm);
        }

        public IActionResult Inserir()
        {
            ViewData["situacoesEmprego"] = situacaoEmpregoRepository.GetAll();
            ViewData["estadoCivil"] = estadoCivilRepository.GetAll();

            return View("InserirFamilia");
        }

        public IActionResult Salvar(FamiliaViewModel familiaVm)
        {
            var familia = mapper.Map<Familia>(familiaVm);

           var unitOfWork = unitOfWorkManager.CreateUnitOfWork();   

            bool isNew = familiaVm.Id == 0;

            familiaRepository.Salvar(familia);

            unitOfWork.Commit();

            return RedirectToAction("Consultar", "ConsultaFamilia");
        }

    }
}
