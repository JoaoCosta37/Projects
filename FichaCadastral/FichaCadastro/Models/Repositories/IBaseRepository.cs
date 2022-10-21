using System.Collections.Generic;
using System.Linq;

namespace FichaCadastro.Models.Repositories
{
    public interface IBaseRepository<T>
    {
        IQueryable<T> GetAll();

        T Get(int key);

        void Salvar(T entity);
    }
}
