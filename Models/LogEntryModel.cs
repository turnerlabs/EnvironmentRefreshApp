using System;
using System.ComponentModel.DataAnnotations;

public class LogEntryModel
{
    [Key]
    public int LogEntryId { get; set; }
    public string RefreshRequstId { get; set; }
    public string DatabaseName { get; set; }
    public string Status { get; set; }
    public string Message { get; set; }
    public DateTime LogTime { get; set; }
}
