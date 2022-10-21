namespace FichaCadastro.Models.UnitsOfWork
{
    public interface IUnitOfWorkManager
    {
        IUnitOfWork CreateUnitOfWork();
    }
}
