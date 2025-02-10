using HackThonProjectBackend.Domain.Entities;

namespace HackThonProjectBackend.Application.Interfaces
{
    public interface ICrimeReportService
    {
        Task<CrimeReport> CreateCrimeReportAsync(CrimeReport report);
        Task<IEnumerable<CrimeReport>> GetCrimeReportsAsync(int page, int pageSize);
        Task<CrimeReport> GetCrimeReportByIdAsync(Guid id);
        Task VoteCrimeReportAsync(Guid reportId, bool upvote);
        Task<Comment> AddCommentAsync(Guid reportId, Comment comment);
    }
}
