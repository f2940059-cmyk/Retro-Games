import { ArrowLeft, Pause, RotateCcw, Undo2 } from 'lucide-react';
import { useState } from 'react';

interface Neo2048Props {
  onBack: () => void;
}

export default function Neo2048({ onBack }: Neo2048Props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(1024);

  const grid = [
    [2, 0, 0, 4],
    [0, 8, 0, 0],
    [16, 0, 32, 0],
    [0, 0, 2, 64],
  ];

  const getTileColor = (value: number) => {
    const colors: Record<number, string> = {
      0: 'from-gray-200/20 to-gray-300/20 text-transparent',
      2: 'from-amber-50 to-amber-100 text-gray-700',
      4: 'from-amber-100 to-amber-200 text-gray-700',
      8: 'from-orange-300 to-orange-400 text-white',
      16: 'from-orange-400 to-orange-500 text-white',
      32: 'from-red-400 to-red-500 text-white',
      64: 'from-red-500 to-red-600 text-white',
      128: 'from-yellow-400 to-yellow-500 text-white',
      256: 'from-yellow-500 to-yellow-600 text-white',
      512: 'from-yellow-600 to-amber-600 text-white',
      1024: 'from-amber-500 to-amber-600 text-white',
      2048: 'from-yellow-500 to-gold-600 text-white',
    };
    return colors[value] || 'from-purple-500 to-purple-600 text-white';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8ef] to-[#eee4da] p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-white border-2 border-orange-300/50 flex items-center justify-center shadow-md">
          <ArrowLeft className="w-5 h-5 text-orange-600" />
        </button>
        <div className="text-3xl bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          2048 Neo
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-white border-2 border-orange-300/50 flex items-center justify-center shadow-md">
            <Pause className="w-5 h-5 text-orange-600" />
          </button>
        </div>
      </div>

      {/* Scores */}
      <div className="flex justify-center gap-4 mb-8">
        <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl px-6 py-3 border-2 border-orange-200 shadow-lg">
          <div className="text-orange-700 text-xs uppercase tracking-wide">Score</div>
          <div className="text-3xl text-orange-600">
            {score}
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl px-6 py-3 border-2 border-amber-200 shadow-lg">
          <div className="text-amber-700 text-xs uppercase tracking-wide">Best</div>
          <div className="text-3xl text-amber-600">
            {bestScore}
          </div>
        </div>
      </div>

      {/* Game Grid */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-gradient-to-br from-[#bbada0] to-[#a39489] rounded-3xl p-4 shadow-2xl"
          style={{ maxWidth: '400px', width: '90vw' }}>
          <div className="grid grid-cols-4 gap-3">
            {grid.map((row, y) =>
              row.map((value, x) => (
                <div
                  key={`${y}-${x}`}
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${getTileColor(value)} flex items-center justify-center transition-all duration-200 border-2 border-white/20`}
                  style={{
                    boxShadow: value > 0 ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
                  }}>
                  {value > 0 && (
                    <span className="text-4xl" style={{ 
                      textShadow: value >= 8 ? '0 0 10px rgba(255, 255, 255, 0.3)' : 'none' 
                    }}>
                      {value}
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-6 py-3 rounded-2xl border-2 border-orange-300 shadow-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
          <Undo2 className="w-5 h-5" />
          <span>Undo</span>
        </button>
        <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-2xl border-2 border-amber-300 shadow-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
          <RotateCcw className="w-5 h-5" />
          <span>New Game</span>
        </button>
      </div>

      {/* Swipe hint */}
      <div className="text-center mt-4 text-gray-600 text-sm">
        Swipe to move tiles
      </div>
    </div>
  );
}
