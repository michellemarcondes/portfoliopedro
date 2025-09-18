import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Sobre Mim</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <img 
              src="/foto-sobre.jpg" 
              alt="Pedro Henrique Lira" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          
          <div className="md:w-3/5 md:pl-12">
            <p className="text-gray-700 mb-4">
              Olá! Sou Pedro Henrique Lira, um desenvolvedor web apaixonado por criar soluções digitais inovadoras e funcionais. Com experiência em diversas tecnologias web modernas, busco sempre entregar projetos que combinam excelência técnica com uma experiência de usuário excepcional.
            </p>
            
            <p className="text-gray-700 mb-4">
              Minha jornada na programação começou há mais de 5 anos, quando descobri o poder de transformar ideias em realidade através do código. Desde então, venho aprimorando minhas habilidades em HTML, CSS, JavaScript, React e outras tecnologias front-end e back-end.
            </p>
            
            <p className="text-gray-700 mb-4">
              Acredito que o desenvolvimento web vai além de simplesmente escrever código. Trata-se de resolver problemas reais, criar experiências memoráveis e impactar positivamente a vida das pessoas através da tecnologia.
            </p>
            
            <p className="text-gray-700 mb-4">
              Quando não estou codificando, gosto de explorar novas tecnologias, contribuir para projetos open source e compartilhar conhecimento com a comunidade de desenvolvedores. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
            </p>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <span className="block text-blue-600 font-bold">HTML/CSS</span>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <span className="block text-blue-600 font-bold">JavaScript</span>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <span className="block text-blue-600 font-bold">React</span>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <span className="block text-blue-600 font-bold">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;