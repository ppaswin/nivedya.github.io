
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="animate-fade-in text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
          <p className="text-lg text-slate-300 mb-8">
            Let's connect and explore opportunities together. I'm always open to discussing 
            new challenges and collaborations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:nivedyaajayan2002@gmail.com"
              className="flex items-center justify-center gap-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 hover:scale-105 transition-all duration-300"
            >
              <Mail className="text-green-400" size={24} />
              <span>Email</span>
            </a>
            <a 
              href="tel:7994479418"
              className="flex items-center justify-center gap-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 hover:scale-105 transition-all duration-300"
            >
              <Phone className="text-green-400" size={24} />
              <span>Call</span>
            </a>
            <div className="flex items-center justify-center gap-3 p-4 bg-slate-700/50 rounded-lg">
              <MapPin className="text-green-400" size={24} />
              <span>Calicut, India</span>
            </div>
          </div>
        </div>
        <div className="mt-16 text-slate-400">
          <p>&copy; 2024 Nivedya. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
