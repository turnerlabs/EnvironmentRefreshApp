using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace EnvironmentRefresh.Models
{
    public class RefreshRequest
    {
        [JsonProperty("id")]
        public int RefreshRequestId { get; set; }
        public string Environment { get; set; }
        public string Status { get; set; }
        public string Requestor { get; set; }
        public DateTime? ScheduleDate { get; set; }
        public string ScheduledBy { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? CompletionDate { get; set; }
        public List<RefreshRequestSystem> Systems { get; set; }
        [NotMapped]
        public string[] Log { get; set; }
    }
}