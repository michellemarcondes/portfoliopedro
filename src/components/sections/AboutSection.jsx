import React from 'react';
import { RiCheckboxCircleLine } from 'react-icons/ri';

const AboutSection = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'React', 'Node.js', 
    'Tailwind CSS', 'TypeScript', 'Git', 'Responsive Design'
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
                src="/foto-sobre.jpg" 
                alt="Pedro Henrique Lira" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-primary opacity-10 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <p className="text-text text-lg mb-4 leading-relaxed">
              Olá! Sou Pedro Henrique Lira, um desenvolvedor web apaixonado por criar soluções digitais inovadoras e funcionais. Com experiência em diversas tecnologias web modernas, busco sempre entregar projetos que combinam excelência técnica com uma experiência de usuário excepcional.
            </p>
            
            <p className="text-text text-lg mb-4 leading-relaxed">
              Minha jornada na programação começou há mais de 5 anos, quando descobri o poder de transformar ideias em realidade através do código. Desde então, venho aprimorando minhas habilidades em HTML, CSS, JavaScript, React e outras tecnologias front-end e back-end.
            </p>
            
            <p className="text-text text-lg mb-4 leading-relaxed">
              Acredito que o desenvolvimento web vai além de simplesmente escrever código. Trata-se de resolver problemas reais, criar experiências memoráveis e impactar positivamente a vida das pessoas através da tecnologia.
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