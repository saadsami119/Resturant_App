using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using ResurantBillingApp.Server.Core.Interface;

namespace ResurantBillingApp.Server.Core.Model
{
    public class Order : IEntity
    {
        public int Id { get; set; }
        public List<Menu> Menus  { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        public int UserId { get; set; }
        
    }
}
