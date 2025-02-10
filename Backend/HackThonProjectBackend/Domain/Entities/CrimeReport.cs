namespace HackThonProjectBackend.Domain.Entities
{
    public class CrimeReport
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Division { get; set; }
        public string District { get; set; }
        public string ImageUrl { get; set; }
        public string VideoUrl { get; set; }
        public DateTime ReportTime { get; set; }
        public DateTime CrimeTime { get; set; }
        public int Upvotes { get; set; }
        public int Downvotes { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
