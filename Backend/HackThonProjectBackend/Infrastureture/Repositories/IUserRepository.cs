using HackThonProjectBackend.Domain.Entities;

namespace HackThonProjectBackend.Infrastureture.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetByIdAsync(Guid id);
        Task<User> GetByEmailAsync(string email);
        Task AddAsync(User user);
        Task SaveChangesAsync();
    }
}
