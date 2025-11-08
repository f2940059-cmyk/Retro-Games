import { ArrowLeft, Pause } from 'lucide-react';
import { useState } from 'react';

interface NeonRushProps {
  onBack: () => void;
}

export default function NeonRush({ onBack }: NeonRushProps) {
  const [score, setScore] = useState(0);
  const [distance, setDistance] = useState(1247);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0525] via-[#1a0f3a] to-[#0a0525] p-4 flex flex-col relative overflow-hidden">
      {/* Futuristic city background */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute bottom-0 left-10 w-16 h-64 bg-gradient-to-t from-cyan-600/40 to-transparent"
          style={{ boxShadow: '0 0 40px rgba(34, 211, 238, 0.3)' }} />
        <div className="absolute bottom-0 left-32 w-20 h-80 bg-gradient-to-t from-purple-600/40 to-transparent"
          style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)' }} />
        <div className="absolute bottom-0 right-20 w-24 h-96 bg-gradient-to-t from-pink-600/40 to-transparent"
          style={{ boxShadow: '0 0 40px rgba(244, 114, 182, 0.3)' }} />
        <div className="absolute bottom-0 right-48 w-16 h-72 bg-gradient-to-t from-blue-600/40 to-transparent"
          style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }} />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
          <ArrowLeft className="w-5 h-5 text-cyan-400" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Neon Rush
        </div>
        <button className="w-10 h-10 rounded-xl bg-[#1a1f35]/80 border-2 border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
          <Pause className="w-5 h-5 text-cyan-400" />
        </button>
      </div>

      {/* HUD */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-cyan-400/30 px-4 py-2 backdrop-blur-sm">
          <div className="text-cyan-300 text-xs">Score</div>
          <div className="text-2xl text-cyan-400" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.8)' }}>
            {score}
          </div>
        </div>
        <div className="bg-[#1a1f35]/80 rounded-2xl border-2 border-purple-400/30 px-4 py-2 backdrop-blur-sm">
          <div className="text-purple-300 text-xs">Distance</div>
          <div className="text-2xl text-purple-400" style={{ textShadow: '0 0 15px rgba(168, 85, 247, 0.8)' }}>
            {distance}m
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative w-full max-w-sm aspect-[3/4] perspective-1000">
          {/* Road */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#1a0f3a] to-transparent">
            {/* Lane markers */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-1/3 w-1 h-12 bg-white/30"
                style={{
                  bottom: `${i * 15}%`,
                  animation: 'slideDown 1s linear infinite',
                  animationDelay: `${i * 0.125}s`
                }}
              />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`r${i}`}
                className="absolute right-1/3 w-1 h-12 bg-white/30"
                style={{
                  bottom: `${i * 15}%`,
                  animation: 'slideDown 1s linear infinite',
                  animationDelay: `${i * 0.125}s`
                }}
              />
            ))}
          </div>

          {/* Player */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-12 h-16">
            <div className="relative w-full h-full">
              {/* Player glow */}
              <div className="absolute inset-0 bg-cyan-400/50 blur-xl rounded-full"
                style={{ boxShadow: '0 0 40px rgba(34, 211, 238, 1)' }} />
              {/* Player shape */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-300 to-cyan-500 rounded-t-lg rounded-b-sm border-2 border-cyan-200"
                style={{ clipPath: 'polygon(50% 0%, 100% 30%, 100% 100%, 0 100%, 0 30%)' }} />
            </div>
          </div>

          {/* Obstacles */}
          <div className="absolute bottom-64 left-1/4 w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rotate-45 border-2 border-red-400"
            style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)' }} />
          
          <div className="absolute bottom-96 right-1/4 w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-purple-400"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }} />

          <div className="absolute bottom-48 left-1/3 w-0 h-0 border-l-[15px] border-l-transparent border-b-[20px] border-b-yellow-500 border-r-[15px] border-r-transparent"
            style={{ boxShadow: '0 0 20px rgba(234, 179, 8, 0.8)' }} />

          {/* Motion blur lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm" />
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent blur-sm" />
            <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent blur-sm" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-6 relative z-10">
        <button className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-2xl"
          style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}>
          ◄
        </button>
        <button className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1424] border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-2xl"
          style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}>
          ►
        </button>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(100vh);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
