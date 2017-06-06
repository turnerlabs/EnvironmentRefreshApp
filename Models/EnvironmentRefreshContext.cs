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

        public DbSet<EnvironmentDto> Environments { get; set; }
        public DbSet<ConfigDto> Configs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DatabaseDto>()
                .HasKey(x => new { x.Environment, x.DatabaseName });

            modelBuilder.Entity<ConfigDto>()
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
            this.Environments.Add(new EnvironmentDto
            {
                Environment = "MAIN",
                Description = "Main development"
            });
            this.Environments.Add(new EnvironmentDto
            {
                Environment = "POST",
                Description = "PROD patch testing"
            });
            this.Environments.Add(new EnvironmentDto
            {
                Environment = "PROD",
                Description = "Production"
            });
            this.SaveChanges();
        }
        private void LoadConfigs()
        {
            this.Configs.Add(new ConfigDto
            {
                Environment = "MAIN",
                ServerInstance = "MAINSQL",
                DefaultDataFilePath = "D:\\MSSQL\\DATA",
                DefaultLogFilePath = "L:\\MSSQL\\DATA",
                Databases = new List<DatabaseDto>(new[] {
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
                })
            });
            this.Configs.Add(new ConfigDto
            {
                Environment = "QA",
                ServerInstance = "QASQL",
                DefaultDataFilePath = "D:\\MSSQL\\DATA",
                DefaultLogFilePath = "L:\\MSSQL\\DATA",
                Databases = new List<DatabaseDto>(new[] {
                    new DatabaseDto {
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
                    new DatabaseDto {
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
            this.Configs.Add(new ConfigDto
            {
                Environment = "PROD",
                ServerInstance = "PRODSQL",
                DefaultDataFilePath = "D:\\MSSQL\\DATA",
                DefaultLogFilePath = "L:\\MSSQL\\DATA",
                Databases = new List<DatabaseDto>(new[] {
                    new DatabaseDto {
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
                    new DatabaseDto {
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
