
import React from 'react';
import { Mail, Phone, MapPin, Flag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Nivedya
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
          Branch Relationship Executive
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-slate-400">
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
