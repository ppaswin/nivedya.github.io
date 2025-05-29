
import React from 'react';
import { Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="animate-fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Branch Relationship Executive</h3>
              <p className="text-green-400 font-medium">Associate of Innovsource Services Pvt. Ltd.</p>
            </div>
            <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
              <Calendar size={18} />
              <span>11/2023 – present</span>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Currently working as an SBI Credit Card Seller, leveraging my customer service and sales 
            expertise to drive results and build strong client relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
