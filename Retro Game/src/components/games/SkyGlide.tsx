import { ArrowLeft, Pause } from 'lucide-react';
import { useState } from 'react';

interface SkyGlideProps {
  onBack: () => void;
}

export default function SkyGlide({ onBack }: SkyGlideProps) {
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-blue-200 to-purple-200 p-4 flex flex-col relative overflow-hidden">
      {/* Clouds Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/40 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-40 h-20 bg-white/30 rounded-full blur-xl" />
        <div className="absolute top-60 left-1/3 w-36 h-18 bg-white/35 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-10 w-44 h-22 bg-white/40 rounded-full blur-xl" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-white/60 border-2 border-pink-300/50 flex items-center justify-center backdrop-blur-sm">
          <ArrowLeft className="w-5 h-5 text-pink-500" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Sky Glide
        </div>
        <button className="w-10 h-10 rounded-xl bg-white/60 border-2 border-blue-300/50 flex items-center justify-center backdrop-blur-sm">
          <Pause className="w-5 h-5 text-blue-500" />
        </button>
      </div>

      {/* Score */}
      <div className="text-center mb-6 relative z-10">
        <div className="text-5xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
          style={{ 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(236, 72, 153, 0.3)'
          }}>
          {score}
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden">
          {/* Bird */}
          <div className="absolute left-24 top-1/3 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center border-4 border-white/50"
            style={{ boxShadow: '0 0 25px rgba(253, 224, 71, 0.8), 0 5px 15px rgba(0, 0, 0, 0.2)' }}>
            <div className="w-3 h-3 rounded-full bg-gray-800 absolute left-3 top-4" />
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-orange-400 border-r-[8px] border-r-transparent absolute -right-2 top-6" />
          </div>

          {/* Pipes */}
          <div className="absolute right-20 top-0 w-16">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-2xl border-4 border-cyan-300/50 h-40"
              style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }} />
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl h-4 -mx-2"
              style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.6)' }} />
          </div>

          <div className="absolute right-20 bottom-0 w-16">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-b-2xl h-4 -mx-2"
              style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.6)' }} />
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-2xl border-4 border-cyan-300/50 h-48"
              style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }} />
          </div>

          {/* Second set of pipes */}
          <div className="absolute right-64 top-0 w-16">
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-b-2xl border-4 border-pink-300/50 h-32"
              style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }} />
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-2xl h-4 -mx-2"
              style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.6)' }} />
          </div>

          <div className="absolute right-64 bottom-0 w-16">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-b-2xl h-4 -mx-2"
              style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.6)' }} />
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-t-2xl border-4 border-pink-300/50 h-56"
              style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }} />
          </div>
        </div>
      </div>

      {/* Tap to Play */}
      <div className="text-center mt-6 relative z-10">
        <button className="bg-gradient-to-r from-pink-400 to-blue-500 text-white px-8 py-3 rounded-full border-2 border-white/50 transition-transform hover:scale-105 active:scale-95"
          style={{ boxShadow: '0 5px 20px rgba(236, 72, 153, 0.4)' }}>
          Tap to Fly
        </button>
      </div>
    </div>
  );
}
