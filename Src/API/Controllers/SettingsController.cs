using Domain;
using Microsoft.AspNetCore.Mvc;
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

        [HttpPost]
        public async Task<IActionResult> CreateSetting(Settings setting)
        {
            return Ok(await Mediator.Send(new Create.Command {Setting = setting}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditSetting(int id, Settings setting)
        {
            setting.Id = id;
            return Ok(await Mediator.Send(new Edit.Command {Setting = setting}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSetting(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}