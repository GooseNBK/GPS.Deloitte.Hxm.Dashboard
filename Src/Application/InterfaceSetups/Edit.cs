using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.InterfaceSetups
{
    public class Edit
    {
        public class Command : IRequest
        {
            public InterfaceSetup InterfaceSetup {get ; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var interfaceSetup = await _context.InterfaceSetup.FindAsync(request.InterfaceSetup.Id);
                _mapper.Map(request.InterfaceSetup, interfaceSetup);                
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}