
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Communication', level: 90 },
    { name: 'Content Writing', level: 85 },
    { name: 'Sales', level: 92 },
    { name: 'Customer Service', level: 88 },
    { name: 'Relationship Management', level: 90 }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="animate-fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-green-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
