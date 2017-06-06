using System.Collections.Generic;

namespace EnvironmentRefreshApp.Models
{
    public class ConfigDto
    {
        public static List<ConfigDto> Configs;

        public string Environment { get; set; }
        public string ServerInstance { get; set; }
        public string DefaultDataFilePath { get; set; }
        public string DefaultLogFilePath { get; set; }
        public DatabaseDto[] Databases { get; set; }

        static ConfigDto()
        {
            Configs = new List<ConfigDto>();
            Configs.Add(new ConfigDto
            {
                Environment = "MAIN",
                ServerInstance = "MAINSQL",
                DefaultDataFilePath = "D:\\MSSQL\\DATA",
                DefaultLogFilePath = "L:\\MSSQL\\DATA",
                Databases = new DatabaseDto[] {
                  new DatabaseDto {
                    DatabaseName = "Customers",
                    OverrideDataFilePath = null,
                    OverrideLogFilePath = null,
                    ImpactsInsight = false,
                    Replicate = false,
                    Shrink = false,
                    Size = 235264,
                    RestoreDuration = 6208,
                    RestoreDurationDescription = "1 hour and 43 minutes"
                  },
                  new DatabaseDto {
                    DatabaseName = "Orders",
                    OverrideDataFilePath = null,
                    OverrideLogFilePath = null,
                    ImpactsInsight = false,
                    Replicate = false,
                    Shrink = false,
                    Size = 235264,
                    RestoreDuration = 6208,
                    RestoreDurationDescription = "1 hour and 43 minutes"
                  }
              }
            });
            Configs.Add(new ConfigDto
            {
                Environment = "QA",
                ServerInstance = "QASQL",
                DefaultDataFilePath = "D:\\MSSQL\\DATA",
                DefaultLogFilePath = "L:\\MSSQL\\DATA",
                Databases = new DatabaseDto[] {
                  new DatabaseDto {
                    DatabaseName = "Customers",
                    OverrideDataFilePath = null,
                    OverrideLogFilePath = null,
                    ImpactsInsight = false,
                    Replicate = false,
                    Shrink = false,
                    Size = 235264,
                    RestoreDuration = 6208,
                    RestoreDurationDescription = "1 hour and 43 minutes"
                  },
                  new DatabaseDto {
                    DatabaseName = "Orders",
                    OverrideDataFilePath = null,
                    OverrideLogFilePath = null,
                    ImpactsInsight = false,
                    Replicate = false,
                    Shrink = false,
                    Size = 235264,
                    RestoreDuration = 6208,
                    RestoreDurationDescription = "1 hour and 43 minutes"
                  }
              }
            });
            Configs.Add(new ConfigDto
            {
                Environment = "PROD",
                ServerInstance = "PRODSQL",
                DefaultDataFilePath = "D:\\MSSQL\\DATA",
                DefaultLogFilePath = "L:\\MSSQL\\DATA",
                Databases = new DatabaseDto[] {
                  new DatabaseDto {
                    DatabaseName = "Customers",
                    OverrideDataFilePath = null,
                    OverrideLogFilePath = null,
                    ImpactsInsight = false,
                    Replicate = false,
                    Shrink = false,
                    Size = 235264,
                    RestoreDuration = 6208,
                    RestoreDurationDescription = "1 hour and 43 minutes"
                  },
                  new DatabaseDto {
                    DatabaseName = "Orders",
                    OverrideDataFilePath = null,
                    OverrideLogFilePath = null,
                    ImpactsInsight = false,
                    Replicate = false,
                    Shrink = false,
                    Size = 235264,
                    RestoreDuration = 6208,
                    RestoreDurationDescription = "1 hour and 43 minutes"
                  }
              }
            });
        }
    }
}
