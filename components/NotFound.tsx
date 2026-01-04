import React from 'react';

interface NotFoundProps {
  onBack: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBack }) => {
  return (
    <div className="w-full h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
       {/* Background Grid - consistent with site theme */}
       <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
           style={{
             backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
             backgroundSize: '4rem 4rem',
             maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
           }}>
      </div>
      
      <div className="relative z-10">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-purple-500 mb-4 block animate-pulse">System Notice</span>
          <h1 className="text-[15vw] md:text-[10vw] font-serif leading-none tracking-tighter text-white/90">
            404
          </h1>
          <p className="text-lg md:text-xl font-light mt-6 text-white/60 font-sans tracking-wide max-w-md mx-auto">
            The requested file is not available right now.
          </p>
          
          <div className="mt-12">
            <button 
              onClick={onBack}
              className="group relative px-8 py-3 rounded-full border border-white/20 hover:border-white transition-all overflow-hidden"
            >
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-neutral-900 transition-colors">
                Go Back
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
      </div>
    </div>
  );
};