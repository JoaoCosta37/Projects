using FichaCadastro.Models.UnitsOfWork;
using NHibernate;

namespace FichaCadastro.ORM.UnitsOfWork
{
    public class UnitOfWorkManager : IUnitOfWorkManager
    {
        private readonly ISession session;

        public UnitOfWorkManager(ISession session)
        {
            this.session = session;
        }
        public IUnitOfWork CreateUnitOfWork()
        {
          var transaction = session.BeginTransaction();

            return new UnitOfWork(transaction);
        }
    }
}
