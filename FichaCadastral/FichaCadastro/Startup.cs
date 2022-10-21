using AutoMapper;
using FichaCadastro.Models.Entities;
using FichaCadastro.Models.Repositories;
using FichaCadastro.Models.UnitsOfWork;
using FichaCadastro.ORM;
using FichaCadastro.ORM.Repositories;
using FichaCadastro.ORM.UnitsOfWork;
using FichaCadastro.ViewModel;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FichaCadastro
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            adicionarNHibernate(services);

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Familia, FamiliaViewModel>().ReverseMap();
                cfg.CreateMap<Pessoa, PessoaViewModel>().ReverseMap();
                cfg.CreateMap<EstadoCivil, EstadoCivilViewModel>().ReverseMap();
                cfg.CreateMap<SituacaoEmprego, SituacaoEmpregoViewModel>().ReverseMap();
                cfg.CreateMap<string, string>().ConvertUsing((str) => (str ?? "").Trim());
            });


            services.AddScoped<IMapper>((provider) =>
            {
                return config.CreateMapper();
            });

            services.AddControllersWithViews();
        }

        private static void adicionarNHibernate(IServiceCollection services)
        {
            var sessionFactory = NHibernateConfigurator.Configure();


            services.AddSingleton(typeof(ISessionFactory), sessionFactory);

            services.AddScoped(typeof(ISession), (provider) =>
            {
                return sessionFactory.OpenSession();
            });

            services.AddScoped<IPessoaRepository, PessoaRepository>();
            services.AddScoped<IFamiliaRepository, FamiliaRepository>();

            services.AddScoped<ISituacaoEmpregoRepository, SituacaoEmpregoRepository>();
            services.AddScoped<IEstadoCivilRepository, EstadoCivilRepository>();

            services.AddScoped<IUnitOfWorkManager, UnitOfWorkManager>();
          //  services.AddScoped<IUnitOfWork, UnitOfWork>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
