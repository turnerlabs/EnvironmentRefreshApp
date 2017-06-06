using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EnvironmentRefreshApp.Models;


namespace EnvironmentRefreshApp.Controllers
{
    [Route("api/[controller]")]
    public class ConfigsController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<ConfigDto> Get()
        {
            return ConfigDto.Configs;
        }

        // GET: api/values
        [HttpGet("{environment}", Name = "GetConfig")]
        public ConfigDto Get(string environment)
        {
            return ConfigDto.Configs.SingleOrDefault(x=>x.Environment == environment);
        }
    }
}
