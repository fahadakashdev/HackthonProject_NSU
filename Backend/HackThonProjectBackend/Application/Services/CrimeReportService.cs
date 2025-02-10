using HackThonProjectBackend.Application.Interfaces;
using HackThonProjectBackend.Domain.Entities;
using HackThonProjectBackend.Infrastureture.Data;
using Microsoft.EntityFrameworkCore;
using System;

namespace HackThonProjectBackend.Application.Services
{
    public class CrimeReportService : ICrimeReportService
    {
        private readonly AppDbContext _context;

        public CrimeReportService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<CrimeReport> CreateCrimeReportAsync(CrimeReport report)
        {
            report.Id = Guid.NewGuid();
            report.ReportTime = DateTime.UtcNow;
            _context.CrimeReports.Add(report);
            await _context.SaveChangesAsync();
            return report;
        }

        public async Task<IEnumerable<CrimeReport>> GetCrimeReportsAsync(int page, int pageSize)
        {
            return await _context.CrimeReports
                .Include(r => r.User)
                .Include(r => r.Comments)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<CrimeReport> GetCrimeReportByIdAsync(Guid id)
        {
            return await _context.CrimeReports
                .Include(r => r.User)
                .Include(r => r.Comments)
                .FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task VoteCrimeReportAsync(Guid reportId, bool upvote)
        {
            var report = await _context.CrimeReports.FindAsync(reportId);
            if (report == null)
                throw new Exception("Report not found.");

            if (upvote)
                report.Upvotes++;
            else
                report.Downvotes++;

            await _context.SaveChangesAsync();
        }

        public async Task<Comment> AddCommentAsync(Guid reportId, Comment comment)
        {
            comment.Id = Guid.NewGuid();
            comment.CreatedAt = DateTime.UtcNow;
            comment.CrimeReportId = reportId;
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();
            return comment;
        }
    }
}
