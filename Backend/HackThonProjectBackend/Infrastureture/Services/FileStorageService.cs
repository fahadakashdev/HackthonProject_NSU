namespace HackThonProjectBackend.Infrastureture.Services
{
    public interface IFileStorageService
    {
        Task<string> UploadFileAsync(IFormFile file);
    }
    public class FileStorageService: IFileStorageService
    {
        public async Task<string> UploadFileAsync(IFormFile file)
        {
            // In a real implementation, upload the file to a cloud storage (e.g., AWS S3, Firebase)
            await Task.Delay(200); // Simulate upload delay
            return $"https://filestorage.example.com/{file.FileName}";
        }
    }
}
