using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Settings> Settings { get; set; }
        public DbSet<InterfaceSetup> InterfaceSetup { get; set; }
        public DbSet<ParameterTemplate> ParameterTemplate { get; set; }
    }
}