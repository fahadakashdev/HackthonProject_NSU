namespace HackThonProjectBackend.Domain.Entities
{
    
        public class Comment
        {
            public Guid Id { get; set; }
            public string Text { get; set; }
            public string ProofUrl { get; set; } // URL for image/video proof
            public DateTime CreatedAt { get; set; }

            public Guid UserId { get; set; }
            public User User { get; set; }

            public Guid CrimeReportId { get; set; }
            public CrimeReport CrimeReport { get; set; }
        }
    

}
