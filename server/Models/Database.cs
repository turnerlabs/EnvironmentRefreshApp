using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EnvironmentRefresh.Models {
  public class Database {
    public int DatabaseId { get; set;}
    public Config Config { get; set; }
    public string DatabaseName { get; set; }
    public string OverrideDataFilePath { get; set; }
    public bool ImpactsInsight { get; set; }
    public bool Replicate { get; set; }
    public bool Shrink { get; set; }
  }
}
