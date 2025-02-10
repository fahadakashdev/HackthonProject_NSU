using HackThonProjectBackend.API.DTO;
using HackThonProjectBackend.Domain.Entities;

namespace HackThonProjectBackend.Application.Interfaces
{


    public interface IAuthService
    {
        Task<User> RegisterAsync(string email, string password, string phoneNumber);
        
        
        Task<bool> VerifyOTPAsync(string phoneNumber, string otp);
        
            Task<AuthResponseDto> LoginAsync(string email, string password);
            Task<AuthResponseDto> RefreshTokenAsync(string refreshToken);
        

    }


}
