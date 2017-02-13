using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using ResurantBillingApp.Server.Core.Interface.Repository;
using ResurantBillingApp.Server.Core.Model;
using ResurantBillingApp.Server.Core.Repository;
using ResurantBillingApp.Server.Core.Repository.Database;
using ResurantBillingApp.Server.Core.Service;

namespace ResurantBillingApp
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                //.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                //.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();            

            services.AddSingleton<IDatabaseContext,AppDbContext>();

            services.AddScoped<IUnitOfWork,UnitOfWork>();

            services.AddTransient<IMenuService,MenuService>();
            
            services.AddMvc()
                             .AddJsonOptions(options => options.SerializerSettings.ReferenceLoopHandling
                                 = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                             .AddJsonOptions(
                                 option => option.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver());

            services.AddCors(options =>
                                options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                                                                    .AllowAnyMethod()
                                                                    .AllowAnyHeader()
                                                                    .WithMethods("POST", "GET")));
        }


        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            //loggerFactory.AddDebug();
            loggerFactory.AddConsole();
            app.UseDefaultFiles(GetDefaultFileOptions());
            app.UseStaticFiles();
            app.UseMvc();
        }

        private DefaultFilesOptions GetDefaultFileOptions()
        {
            DefaultFilesOptions options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("App.html");
            return options;
        }

        private void SeedData()
        {
            var dbContext = new AppDbContext();

            var menus = new List<Menu>
            {
                new Menu {Id = 1, Name = "Menu 1", Description="Donec id elit non mi porta gravida at eget metus.", Price = 10},
                new Menu {Id = 2, Name = "Menu 2", Description="Donec id elit non mi porta gravida at eget metus.", Price = 20},
                new Menu {Id = 3, Name = "Menu 3", Description="Donec id elit non mi porta gravida at eget metus.", Price = 30},
                new Menu {Id = 4, Name = "Menu 4", Description="Donec id elit non mi porta gravida at eget metus.", Price = 10},
                new Menu {Id = 5, Name = "Menu 5", Description="Donec id elit non mi porta gravida at eget metus.", Price = 20},
                new Menu {Id = 6, Name = "Menu 6", Description="Donec id elit non mi porta gravida at eget metus.", Price = 30}
            };

            dbContext.Menus.AddRange(menus);
            dbContext.SaveChanges();

        }
    }
}
