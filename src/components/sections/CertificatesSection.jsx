import { useState, useRef, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine, RiAwardLine } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CertificatesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  const certificates = [
    { id: 1, title: "Certificado HTML", image: "/CERTIFICADO HTML.pdf", date: "Dezembro 2022" },
    { id: 2, title: "Certificado CSS", image: "/CERTIFICADO CSS.pdf", date: "Janeiro 2023" },
    { id: 3, title: "Certificado HTML, CSS e JS", image: "/CERTIFICADO HTML CSS E JS.pdf", date: "Março 2023" },
    { id: 4, title: "Certificado Hora do Código", image: "/CERTIFICADO HORA DO CODIGO.pdf", date: "Abril 2023" },
    { id: 5, title: "Certificado APICE", image: "/LSI-TEC APICE1 Certificado APICE.pdf", date: "Junho 2023" }
  ];

  const openModal = (certificate) => {
    setCurrentCertificate(certificate);
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
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Certificados</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
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
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {certificates.map((certificate) => (
              <SwiperSlide key={certificate.id}>
                <div 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                  onClick={() => openModal(certificate)}
                >
                  <div className="bg-primary/10 p-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-text flex items-center">
                      <RiAwardLine className="text-primary mr-2" size={20} />
                      {certificate.title}
                    </h3>
                    <span className="text-sm text-text/70">{certificate.date}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-text/80 mb-4">Clique para visualizar o certificado completo</p>
                    <div className="flex justify-end">
                      <button className="text-primary hover:text-secondary transition-colors duration-300 flex items-center">
                        Ver certificado
                        <RiArrowRightSLine className="ml-1" />
                      </button>
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
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute right-4 top-4 z-10 bg-white/80 hover:bg-primary text-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300"
              onClick={closeModal}
            >
              <RiCloseLine size={24} />
            </button>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-text mb-4 flex items-center">
                <RiAwardLine className="text-primary mr-2" size={24} />
                {currentCertificate.title}
              </h3>
              
              <div className="bg-background rounded-lg p-4 mb-4">
                <p className="text-text/80">Data de emissão: {currentCertificate.date}</p>
              </div>
              
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-text/70">Visualização do certificado: {currentCertificate.image}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;