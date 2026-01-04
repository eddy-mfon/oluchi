import React from 'react';

const EXPERIENCE = [
  {
    role: "Product Strategy Intern",
    company: "TechStart Inc.",
    period: "2024 - Present",
    details: "Led the discovery phase for a new fintech MVP. Conducted 20+ user interviews.",
  },
  {
    role: "Social Media Lead",
    company: "University Brand",
    period: "2023 - 2024",
    details: "Revamped the campus digital presence. Increased engagement by 200%.",
  },
  {
    role: "Market Research Analyst",
    company: "Data Corp",
    period: "2022 - 2023",
    details: "Analyzed market trends for retail clients influencing pricing strategies.",
  }
];

export const Experience: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0f0f0f] text-white flex items-center justify-center">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        
        <div className="md:order-1">
           <h2 className="text-[12vw] md:text-[8vw] font-serif leading-[0.8] mb-8 text-white/90">
             XP.<span className="text-purple-500 block text-4xl md:text-6xl font-sans font-bold tracking-tighter mt-4">Journey</span>
           </h2>
           <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
             A timeline of my professional growth, blending academic rigor with real-world application in product and marketing.
           </p>
        </div>

        <div className="md:order-2 space-y-12">
            {EXPERIENCE.map((exp, index) => (
                <div key={index} className="group relative pl-8 border-l border-white/20 hover:border-purple-500 transition-colors duration-500">
                    <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[#0f0f0f] border border-white/20 group-hover:border-purple-500 group-hover:bg-purple-500 rounded-full transition-colors duration-500"></span>
                    <div className="text-xs font-mono text-white/40 mb-2">{exp.period}</div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-4">{exp.company}</div>
                    <p className="text-white/60 font-light">{exp.details}</p>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};