namespace HackThonProjectBackend.Infrastureture.Services
{
    public interface IAIService
    {
        Task<string> GenerateDescriptionFromImageAsync(string imageUrl);
    }
     
   
    public class AIService : IAIService
    {
        public async Task<string> GenerateDescriptionFromImageAsync(string imageUrl)
        {
            // Here you would integrate with an AI API (e.g., OpenAI GPT)
            await Task.Delay(500); // Simulate API call delay
            return "AI Generated Description for the image.";
        }
    }
}
