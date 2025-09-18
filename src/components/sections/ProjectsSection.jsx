import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  
  const projects = [
    { id: 1, title: "Calculadora", image: "/CALCULADORA.png", description: "Aplicação de calculadora com interface intuitiva" },
    { id: 2, title: "Acender LED", image: "/ACENDERLED.png", description: "Projeto de automação para controle de LED" },
    { id: 3, title: "Ajuda ao Idoso", image: "/AJUDAIDOSOTELA.png", description: "Aplicativo de assistência para idosos" },
    { id: 4, title: "Catraca", image: "/CATRACA.png", description: "Sistema de controle de acesso com catraca eletrônica" },
    { id: 5, title: "Clima", image: "/CLIMATELA.png", description: "Aplicação de previsão do tempo" },
    { id: 6, title: "Semáforo", image: "/SEMAFARO.png", description: "Sistema de controle de semáforo inteligente" },
    { id: 7, title: "Sensor", image: "/SENSOR.png", description: "Projeto com sensores IoT" },
    { id: 8, title: "Média", image: "/média.png", description: "Calculadora de médias escolares" },
    { id: 9, title: "Par ou Ímpar", image: "/par ou ímpar.png", description: "Jogo de par ou ímpar" },
    { id: 10, title: "Primos", image: "/primos.png", description: "Verificador de números primos" }
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

  return (
    <section id="projetos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Projetos</h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="project-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.05]"
                onClick={() => openModal(project)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {modalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto relative">
            <button 
              className="absolute top-4 right-4 text-gray-800 hover:text-red-600 z-10"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{currentProject.title}</h3>
              
              <div className="mb-6">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <p className="text-gray-700">{currentProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;