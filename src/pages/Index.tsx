
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import NetworkBackground from '@/components/NetworkBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <NetworkBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
