import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
  onDownloadCV: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate, onDownloadCV }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference text-white">
      <div className="flex justify-between items-center w-full max-w-[1920px] mx-auto">
        {/* Logo Area */}
        <div className="w-1/4">
          <button onClick={() => onNavigate(Section.HOME)} className="text-xs font-bold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
            Oluchi<span className="font-serif italic text-base ml-1">.</span>
          </button>
        </div>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex gap-8 lg:gap-12 text-[10px] font-bold tracking-[0.2em] uppercase absolute left-1/2 transform -translate-x-1/2 w-max">
          {[Section.WORKS, Section.PROCESS, Section.EXPERIENCE, Section.ABOUT].map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`hover:opacity-50 transition-all duration-300 ${
                currentSection === item ? 'opacity-100 underline underline-offset-8' : 'opacity-60'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="w-1/4 flex justify-end items-center gap-6">
          <button 
            onClick={onDownloadCV}
            className="hidden md:block text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white/60 transition-colors border-b border-white/0 hover:border-white/100 pb-1"
          >
            Download CV
          </button>
          
          <button 
            onClick={() => onNavigate(Section.CONTACT)}
            className="group flex items-center gap-2 border border-white/20 hover:border-white px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all backdrop-blur-sm"
          >
            Contact
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};