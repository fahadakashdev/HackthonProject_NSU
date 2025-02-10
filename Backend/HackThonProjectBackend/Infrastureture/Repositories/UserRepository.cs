﻿using HackThonProjectBackend.Domain.Entities;
using HackThonProjectBackend.Infrastureture.Data;
using Microsoft.EntityFrameworkCore;

namespace HackThonProjectBackend.Infrastureture.Repositories
{
    public class UserRepository : IUserRepository

    {
        private readonly AppDbContext _context;
        public UserRepository(AppDbContext context)
        {
            _context = context;
        }


        public async Task AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
        }

        public async Task<User> GetByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<User> GetByIdAsync(Guid id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

    }
}
