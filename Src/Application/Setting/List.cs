using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Setting
{
    public class List
    {
        public class Query : IRequest<List<Settings>>{}

        public class Handler : IRequestHandler<Query, List<Settings>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Settings>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Settings.ToListAsync();
            }
        }
    }
}