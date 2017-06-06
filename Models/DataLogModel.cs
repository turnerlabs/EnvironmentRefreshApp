using System;

public class DatabaseLogModel
{
    public string DatabaseName { get; set; }
    public string Stage { get; set; }
    public string Size { get; set; }
    public DateTime RestoreStartTime { get; set; }
    public DateTime StageCompleteTime { get; set; }
    public DateTime RestoreCompleteTime { get; set; }
    public string ElapsedTime { get; set; }
    public string Duration { get; set; }
    public string Resource { get; set; }
}
