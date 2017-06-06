using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EnvironmentRefreshApp.Models
{
    public class ConfigModel
    {
        [Key]
        public string Environment { get; set; }
        public string ServerInstance { get; set; }
        public string DefaultDataFilePath { get; set; }
        public string DefaultLogFilePath { get; set; }
        public List<DatabaseModel> Databases { get; set; }
    }
}
