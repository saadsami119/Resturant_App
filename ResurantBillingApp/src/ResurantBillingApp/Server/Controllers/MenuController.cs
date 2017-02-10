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
                new Menu {Id = 1, Name = "Menu 1", Description="Donec id elit non mi porta gravida at eget metus.", Price = 10},
                new Menu {Id = 2, Name = "Menu 2", Description="Donec id elit non mi porta gravida at eget metus.", Price = 20},
                new Menu {Id = 3, Name = "Menu 3", Description="Donec id elit non mi porta gravida at eget metus.", Price = 30},
                new Menu {Id = 4, Name = "Menu 4", Description="Donec id elit non mi porta gravida at eget metus.", Price = 10},
                new Menu {Id = 5, Name = "Menu 5", Description="Donec id elit non mi porta gravida at eget metus.", Price = 20},
                new Menu {Id = 6, Name = "Menu 6", Description="Donec id elit non mi porta gravida at eget metus.", Price = 30}
            };
        }

        // GET api/values/5
        [HttpGet("{name}")]
        public IEnumerable<Menu> Get(string name)
        {
            return new List<Menu>
            {
                new Menu {Id = 1, Name = "Menu 1", Description="Donec id elit non mi porta gravida at eget metus.", Price = 10},
                new Menu {Id = 2, Name = "Menu 2", Description="Donec id elit non mi porta gravida at eget metus.", Price = 20},
                new Menu {Id = 3, Name = "Menu 3", Description="Donec id elit non mi porta gravida at eget metus.", Price = 30}

            };
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
