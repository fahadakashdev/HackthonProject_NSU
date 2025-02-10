namespace HackThonProjectBackend.API.DTO
{
    public class CrimeReportCreateDto
    {
        public string Title { get; set; }
        public string Description { get; set; } // Optional override for AI description
        public string Division { get; set; }
        public string District { get; set; }
        public DateTime CrimeTime { get; set; }
        public IFormFile Image { get; set; }
        public IFormFile Video { get; set; }
    }
}
