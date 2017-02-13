using System.Collections.Generic;
using System.Linq;
using ResurantBillingApp.Server.Core.Interface.Repository;
using ResurantBillingApp.Server.Core.Model;

namespace ResurantBillingApp.Server.Core.Service
{
    public class MenuService : IMenuService
    {
        private readonly IRepository<Menu> _menuRepository;

        public MenuService(IUnitOfWork uow)
        {
            _menuRepository = uow.MenuRepository;
        }

        public IEnumerable<Menu> GetAllMenus()
        {
            return _menuRepository.Get()
                    .OrderBy(x => x.Name);
        }

        public IEnumerable<Menu> GetAllMenusByName(string name)
        {
            return _menuRepository.Get(x => x.Name.ToLower().Contains(name.ToLower()))
                   .OrderBy(x => x.Name); ;
        }
    }
}
