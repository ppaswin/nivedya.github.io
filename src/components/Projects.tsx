
import React from 'react';
import { BookOpen } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="animate-fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition-colors">
          <div className="flex items-start gap-4">
            <BookOpen className="text-green-400 mt-1" size={24} />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Academic Project</h3>
              <p className="text-slate-300 leading-relaxed">
                "Plight of Women in our Country was very pathetic. But it is changing while women gains job and they start 
                earning. By the earning, women not only get money but also the guts to live their life their own way."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
