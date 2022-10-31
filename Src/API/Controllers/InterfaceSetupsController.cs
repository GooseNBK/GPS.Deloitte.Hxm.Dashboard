using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.InterfaceSetups;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class InterfaceSetupsController : BaseApiController
    {
        private IMediator _mediator;

        public InterfaceSetupsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult> GetInterfaceSetups()
        {
            return Ok(await _mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<InterfaceSetup>> GetInterfaceSetupById(int id)
        {
            return await _mediator.Send(new Details.Query{Id = id});
        }
    }
}