using System;
using System.ComponentModel.DataAnnotations;

public class DatabaseLogModel
{
    [Key]
    public int DatabaseLogId { get; set; }
    public string RefreshRequstId { get; set; }
    public string DatabaseName { get; set; }
    public string Stage { get; set; }
    public int Size { get; set; }
    public DateTime RestoreStartTime { get; set; }
    public DateTime StageCompleteTime { get; set; }
    public DateTime RestoreCompleteTime { get; set; }
    public string ElapsedTime { get; set; }
    public string Duration { get; set; }
    public string Resource { get; set; }
}
