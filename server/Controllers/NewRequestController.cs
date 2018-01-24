using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnvironmentRefresh.Models;
using System.Net.Http;
using System.Net;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;


namespace EnvironmentRefresh.Controllers
{
  [Route("api/[controller]")]
  public class NewRequestController : Controller
  {
    private readonly EnvironmentRefreshContext _context;

    public NewRequestController(EnvironmentRefreshContext context)
    {
      _context = context;
    }

    [HttpPost]
    public HttpResponseMessage PostNewRequest([FromBody] NewRequest req)
    {
      var jsonString = JsonConvert.SerializeObject(req);
      Console.WriteLine("POST Call received Successfully. " + jsonString);
      return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
    }
  }
}
