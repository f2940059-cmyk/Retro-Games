import { ArrowLeft, Pause, Timer } from 'lucide-react';
import { useState } from 'react';

interface NatureCrossingProps {
  onBack: () => void;
}

export default function NatureCrossing({ onBack }: NatureCrossingProps) {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(45);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 via-blue-200 to-green-400 p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-white/80 border-2 border-green-400/50 flex items-center justify-center backdrop-blur-sm shadow-lg">
          <ArrowLeft className="w-5 h-5 text-green-600" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Nature Crossing
        </div>
        <button className="w-10 h-10 rounded-xl bg-white/80 border-2 border-green-400/50 flex items-center justify-center backdrop-blur-sm shadow-lg">
          <Pause className="w-5 h-5 text-green-600" />
        </button>
      </div>

      {/* HUD */}
      <div className="flex justify-between items-center mb-6">
        <div className="bg-white/80 rounded-2xl border-2 border-green-400/50 px-4 py-2 backdrop-blur-sm shadow-lg">
          <div className="text-green-700 text-xs">Score</div>
          <div className="text-2xl text-green-600">
            {score}
          </div>
        </div>
        <div className="bg-white/80 rounded-2xl border-2 border-orange-400/50 px-4 py-2 backdrop-blur-sm shadow-lg flex items-center gap-2">
          <Timer className="w-5 h-5 text-orange-600" />
          <div className="text-2xl text-orange-600">
            {time}s
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-sm bg-green-900/20 rounded-3xl border-4 border-green-700/30 overflow-hidden"
          style={{ aspectRatio: '3/4' }}>
          {/* Goal Area - Top */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-green-600 to-green-700 border-b-4 border-green-500 flex items-center justify-center">
            <div className="text-white text-sm">🏁 Goal 🏁</div>
          </div>

          {/* River Section */}
          <div className="absolute top-16 left-0 right-0 h-32 bg-gradient-to-b from-blue-400 to-blue-600 border-y-4 border-blue-700">
            {/* Logs */}
            <div className="absolute top-2 left-[10%] w-24 h-8 rounded-lg bg-gradient-to-r from-amber-700 to-amber-800 border-2 border-amber-900 flex items-center justify-center shadow-lg">
              <div className="text-xs text-amber-300">🪵 🪵</div>
            </div>
            <div className="absolute top-14 left-[50%] w-32 h-8 rounded-lg bg-gradient-to-r from-amber-700 to-amber-800 border-2 border-amber-900 flex items-center justify-center shadow-lg">
              <div className="text-xs text-amber-300">🪵 🪵 🪵</div>
            </div>
            <div className="absolute bottom-2 left-[20%] w-28 h-8 rounded-lg bg-gradient-to-r from-amber-700 to-amber-800 border-2 border-amber-900 flex items-center justify-center shadow-lg">
              <div className="text-xs text-amber-300">🪵 🪵</div>
            </div>
          </div>

          {/* Safe Zone */}
          <div className="absolute top-48 left-0 right-0 h-8 bg-gradient-to-r from-yellow-300 to-yellow-400 border-y-2 border-yellow-500" />

          {/* Road Section */}
          <div className="absolute top-56 left-0 right-0 h-40 bg-gradient-to-b from-gray-700 to-gray-800 border-y-4 border-gray-900">
            {/* Road lines */}
            <div className="absolute top-8 left-0 right-0 h-1 border-t-2 border-dashed border-yellow-300/50" />
            <div className="absolute top-20 left-0 right-0 h-1 border-t-2 border-dashed border-yellow-300/50" />
            <div className="absolute top-32 left-0 right-0 h-1 border-t-2 border-dashed border-yellow-300/50" />

            {/* Cars */}
            <div className="absolute top-2 left-[30%] w-16 h-8 rounded-lg bg-gradient-to-r from-red-500 to-red-600 border-2 border-red-700 shadow-lg flex items-center justify-center">
              <div className="text-white text-xs">🚗</div>
            </div>
            <div className="absolute top-14 right-[20%] w-16 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-blue-700 shadow-lg flex items-center justify-center">
              <div className="text-white text-xs">🚙</div>
            </div>
            <div className="absolute bottom-4 left-[40%] w-16 h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 border-2 border-yellow-700 shadow-lg flex items-center justify-center">
              <div className="text-white text-xs">🚕</div>
            </div>
          </div>

          {/* Starting Area - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-green-500 to-green-600 border-t-4 border-green-700 flex items-center justify-center">
            {/* Frog */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-4 border-green-700 flex items-center justify-center shadow-xl"
              style={{ boxShadow: '0 5px 20px rgba(34, 197, 94, 0.6)' }}>
              <div className="text-2xl">🐸</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-center">
        <div className="grid grid-cols-3 gap-2 w-48">
          <div />
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center text-white text-xl shadow-lg">
            ▲
          </button>
          <div />
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center text-white text-xl shadow-lg">
            ◄
          </button>
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center text-white text-xl shadow-lg">
            ▼
          </button>
          <button className="aspect-square rounded-2xl bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center text-white text-xl shadow-lg">
            ►
          </button>
        </div>
      </div>
    </div>
  );
}
