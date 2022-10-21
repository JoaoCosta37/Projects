using FichaCadastro.Models.Entities;
using NHibernate.Mapping.ByCode.Conformist;

namespace FichaCadastro.Mappers
{
    public class PessoaMapping : ClassMapping<Pessoa>
    {
        public PessoaMapping()
        {
            Table("T_PESSOA");


            Id(x => x.Id,
               map =>
               {
                   map.Column("ID_PESSOA");
                   map.Generator(NHibernate.Mapping.ByCode.Generators.Identity);
               });

            Property(x => x.Nome,
             map => map.Column("NOME"));

            Property(x => x.DataNascimento,
             map => map.Column("DT_NASC"));

            Property(x => x.Sexo,
             map => map.Column("SEXO"));

            Property(x => x.Cpf,
             map => map.Column("CPF"));

            Property(x => x.Rg,
             map => map.Column("RG"));


            Property(x => x.Celular,
             map => map.Column("CELULAR"));


            Property(x => x.Telefone,
             map => map.Column("TELEFONE"));

            Property(x => x.Batizado,
             map => map.Column("ST_BATISMO"));

            Property(x => x.Crismado,
             map => map.Column("ST_CRISMA"));

            Property(x => x.PrimeiraEucaristia,
             map => map.Column("ST_EUCARISTIA"));


            Property(x => x.Matrimonio,
             map => map.Column("ST_MATRIMONIO"));

            ManyToOne(x => x.EstadoCivil,
            map => map.Column("ID_ESTADO_CIVIL"));

            Property(x => x.Profissao,
            map => map.Column("PROFISSAO"));

            ManyToOne(x => x.SituacaoEmprego,
           map => map.Column("ID_ST_EMPREGO"));




        }
    }
}
