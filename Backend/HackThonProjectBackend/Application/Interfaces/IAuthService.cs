using HackThonProjectBackend.Domain.Entities;

namespace HackThonProjectBackend.Application.Interfaces
{
    public interface IAuthService
    {
        Task<User> RegisterAsync(string email, string password, string phoneNumber);
        Task<string> LoginAsync(string email, string password);
        Task<bool> VerifyOTPAsync(string phoneNumber, string otp);
    }
}
