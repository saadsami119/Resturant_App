
using System.ComponentModel.DataAnnotations;
using ResurantBillingApp.Server.Core.Interface;

namespace ResurantBillingApp.Server.Core.Model
{
    public class Menu : IEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public decimal Price { get; set; }
        
    }
}
