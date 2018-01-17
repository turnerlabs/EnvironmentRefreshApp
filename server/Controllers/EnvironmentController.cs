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
    public class EnvironmentController : Controller
    {
        private readonly EnvironmentRefreshContext _context;

        public EnvironmentController(EnvironmentRefreshContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<Models.Environment>> Get()
        {
            return await _context.Environments.ToListAsync();
        }
    }
}
