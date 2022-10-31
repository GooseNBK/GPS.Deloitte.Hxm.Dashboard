using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ParameterTemplates
{
    public class Details
    {
        public class Query : IRequest<ParameterTemplate>
        {
            public int Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, ParameterTemplate>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<ParameterTemplate> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.ParameterTemplate.FindAsync(request.Id);
            }
        }
    }
}