import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="w-full h-full bg-white text-black flex flex-col justify-center items-center p-6 relative overflow-hidden">
         
         {/* Minimalist Heading */}
         <div className="relative z-10 text-center">
             <h2 className="text-[20vw] font-serif leading-none tracking-tighter select-none hover:italic transition-all duration-500 cursor-default">
                 HELLO
             </h2>
             <p className="text-sm md:text-xl font-light mt-4 tracking-wide text-neutral-600">
                Let's build something remarkable.
             </p>
         </div>

         {/* Details Grid */}
         <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left z-10 max-w-4xl w-full px-8 border-t border-neutral-100 pt-12">
            
            <div className="flex flex-col items-center md:items-start group">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-4 group-hover:text-black transition-colors">Contact</span>
                <a href="mailto:oluchi@example.com" className="text-xl md:text-2xl font-medium border-b border-transparent hover:border-black transition-all">
                    oluchi@example.com
                </a>
                <a href="tel:+2348012345678" className="text-lg md:text-xl font-light text-neutral-500 mt-2 hover:text-black transition-colors">
                    +234 (801) 234-5678
                </a>
            </div>

            <div className="flex flex-col items-center md:items-start group">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-4 group-hover:text-black transition-colors">Socials</span>
                <div className="flex flex-col gap-2">
                    {['LinkedIn', 'Twitter / X', 'Instagram'].map(social => (
                        <a key={social} href="#" className="text-lg md:text-xl font-light text-neutral-600 hover:text-black hover:translate-x-1 transition-all">
                            {social}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center md:items-start group">
                 <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-4 group-hover:text-black transition-colors">Status</span>
                 <p className="text-lg md:text-xl font-medium">Open for work</p>
                 <p className="text-sm text-neutral-500 mt-2">Lagos, Nigeria (WAT)</p>
                 <a href="#" className="mt-4 text-xs font-bold uppercase underline underline-offset-4 hover:text-purple-600 transition-colors">Download Resume</a>
            </div>

         </div>
         
         {/* Footer */}
         <footer className="absolute bottom-6 w-full text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-300">
                © 2025 Oluchi — Digital Portfolio
            </span>
         </footer>
    </div>
  );
};