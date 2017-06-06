using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class RefreshRequestModel {
    public string Id { get; set; }
    public string Environment { get; set; }
    public string Status { get; set; }
    public string Requestor { get; set; }
    public DateTime ScheduleDate { get; set; }
    public string ScheduledBy { get; set; }
    public DateTime? CompletionDate { get; set; }
    public string TotalDuration { get; set; }
    public List<DatabaseLogModel> Databases { get; set; }
    public List<LogEntryModel> Logs { get; set; }
}
