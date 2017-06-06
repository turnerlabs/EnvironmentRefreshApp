using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace EnvironmentRefreshApp.Models
{
    public class EnvironmentRefreshContext : DbContext
    {
        public EnvironmentRefreshContext(DbContextOptions<EnvironmentRefreshContext> options)
            : base(options)
        {
        }

        public DbSet<EnvironmentModel> Environments { get; set; }
        public DbSet<ConfigModel> Configs { get; set; }
        public DbSet<RefreshRequestModel> RefreshRequests { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DatabaseModel>()
                .HasKey(x => new { x.Environment, x.DatabaseName });

            modelBuilder.Entity<ConfigModel>()
                .HasMany(x => x.Databases)
                .WithOne();

            modelBuilder.Entity<RefreshRequestModel>()
                .HasMany(x => x.Databases)
                .WithOne();

            modelBuilder.Entity<RefreshRequestModel>()
                .HasMany(x => x.Logs)
                .WithOne();
        }

        public static void Initialize()
        {
            var ob = new DbContextOptionsBuilder<EnvironmentRefreshContext>();
            ob.UseInMemoryDatabase();
            var context = new EnvironmentRefreshContext(ob.Options);
            context.LoadEnvironments();
            context.LoadConfigs();
            context.LoadRefreshRequests();
        }

        private void LoadEnvironments()
        {
            this.Environments.Add(new EnvironmentModel
            {
                Environment = "MAIN",
                Description = "Main development"
            });
            this.Environments.Add(new EnvironmentModel
            {
                Environment = "POST",
                Description = "PROD patch testing"
            });
            this.Environments.Add(new EnvironmentModel
            {
                Environment = "PROD",
                Description = "Production"
            });
            this.SaveChanges();
        }

        private void LoadConfigs()
        {
            this.Configs.Add(new ConfigModel
            {
                Environment = "MAIN",
                ServerInstance = "MAINSQL",
                DefaultDataFilePath = "D:\\MSSQL\\DATA",
                DefaultLogFilePath = "L:\\MSSQL\\DATA",
                Databases = new List<DatabaseModel>(new[] {
                    new DatabaseModel {
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
                    new DatabaseModel {
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
                })
            });
            this.Configs.Add(new ConfigModel
            {
                Environment = "QA",
                ServerInstance = "QASQL",
                DefaultDataFilePath = "D:\\MSSQL\\DATA",
                DefaultLogFilePath = "L:\\MSSQL\\DATA",
                Databases = new List<DatabaseModel>(new[] {
                    new DatabaseModel {
                        Environment = "QA",
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
                    new DatabaseModel {
                        Environment = "QA",
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
                })
            });
            this.Configs.Add(new ConfigModel
            {
                Environment = "PROD",
                ServerInstance = "PRODSQL",
                DefaultDataFilePath = "D:\\MSSQL\\DATA",
                DefaultLogFilePath = "L:\\MSSQL\\DATA",
                Databases = new List<DatabaseModel>(new[] {
                    new DatabaseModel {
                        Environment = "PROD",
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
                    new DatabaseModel {
                        Environment = "PROD",
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
                })
            });
            this.SaveChanges();
        }


        private void LoadRefreshRequests()
        {
            var startTime = DateTime.Now.AddMinutes(-12);
            this.RefreshRequests.Add(new RefreshRequestModel
            {
                Id = System.Guid.NewGuid().ToString(),
                Environment = "MAIN",
                Status = "Complete",
                Requestor = "DOMAIN\\user",
                ScheduleDate = startTime,
                ScheduledBy = "DOMAIN\\user",
                CompletionDate = startTime.AddMinutes(2),
                TotalDuration = "118 seconds and 48ms",
                Databases = new List<DatabaseLogModel>(new[] {
                    new DatabaseLogModel {
                        DatabaseName = "Customers",
                        Stage = "Complete",
                        Size = 1544,
                        RestoreStartTime = startTime,
                        StageCompleteTime = startTime.AddMinutes(2),
                        RestoreCompleteTime = startTime.AddMinutes(2),
                        ElapsedTime = "00:00:27.0480000",
                        Duration = "27 seconds and 48ms",
                        Resource = "http://localhost/api/EnvironmentRefreshConfigurations/MAIN/Customers"
                    }
                }),
                Logs = new List<LogEntryModel>(new[] {
                    new LogEntryModel {
                        DatabaseName = null,
                        Status = "In Progress",
                        Message = "Starting environment refresh",
                        LogTime = startTime
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Preparing",
                        Message = "Setting database offline",
                        LogTime = startTime.AddSeconds(10)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Restoring",
                        Message = "Restoring database over existing database",
                        LogTime = startTime.AddSeconds(15)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Restoring",
                        Message = "Setting recovery model and database options",
                        LogTime = startTime.AddSeconds(100)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "PostRefresh",
                        Message = "Repairing broken logins",
                        LogTime = startTime.AddSeconds(110)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Complete",
                        Message = null,
                        LogTime = startTime.AddSeconds(117)
                    },
                    new LogEntryModel {
                        DatabaseName = null,
                        Status = "Complete",
                        Message = null,
                        LogTime = startTime.AddSeconds(120)
                    }
                })
            });

            startTime = DateTime.Now.AddMinutes(-37);
            this.RefreshRequests.Add(new RefreshRequestModel
            {
                Id = System.Guid.NewGuid().ToString(),
                Environment = "MAIN",
                Status = "Complete",
                Requestor = "DOMAIN\\user",
                ScheduleDate = startTime,
                ScheduledBy = "DOMAIN\\user",
                CompletionDate = startTime.AddMinutes(2),
                TotalDuration = "118 seconds and 48ms",
                Databases = new List<DatabaseLogModel>(new[] {
                    new DatabaseLogModel {
                        DatabaseName = "Client",
                        Stage = "Complete",
                        Size = 1544,
                        RestoreStartTime = startTime,
                        StageCompleteTime = startTime.AddMinutes(2),
                        RestoreCompleteTime = startTime.AddMinutes(2),
                        ElapsedTime = "00:00:27.0480000",
                        Duration = "27 seconds and 48ms",
                        Resource = "http://localhost/api/EnvironmentRefreshConfigurations/MAIN/Customers"
                    },
                    new DatabaseLogModel {
                        DatabaseName = "Orders",
                        Stage = "Complete",
                        Size = 1544,
                        RestoreStartTime = startTime,
                        StageCompleteTime = startTime.AddMinutes(2),
                        RestoreCompleteTime = startTime.AddMinutes(2),
                        ElapsedTime = "00:00:27.0480000",
                        Duration = "27 seconds and 48ms",
                        Resource = "http://localhost/api/EnvironmentRefreshConfigurations/MAIN/Customers"
                    }

                }),
                Logs = new List<LogEntryModel>(new[] {
                    new LogEntryModel {
                        DatabaseName = null,
                        Status = "In Progress",
                        Message = "Starting environment refresh",
                        LogTime = startTime
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Preparing",
                        Message = "Setting database offline",
                        LogTime = startTime.AddSeconds(10)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Restoring",
                        Message = "Restoring database over existing database",
                        LogTime = startTime.AddSeconds(15)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Restoring",
                        Message = "Setting recovery model and database options",
                        LogTime = startTime.AddSeconds(100)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "PostRefresh",
                        Message = "Repairing broken logins",
                        LogTime = startTime.AddSeconds(110)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Complete",
                        Message = null,
                        LogTime = startTime.AddSeconds(117)
                    },
                    new LogEntryModel {
                        DatabaseName = null,
                        Status = "Complete",
                        Message = null,
                        LogTime = startTime.AddSeconds(120)
                    }
                })
            });

            startTime = DateTime.Now.AddMinutes(50);
            this.RefreshRequests.Add(new RefreshRequestModel
            {
                Id = System.Guid.NewGuid().ToString(),
                Environment = "MAIN",
                Status = "Complete",
                Requestor = "DOMAIN\\user",
                ScheduleDate = startTime,
                ScheduledBy = "DOMAIN\\user",
                CompletionDate = startTime.AddMinutes(2),
                TotalDuration = "118 seconds and 48ms",
                Databases = new List<DatabaseLogModel>(new[] {
                    new DatabaseLogModel {
                        DatabaseName = "Customers",
                        Stage = "Complete",
                        Size = 1544,
                        RestoreStartTime = startTime,
                        StageCompleteTime = startTime.AddMinutes(2),
                        RestoreCompleteTime = startTime.AddMinutes(2),
                        ElapsedTime = "00:00:27.0480000",
                        Duration = "27 seconds and 48ms",
                        Resource = "http://localhost/api/EnvironmentRefreshConfigurations/MAIN/Customers"
                    }
                }),
                Logs = new List<LogEntryModel>(new[] {
                    new LogEntryModel {
                        DatabaseName = null,
                        Status = "In Progress",
                        Message = "Starting environment refresh",
                        LogTime = startTime
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Preparing",
                        Message = "Setting database offline",
                        LogTime = startTime.AddSeconds(10)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Restoring",
                        Message = "Restoring database over existing database",
                        LogTime = startTime.AddSeconds(15)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Restoring",
                        Message = "Setting recovery model and database options",
                        LogTime = startTime.AddSeconds(100)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "PostRefresh",
                        Message = "Repairing broken logins",
                        LogTime = startTime.AddSeconds(110)
                    },
                    new LogEntryModel {
                        DatabaseName = "Customers",
                        Status = "Complete",
                        Message = null,
                        LogTime = startTime.AddSeconds(117)
                    },
                    new LogEntryModel {
                        DatabaseName = null,
                        Status = "Complete",
                        Message = null,
                        LogTime = startTime.AddSeconds(120)
                    }
                })
            });

            startTime = DateTime.Now.AddMinutes(200);
            this.RefreshRequests.Add(new RefreshRequestModel
            {
                Id = System.Guid.NewGuid().ToString(),
                Environment = "QA",
                Status = "Complete",
                Requestor = "DOMAIN\\user",
                ScheduleDate = startTime,
                ScheduledBy = "DOMAIN\\user",
                CompletionDate = startTime.AddMinutes(2),
                TotalDuration = "118 seconds and 48ms",
                Databases = new List<DatabaseLogModel>(new[] {
                    new DatabaseLogModel {
                        DatabaseName = "Orders",
                        Stage = "Complete",
                        Size = 1544,
                        RestoreStartTime = startTime,
                        StageCompleteTime = startTime.AddMinutes(2),
                        RestoreCompleteTime = startTime.AddMinutes(2),
                        ElapsedTime = "00:00:27.0480000",
                        Duration = "27 seconds and 48ms",
                        Resource = "http://localhost/api/EnvironmentRefreshConfigurations/MAIN/Customers"
                    }
                }),
                Logs = new List<LogEntryModel>(new[] {
                    new LogEntryModel {
                        DatabaseName = null,
                        Status = "In Progress",
                        Message = "Starting environment refresh",
                        LogTime = startTime
                    },
                    new LogEntryModel {
                        DatabaseName = "Orders",
                        Status = "Preparing",
                        Message = "Setting database offline",
                        LogTime = startTime.AddSeconds(10)
                    },
                    new LogEntryModel {
                        DatabaseName = "Orders",
                        Status = "Restoring",
                        Message = "Restoring database over existing database",
                        LogTime = startTime.AddSeconds(15)
                    },
                    new LogEntryModel {
                        DatabaseName = "Orders",
                        Status = "Restoring",
                        Message = "Setting recovery model and database options",
                        LogTime = startTime.AddSeconds(100)
                    },
                    new LogEntryModel {
                        DatabaseName = "Orders",
                        Status = "PostRefresh",
                        Message = "Repairing broken logins",
                        LogTime = startTime.AddSeconds(110)
                    },
                    new LogEntryModel {
                        DatabaseName = "Orders",
                        Status = "Complete",
                        Message = null,
                        LogTime = startTime.AddSeconds(117)
                    },
                    new LogEntryModel {
                        DatabaseName = null,
                        Status = "Complete",
                        Message = null,
                        LogTime = startTime.AddSeconds(120)
                    }
                })
            });

            this.SaveChanges();
        }

    }
}
