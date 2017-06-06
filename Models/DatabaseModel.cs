
namespace EnvironmentRefreshApp.Models
{
    public class DatabaseModel
    {
        public string Environment { get; set; }
        public string DatabaseName { get; set; }
        public string OverrideDataFilePath { get; set; }
        public string OverrideLogFilePath { get; set; }
        public bool ImpactsInsight { get; set; }
        public bool Replicate { get; set; }
        public bool Shrink { get; set; }
        public int? Size { get; set; }
        public int? RestoreDuration { get; set; }
        public string RestoreDurationDescription { get; set; }

        //public ConfigModel Config { get; set; }
    }
}
