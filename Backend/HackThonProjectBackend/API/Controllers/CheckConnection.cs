using HackThonProjectBackend.Infrastureture.Data;
using Microsoft.AspNetCore.Mvc;

namespace HackThonProjectBackend.API.Controllers
{
    [ApiController]
    [Route("api/health")]
    public class HealthCheckController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HealthCheckController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("db-status")]
        public async Task<IActionResult> CheckDatabaseConnection()
        {
            bool canConnect = await _context.CanConnectAsync();
            if (canConnect)
            {
                return Ok(new { status = "Success", message = "Connected to PostgreSQL" });
            }
            return StatusCode(500, new { status = "Error", message = "Failed to connect to PostgreSQL" });
        }
   

    [HttpGet("db-status-check")]
        public async Task<IActionResult> CheckDatabaseConnectionStatus()
        {
            bool canConnect = await _context.CanConnectAsync();
            return canConnect ? Ok("Database Connected ✅") : StatusCode(500, "Database Connection Failed ❌");
        }

    }
}
