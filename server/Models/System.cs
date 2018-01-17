
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace EnvironmentRefresh.Models
{
    public class RefreshRequestSystem
    {
        public int RefreshRequestSystemId { get; set; }

        public string SystemName { get; set; }
        public string DatabaseName { get; set; }
        public string OverrideDataFilePath { get; set; }
        public string OverrideLogFilePath { get; set; }
        public bool ImpactsInsight { get; set; }
        public bool Replicate { get; set; }
        public bool Shrink { get; set; }
        public int? Size { get; set; }
        public int? RestoreDuration { get; set; }
        public string RestoreDurationDescription { get; set; }
        [JsonIgnore]
        public RefreshRequest RefreshRequest { get; set; }
    }
}
