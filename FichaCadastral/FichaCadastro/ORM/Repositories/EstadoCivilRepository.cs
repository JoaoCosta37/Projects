using FichaCadastro.Models.Entities;
using FichaCadastro.Models.Repositories;
using NHibernate;

namespace FichaCadastro.ORM.Repositories
{
    public class EstadoCivilRepository : BaseRepository<EstadoCivil>, IEstadoCivilRepository
    {
        public EstadoCivilRepository(ISession session) : base(session)
        {

        }
    }
}
