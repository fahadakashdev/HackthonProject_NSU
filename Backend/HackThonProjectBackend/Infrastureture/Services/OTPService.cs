namespace HackThonProjectBackend.Infrastureture.Services
{
    public interface IOTPService
    {
        Task<bool> SendOTPAsync(string phoneNumber);
        Task<bool> VerifyOTPAsync(string phoneNumber, string otp);
    }
    public class OTPService : IOTPService
    {
        public async Task<bool> SendOTPAsync(string phoneNumber)
        {
            // Integrate with an SMS provider like Twilio or Firebase SMS.
            await Task.Delay(200);
            return true;
        }

        public async Task<bool> VerifyOTPAsync(string phoneNumber, string otp)
        {
            // For demonstration, always return true if otp equals "123456"
            await Task.Delay(100);
            return otp == "123456";
        }
    }
}
