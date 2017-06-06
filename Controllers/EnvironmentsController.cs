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
        // GET: api/values
        [HttpGet]
        public IEnumerable<EnvironmentDto> Get()
        {
            return EnvironmentDto.Environments;
        }
    }
}
