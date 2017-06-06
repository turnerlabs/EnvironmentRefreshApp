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
    public class RefreshRequestController : Controller
    {
        private readonly EnvironmentRefreshContext _context;

        public RefreshRequestController(EnvironmentRefreshContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<RefreshRequestModel> Get()
        {
            return _context.RefreshRequests.Include(x => x.Databases);
        }

        // GET: api/values
        [HttpGet("{id}", Name = "GetRefreshRequest")]
        public RefreshRequestModel Get(string id)
        {
            return _context.RefreshRequests
                .Include(x => x.Databases)
                .Include(x => x.Logs)
                .SingleOrDefault(x => x.Id == id);
        }
    }
}
