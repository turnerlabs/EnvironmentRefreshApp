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

            modelBuilder.Entity<DatabaseDto>()
                .HasOne(x => x.Config)
                .WithMany(x => x.Databases)
                .HasForeignKey(x => x.Environment);
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
                      Environment = "MAIN",
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
                      Environment = "MAIN",
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
