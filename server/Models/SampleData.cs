using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;

namespace EnvironmentRefresh.Models
{
    public static class SampleData
    {
        public static IApplicationBuilder UseEnvironmentRefreshSampleData(this IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<EnvironmentRefreshContext>();
                LoadSampleData(context, context.Environments, "EnvironmentRefresh.Models.SampleData.environments.json");
                LoadSampleData(context, context.Configs, "EnvironmentRefresh.Models.SampleData.configs.json");
                LoadSampleData(context, context.RefreshRequests, "EnvironmentRefresh.Models.SampleData.refreshrequests.json");
            }
            return applicationBuilder;
        }

        private static void LoadSampleData<T>(DbContext context, DbSet<T> dbSet, string resourceName) where T: class
        {
            var assembly = typeof(T).Assembly;
            Stream stream = assembly.GetManifestResourceStream(resourceName);
            var serializer = new JsonSerializer();

            using (var sr = new StreamReader(stream))
            using (var jsonTextReader = new JsonTextReader(sr))
            {
                foreach (var model in serializer.Deserialize<T[]>(jsonTextReader))
                {
                    dbSet.Add(model);
                }
                context.SaveChanges();
            }
        }
    }
}
