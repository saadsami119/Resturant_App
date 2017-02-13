using System.Collections.Generic;
using ResurantBillingApp.Server.Core.Model;

public interface IMenuService
{
    IEnumerable<Menu> GetAllMenus();

    IEnumerable<Menu> GetAllMenusByName(string name);

}