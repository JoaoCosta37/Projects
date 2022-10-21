using FichaCadastro.Models.Entities;
using NHibernate.Mapping.ByCode.Conformist;

namespace FichaCadastro.Mappers
{
    public class EstadoCivilMapping : ClassMapping<EstadoCivil>
    {
        public EstadoCivilMapping()
        {
            Table("T_ESTADO_CIVIL");

            Id(x => x.Id,
               map => map.Column("ID_ESTADO_CIVIL"));

            Property(x => x.Descricao,
                map => map.Column("DC_ESTADO_CIVIL"));


        }
    }
}
