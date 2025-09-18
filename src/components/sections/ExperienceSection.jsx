import React from 'react';
import { RiBriefcaseLine, RiTimeLine, RiCheckboxCircleFill } from 'react-icons/ri';

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
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Experiências Profissionais</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-background p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-primary">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-text flex items-center">
                    <RiBriefcaseLine className="text-primary mr-2" size={24} />
                    {exp.company}
                  </h3>
                  <p className="text-primary font-medium mt-1">{exp.role}</p>
                </div>
                <span className="text-text/70 mt-2 md:mt-0 flex items-center">
                  <RiTimeLine className="mr-1" />
                  {exp.period}
                </span>
              </div>
              
              <p className="text-text mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center"
                  >
                    <RiCheckboxCircleFill className="mr-1" size={14} />
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