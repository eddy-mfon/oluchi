import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-center p-6 md:p-12 overflow-hidden bg-neutral-900 text-white pt-24 md:pt-32">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
           style={{
             backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
             backgroundSize: '4rem 4rem',
             maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
           }}>
      </div>

      {/* Gradient Spotlights for ambiance */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{animationDuration: '8s'}}></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{animationDuration: '10s'}}></div>

      {/* Main Centerpiece */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        <div className="relative">
             <h1 className={`text-[18vw] md:text-[22vw] leading-[0.8] font-serif font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                OLUCHI
             </h1>
             {/* Decorative lines around name */}
             <div className={`absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10 transition-all duration-1000 delay-500 ${mounted ? 'w-full' : 'w-0'}`}></div>
        </div>

        <div className={`mt-8 md:mt-12 flex flex-col md:flex-row items-center gap-3 md:gap-8 text-xs md:text-sm font-light tracking-[0.3em] uppercase text-white/80 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="hover:text-purple-400 transition-colors cursor-default">Product Management</span>
            <span className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="hover:text-purple-400 transition-colors cursor-default">Social Media Strategy</span>
            <span className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="hover:text-purple-400 transition-colors cursor-default">Growth</span>
        </div>
      </div>

      {/* Bottom Footer Info (Moved from top to avoid Nav clash) */}
      <div className="relative z-10 flex justify-between items-end w-full pb-4">
         
         {/* Left Info */}
         <div className={`transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Portfolio 2028</span>
            <span className="block text-[10px] text-white/30 tracking-wider mt-1">Covenant University</span>
         </div>

         {/* Center Scroll */}
         <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40">Scroll</span>
            <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down"></div>
            </div>
         </div>

         {/* Right Info */}
         <div className={`text-right transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Lagos, Nigeria</span>
             <span className="block text-[10px] text-white/30 tracking-wider mt-1">Open to Work</span>
         </div>

      </div>
      
      <style>{`
        @keyframes scrollDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
        }
        .animate-scroll-down {
            animation: scrollDown 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>
    </div>
  );
};