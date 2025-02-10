namespace HackThonProjectBackend.Domain.Entities
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsVerified { get; set; }
        public bool IsBanned { get; set; }
        public string Role { get; set; } // e.g., "User", "Admin"

        // Navigation properties
        public ICollection<CrimeReport> CrimeReports { get; set; }
        public ICollection<Comment> Comments { get; set; }

    }
}
