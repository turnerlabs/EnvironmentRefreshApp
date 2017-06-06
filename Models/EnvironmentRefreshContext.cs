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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DatabaseModel>()
                .HasKey(x => new { x.Environment, x.DatabaseName });

            modelBuilder.Entity<ConfigModel>()
            .HasMany(x => x.Databases)
            .WithOne();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        public static void Initialize()
        {
            var ob = new DbContextOptionsBuilder<EnvironmentRefreshContext>();
            ob.UseInMemoryDatabase();
            var context = new EnvironmentRefreshContext(ob.Options);
            context.LoadEnvironments();
            context.LoadConfigs();
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
    }
}
