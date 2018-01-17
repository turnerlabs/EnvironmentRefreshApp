using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace EnvironmentRefresh.Models
{
    public class EnvironmentRefreshContext : DbContext
    {
        public EnvironmentRefreshContext(DbContextOptions<EnvironmentRefreshContext> options)
            : base(options)
        {
        }

        public DbSet<Environment> Environments { get; set; }
        public DbSet<Config> Configs { get; set; }
        public DbSet<Database> Databases { get; set; }
        public DbSet<RefreshRequest> RefreshRequests { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Config>()
                .HasMany(x => x.Databases)
                .WithOne(x => x.Config);

            //modelBuilder.Entity<RefreshRequest>()
            //    .HasMany(x => x.Systems)
            //    .WithOne(x => x.RefreshRequest);

            //modelBuilder.Entity<RefreshRequestSystem>()
            //    .HasKey(x => new { x.RefreshRequestId, x.SystemName });
        }
    }
}
