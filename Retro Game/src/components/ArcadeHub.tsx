import { Settings, Trophy, ShoppingBag, Users } from 'lucide-react';

interface ArcadeHubProps {
  onGameSelect: (game: string) => void;
}

export default function ArcadeHub({ onGameSelect }: ArcadeHubProps) {
  const games = [
    { id: 'snake', name: 'Cyber Snake', icon: '🐍', color: 'from-green-500 to-cyan-500' },
    { id: 'tetris', name: 'Glass Blocks', icon: '🧱', color: 'from-purple-500 to-blue-500' },
    { id: 'pong', name: 'Neon Duel', icon: '🏓', color: 'from-pink-500 to-purple-500' },
    { id: 'arkanoid', name: 'Cosmic Arkanoid', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
    { id: 'flappy', name: 'Sky Glide', icon: '🕊️', color: 'from-pink-400 to-blue-400' },
    { id: 'invaders', name: 'Pixel Galaxy', icon: '👾', color: 'from-purple-600 to-pink-500' },
    { id: 'pacman', name: 'Neon Maze', icon: '🌀', color: 'from-yellow-500 to-orange-500' },
    { id: 'doodle', name: 'Soft Sky', icon: '☁️', color: 'from-blue-300 to-green-300' },
    { id: '2048', name: '2048 Neo', icon: '🔢', color: 'from-orange-400 to-yellow-500' },
    { id: 'frogger', name: 'Nature Crossing', icon: '🐸', color: 'from-green-600 to-lime-500' },
    { id: 'bomberman', name: 'Cube Arena', icon: '💣', color: 'from-orange-500 to-red-500' },
    { id: 'runner', name: 'Neon Rush', icon: '🏃', color: 'from-cyan-500 to-blue-600' },
    { id: 'minesweeper', name: 'Holo Grid', icon: '💣', color: 'from-gray-500 to-blue-500' },
    { id: 'pinball', name: 'Retro Pinball', icon: '🧩', color: 'from-pink-500 to-blue-500' },
    { id: 'brickgame', name: 'Brick Game Mix', icon: '🕹️', color: 'from-gray-600 to-gray-400' },
    { id: 'shooter', name: 'Astro Blaster', icon: '🚀', color: 'from-purple-500 to-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A] p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-[#1a1f35] to-[#0f1424] p-4 rounded-3xl shadow-lg border-2 border-[#00D1FF]/30 flex items-center gap-3"
          style={{ boxShadow: '0 0 20px rgba(0, 209, 255, 0.3)' }}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D1FF] to-[#FF3BAC] flex items-center justify-center"
            style={{ boxShadow: '0 0 15px rgba(0, 209, 255, 0.5)' }}>
            <span className="text-2xl">👤</span>
          </div>
          <div>
            <div className="text-white opacity-90">Player_X</div>
            <div className="text-[#00D1FF] text-xs opacity-70">Google Login</div>
          </div>
        </div>

        {/* Settings Icon */}
        <button className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] flex items-center justify-center border-2 border-[#00D1FF]/30 transition-all hover:border-[#00D1FF]/60"
          style={{ boxShadow: '0 0 15px rgba(0, 209, 255, 0.2)' }}>
          <Settings className="w-6 h-6 text-[#00D1FF]" />
        </button>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl bg-gradient-to-r from-[#00D1FF] via-[#FF3BAC] to-[#00FF8C] bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Arcade Hub
        </h1>
        <div className="text-gray-400 text-sm mt-2">Choose your game</div>
      </div>

      {/* Games Grid */}
      <div className="flex-1 flex items-center justify-center mb-8">
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => onGameSelect(game.id)}
              className="aspect-square rounded-3xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-[#00D1FF]/20 flex flex-col items-center justify-center gap-2 transition-all hover:border-[#FF3BAC]/60 hover:scale-105 active:scale-95"
              style={{ boxShadow: '0 0 20px rgba(0, 209, 255, 0.15)' }}
            >
              <div className={`text-3xl bg-gradient-to-br ${game.color} rounded-2xl w-12 h-12 flex items-center justify-center`}
                style={{ boxShadow: '0 0 15px rgba(255, 59, 172, 0.3)' }}>
                {game.icon}
              </div>
              <div className="text-white text-[10px] opacity-70 text-center px-1 leading-tight">
                {game.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gradient-to-br from-[#1a1f35] to-[#0f1424] rounded-3xl border-2 border-[#00D1FF]/30 flex justify-around items-center p-4"
        style={{ boxShadow: '0 0 25px rgba(0, 209, 255, 0.25)' }}>
        <button className="flex flex-col items-center gap-1 text-[#00D1FF] transition-all hover:scale-110">
          <Trophy className="w-6 h-6" />
          <span className="text-xs">Leaderboard</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#FF3BAC] transition-all hover:scale-110">
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs">Shop</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#00FF8C] transition-all hover:scale-110">
          <Users className="w-6 h-6" />
          <span className="text-xs">Friends</span>
        </button>
      </div>
    </div>
  );
}
