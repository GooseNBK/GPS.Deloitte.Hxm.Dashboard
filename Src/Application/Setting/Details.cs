using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Setting
{
    public class Details
    {
        public class Query : IRequest<Settings>
        {
            public int Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, Settings>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Settings> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Settings.FindAsync(request.Id);
            }
        }
    }
}