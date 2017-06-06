using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EnvironmentRefreshApp
{
    public class EnvironmentDto
    {
        public string Environment;
        public string Description;
    }

    [Route("api/[controller]")]
    public class EnvironmentsController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<EnvironmentDto> Get()
        {
            return new EnvironmentDto[] {
              new EnvironmentDto {
                Environment = "MAIN",
                Description = "Main development"
              },
                          new EnvironmentDto {
                Environment = "QA",
                Description = "Quality Assurance testing"
              }
            };

        }
    }
}
