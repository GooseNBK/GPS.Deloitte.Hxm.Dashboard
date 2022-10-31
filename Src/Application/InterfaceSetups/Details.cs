using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.InterfaceSetups
{
    public class Details
    {
        public class Query : IRequest<InterfaceSetup>
        {
            public int Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, InterfaceSetup>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<InterfaceSetup> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.InterfaceSetup.FindAsync(request.Id);
            }
        }
    }
}