using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ParameterTemplates
{
    public class List
    {
        public class Query : IRequest<List<ParameterTemplate>>{}

        public class Handler : IRequestHandler<Query, List<ParameterTemplate>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<ParameterTemplate>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.ParameterTemplate.ToListAsync();
            }
        }
    }
}