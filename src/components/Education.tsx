
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'BA English',
      institution: 'Calicut University',
      location: 'Calicut',
      period: '2019 – 2022'
    },
    {
      degree: 'Higher Secondary - Science',
      institution: 'Kerala Board',
      location: 'Calicut',
      period: '2017 – 2019'
    }
  ];

  const certificates = [
    {
      title: 'Rising Star',
      description: 'Recognized for exceptional performance among new joiners in the Thiruvananthapuram Circle (Banca Channel) as an Associate of Innovsource Services Pvt. Ltd'
    },
    {
      title: 'Star Of The Quarter',
      description: 'Recognized for being among the top 15 performers in sales within the Thiruvananthapuram Circle (Banca Channel) as an Associate of Innovsource Services Pvt. Ltd.'
    },
    {
      title: 'Module Best Seller',
      description: 'Recognize sales performance among top 3 in kozhikode module an association of innovsourse service Pvt.Ltd'
    }
  ];

  const languages = ['Malayalam', 'English', 'Hindi'];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="animate-fade-in space-y-16">
        {/* Education */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="text-green-400 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-green-400">{edu.institution}</p>
                      <p className="text-slate-400">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                    <Calendar size={18} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Certificates & Awards
          </h2>
          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-3">{cert.title}</h3>
                <p className="text-slate-300 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Languages
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700 hover:border-green-400 hover:text-green-400 transition-colors">
                <span className="font-medium">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
