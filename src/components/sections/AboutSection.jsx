import React from 'react';
import { RiCheckboxCircleLine } from 'react-icons/ri';

const AboutSection = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'MIT APP Inventor', 'Arduino', 
    'Linguagem C',
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Sobre Mim</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={`logofb.png`} 
                alt="Pedro Henrique Lira" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-primary opacity-10 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <p className="text-text text-lg mb-4 leading-relaxed">
              Sou Pedro Lira, estudante de Campinas apaixonado por tecnologia e marketing digital. Desde cedo aprendi sobre organização e responsabilidade como jovem aprendiz em almoxarifado, e hoje sigo construindo minha trajetória como futuro profissional da área.

            </p>
            <p className="text-text text-lg mb-4 leading-relaxed">
            Minha formação na Fundação Bradesco tem sido fundamental para desenvolver projetos práticos, como a criação de um Snake Game no MIT App Inventor e um sistema de cancela automática com Arduino. Essas experiências reforçaram meu raciocínio lógico, minha criatividade e o trabalho em equipe.              
            
            </p>
            
            <p className="text-text text-lg mb-4 leading-relaxed">
            Tenho conhecimentos em Excel, HTML, CSS, JavaScript e C#, além de experiência com funil de vendas orgânico, o que me permite unir tecnologia e estratégias digitais de forma versátil e inovadora. Meu diferencial está na proatividade e na capacidade de aprender e me adaptar rapidamente a novos desafios.
            
            </p>
            
            <p className="text-text text-lg mb-4 leading-relaxed">
            Meus objetivos são claros: no curto prazo, aprofundar minha especialização em programação e marketing digital; no longo prazo, consolidar-me como um profissional de referência, criando soluções que unam tecnologia e estratégia. Fora dos estudos, gosto de jogar, estar com minha namorada e amigos e explorar novos conhecimentos.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-text mb-4">Habilidades</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <RiCheckboxCircleLine className="text-accent mr-2" size={20} />
                    <span className="text-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;