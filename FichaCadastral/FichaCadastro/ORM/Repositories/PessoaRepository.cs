using FichaCadastro.Models.Entities;
using FichaCadastro.Models.Repositories;
using NHibernate;

namespace FichaCadastro.ORM.Repositories
{
    public class PessoaRepository : BaseRepository<Pessoa>, IPessoaRepository
    {
        public PessoaRepository(ISession session) : base(session)
        {
        }
    }
}
