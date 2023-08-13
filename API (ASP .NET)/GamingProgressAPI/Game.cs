using System.Data.SqlTypes;

namespace GamingProgressAPI
{
    public class Game
    {
        public int Id { get; set; } 
        public string GameName { get; set; } = string.Empty;
        public string Completed { get; set; } = bool.FalseString;
        public string Steam { get; set; } = bool.FalseString;
        public string LastPlayed { get; set; } = string.Empty;
        public string PlayTime { get; set; } = string.Empty;
        public string Achievements { get; set; } = string.Empty;
    }
}
