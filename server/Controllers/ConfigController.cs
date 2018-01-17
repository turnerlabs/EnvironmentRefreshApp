using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnvironmentRefresh.Models;


namespace EnvironmentRefresh.Controllers
{
    [Route("api/[controller]")]
    public class ConfigController : Controller
    {
        private readonly EnvironmentRefreshContext _context;

        public ConfigController(EnvironmentRefreshContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<Config>> Get()
        {
            return await _context.Configs.ToListAsync();
        }

        // GET: api/values
        [HttpGet("{environment}", Name = "GetConfig")]
        public async Task<Config> Get(string environment)
        {
            return await _context.Configs
                .SingleOrDefaultAsync(x => x.Environment == environment);
        }
    }
}
