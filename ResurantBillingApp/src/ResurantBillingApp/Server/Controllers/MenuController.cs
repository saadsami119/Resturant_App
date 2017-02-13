using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ResurantBillingApp.Server.Core.Model;

namespace ResurantBillingApp.Server.Controllers
{
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        private readonly IMenuService _menuService;

        public MenuController(IMenuService menuService)
        {
            this._menuService = menuService;
        }

        
        [HttpGet]
        public IEnumerable<Menu> Get()
        {
           return this._menuService.GetAllMenus();
        }

       
        [HttpGet("{name}")]
        public IEnumerable<Menu> Get(string name)
        {
           return  this._menuService.GetAllMenusByName(name).ToList();            
        }


        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
