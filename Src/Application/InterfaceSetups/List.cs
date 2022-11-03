using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.InterfaceSetups
{
    public class List
    {
        public class Query : IRequest<List<InterfaceSetup>>{}

        public class Handler : IRequestHandler<Query, List<InterfaceSetup>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<InterfaceSetup>> Handle(Query request, CancellationToken cancellationToken)
            {
                var interfaces = await _context.InterfaceSetup.ToListAsync();
                return interfaces;
            }
        }
    }
}