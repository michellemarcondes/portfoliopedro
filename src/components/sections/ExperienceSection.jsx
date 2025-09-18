import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "TechSolutions Brasil",
      period: "2021 - Presente",
      role: "Desenvolvedor Front-end Sênior",
      description: "Desenvolvimento e manutenção de aplicações web utilizando React, TypeScript e Tailwind CSS. Implementação de novas funcionalidades e otimização de performance.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux", "Jest"]
    },
    {
      company: "Inovação Digital",
      period: "2019 - 2021",
      role: "Desenvolvedor Full Stack",
      description: "Desenvolvimento de soluções web completas, desde o back-end até o front-end. Trabalho com Node.js, Express, MongoDB e React.",
      skills: ["Node.js", "Express", "MongoDB", "React", "RESTful APIs"]
    },
    {
      company: "WebTech Soluções",
      period: "2017 - 2019",
      role: "Desenvolvedor Front-end Júnior",
      description: "Criação de interfaces responsivas e interativas utilizando HTML, CSS e JavaScript. Implementação de designs e colaboração com equipe de UX/UI.",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
    }
  ];

  return (
    <section id="experiencia" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Experiências Profissionais</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                  <p className="text-blue-600 font-medium">{exp.role}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;