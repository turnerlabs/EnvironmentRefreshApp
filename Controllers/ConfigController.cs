using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnvironmentRefreshApp.Models;


namespace EnvironmentRefreshApp.Controllers
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
        public IEnumerable<ConfigModel> Get()
        {
            return _context.Configs;
        }

        // GET: api/values
        [HttpGet("{environment}", Name = "GetConfig")]
        public ConfigModel Get(string environment)
        {
            return _context.Configs
                .Include(x => x.Databases)
                .SingleOrDefault(x => x.Environment == environment);
        }
    }
}
