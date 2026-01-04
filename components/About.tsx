import React from 'react';

export const About: React.FC = () => {
    return (
        <div className="w-full h-full bg-[#050505] text-white flex items-center justify-center p-8 md:p-24 relative overflow-hidden">
             {/* Subtle Splash for About Bg */}
             <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{animationDuration: '10s'}} />
             
             <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                
                {/* Left Column: Narrative */}
                <div className="space-y-8">
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-purple-500 mb-6 block">About Me</span>
                        <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                            "Great products are born at the intersection of data, empathy, and storytelling."
                        </h2>
                    </div>
                    
                    <div className="space-y-6 text-white/70 font-light leading-relaxed text-sm md:text-base">
                        <p>
                            My journey began in the bustling markets of <strong>Lagos, Nigeria</strong>, observing how commerce is fundamentally built on relationships and trust. I've translated that human-centric perspective into the digital world.
                        </p>
                        <p>
                            As a Business Administration student, I don't just look at features; I look at the P&L, the user retention, and the brand voice. Whether I'm managing a product backlog or curating a social media feed, my goal is the same: <strong>Growth through connection.</strong>
                        </p>
                    </div>

                    <div className="pt-4">
                         <img src="https://picsum.photos/seed/oluchi_sig/200/80" alt="Signature" className="opacity-50 invert" />
                    </div>
                </div>

                {/* Right Column: Details & Toolkit */}
                <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-8 md:pl-16">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Education</h4>
                        <p className="text-sm font-medium">B.S. Business Admin</p>
                        <p className="text-xs text-white/50 mt-1">Covenant University</p>
                        <p className="text-xs text-white/50">Class of 2028</p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Focus</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>Product Management</li>
                            <li>Social Media Strategy</li>
                            <li>Brand Storytelling</li>
                        </ul>
                    </div>

                    <div className="col-span-2 pt-8 border-t border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">The Toolkit</h4>
                        <div className="flex flex-wrap gap-2">
                             {['Canva', 'Jira', 'Figma', 'React Basics', 'Google Analytics', 'Excel', 'Notion', 'Trello'].map(tool => (
                                 <span key={tool} className="text-[10px] uppercase tracking-wider border border-white/20 px-3 py-1 rounded-full text-white/60 hover:text-white hover:border-white transition-colors cursor-default">
                                     {tool}
                                 </span>
                             ))}
                        </div>
                    </div>

                    <div className="col-span-2 pt-8">
                         <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Interests</h4>
                         <p className="text-xs text-white/60 leading-relaxed">
                            Fintech in Emerging Markets, Afrobeats, Minimalist Design, Sustainable Fashion.
                         </p>
                    </div>
                </div>
             </div>
        </div>
    );
};