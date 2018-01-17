using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EnvironmentRefresh.Models
{
    public class Config
    {
        [Key]
        public string Environment { get; set; }
        public string ServerInstance { get; set; }
        public string DefaultDataFilePath { get; set; }
        public string DefaultLogFilePath { get; set; }
        public List<Database> Databases { get; set; }
    }
}
