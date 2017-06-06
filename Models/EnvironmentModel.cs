using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EnvironmentRefreshApp.Models
{
    public class EnvironmentModel
    {
        [Key]
        public string Environment { get; set; }
        public string Description { get; set; }
    }
}
