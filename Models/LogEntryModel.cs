using System;

public class LogEntryModel
{
    public string DatabaseName { get; set; }
    public string Status { get; set; }
    public string Message { get; set; }
    public DateTime LogTime { get; set; }
}
