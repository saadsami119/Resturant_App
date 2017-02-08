using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ResurantBillingApp.Server.Core.Model;

namespace ResurantBillingApp.Server.Controllers
{
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Menu> Get()
        {
            return new List<Menu>
            {
                new Menu {Id = 1, Name = "Menu 1", Price = 10},
                new Menu {Id = 2, Name = "Menu 2", Price = 20},
                new Menu {Id = 3, Name = "Menu 3", Price = 30}
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
