import { ArrowLeft, Pause, Timer, Bomb } from 'lucide-react';
import { useState } from 'react';

interface CubeArenaProps {
  onBack: () => void;
}

export default function CubeArena({ onBack }: CubeArenaProps) {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(120);
  const [bombs, setBombs] = useState(3);

  const gridSize = 11;
  const grid = Array(gridSize).fill(0).map(() => Array(gridSize).fill(0));
  
  // Add some blocks (1 = destructible, 2 = solid)
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (i % 2 === 0 && j % 2 === 0) {
        grid[i][j] = 2; // Solid blocks
      } else if (Math.random() > 0.6) {
        grid[i][j] = 1; // Destructible blocks
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F1A] to-[#1a1438] p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-orange-400/30 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Cube Arena
        </div>
        <button className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-orange-400/30 flex items-center justify-center">
          <Pause className="w-5 h-5 text-orange-400" />
        </button>
      </div>

      {/* HUD */}
      <div className="flex justify-between items-center mb-6">
        <div className="bg-[#1a1f35] rounded-2xl border-2 border-cyan-400/30 px-4 py-2">
          <div className="text-cyan-300 text-xs">Score</div>
          <div className="text-2xl text-cyan-400" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
            {score}
          </div>
        </div>
        
        <div className="bg-[#1a1f35] rounded-2xl border-2 border-yellow-400/30 px-4 py-2 flex items-center gap-2">
          <Timer className="w-5 h-5 text-yellow-400" />
          <div className="text-xl text-yellow-400" style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.8)' }}>
            {time}s
          </div>
        </div>

        <div className="bg-[#1a1f35] rounded-2xl border-2 border-orange-400/30 px-4 py-2 flex items-center gap-2">
          <Bomb className="w-5 h-5 text-orange-400" />
          <div className="text-xl text-orange-400" style={{ textShadow: '0 0 10px rgba(251, 146, 60, 0.8)' }}>
            {bombs}
          </div>
        </div>
      </div>

      {/* Game Arena */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative bg-[#0a0e18] rounded-3xl border-2 border-cyan-400/30 p-3"
          style={{ 
            boxShadow: '0 0 30px rgba(34, 211, 238, 0.3), inset 0 0 30px rgba(34, 211, 238, 0.1)',
          }}>
          <div className="grid gap-1"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize}, 1fr)`
            }}>
            {grid.map((row, y) =>
              row.map((cell, x) => (
                <div
                  key={`${y}-${x}`}
                  className={`w-6 h-6 ${
                    cell === 2
                      ? 'bg-gradient-to-br from-gray-600 to-gray-800 border border-gray-500 rounded-sm'
                      : cell === 1
                      ? 'bg-gradient-to-br from-amber-600 to-orange-700 border border-orange-500 rounded-sm'
                      : 'bg-cyan-400/5 rounded-sm'
                  }`}
                  style={
                    cell === 2
                      ? { boxShadow: '0 0 5px rgba(107, 114, 128, 0.5)' }
                      : cell === 1
                      ? { boxShadow: '0 0 8px rgba(251, 146, 60, 0.5)' }
                      : {}
                  }
                />
              ))
            )}
          </div>

          {/* Player 1 */}
          <div className="absolute top-6 left-6 w-5 h-5 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-cyan-300"
            style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 1)' }}>
            <div className="text-xs text-white flex items-center justify-center h-full">P</div>
          </div>

          {/* Player 2 (AI/Enemy) */}
          <div className="absolute bottom-6 right-6 w-5 h-5 rounded-sm bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-pink-300"
            style={{ boxShadow: '0 0 15px rgba(244, 114, 182, 1)' }}>
            <div className="text-xs text-white flex items-center justify-center h-full">E</div>
          </div>

          {/* Bomb on grid */}
          <div className="absolute top-24 left-20">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-orange-600 border-2 border-red-400 flex items-center justify-center animate-pulse"
              style={{ boxShadow: '0 0 15px rgba(239, 68, 68, 0.9)' }}>
              <Bomb className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Explosion effect */}
          <div className="absolute top-16 right-16 w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-transparent rounded-full blur-md opacity-70"
              style={{ boxShadow: '0 0 30px rgba(249, 115, 22, 1)' }} />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6">
        <div className="grid grid-cols-3 gap-2 w-40">
          <div />
          <button className="aspect-square rounded-xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl">
            ▲
          </button>
          <div />
          <button className="aspect-square rounded-xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl">
            ◄
          </button>
          <button className="aspect-square rounded-xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl">
            ▼
          </button>
          <button className="aspect-square rounded-xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl">
            ►
          </button>
        </div>

        <button className="px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 border-2 border-orange-400 text-white flex items-center gap-2"
          style={{ boxShadow: '0 0 20px rgba(249, 115, 22, 0.6)' }}>
          <Bomb className="w-5 h-5" />
          <span>Drop Bomb</span>
        </button>
      </div>
    </div>
  );
}
