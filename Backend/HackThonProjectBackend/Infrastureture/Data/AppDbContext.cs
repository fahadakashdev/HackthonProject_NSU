using HackThonProjectBackend.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HackThonProjectBackend.Infrastureture.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
        public DbSet<CrimeReport> CrimeReports { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public async Task<bool> CanConnectAsync()
        {
            try
            {
                return await Database.CanConnectAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Database connection failed: {ex.Message}");
                return false;
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure User -> CrimeReports (One-to-Many)
            modelBuilder.Entity<User>()
                .HasMany(u => u.CrimeReports)
                .WithOne(cr => cr.User)
                .HasForeignKey(cr => cr.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure User -> Comments (One-to-Many)
            modelBuilder.Entity<User>()
                .HasMany(u => u.Comments)
                .WithOne(c => c.User)
                .HasForeignKey(c => c.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure CrimeReport -> Comments (One-to-Many)
            modelBuilder.Entity<CrimeReport>()
                .HasMany(cr => cr.Comments)
                .WithOne(c => c.CrimeReport)
                .HasForeignKey(c => c.CrimeReportId)
                .OnDelete(DeleteBehavior.Cascade);

            // Optional: Additional configuration such as property constraints, indexes, etc.
            // Example: Setting a maximum length for the Title in CrimeReport
            modelBuilder.Entity<CrimeReport>()
                .Property(cr => cr.Title)
                .HasMaxLength(200)
                .IsRequired();

            // Example: Setting a maximum length for User Email
            modelBuilder.Entity<User>()
                .Property(u => u.Email)
                .HasMaxLength(200)
                .IsRequired();
        }
    

}
}
