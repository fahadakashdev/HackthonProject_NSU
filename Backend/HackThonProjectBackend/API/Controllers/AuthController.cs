using HackThonProjectBackend.API.DTO;
using HackThonProjectBackend.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HackThonProjectBackend.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto registerDto)
        {
            try
            {
                var user = await _authService.RegisterAsync(registerDto.Email, registerDto.Password, registerDto.PhoneNumber);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            try
            {
                var token = await _authService.LoginAsync(loginDto.Email, loginDto.Password);
                return Ok(new { token });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("verify-otp")]
        public async Task<IActionResult> VerifyOTP(OTPDto otpDto)
        {
            var result = await _authService.VerifyOTPAsync(otpDto.PhoneNumber, otpDto.OTP);
            if (result)
                return Ok(new { message = "Verification successful." });
            return BadRequest(new { message = "Invalid OTP." });
        }
    }
}
