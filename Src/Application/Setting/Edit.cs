using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Setting
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Settings Setting {get ; set;}
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
                var setting = await _context.Settings.FindAsync(request.Setting.Id);
                _mapper.Map(request.Setting, setting);                
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}