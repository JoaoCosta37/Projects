using FichaCadastro.Models.Entities;
using FichaCadastro.Models.Repositories;
using NHibernate;

namespace FichaCadastro.ORM.Repositories
{
    public class SituacaoEmpregoRepository : BaseRepository<SituacaoEmprego>, ISituacaoEmpregoRepository
    {
        public SituacaoEmpregoRepository(ISession session) : base(session)
        {
        }
    }
}
