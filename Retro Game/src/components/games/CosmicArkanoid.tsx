import { ArrowLeft, Pause, RotateCcw, Heart, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

interface CosmicArkanoidProps {
  onBack: () => void;
}

export default function CosmicArkanoid({ onBack }: CosmicArkanoidProps) {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const bricks = [
    [1, 1, 2, 2, 3, 3, 2, 2, 1, 1],
    [2, 2, 3, 3, 4, 4, 3, 3, 2, 2],
    [3, 3, 4, 4, 1, 1, 4, 4, 3, 3],
    [4, 4, 1, 1, 2, 2, 1, 1, 4, 4],
    [1, 2, 3, 4, 1, 2, 3, 4, 1, 2],
  ];

  const brickColors = [
    '',
    'from-pink-500 to-pink-600 border-pink-400',
    'from-blue-500 to-blue-600 border-blue-400',
    'from-yellow-500 to-yellow-600 border-yellow-400',
    'from-purple-500 to-purple-600 border-purple-400',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0525] via-[#1a0f3a] to-[#2a1850] p-4 flex flex-col relative overflow-hidden">
      {/* Starfield Background */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              boxShadow: '0 0 2px white'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-blue-400/30 flex items-center justify-center backdrop-blur-sm">
          <ArrowLeft className="w-5 h-5 text-blue-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Cosmic Arkanoid
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-blue-400/30 flex items-center justify-center backdrop-blur-sm">
            <Pause className="w-5 h-5 text-blue-400" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-pink-400/30 flex items-center justify-center backdrop-blur-sm">
            <RotateCcw className="w-5 h-5 text-pink-400" />
          </button>
        </div>
      </div>

      {/* HUD */}
      <div className="flex justify-between mb-6 relative z-10">
        <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-yellow-400/30 px-4 py-2 backdrop-blur-sm">
          <div className="text-yellow-300 text-xs">Score</div>
          <div className="text-2xl text-yellow-400" style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.8)' }}>
            {score}
          </div>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: lives }).map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center border-2 border-red-300"
              style={{ boxShadow: '0 0 10px rgba(248, 113, 113, 0.6)' }}>
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative w-full max-w-sm bg-[#0a0e18]/60 rounded-3xl border-2 border-purple-400/30 p-4 backdrop-blur-sm"
          style={{ 
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.4), inset 0 0 40px rgba(168, 85, 247, 0.1)',
            aspectRatio: '3/4'
          }}>
          {/* Bricks */}
          <div className="mb-8">
            {bricks.map((row, y) => (
              <div key={y} className="flex gap-1 mb-1">
                {row.map((brick, x) => (
                  <div
                    key={x}
                    className={`flex-1 h-6 rounded-lg bg-gradient-to-br ${brickColors[brick]} border`}
                    style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)' }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Power-ups */}
          <div className="absolute left-1/3 top-1/2 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center border-2 border-cyan-300 animate-pulse"
              style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)' }}>
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Ball */}
          <div className="absolute left-1/2 top-2/3 w-4 h-4 rounded-full bg-gradient-to-br from-white to-cyan-200 -translate-x-1/2"
            style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(34, 211, 238, 0.8)' }}
          />

          {/* Paddle */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            style={{ 
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.9), 0 -5px 30px rgba(168, 85, 247, 0.5)',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        </div>
      </div>

      {/* Power-up Icons */}
      <div className="flex justify-center gap-4 mt-6 relative z-10">
        <div className="flex items-center gap-2 bg-[#1a1f35]/60 rounded-xl px-3 py-2 border border-cyan-400/30 backdrop-blur-sm">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-cyan-400">Shield</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1a1f35]/60 rounded-xl px-3 py-2 border border-yellow-400/30 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-yellow-400">Laser</span>
        </div>
      </div>
    </div>
  );
}
