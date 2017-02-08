using System.Collections.Generic;
using ResurantBillingApp.Server.Core.Interface.Repository;
using ResurantBillingApp.Server.Core.Model;

namespace ResurantBillingApp.Server.Core.Service
{
    public class MenuServicecs
    {
        private readonly IRepository<Menu> _menuRepository;

        public MenuServicecs(IRepository<Menu> menuRepository)
        {
            _menuRepository = menuRepository;
        }

        public IEnumerable<Menu> GetAllMenus()
        {
           return _menuRepository.Get();
        }
    }
}
