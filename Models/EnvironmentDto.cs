using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EnvironmentRefreshApp.Models
{
    public class EnvironmentDto
    {
        [Key]
        public string Environment { get; set; }
        public string Description { get; set; }
    }
}
