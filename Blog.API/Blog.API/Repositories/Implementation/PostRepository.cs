﻿using Blog.API.Data;
using Blog.API.Models.Domain;
using Blog.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace Blog.API.Repositories.Implementation
{
    public class PostRepository : IPostRepository
    {
        private readonly ApplicationDbContext dbContext;

        public PostRepository(ApplicationDbContext dbContext) 
        {
            this.dbContext = dbContext;
        }
        public async Task<Post> CreateAsync(Post post)
        {
            await dbContext.Posts.AddAsync(post);
            await dbContext.SaveChangesAsync();
            return post;
        }

        public async Task<IEnumerable<Post>> GetAllAsync()
        {
            return await dbContext.Posts.ToListAsync();
        }
    }
}
