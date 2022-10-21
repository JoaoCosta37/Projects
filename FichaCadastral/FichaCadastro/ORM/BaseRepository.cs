using NHibernate;
using System.Collections.Generic;
using System.Linq;

namespace FichaCadastro.ORM
{
    public class BaseRepository<T>
    {
        
        private readonly ISession session;

        public BaseRepository(ISession session)
        {
            this.session = session;
        }

        public IQueryable<T> GetAll()
        {
           return this.session.Query<T>();
        }

        public T Get(int key)
        {
            return this.session.Get<T>(key);
        }

        public void Salvar(T entity)
        {
            this.session.SaveOrUpdate(entity);
        }
    }
}
