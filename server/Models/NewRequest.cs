using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace EnvironmentRefresh.Models
{
  [Serializable]
  public class NewRequest
  {
    [JsonProperty("requestName")]
    public string RequestName { get; set; }

    [JsonProperty("requestDescription")]
    public string RequestDescription { get; set; }
  }
}
