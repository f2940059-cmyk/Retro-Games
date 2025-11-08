import { ArrowLeft, Pause } from 'lucide-react';
import { useState } from 'react';

interface SoftSkyProps {
  onBack: () => void;
}

export default function SoftSky({ onBack }: SoftSkyProps) {
  const [score, setScore] = useState(0);

  const platforms = [
    { x: 50, y: 80, color: 'from-blue-300 to-blue-400' },
    { x: 30, y: 60, color: 'from-mint-300 to-green-300' },
    { x: 70, y: 45, color: 'from-yellow-300 to-yellow-400' },
    { x: 40, y: 30, color: 'from-pink-300 to-pink-400' },
    { x: 65, y: 15, color: 'from-purple-300 to-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-cyan-100 to-mint-200 p-4 flex flex-col relative overflow-hidden">
      {/* Soft clouds */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 w-24 h-12 bg-white/50 rounded-full blur-md" />
        <div className="absolute top-20 right-10 w-32 h-14 bg-white/40 rounded-full blur-md" />
        <div className="absolute top-40 left-1/3 w-28 h-12 bg-white/45 rounded-full blur-md" />
        <div className="absolute bottom-60 right-1/4 w-36 h-16 bg-white/50 rounded-full blur-md" />
        <div className="absolute bottom-80 left-1/4 w-30 h-14 bg-white/40 rounded-full blur-md" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-white/70 border-2 border-blue-300/50 flex items-center justify-center backdrop-blur-sm">
          <ArrowLeft className="w-5 h-5 text-blue-500" />
        </button>
        <div className="text-2xl bg-gradient-to-r from-blue-400 via-mint-400 to-yellow-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Soft Sky
        </div>
        <button className="w-10 h-10 rounded-xl bg-white/70 border-2 border-mint-300/50 flex items-center justify-center backdrop-blur-sm">
          <Pause className="w-5 h-5 text-mint-500" />
        </button>
      </div>

      {/* Score */}
      <div className="text-center mb-6 relative z-10">
        <div className="text-5xl bg-gradient-to-r from-blue-500 to-mint-500 bg-clip-text text-transparent"
          style={{ 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
          }}>
          {score}
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative w-full max-w-sm aspect-[3/4]">
          {/* Character */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-12 h-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-300 to-mint-400 border-4 border-white/80 flex items-center justify-center"
              style={{ boxShadow: '0 5px 20px rgba(74, 222, 128, 0.5)' }}>
              <div className="text-2xl">🐸</div>
            </div>
            {/* Spring animation hint */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
              <div className="w-4 h-1 bg-gray-400/60 rounded-full" />
              <div className="w-3 h-1 bg-gray-400/50 rounded-full" />
              <div className="w-2 h-1 bg-gray-400/40 rounded-full" />
            </div>
          </div>

          {/* Platforms */}
          {platforms.map((platform, i) => (
            <div
              key={i}
              className={`absolute w-20 h-3 rounded-full bg-gradient-to-r ${platform.color} border-2 border-white/60`}
              style={{
                left: `${platform.x}%`,
                top: `${platform.y}%`,
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)'
              }}
            />
          ))}

          {/* Moving platforms */}
          <div className="absolute left-[20%] top-[50%] w-16 h-3 rounded-full bg-gradient-to-r from-orange-300 to-orange-400 border-2 border-white/60"
            style={{ boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)' }} />
          
          <div className="absolute left-[55%] top-[65%] w-24 h-3 rounded-full bg-gradient-to-r from-indigo-300 to-indigo-400 border-2 border-white/60"
            style={{ boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)' }} />
        </div>
      </div>

      {/* Tap instruction */}
      <div className="text-center mt-6 relative z-10">
        <div className="bg-white/70 text-blue-600 px-6 py-2 rounded-full border-2 border-blue-300/50 inline-block backdrop-blur-sm">
          Tap to Jump
        </div>
      </div>
    </div>
  );
}
