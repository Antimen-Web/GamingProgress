using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GamingProgressAPI.Data;

namespace GamingProgressAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamingProgressController : ControllerBase
    {
        private readonly DataContext _context;
        public GamingProgressController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Game>>> GetGames()
        {
            return Ok(await _context.Games.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Game>>> CreateGame(Game game)
        {
            _context.Games.Add(game);
            await _context.SaveChangesAsync();

            return Ok(await _context.Games.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Game>>> UpdateGame(Game game)
        {
            var dbGame = await _context.Games.FindAsync(game.Id);
            if (dbGame == null)
            {
                return BadRequest("Game not found");
            }
            dbGame.GameName = game.GameName;
            dbGame.Completed = game.Completed;
            dbGame.Steam = game.Steam;
            dbGame.LastPlayed = game.LastPlayed;
            dbGame.PlayTime = game.PlayTime;
            dbGame.Achievements = game.Achievements;

            await _context.SaveChangesAsync();

            return Ok(await _context.Games.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Game>>> DeleteGame(int id)
        {
            var dbGame = await _context.Games.FindAsync(id);
            if (dbGame == null)
            {
                return BadRequest("Game not found");
            }

            _context.Games.Remove(dbGame);

            await _context.SaveChangesAsync();

            return Ok(await _context.Games.ToListAsync());
        }
    }
}
