using System;

namespace FichaCadastro.Models.Entities
{
    public class Pessoa
    {
        public virtual int Id { get; set; }
        public virtual string Nome { get; set; }

        public virtual int IdFamilia { get; set; }
        public virtual DateTime DataNascimento { get; set; }
        
        public virtual short Idade { get; set; }
        public virtual string Sexo { get; set; }

        public virtual string Cpf { get; set; }

        public virtual string Rg { get; set; }

        public virtual string Celular { get; set; }

        public virtual string Telefone { get; set; }

        public virtual bool Batizado { get; set; }

        public virtual bool Crismado { get; set; }

        public virtual bool PrimeiraEucaristia { get; set; }

        public virtual bool Matrimonio { get; set; }

        public virtual EstadoCivil EstadoCivil { get; set; }

        public virtual string Profissao { get; set; }

        public virtual SituacaoEmprego SituacaoEmprego { get; set; }


    }
}
