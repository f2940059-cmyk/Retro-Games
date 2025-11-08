import { ArrowLeft, Pause, RotateCcw } from 'lucide-react';
import { useState } from 'react';

interface NeonDuelProps {
  onBack: () => void;
}

export default function NeonDuel({ onBack }: NeonDuelProps) {
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1f] to-[#1a1438] p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-cyan-400/30 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-cyan-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Neon Duel
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-cyan-400/30 flex items-center justify-center">
            <Pause className="w-5 h-5 text-cyan-400" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-pink-400/30 flex items-center justify-center">
            <RotateCcw className="w-5 h-5 text-pink-400" />
          </button>
        </div>
      </div>

      {/* Scores */}
      <div className="flex justify-around mb-8">
        <div className="text-center">
          <div className="text-6xl text-cyan-400" style={{ textShadow: '0 0 30px rgba(34, 211, 238, 0.9)', fontFamily: 'monospace' }}>
            {scoreP1}
          </div>
          <div className="text-cyan-400/60 text-sm mt-2">Player 1</div>
        </div>
        <div className="text-center">
          <div className="text-6xl text-pink-400" style={{ textShadow: '0 0 30px rgba(244, 114, 182, 0.9)', fontFamily: 'monospace' }}>
            {scoreP2}
          </div>
          <div className="text-pink-400/60 text-sm mt-2">Player 2</div>
        </div>
      </div>

      {/* Game Field */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-md aspect-[3/4] bg-[#0a0e18] rounded-3xl border-2 border-purple-400/30"
          style={{ 
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.3), inset 0 0 40px rgba(168, 85, 247, 0.1)'
          }}>
          {/* Center Dashed Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-4 bg-purple-400/40 mb-2"
                style={{ boxShadow: '0 0 5px rgba(168, 85, 247, 0.4)' }}
              />
            ))}
          </div>

          {/* Player 1 Paddle (Left) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-24 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"
            style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)' }}
          />

          {/* Player 2 Paddle (Right) */}
          <div className="absolute right-4 top-1/3 -translate-y-1/2 w-3 h-24 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"
            style={{ boxShadow: '0 0 20px rgba(244, 114, 182, 0.8), 0 0 40px rgba(244, 114, 182, 0.4)' }}
          />

          {/* Ball */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-white to-purple-200"
            style={{ boxShadow: '0 0 25px rgba(255, 255, 255, 0.9), 0 0 50px rgba(168, 85, 247, 0.6)' }}
          />

          {/* Ball Trail Effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent blur-sm"
            style={{ transform: 'translate(-50%, -50%) rotate(-30deg)' }}
          />
        </div>
      </div>

      {/* Controls Hint */}
      <div className="mt-6 flex justify-around text-center text-sm opacity-60">
        <div className="text-cyan-400">
          <div>↑↓</div>
          <div className="text-xs">P1 Controls</div>
        </div>
        <div className="text-pink-400">
          <div>W S</div>
          <div className="text-xs">P2 Controls</div>
        </div>
      </div>
    </div>
  );
}
