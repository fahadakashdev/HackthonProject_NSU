namespace HackThonProjectBackend.API.DTO
{
    public class CommentCreateDto
    {
        public string Text { get; set; }
        public IFormFile Proof { get; set; }
    }
}
