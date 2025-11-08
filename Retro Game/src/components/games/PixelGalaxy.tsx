import { ArrowLeft, Pause, RotateCcw, Heart } from 'lucide-react';
import { useState } from 'react';

interface PixelGalaxyProps {
  onBack: () => void;
}

export default function PixelGalaxy({ onBack }: PixelGalaxyProps) {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [wave, setWave] = useState(1);

  const aliens = Array(5).fill(0).map((_, row) => 
    Array(8).fill(0).map((_, col) => ({ row, col }))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0525] via-[#1a0838] to-[#0a0525] p-4 flex flex-col relative overflow-hidden">
      {/* Starfield */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              boxShadow: '0 0 2px white'
            }}
          />
        ))}
      </div>

      {/* Nebula Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-purple-400/30 flex items-center justify-center backdrop-blur-sm">
          <ArrowLeft className="w-5 h-5 text-purple-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Pixel Galaxy
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-purple-400/30 flex items-center justify-center backdrop-blur-sm">
            <Pause className="w-5 h-5 text-purple-400" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-pink-400/30 flex items-center justify-center backdrop-blur-sm">
            <RotateCcw className="w-5 h-5 text-pink-400" />
          </button>
        </div>
      </div>

      {/* HUD */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-cyan-400/30 px-4 py-2 backdrop-blur-sm">
          <div className="text-cyan-300 text-xs">Score</div>
          <div className="text-2xl text-cyan-400" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
            {score}
          </div>
        </div>
        
        <div className="flex gap-2">
          {Array.from({ length: lives }).map((_, i) => (
            <Heart key={i} className="w-6 h-6 text-red-400 fill-red-400" style={{ filter: 'drop-shadow(0 0 5px rgba(248, 113, 113, 0.8))' }} />
          ))}
        </div>

        <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-yellow-400/30 px-4 py-2 backdrop-blur-sm">
          <div className="text-yellow-300 text-xs">Wave</div>
          <div className="text-2xl text-yellow-400" style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.8)' }}>
            {wave}
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative w-full max-w-sm aspect-[3/4]">
          {/* Alien Grid */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 grid gap-3"
            style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
            {aliens.map((row, y) => 
              row.map((alien, x) => (
                <div
                  key={`${y}-${x}`}
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center border-2 border-purple-300/50 relative"
                  style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.7)' }}>
                  <div className="text-white text-xl">👾</div>
                  {/* Alien glow */}
                  <div className="absolute inset-0 bg-purple-400/20 rounded-lg blur-sm" />
                </div>
              ))
            )}
          </div>

          {/* Player Lasers */}
          <div className="absolute left-1/2 bottom-32 w-1 h-20 bg-gradient-to-t from-cyan-400 to-transparent"
            style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 1)' }} />
          
          <div className="absolute left-1/3 bottom-40 w-1 h-16 bg-gradient-to-t from-cyan-400 to-transparent"
            style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 1)' }} />

          {/* Explosions */}
          <div className="absolute top-32 right-20 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-transparent opacity-70 blur-sm"
            style={{ boxShadow: '0 0 30px rgba(251, 146, 60, 1)' }} />

          {/* Player Ship */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="relative w-12 h-12">
              {/* Ship body */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-b-[28px] border-b-cyan-400 border-r-[20px] border-r-transparent"
                style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)' }} />
              {/* Ship cockpit */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-white to-cyan-200"
                style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 1)' }} />
              {/* Ship glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-cyan-400/30 blur-xl rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-4 relative z-10">
        <button className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-2xl">
          ◄
        </button>
        <button className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-red-400/30 flex items-center justify-center text-red-400">
          FIRE
        </button>
        <button className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-2xl">
          ►
        </button>
      </div>
    </div>
  );
}
