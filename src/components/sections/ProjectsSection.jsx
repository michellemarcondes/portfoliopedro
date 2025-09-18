import { useState, useRef, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine, RiCodeSSlashLine, RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  const projects = [
    { id: 1, title: "Calculadora", image: "/CALCULADORA.png", description: "Aplicação de calculadora com interface intuitiva", tech: ["HTML", "CSS", "JavaScript"] },
    { id: 2, title: "Acender LED", image: "/ACENDERLED.png", description: "Projeto de automação para controle de LED", tech: ["Arduino", "C++", "IoT"] },
    { id: 3, title: "Ajuda ao Idoso", image: "/AJUDAIDOSOTELA.png", description: "Aplicativo de assistência para idosos", tech: ["React", "Node.js", "MongoDB"] },
    { id: 4, title: "Catraca", image: "/CATRACA.png", description: "Sistema de controle de acesso com catraca eletrônica", tech: ["Python", "Raspberry Pi", "RFID"] },
    { id: 5, title: "Clima", image: "/CLIMATELA.png", description: "Aplicação de previsão do tempo", tech: ["React", "API REST", "Tailwind CSS"] },
    { id: 6, title: "Semáforo", image: "/SEMAFARO.png", description: "Sistema de controle de semáforo inteligente", tech: ["Arduino", "C++", "Sensores"] },
    { id: 7, title: "Sensor", image: "/SENSOR.png", description: "Projeto com sensores IoT", tech: ["ESP8266", "MQTT", "Node.js"] },
    { id: 8, title: "Média", image: "/média.png", description: "Calculadora de médias escolares", tech: ["HTML", "CSS", "JavaScript"] },
    { id: 9, title: "Par ou Ímpar", image: "/par ou ímpar.png", description: "Jogo de par ou ímpar", tech: ["JavaScript", "HTML", "CSS"] },
    { id: 10, title: "Primos", image: "/primos.png", description: "Verificador de números primos", tech: ["JavaScript", "HTML", "CSS"] }
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Projetos</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3.5,
              },
            }}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer aspect-video"
                  onClick={() => openModal(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button 
            ref={navigationPrevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary text-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 -ml-5"
          >
            <RiArrowLeftSLine size={24} />
          </button>
          <button 
            ref={navigationNextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary text-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 -mr-5"
          >
            <RiArrowRightSLine size={24} />
          </button>
        </div>
      </div>
      
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute right-4 top-4 z-10 bg-white/80 hover:bg-primary text-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300"
              onClick={closeModal}
            >
              <RiCloseLine size={24} />
            </button>
            
            <div className="p-0">
              <div className="relative h-64 md:h-80">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-text mb-6 leading-relaxed">{currentProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text mb-3 flex items-center">
                    <RiCodeSSlashLine className="text-primary mr-2" size={20} />
                    Tecnologias utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center"
                  >
                    <RiGithubLine className="mr-2" size={20} />
                    Ver código
                  </a>
                  <a 
                    href="#" 
                    className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center"
                  >
                    <RiExternalLinkLine className="mr-2" size={20} />
                    Ver projeto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;