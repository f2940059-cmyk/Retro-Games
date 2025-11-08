import { ArrowLeft, Pause, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CyberSnakeProps {
  onBack: () => void;
}

export default function CyberSnake({ onBack }: CyberSnakeProps) {
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });

  const gridSize = 20;

  return (
    <div className="min-h-screen bg-[#0B0F1A] p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-[#00D1FF]/30 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-[#00D1FF]" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-[#00D1FF] to-[#00FF8C] bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Cyber Snake
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-[#00D1FF]/30 flex items-center justify-center">
            <Pause className="w-5 h-5 text-[#00D1FF]" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-[#FF3BAC]/30 flex items-center justify-center">
            <RotateCcw className="w-5 h-5 text-[#FF3BAC]" />
          </button>
        </div>
      </div>

      {/* Score */}
      <div className="text-center mb-6">
        <div className="text-sm text-gray-400">Score</div>
        <div className="text-4xl text-[#00FF8C]" style={{ textShadow: '0 0 20px rgba(0, 255, 140, 0.8)' }}>
          {score}
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative bg-[#0a0e18] rounded-3xl border-2 border-[#00D1FF]/30 p-4"
          style={{ 
            boxShadow: '0 0 30px rgba(0, 209, 255, 0.3), inset 0 0 30px rgba(0, 209, 255, 0.1)',
            width: '90vw',
            maxWidth: '400px',
            aspectRatio: '1'
          }}>
          {/* Grid */}
          <div className="absolute inset-4 grid gap-0"
            style={{ 
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize}, 1fr)`
            }}>
            {Array.from({ length: gridSize * gridSize }).map((_, i) => {
              const x = i % gridSize;
              const y = Math.floor(i / gridSize);
              const isSnake = snake.some(s => s.x === x && s.y === y);
              const isFood = food.x === x && food.y === y;

              return (
                <div
                  key={i}
                  className={`border border-[#00D1FF]/5 ${
                    isSnake ? 'bg-gradient-to-br from-[#00D1FF] to-[#00FF8C] rounded-sm' : ''
                  } ${
                    isFood ? 'bg-gradient-to-br from-[#FF3BAC] to-[#FF6B9D] rounded-full' : ''
                  }`}
                  style={
                    isSnake
                      ? { boxShadow: '0 0 10px rgba(0, 255, 140, 0.8)' }
                      : isFood
                      ? { boxShadow: '0 0 15px rgba(255, 59, 172, 0.9)' }
                      : {}
                  }
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-center">
        <div className="grid grid-cols-3 gap-2 w-48">
          <div />
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-[#00D1FF]/30 flex items-center justify-center text-[#00D1FF] text-xl">
            ▲
          </button>
          <div />
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-[#00D1FF]/30 flex items-center justify-center text-[#00D1FF] text-xl">
            ◄
          </button>
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-[#00D1FF]/30 flex items-center justify-center text-[#00D1FF] text-xl">
            ▼
          </button>
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-[#00D1FF]/30 flex items-center justify-center text-[#00D1FF] text-xl">
            ►
          </button>
        </div>
      </div>
    </div>
  );
}
