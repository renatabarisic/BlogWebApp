using Blog.API.Models.Domain;

namespace Blog.API.Repositories.Interface
{
    public interface IPostRepository
    {
        Task<Post> CreateAsync(Post post);
    }
}
