﻿using Microsoft.EntityFrameworkCore;

namespace GamingProgressAPI.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Game> Games => Set<Game>();
    }
}
