using FichaCadastro.Models.UnitsOfWork;
using NHibernate;

namespace FichaCadastro.ORM.UnitsOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ITransaction transaction;

        public UnitOfWork(ITransaction transaction)
        {
            this.transaction = transaction;
        }

        public void Commit()
        {
            transaction.Commit();
        }
    }
}
