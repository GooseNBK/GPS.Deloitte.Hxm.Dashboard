using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Setting;
using MediatR;

namespace API.Controllers
{
    public class SettingsController : BaseApiController
    {
        private IMediator _mediator;

        public SettingsController(IMediator mediator)
        {
            _mediator = mediator;
        }
        
        [HttpGet]
        // public async Task<ActionResult<List<Settings>>> GetSettings()
        public async Task<ActionResult> GetSettings()
        {
            return Ok(await _mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Settings>> GetSettingById(int id)
        {
            return await _mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateSetting(Settings setting)
        {
            return Ok(await _mediator.Send(new Create.Command {Setting = setting}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditSetting(int id, Settings setting)
        {
            setting.Id = id;
            return Ok(await _mediator.Send(new Edit.Command {Setting = setting}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSetting(int id)
        {
            return Ok(await _mediator.Send(new Delete.Command {Id = id}));
        }
    }
}