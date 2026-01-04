import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Experience } from './components/Experience';
import { Works } from './components/Works';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { NotFound } from './components/NotFound';
import { Section } from './types';

interface SnapSectionProps {
  id: Section;
  children: React.ReactNode;
  onInView: (id: Section) => void;
}

// Wrapper for Scroll Snap Sections
const SnapSection: React.FC<SnapSectionProps> = ({ 
  id, 
  children, 
  onInView 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView(id);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [id, onInView]);

  return (
    <section 
      id={id} 
      ref={ref}
      className="h-screen w-full snap-start snap-always relative overflow-hidden"
    >
      <div className="w-full h-full animate-fade-in transition-opacity duration-1000">
        {children}
      </div>
    </section>
  );
};

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HOME);
  const [view, setView] = useState<'main' | 'cv-error'>('main');
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: Section) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (view === 'cv-error') {
    return <NotFound onBack={() => setView('main')} />;
  }

  return (
    <div className="bg-neutral-900 text-white h-screen w-full overflow-hidden font-sans">
      <style>{`
        .snap-container {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: 100vh;
          scroll-behavior: smooth;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <Navigation 
        currentSection={currentSection} 
        onNavigate={scrollToSection} 
        onDownloadCV={() => setView('cv-error')}
      />
      
      <main 
        ref={containerRef}
        className="snap-container w-full"
      >
        <SnapSection id={Section.HOME} onInView={setCurrentSection}>
          <Hero />
        </SnapSection>

        <SnapSection id={Section.WORKS} onInView={setCurrentSection}>
          <Works />
        </SnapSection>

        <SnapSection id={Section.PROCESS} onInView={setCurrentSection}>
          <Process />
        </SnapSection>

        <SnapSection id={Section.EXPERIENCE} onInView={setCurrentSection}>
          <Experience />
        </SnapSection>

        <SnapSection id={Section.TESTIMONIALS} onInView={setCurrentSection}>
          <Testimonials />
        </SnapSection>

        <SnapSection id={Section.ABOUT} onInView={setCurrentSection}>
          <About />
        </SnapSection>

        <SnapSection id={Section.CONTACT} onInView={setCurrentSection}>
             <Contact />
        </SnapSection>
      </main>
    </div>
  );
}

export default App;