using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Setting;

namespace API.Controllers
{
    public class SettingsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Settings>>> GetSettings()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Settings>> GetSettingById(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }
    }
}