import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-background relative overflow-hidden">
      {/* Padrão geométrico de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 z-10" data-aos="fade-right" data-aos-delay="200">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text mb-6 animate-fade-in">
              Pedro Henrique Lira
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Desenvolvedor Web & Especialista em Tecnologia
            </h2>
            <p className="text-text text-lg mb-10 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Transformando ideias em soluções digitais inovadoras. Especializado em desenvolvimento web 
              e apaixonado por criar experiências digitais impactantes.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a 
                href="#contact" 
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center"
                data-aos="zoom-in" data-aos-delay="400"
              >
                Entre em Contato <RiArrowRightLine className="ml-2" />
              </a>
              <a 
                href="#projects" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                data-aos="zoom-in" data-aos-delay="600"
              >
                Ver Projetos
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative z-10" data-aos="fade-left" data-aos-delay="400">
            <div className="relative animate-float animate-pulse-slow">
              <img 
                src="/foto-hero.jpg" 
                alt="Pedro Henrique Lira" 
                className="rounded-xl shadow-xl max-w-full h-auto"
              />
              {/* Borda decorativa */}
              <div className="absolute -top-3 -right-3 -bottom-3 -left-3 border-2 border-primary rounded-xl -z-10"></div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-10 z-0 animate-bounce-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-10 z-0 animate-bounce-slow"></div>
            <div className="absolute top-1/4 -right-6 w-12 h-12 bg-accent rounded-full opacity-20 z-0"></div>
            <div className="absolute bottom-1/4 -left-6 w-12 h-12 bg-primary rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;