using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EnvironmentRefresh.Models
{
    public class Environment
    {
        [JsonProperty("environment")]
        public string EnvironmentId { get; set; }
        public string Description { get; set; }
    }
}
