using System.ComponentModel.DataAnnotations;
using ResurantBillingApp.Server.Core.Interface;

namespace ResurantBillingApp.Server.Core.Model
{
    public class User : IEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
