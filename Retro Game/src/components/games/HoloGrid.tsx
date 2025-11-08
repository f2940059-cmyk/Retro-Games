import { ArrowLeft, RotateCcw, Flag, Timer } from 'lucide-react';
import { useState } from 'react';

interface HoloGridProps {
  onBack: () => void;
}

export default function HoloGrid({ onBack }: HoloGridProps) {
  const [time, setTime] = useState(0);
  const [flagsLeft, setFlagsLeft] = useState(10);

  const gridSize = 8;
  // 0 = unopened, 1-8 = numbers, 9 = mine, 10 = flagged
  const grid = Array(gridSize).fill(0).map(() => 
    Array(gridSize).fill(0).map(() => Math.random() > 0.8 ? 9 : Math.floor(Math.random() * 4))
  );

  const getNumberColor = (num: number) => {
    const colors = [
      'text-gray-600',
      'text-blue-500',
      'text-green-500',
      'text-red-500',
      'text-purple-500',
      'text-orange-500',
      'text-cyan-500',
      'text-pink-500',
      'text-yellow-500',
    ];
    return colors[num] || 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1f] to-[#1a1438] p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-blue-400/30 flex items-center justify-center backdrop-blur-sm">
          <ArrowLeft className="w-5 h-5 text-blue-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Holo Grid
        </div>
        <button className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
          <RotateCcw className="w-5 h-5 text-cyan-400" />
        </button>
      </div>

      {/* HUD */}
      <div className="flex justify-between items-center mb-6">
        <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-blue-400/30 px-4 py-2 backdrop-blur-sm flex items-center gap-2">
          <Timer className="w-5 h-5 text-blue-400" />
          <div className="text-xl text-blue-400" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.8)' }}>
            {time}s
          </div>
        </div>
        
        <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-red-400/30 px-4 py-2 backdrop-blur-sm flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          <div className="text-xl text-red-400" style={{ textShadow: '0 0 10px rgba(248, 113, 113, 0.8)' }}>
            {flagsLeft}
          </div>
        </div>
      </div>

      {/* Game Grid */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-[#0a0e18]/80 rounded-3xl border-2 border-blue-400/30 p-4 backdrop-blur-sm"
          style={{ 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), inset 0 0 40px rgba(59, 130, 246, 0.1)',
          }}>
          <div className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize}, 1fr)`
            }}>
            {grid.map((row, y) =>
              row.map((cell, x) => {
                const isRevealed = (y + x) % 3 === 0;
                const isFlagged = cell === 10;
                
                return (
                  <button
                    key={`${y}-${x}`}
                    className={`w-10 h-10 rounded-lg transition-all ${
                      isRevealed
                        ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-blue-400/20'
                        : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/40 hover:border-cyan-400/60'
                    }`}
                    style={
                      isRevealed
                        ? {}
                        : { boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)' }
                    }>
                    {isRevealed && cell > 0 && cell < 9 && (
                      <span className={`${getNumberColor(cell)}`} style={{ textShadow: '0 0 10px currentColor' }}>
                        {cell}
                      </span>
                    )}
                    {isRevealed && cell === 9 && (
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-orange-600 mx-auto border border-red-400"
                        style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }} />
                    )}
                    {isFlagged && (
                      <Flag className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center space-y-2">
        <div className="text-blue-400/60 text-sm">Tap to reveal • Long press to flag</div>
        <div className="flex justify-center gap-4">
          <div className="bg-[#1a1f35]/60 rounded-xl px-4 py-2 border border-blue-400/30 backdrop-blur-sm flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-blue-500/40 border border-blue-400/50" />
            <span className="text-xs text-blue-300">Unopened</span>
          </div>
          <div className="bg-[#1a1f35]/60 rounded-xl px-4 py-2 border border-gray-400/30 backdrop-blur-sm flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-gray-800/40 border border-gray-600/50" />
            <span className="text-xs text-gray-300">Opened</span>
          </div>
        </div>
      </div>
    </div>
  );
}
