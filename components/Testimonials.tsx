import React from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Oluchi brings a rare combination of analytical rigor and creative flair. She doesn't just manage products; she champions the user's voice.",
    author: "Dr. Sarah Johnson",
    role: "Professor of Marketing, UoE"
  },
  {
    id: 2,
    quote: "Her ability to translate complex data into actionable social media strategies was pivotal for our campus rebranding campaign.",
    author: "James Chen",
    role: "Director of Student Affairs"
  },
  {
    id: 3,
    quote: "Efficient, detail-oriented, and strategic. Working with Oluchi on the EcoFin MVP was a masterclass in agile product discovery.",
    author: "Michael Ross",
    role: "Lead Developer, TechStart"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#111111] text-white flex flex-col justify-center py-20">
       <div className="max-w-[1920px] mx-auto px-6 md:px-12 w-full">
         <div className="mb-16 md:mb-24">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-purple-400">Social Proof</span>
            <h2 className="text-3xl md:text-5xl mt-4 font-serif italic text-white/90">What people say.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {TESTIMONIALS.map((t, i) => (
                <div key={t.id} className="relative p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-white/30 transition-colors group">
                    <div className="absolute top-6 left-6 text-6xl font-serif text-white/10 group-hover:text-purple-500/20 transition-colors">"</div>
                    <p className="relative z-10 text-lg md:text-xl font-light leading-relaxed text-white/80 mb-8 min-h-[120px]">
                        {t.quote}
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-80"></div>
                        <div>
                            <div className="text-sm font-bold tracking-wide">{t.author}</div>
                            <div className="text-xs text-white/50 uppercase tracking-wider mt-1">{t.role}</div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
       </div>
    </div>
  );
};