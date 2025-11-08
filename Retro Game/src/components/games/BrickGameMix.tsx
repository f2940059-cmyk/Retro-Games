import { ArrowLeft } from 'lucide-react';

interface BrickGameMixProps {
  onBack: () => void;
}

export default function BrickGameMix({ onBack }: BrickGameMixProps) {
  // 8-bit style grid (1 = filled pixel, 0 = empty)
  const screen = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-400 p-4 flex flex-col items-center justify-center">
      <button onClick={onBack} className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-gray-600 border-2 border-gray-700 flex items-center justify-center shadow-lg">
        <ArrowLeft className="w-5 h-5 text-gray-200" />
      </button>

      {/* Handheld Console */}
      <div className="relative bg-gradient-to-b from-gray-400 to-gray-500 rounded-3xl p-6 shadow-2xl border-4 border-gray-600"
        style={{ width: '320px' }}>
        
        {/* Title */}
        <div className="text-center mb-4">
          <div className="text-gray-700 text-sm uppercase tracking-wider">Brick Game</div>
          <div className="text-gray-800 text-xs">9999 in 1</div>
        </div>

        {/* Screen */}
        <div className="bg-gradient-to-b from-green-200 to-green-300 rounded-2xl p-4 mb-6 border-4 border-gray-700 shadow-inner"
          style={{ aspectRatio: '2/3' }}>
          <div className="bg-green-400/30 rounded-xl p-2 h-full">
            {/* Score Display */}
            <div className="flex justify-between mb-2 text-gray-800 text-xs">
              <div>SCORE: 0000</div>
              <div>HI: 9999</div>
            </div>
            
            {/* Game Grid */}
            <div className="grid gap-[2px] bg-green-300/50 p-1 rounded"
              style={{
                gridTemplateColumns: `repeat(10, 1fr)`,
                gridTemplateRows: `repeat(18, 1fr)`
              }}>
              {screen.map((row, y) =>
                row.map((cell, x) => (
                  <div
                    key={`${y}-${x}`}
                    className={`aspect-square ${
                      cell === 1
                        ? 'bg-gray-800 shadow-sm'
                        : 'bg-green-200/40'
                    }`}
                    style={{
                      borderRadius: '1px'
                    }}
                  />
                ))
              )}
            </div>

            {/* Bottom info */}
            <div className="flex justify-between mt-2 text-gray-800 text-xs">
              <div>LEVEL: 1</div>
              <div>LINES: 0</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4">
          {/* D-Pad */}
          <div className="flex justify-between items-center px-4">
            <div className="relative">
              <div className="grid grid-cols-3 gap-1">
                <div />
                <div className="w-10 h-10 rounded-lg bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-gray-400 shadow-lg">
                  ▲
                </div>
                <div />
                <div className="w-10 h-10 rounded-lg bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-gray-400 shadow-lg">
                  ◄
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-700 border-2 border-gray-800" />
                <div className="w-10 h-10 rounded-lg bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-gray-400 shadow-lg">
                  ►
                </div>
                <div />
                <div className="w-10 h-10 rounded-lg bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-gray-400 shadow-lg">
                  ▼
                </div>
                <div />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-full bg-red-600 border-3 border-red-800 shadow-lg flex items-center justify-center">
                  <span className="text-white text-xs">A</span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-full bg-red-600 border-3 border-red-800 shadow-lg flex items-center justify-center">
                  <span className="text-white text-xs">B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Start/Select */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-gray-700 border-2 border-gray-800 text-gray-300 text-xs shadow-lg">
              SELECT
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-700 border-2 border-gray-800 text-gray-300 text-xs shadow-lg">
              START
            </button>
          </div>
        </div>

        {/* Speaker holes */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-700" />
          ))}
        </div>
      </div>
    </div>
  );
}
