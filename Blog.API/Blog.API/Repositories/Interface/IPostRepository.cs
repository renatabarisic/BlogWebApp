using Blog.API.Models.Domain;

namespace Blog.API.Repositories.Interface
{
    public interface IPostRepository
    {
        Task<Post> CreateAsync(Post post);
        Task<IEnumerable<Post>> GetAllAsync();
        Task<Post?> GetByIdAsync(Guid id);
        Task<Post?> EditAsync(Post post);
    }
}
