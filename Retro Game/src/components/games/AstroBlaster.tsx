import { ArrowLeft, Pause, RotateCcw, Heart, Zap } from 'lucide-react';
import { useState } from 'react';

interface AstroBlasterProps {
  onBack: () => void;
}

export default function AstroBlaster({ onBack }: AstroBlasterProps) {
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(80);
  const [power, setPower] = useState(100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0525] via-[#1a0838] to-[#0a0525] p-4 flex flex-col relative overflow-hidden">
      {/* Starfield */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              boxShadow: '0 0 2px white',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>

      {/* Nebula */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/30 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-purple-400/30 flex items-center justify-center backdrop-blur-sm">
          <ArrowLeft className="w-5 h-5 text-purple-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Astro Blaster
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-purple-400/30 flex items-center justify-center backdrop-blur-sm">
            <Pause className="w-5 h-5 text-purple-400" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-orange-400/30 flex items-center justify-center backdrop-blur-sm">
            <RotateCcw className="w-5 h-5 text-orange-400" />
          </button>
        </div>
      </div>

      {/* HUD */}
      <div className="space-y-2 mb-6 relative z-10">
        <div className="flex justify-between items-center">
          <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-cyan-400/30 px-4 py-2 backdrop-blur-sm">
            <div className="text-cyan-300 text-xs">Score</div>
            <div className="text-2xl text-cyan-400" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.8)' }}>
              {score}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Heart className="w-5 h-5 text-red-400" />
            <div className="w-32 h-3 bg-gray-800/80 rounded-full border border-red-400/30 overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full transition-all"
                style={{ 
                  width: `${health}%`,
                  boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)'
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <div className="w-32 h-3 bg-gray-800/80 rounded-full border border-yellow-400/30 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all"
              style={{ 
                width: `${power}%`,
                boxShadow: '0 0 10px rgba(234, 179, 8, 0.8)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative w-full max-w-sm aspect-[3/4]">
          {/* Enemy Ships */}
          <div className="absolute top-12 left-12 w-12 h-12">
            <div className="relative">
              <div className="w-0 h-0 border-l-[24px] border-l-transparent border-b-[32px] border-b-purple-500 border-r-[24px] border-r-transparent rotate-180"
                style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.9)' }} />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-300"
                style={{ boxShadow: '0 0 8px rgba(216, 180, 254, 1)' }} />
            </div>
          </div>

          <div className="absolute top-20 right-16 w-10 h-10">
            <div className="relative">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[28px] border-b-pink-500 border-r-[20px] border-r-transparent rotate-180"
                style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.9)' }} />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-pink-300"
                style={{ boxShadow: '0 0 8px rgba(251, 207, 232, 1)' }} />
            </div>
          </div>

          <div className="absolute top-32 left-1/3 w-11 h-11">
            <div className="relative">
              <div className="w-0 h-0 border-l-[22px] border-l-transparent border-b-[30px] border-b-orange-500 border-r-[22px] border-r-transparent rotate-180"
                style={{ boxShadow: '0 0 20px rgba(249, 115, 22, 0.9)' }} />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-orange-300"
                style={{ boxShadow: '0 0 8px rgba(253, 186, 116, 1)' }} />
            </div>
          </div>

          {/* Player Lasers */}
          <div className="absolute left-1/2 bottom-32 w-1 h-24 bg-gradient-to-t from-cyan-400 to-transparent -ml-6"
            style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 1)' }} />
          <div className="absolute left-1/2 bottom-32 w-1 h-24 bg-gradient-to-t from-cyan-400 to-transparent ml-5"
            style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 1)' }} />

          {/* Explosions */}
          <div className="absolute top-16 left-1/2 w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-transparent rounded-full blur-md opacity-80 animate-pulse"
              style={{ boxShadow: '0 0 40px rgba(249, 115, 22, 1)' }} />
          </div>

          {/* Power-up */}
          <div className="absolute top-48 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 border-2 border-yellow-200 animate-pulse"
            style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 1)' }}>
            <Zap className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Player Ship */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="relative w-16 h-16">
              {/* Main ship body */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[28px] border-l-transparent border-b-[40px] border-b-cyan-400 border-r-[28px] border-r-transparent"
                style={{ boxShadow: '0 0 25px rgba(34, 211, 238, 0.9)' }} />
              {/* Wings */}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-blue-500 border-r-[12px] border-r-blue-500"
                style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.7)' }} />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-blue-500 border-b-[20px] border-b-blue-500 border-r-[12px] border-r-transparent"
                style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.7)' }} />
              {/* Cockpit */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-white to-cyan-200"
                style={{ boxShadow: '0 0 15px rgba(255, 255, 255, 1)' }} />
              {/* Engines */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-t from-orange-400 via-yellow-500 to-transparent blur-sm opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-6 relative z-10">
        <button className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl backdrop-blur-sm"
          style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}>
          ◄
        </button>
        <button className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 border-2 border-red-300 flex items-center justify-center text-white backdrop-blur-sm"
          style={{ boxShadow: '0 0 25px rgba(239, 68, 68, 0.6)' }}>
          🔥
        </button>
        <button className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl backdrop-blur-sm"
          style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}>
          ►
        </button>
      </div>
    </div>
  );
}
