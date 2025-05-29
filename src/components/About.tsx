
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="animate-fade-in">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
          <p className="text-lg text-slate-300 leading-relaxed">
            I am a dedicated Branch Relationship Executive at Associate of Innovsource Services Pvt. Ltd., 
            currently working as an SBI Credit Card Seller. I leverage my expertise in customer service and 
            sales to drive exceptional results while building strong relationships with clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
