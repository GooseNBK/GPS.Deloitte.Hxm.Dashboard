using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        protected MappingProfiles()
        {
            CreateMap<Settings, Settings>();
            CreateMap<InterfaceSetup, InterfaceSetup>();
        }
    }
}