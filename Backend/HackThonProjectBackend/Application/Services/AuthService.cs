using HackThonProjectBackend.Application.Interfaces;
using HackThonProjectBackend.Domain.Entities;
 
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using HackThonProjectBackend.Infrastureture.Data;

namespace HackThonProjectBackend.Application.Services
{
   
 
        public class AuthService : IAuthService
        {
            private readonly AppDbContext _context;
            private readonly IConfiguration _configuration;

            public AuthService(AppDbContext context, IConfiguration configuration)
            {
                _context = context;
                _configuration = configuration;
            }

            public async Task<User> RegisterAsync(string email, string password, string phoneNumber)
            {
                if (await _context.Users.AnyAsync(u => u.Email == email))
                    throw new Exception("User already exists.");

                var user = new User
                {
                    Id = Guid.NewGuid(),
                    Email = email,
                    PasswordHash = ComputeHash(password),
                    PhoneNumber = phoneNumber,
                    IsVerified = false,
                    Role = "User",
                    IsBanned = false
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                // TODO: Integrate OTPService here to send OTP

                return user;
            }

            public async Task<string> LoginAsync(string email, string password)
            {
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
                if (user == null || user.PasswordHash != ComputeHash(password) || user.IsBanned)
                    throw new Exception("Invalid credentials or user banned.");

                return GenerateJwtToken(user);
            }

            public async Task<bool> VerifyOTPAsync(string phoneNumber, string otp)
            {
                // In production, verify OTP using an external service.
                // For demonstration, assume OTP is "123456".
                if (otp == "123456")
                {
                    var user = await _context.Users.FirstOrDefaultAsync(u => u.PhoneNumber == phoneNumber);
                    if (user != null)
                    {
                        user.IsVerified = true;
                        await _context.SaveChangesAsync();
                        return true;
                    }
                }
                return false;
            }

            private string ComputeHash(string input)
            {
                using (var sha256 = SHA256.Create())
                {
                    var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));
                    return Convert.ToBase64String(bytes);
                }
            }

            private string GenerateJwtToken(User user)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Role, user.Role)
                    }),
                    Expires = DateTime.UtcNow.AddHours(2),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }
        }
   

}
