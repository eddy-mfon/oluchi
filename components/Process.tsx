import React from 'react';

const STEPS = [
    {
        id: "01",
        title: "Discovery",
        desc: "Immersion into the problem space. I use data analytics and user interviews to uncover the 'why' before defining the 'what'.",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    },
    {
        id: "02",
        title: "Strategy",
        desc: "Building the blueprint. Defining user stories, content calendars, and KPIs that align business goals with user needs.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
        id: "03",
        title: "Execution",
        desc: "Bringing ideas to life. Whether it's managing a Jira backlog or launching a social campaign, I focus on agile delivery.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
        id: "04",
        title: "Growth",
        desc: "Continuous improvement. Analyzing performance metrics to iterate on products and optimize content reach.",
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    }
];

export const Process: React.FC = () => {
    return (
        <div className="w-full h-full bg-neutral-900 text-white flex items-center justify-center p-6 relative">
            {/* Decorative Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block"></div>

            <div className="max-w-[1920px] mx-auto w-full z-10">
                <div className="mb-12 md:mb-20 px-6 md:px-12">
                     <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-purple-500 mb-2">My Approach</h2>
                     <p className="text-3xl md:text-5xl font-serif font-light">From chaos to clarity.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12">
                    {STEPS.map((step) => (
                        <div key={step.id} className="group relative bg-[#1a1a1a] p-8 md:bg-transparent md:p-0 border border-white/5 md:border-none hover:bg-[#1a1a1a] md:hover:bg-transparent transition-colors">
                            <div className="hidden md:block w-3 h-3 bg-neutral-900 border-2 border-white/20 rounded-full absolute -top-[5.5rem] left-0 group-hover:border-purple-500 group-hover:scale-125 transition-all duration-300"></div>
                            
                            <div className="text-4xl font-black text-white/5 mb-6 group-hover:text-purple-500/20 transition-colors duration-300 select-none">
                                {step.id}
                            </div>
                            
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                {step.title}
                            </h3>
                            
                            <p className="text-sm text-white/60 leading-relaxed font-light">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};