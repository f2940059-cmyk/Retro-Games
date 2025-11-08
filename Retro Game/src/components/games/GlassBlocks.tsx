import { ArrowLeft, Pause, RotateCcw } from 'lucide-react';
import { useState } from 'react';

interface GlassBlocksProps {
  onBack: () => void;
}

export default function GlassBlocks({ onBack }: GlassBlocksProps) {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  const rows = 20;
  const cols = 10;

  // Sample grid with some blocks
  const grid = Array(rows).fill(0).map((_, y) => 
    Array(cols).fill(0).map((_, x) => {
      if (y > 15 && Math.random() > 0.6) {
        return Math.floor(Math.random() * 4) + 1;
      }
      return 0;
    })
  );

  const blockColors = [
    '',
    'from-cyan-400/60 to-cyan-600/60 border-cyan-300/50',
    'from-purple-400/60 to-purple-600/60 border-purple-300/50',
    'from-yellow-400/60 to-yellow-600/60 border-yellow-300/50',
    'from-pink-400/60 to-pink-600/60 border-pink-300/50',
  ];

  const nextBlock = [
    [1, 1, 1, 1] // I-block
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F1A] to-[#1a1f3a] p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-cyan-400/30 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-cyan-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Glass Blocks
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-cyan-400/30 flex items-center justify-center">
            <Pause className="w-5 h-5 text-cyan-400" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-purple-400/30 flex items-center justify-center">
            <RotateCcw className="w-5 h-5 text-purple-400" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-4 items-center justify-center">
        {/* Game Board */}
        <div className="relative bg-[#0a0e18]/80 rounded-3xl border-2 border-cyan-400/30 p-3 backdrop-blur-sm"
          style={{ 
            boxShadow: '0 0 30px rgba(34, 211, 238, 0.3), inset 0 0 30px rgba(34, 211, 238, 0.1)',
          }}>
          <div className="grid gap-[2px]"
            style={{ 
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`
            }}>
            {grid.map((row, y) => 
              row.map((cell, x) => (
                <div
                  key={`${y}-${x}`}
                  className={`w-5 h-5 ${
                    cell > 0 
                      ? `bg-gradient-to-br ${blockColors[cell]} border rounded-sm backdrop-blur-sm`
                      : 'bg-cyan-400/5 rounded-sm'
                  }`}
                  style={
                    cell > 0
                      ? { boxShadow: '0 0 8px rgba(34, 211, 238, 0.4)' }
                      : {}
                  }
                />
              ))
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          {/* Next Block */}
          <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-purple-400/30 p-4 backdrop-blur-sm"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)' }}>
            <div className="text-purple-300 text-sm mb-2 text-center">Next</div>
            <div className="w-20 h-20 bg-[#0a0e18]/60 rounded-xl flex items-center justify-center border border-purple-400/20">
              <div className="flex flex-col gap-1">
                {nextBlock.map((row, i) => (
                  <div key={i} className="flex gap-1">
                    {row.map((cell, j) => (
                      <div
                        key={j}
                        className={`w-3 h-3 ${
                          cell ? 'bg-gradient-to-br from-cyan-400/60 to-cyan-600/60 rounded-sm border border-cyan-300/50' : ''
                        }`}
                        style={cell ? { boxShadow: '0 0 6px rgba(34, 211, 238, 0.5)' } : {}}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Level */}
          <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-yellow-400/30 p-4 backdrop-blur-sm"
            style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 0.2)' }}>
            <div className="text-yellow-300 text-sm">Level</div>
            <div className="text-3xl text-yellow-400" style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.6)' }}>
              {level}
            </div>
          </div>

          {/* Score */}
          <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-pink-400/30 p-4 backdrop-blur-sm"
            style={{ boxShadow: '0 0 20px rgba(244, 114, 182, 0.2)' }}>
            <div className="text-pink-300 text-sm">Score</div>
            <div className="text-3xl text-pink-400" style={{ textShadow: '0 0 15px rgba(244, 114, 182, 0.6)' }}>
              {score}
            </div>
          </div>
        </div>
      </div>

      {/* Stars Background Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
}
