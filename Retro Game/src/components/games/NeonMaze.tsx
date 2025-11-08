import { ArrowLeft, Pause } from 'lucide-react';
import { useState } from 'react';

interface NeonMazeProps {
  onBack: () => void;
}

export default function NeonMaze({ onBack }: NeonMazeProps) {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  // Simple maze grid (1 = wall, 0 = path, 2 = pellet)
  const maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,2,1,1,2,1,2,1,2,1,2,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,1,1,1,1,1,1,2,1,2,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,1,2,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,2,1,2,1,2,1,1,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A] p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-blue-400/30 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-blue-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Neon Maze
        </div>
        <button className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-blue-400/30 flex items-center justify-center">
          <Pause className="w-5 h-5 text-blue-400" />
        </button>
      </div>

      {/* Score & Lives */}
      <div className="flex justify-between items-center mb-6">
        <div className="bg-[#1a1f35] rounded-2xl border-2 border-yellow-400/30 px-4 py-2">
          <div className="text-yellow-300 text-xs">Score</div>
          <div className="text-2xl text-yellow-400" style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.8)' }}>
            {score}
          </div>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: lives }).map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center"
              style={{ boxShadow: '0 0 15px rgba(250, 204, 21, 0.8)' }}>
              <div className="text-lg">🌀</div>
            </div>
          ))}
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative bg-[#0a0e18] rounded-3xl border-2 border-blue-400/30 p-4"
          style={{ 
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 30px rgba(59, 130, 246, 0.1)',
          }}>
          <div className="grid gap-1">
            {maze.map((row, y) => (
              <div key={y} className="flex gap-1">
                {row.map((cell, x) => (
                  <div
                    key={x}
                    className={`w-6 h-6 ${
                      cell === 1 
                        ? 'bg-blue-500/80 rounded-md border border-blue-400' 
                        : cell === 2
                        ? 'flex items-center justify-center'
                        : ''
                    }`}
                    style={
                      cell === 1
                        ? { boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }
                        : {}
                    }>
                    {cell === 2 && (
                      <div className="w-2 h-2 rounded-full bg-yellow-300"
                        style={{ boxShadow: '0 0 5px rgba(253, 224, 71, 0.9)' }} />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Pac-Man */}
          <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center"
            style={{ boxShadow: '0 0 20px rgba(253, 224, 71, 1)' }}>
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[10px] border-l-[#0a0e18] border-b-[8px] border-b-transparent ml-1" />
          </div>

          {/* Ghosts */}
          <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-t-full bg-gradient-to-br from-red-400/70 to-red-600/70 backdrop-blur-sm"
            style={{ boxShadow: '0 0 15px rgba(248, 113, 113, 0.8)' }}>
            <div className="flex gap-[2px] absolute bottom-0 left-0 right-0">
              <div className="flex-1 h-2 bg-red-400/70 rounded-b-full" />
              <div className="flex-1 h-2 bg-red-400/70 rounded-b-full" />
              <div className="flex-1 h-2 bg-red-400/70 rounded-b-full" />
            </div>
            <div className="absolute top-2 left-1.5 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>

          <div className="absolute top-2/3 left-1/2 w-8 h-8 rounded-t-full bg-gradient-to-br from-cyan-400/70 to-cyan-600/70 backdrop-blur-sm"
            style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)' }}>
            <div className="flex gap-[2px] absolute bottom-0 left-0 right-0">
              <div className="flex-1 h-2 bg-cyan-400/70 rounded-b-full" />
              <div className="flex-1 h-2 bg-cyan-400/70 rounded-b-full" />
              <div className="flex-1 h-2 bg-cyan-400/70 rounded-b-full" />
            </div>
            <div className="absolute top-2 left-1.5 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-t-full bg-gradient-to-br from-pink-400/70 to-pink-600/70 backdrop-blur-sm"
            style={{ boxShadow: '0 0 15px rgba(244, 114, 182, 0.8)' }}>
            <div className="flex gap-[2px] absolute bottom-0 left-0 right-0">
              <div className="flex-1 h-2 bg-pink-400/70 rounded-b-full" />
              <div className="flex-1 h-2 bg-pink-400/70 rounded-b-full" />
              <div className="flex-1 h-2 bg-pink-400/70 rounded-b-full" />
            </div>
            <div className="absolute top-2 left-1.5 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-center">
        <div className="grid grid-cols-3 gap-2 w-48">
          <div />
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-blue-400/30 flex items-center justify-center text-blue-400 text-xl">
            ▲
          </button>
          <div />
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-blue-400/30 flex items-center justify-center text-blue-400 text-xl">
            ◄
          </button>
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-blue-400/30 flex items-center justify-center text-blue-400 text-xl">
            ▼
          </button>
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-blue-400/30 flex items-center justify-center text-blue-400 text-xl">
            ►
          </button>
        </div>
      </div>
    </div>
  );
}
