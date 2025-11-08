import { ArrowLeft, Pause, Heart } from 'lucide-react';
import { useState } from 'react';

interface RetroPinballProps {
  onBack: () => void;
}

export default function RetroPinball({ onBack }: RetroPinballProps) {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1438] via-[#2a1850] to-[#1a1438] p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-blue-400/30 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-blue-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-blue-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Retro Pinball
        </div>
        <button className="w-10 h-10 rounded-xl bg-[#1a1f35] border-2 border-pink-400/30 flex items-center justify-center">
          <Pause className="w-5 h-5 text-pink-400" />
        </button>
      </div>

      {/* Score & Lives */}
      <div className="flex justify-between items-center mb-6">
        <div className="bg-[#1a1f35] rounded-2xl border-2 border-cyan-400/30 px-6 py-2">
          <div className="text-cyan-300 text-xs">Score</div>
          <div className="text-3xl text-cyan-400" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.8)', fontFamily: 'monospace' }}>
            {score.toString().padStart(6, '0')}
          </div>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: lives }).map((_, i) => (
            <Heart key={i} className="w-7 h-7 text-pink-400 fill-pink-400" style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.8))' }} />
          ))}
        </div>
      </div>

      {/* Pinball Table */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-sm bg-gradient-to-b from-[#0a0e18] to-[#1a1438] rounded-3xl border-4 border-blue-400/40 overflow-hidden"
          style={{ 
            aspectRatio: '2/3',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.5), inset 0 0 60px rgba(59, 130, 246, 0.2)'
          }}>
          
          {/* Bumpers */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-4 border-pink-300"
            style={{ boxShadow: '0 0 25px rgba(244, 114, 182, 0.9)' }}>
            <div className="absolute inset-2 rounded-full bg-pink-200/30 animate-pulse" />
          </div>

          <div className="absolute top-32 left-16 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-4 border-cyan-300"
            style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.9)' }}>
            <div className="absolute inset-2 rounded-full bg-cyan-200/30 animate-pulse" />
          </div>

          <div className="absolute top-32 right-16 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-purple-300"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.9)' }}>
            <div className="absolute inset-2 rounded-full bg-purple-200/30 animate-pulse" />
          </div>

          <div className="absolute top-48 left-20 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 border-yellow-300"
            style={{ boxShadow: '0 0 15px rgba(250, 204, 21, 0.9)' }}>
            <div className="absolute inset-1.5 rounded-full bg-yellow-200/30 animate-pulse" />
          </div>

          <div className="absolute top-48 right-20 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-blue-300"
            style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.9)' }}>
            <div className="absolute inset-1.5 rounded-full bg-blue-200/30 animate-pulse" />
          </div>

          {/* Ball */}
          <div className="absolute top-1/2 left-1/3 w-5 h-5 rounded-full bg-gradient-to-br from-white to-gray-200 border-2 border-white/80"
            style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(34, 211, 238, 0.6)' }}>
            <div className="absolute inset-1 rounded-full bg-white/50" />
          </div>

          {/* Flippers */}
          <div className="absolute bottom-20 left-12 w-20 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full border-2 border-blue-300 origin-left"
            style={{ 
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)',
              transform: 'rotate(-20deg)'
            }} />

          <div className="absolute bottom-20 right-12 w-20 h-4 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full border-2 border-blue-300 origin-right"
            style={{ 
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)',
              transform: 'rotate(20deg)'
            }} />

          {/* Side walls glow */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-pink-400 to-cyan-400"
            style={{ boxShadow: '0 0 15px currentColor' }} />
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-pink-400 to-blue-400"
            style={{ boxShadow: '0 0 15px currentColor' }} />

          {/* Score zones */}
          <div className="absolute top-8 left-8 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs"
            style={{ boxShadow: '0 0 10px rgba(250, 204, 21, 0.5)' }}>
            x2
          </div>
          <div className="absolute top-8 right-8 px-3 py-1 rounded-full bg-pink-400/20 border border-pink-400/40 text-pink-400 text-xs"
            style={{ boxShadow: '0 0 10px rgba(244, 114, 182, 0.5)' }}>
            x3
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="w-32 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-blue-300 flex items-center justify-center text-white transition-transform active:scale-95"
          style={{ boxShadow: '0 5px 25px rgba(59, 130, 246, 0.5)' }}>
          <span className="text-lg">LEFT</span>
        </button>
        <button className="w-32 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-cyan-300 flex items-center justify-center text-white transition-transform active:scale-95"
          style={{ boxShadow: '0 5px 25px rgba(34, 211, 238, 0.5)' }}>
          <span className="text-lg">RIGHT</span>
        </button>
      </div>
    </div>
  );
}
