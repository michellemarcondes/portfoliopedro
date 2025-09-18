import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pedro Henrique Lira
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 mb-6">
              Desenvolvedor Web & Especialista em Tecnologia
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Transformando ideias em soluções digitais inovadoras. Especializado em desenvolvimento web 
              e apaixonado por criar experiências digitais impactantes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contato" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Entre em Contato
              </a>
              <a 
                href="#projetos" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition duration-300"
              >
                Ver Projetos
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="/foto-hero.jpg" 
                alt="Pedro Henrique Lira" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-blue-200 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-indigo-300 rounded-full opacity-20 z-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-blue-300 rounded-lg -rotate-3 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;