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
    public class RefreshRequestController : Controller
    {
        private readonly EnvironmentRefreshContext _context;

        public RefreshRequestController(EnvironmentRefreshContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<RefreshRequest>> Get()
        {
            List<RefreshRequest> list = await _context.RefreshRequests.Include(x => x.Systems).ToListAsync();
            return list;
        }

        // GET: api/values
        [HttpGet("{id}", Name = "GetRefreshRequest")]
        public async Task<RefreshRequest> Get(int id)
        {
            return await _context.RefreshRequests
                .Include(x => x.Systems)
                .SingleOrDefaultAsync(x => x.RefreshRequestId == id);
        }
    }
}
