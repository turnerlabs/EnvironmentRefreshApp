using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EnvironmentRefreshApp.Models;


namespace EnvironmentRefreshApp.Controllers
{
    [Route("api/[controller]")]
    public class EnvironmentsController : Controller
    {
        private readonly EnvironmentRefreshContext _context;

        public EnvironmentsController(EnvironmentRefreshContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<EnvironmentDto> Get()
        {
            return _context.Environments;
        }
    }
}
