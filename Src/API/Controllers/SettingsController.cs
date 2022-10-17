using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class SettingsController : BaseApiController
    {
        private readonly DataContext _context;
        public SettingsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Settings>>> GetSettings()
        {
            return await _context.Settings.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Settings>> GetSettingById(int id)
        {
            return await _context.Settings.Where(x => x.Id == id).SingleOrDefaultAsync();
        }
    }
}