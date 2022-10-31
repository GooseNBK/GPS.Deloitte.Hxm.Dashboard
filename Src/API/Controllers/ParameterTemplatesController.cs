using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.ParameterTemplates;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class ParameterTemplatesController : BaseApiController
    {
        private IMediator _mediator;

        public ParameterTemplatesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult> GetParameterTemplates()
        {
            return Ok(await _mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ParameterTemplate>> GetParameterTemplateById(int id)
        {
            return await _mediator.Send(new Details.Query{Id = id});
        }
    }
}