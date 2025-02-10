using HackThonProjectBackend.Infrastureture.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HackThonProjectBackend.API.Controllers
{
    [ApiController]
    [Route("api/admin")]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AdminController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/admin/users
        // Returns a list of all users.
        [HttpGet("users")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }

        // PUT: api/admin/users/{id}/ban
        // Bans a user by setting IsBanned = true.
        [HttpPut("users/{id}/ban")]
        public async Task<IActionResult> BanUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return NotFound(new { message = "User not found" });

            user.IsBanned = true;
            await _context.SaveChangesAsync();
            return Ok(new { message = "User banned successfully" });
        }

        // (Optional) PUT: api/admin/users/{id}/unban
        // Unbans a user by setting IsBanned = false.
        [HttpPut("users/{id}/unban")]
        public async Task<IActionResult> UnbanUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return NotFound(new { message = "User not found" });

            user.IsBanned = false;
            await _context.SaveChangesAsync();
            return Ok(new { message = "User unbanned successfully" });
        }

        // GET: api/admin/crime-reports
        // Retrieves all crime reports.
        [HttpGet("crime-reports")]
        public async Task<IActionResult> GetAllCrimeReports()
        {
            var reports = await _context.CrimeReports
                .Include(r => r.User)
                .Include(r => r.Comments)
                .ToListAsync();
            return Ok(reports);
        }

        // DELETE: api/admin/crime-reports/{id}
        // Deletes a specific crime report.
        [HttpDelete("crime-reports/{id}")]
        public async Task<IActionResult> DeleteCrimeReport(Guid id)
        {
            var report = await _context.CrimeReports.FindAsync(id);
            if (report == null)
                return NotFound(new { message = "Crime report not found" });

            _context.CrimeReports.Remove(report);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Crime report deleted successfully" });
        }

        // GET: api/admin/comments
        // Retrieves all comments.
        [HttpGet("comments")]
        public async Task<IActionResult> GetAllComments()
        {
            var comments = await _context.Comments
                .Include(c => c.User)
                .Include(c => c.CrimeReport)
                .ToListAsync();
            return Ok(comments);
        }

        // DELETE: api/admin/comments/{id}
        // Deletes a specific comment.
        [HttpDelete("comments/{id}")]
        public async Task<IActionResult> DeleteComment(Guid id)
        {
            var comment = await _context.Comments.FindAsync(id);
            if (comment == null)
                return NotFound(new { message = "Comment not found" });

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Comment deleted successfully" });
        }
    }
}
