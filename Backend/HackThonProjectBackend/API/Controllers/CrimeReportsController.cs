using HackThonProjectBackend.API.DTO;
using HackThonProjectBackend.Application.Interfaces;
using HackThonProjectBackend.Domain.Entities;
using HackThonProjectBackend.Infrastureture.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HackThonProjectBackend.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CrimeReportsController : ControllerBase
    {
        private readonly ICrimeReportService _crimeReportService;
        private readonly IFileStorageService _fileStorageService;
        private readonly IAIService _aiService;

        public CrimeReportsController(
            ICrimeReportService crimeReportService,
            IFileStorageService fileStorageService,
            IAIService aiService)
        {
            _crimeReportService = crimeReportService;
            _fileStorageService = fileStorageService;
            _aiService = aiService;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateCrimeReport([FromForm] CrimeReportCreateDto dto)
        {
            // Upload files if provided.
            string imageUrl = string.Empty;
            string videoUrl = string.Empty;

            if (dto.Image != null)
                imageUrl = await _fileStorageService.UploadFileAsync(dto.Image);

            if (dto.Video != null)
                videoUrl = await _fileStorageService.UploadFileAsync(dto.Video);

            // Use AI service to generate description if an image is uploaded and no manual override is provided.
            string description = dto.Description;
            if (!string.IsNullOrEmpty(imageUrl) && string.IsNullOrEmpty(videoUrl))
                description = await _aiService.GenerateDescriptionFromImageAsync(imageUrl);

            var report = new CrimeReport
            {
                Title = dto.Title,
                Description = description,
                Division = dto.Division,
                District = dto.District,
                ImageUrl = imageUrl,
                VideoUrl = videoUrl,
                CrimeTime = dto.CrimeTime,
                UserId = Guid.Parse(User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value)
            };

            var createdReport = await _crimeReportService.CreateCrimeReportAsync(report);
            return Ok(createdReport);
        }

        [HttpGet]
        public async Task<IActionResult> GetCrimeReports([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var reports = await _crimeReportService.GetCrimeReportsAsync(page, pageSize);
            return Ok(reports);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCrimeReport(Guid id)
        {
            var report = await _crimeReportService.GetCrimeReportByIdAsync(id);
            if (report == null)
                return NotFound();
            return Ok(report);
        }

        [Authorize]
        [HttpPost("{id}/vote")]
        public async Task<IActionResult> Vote(Guid id, [FromBody] VoteDto voteDto)
        {
            try
            {
                await _crimeReportService.VoteCrimeReportAsync(id, voteDto.Upvote);
                return Ok(new { message = "Vote recorded." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [Authorize]
        [HttpPost("{id}/comments")]
        public async Task<IActionResult> AddComment(Guid id, [FromForm] CommentCreateDto dto)
        {
            // Upload proof file.
            var proofUrl = await _fileStorageService.UploadFileAsync(dto.Proof);

            var comment = new Comment
            {
                Text = dto.Text,
                ProofUrl = proofUrl,
                UserId = Guid.Parse(User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value)
            };

            var createdComment = await _crimeReportService.AddCommentAsync(id, comment);
            return Ok(createdComment);
        }
    }
}
