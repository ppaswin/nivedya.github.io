
import React from 'react';
import { Mail, Phone, MapPin, Flag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-left animate-fade-in max-w-4xl">
        <p className="text-green-400 text-xl md:text-2xl mb-4 font-mono">
          hi! my name is
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
          Nivedya
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-2">
          I am <span className="text-green-400">a Branch Relationship Executive.</span>
        </p>
        <div className="mt-12 flex flex-wrap gap-6 text-slate-400">
          <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <Mail size={20} />
            <span>nivedyaajayan2002@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <Phone size={20} />
            <span>79944 79418</span>
          </div>
          <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <MapPin size={20} />
            <span>Calicut, India</span>
          </div>
          <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <Flag size={20} />
            <span>India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
