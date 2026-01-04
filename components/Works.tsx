import React, { useState } from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "EcoFin App",
    category: "Product Management",
    year: "2024",
    image: "https://picsum.photos/seed/ecofin/1600/1200",
    description: "Led end-to-end product discovery for a sustainable finance platform. Created user personas, defined the MVP feature set, and managed the backlog in Jira.",
    tags: ["User Stories", "Figma", "Strategy", "Jira"]
  },
  {
    id: "02",
    title: "Urban Wear",
    category: "Social Growth",
    year: "2023",
    image: "https://picsum.photos/seed/urban/1600/1200",
    description: "Designed a comprehensive Instagram growth strategy that increased engagement by 200% in 3 months. Partnered with 15 micro-influencers to drive organic traffic.",
    tags: ["Content Strategy", "Analytics", "Influencer Marketing", "Canva"]
  },
  {
    id: "03",
    title: "Campus Connect",
    category: "Market Research",
    year: "2023",
    image: "https://picsum.photos/seed/campus/1600/1200",
    description: "Conducted a qualitative research study with 500+ participants to identify communication gaps on campus. Presented findings that led to a new university app module.",
    tags: ["Surveys", "Data Visualization", "Report Writing", "Excel"]
  },
  {
    id: "04",
    title: "Naija Tech Summit",
    category: "Event Strategy",
    year: "2024",
    image: "https://picsum.photos/seed/summit/1600/1200",
    description: "Coordinated digital marketing for a student-led tech conference. Managed social channels, created countdown content, and analyzed attendee feedback.",
    tags: ["Social Media", "Event Management", "Copywriting", "Canva"]
  },
  {
    id: "05",
    title: "GreenGrocer",
    category: "Product Analysis",
    year: "2023",
    image: "https://picsum.photos/seed/grocer/1600/1200",
    description: "Performed a SWOT analysis for a local grocery delivery startup. Proposed a new subscription model that was projected to increase ARR by 15%.",
    tags: ["Market Analysis", "Business Strategy", "Excel", "Presentation"]
  }
];

export const Works: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleInteraction = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <div className="relative w-full h-full bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background Image Reveal */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none transition-opacity duration-700">
         {PROJECTS.map((project, index) => (
           <img
             key={project.id}
             src={project.image}
             alt=""
             className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 transform scale-105 ${
               activeProject === index ? 'opacity-100 scale-100' : 'opacity-0'
             }`}
           />
         ))}
         <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Scrollable Content Container */}
      <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden px-4 md:px-12 py-24 scrollbar-hide">
        <div className="max-w-[1920px] mx-auto min-h-full flex flex-col justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-12 mb-8 shrink-0 px-2 md:px-0">
                <div className="md:col-span-12 border-b border-white/20 pb-4 flex justify-between items-end">
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">Selected Works</h2>
                    <span className="text-[10px] text-white/40 hidden md:block">Hover to expand</span>
                    <span className="text-[10px] text-white/40 md:hidden">Tap to expand</span>
                </div>
            </div>

            <div className="flex flex-col pb-20 space-y-2">
              {PROJECTS.map((project, index) => (
                <div 
                  key={project.id}
                  className={`group relative border-b border-white/10 transition-all duration-500 rounded-lg overflow-hidden
                    ${activeProject === index 
                        ? 'bg-white/5 border-transparent shadow-2xl scale-[1.02] z-20' 
                        : 'hover:bg-white/5 hover:border-white/20 hover:scale-[1.01] z-10'
                    }
                  `}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                  onClick={() => handleInteraction(index)}
                >
                  <div className="p-4 md:p-8 cursor-pointer">
                      <div className="grid grid-cols-12 items-baseline gap-y-2 gap-x-4">
                        
                        {/* ID */}
                        <div className="col-span-2 md:col-span-1">
                          <span className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${activeProject === index ? 'text-purple-400' : 'text-white/30'}`}>
                            {project.id}
                          </span>
                        </div>

                        {/* Title & Year */}
                        <div className="col-span-10 md:col-span-7 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                           <h3 className={`text-2xl md:text-5xl font-light tracking-tight transition-all duration-300 ${activeProject === index ? 'translate-x-2 italic text-white' : 'text-white/80'}`}>
                             {project.title}
                           </h3>
                           {/* Prominent Year Display */}
                           <span className={`inline-flex items-center justify-center text-[10px] md:text-xs font-mono py-1 px-3 rounded-full border w-fit transition-all duration-300 
                                ${activeProject === index 
                                    ? 'border-purple-500/50 text-purple-300 bg-purple-500/10' 
                                    : 'border-white/10 text-white/40 group-hover:border-white/30'}`}>
                                {project.year}
                           </span>
                        </div>

                        {/* Category (Initial View) */}
                        <div className="col-span-12 md:col-span-4 mt-2 md:mt-0 md:text-right flex justify-start md:justify-end items-center">
                             <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${activeProject === index ? 'text-purple-400' : 'text-white/60'}`}>
                                 {project.category}
                             </span>
                        </div>
                      </div>

                      {/* Dropdown Details */}
                      <div 
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            activeProject === index ? 'grid-rows-[1fr] opacity-100 mt-6 md:mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'
                        }`}
                      >
                         <div className="overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pl-0 md:pl-[calc(8.33%+1rem)] border-t border-white/5 pt-6 md:pt-0 md:border-t-0">
                                <div className="md:col-span-7">
                                    <p className="text-sm md:text-lg font-light text-white/70 leading-relaxed max-w-2xl">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="md:col-span-4 flex flex-col items-start md:items-end gap-3">
                                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-white/10 border border-white/5 px-3 py-1.5 rounded-full uppercase tracking-wider text-white/80 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300 shadow-sm cursor-default">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                         </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
      
      <style>{`
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
          .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
      `}</style>
    </div>
  );
};