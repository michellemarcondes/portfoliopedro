import { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CertificatesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);
  const modalSwiperRef = useRef(null);
  
  const certificates = [
    { id: 1, title: "Certificado HTML", image: "/CERTIFICADO HTML.pdf" },
    { id: 2, title: "Certificado CSS", image: "/CERTIFICADO CSS.pdf" },
    { id: 3, title: "Certificado HTML, CSS e JS", image: "/CERTIFICADO HTML CSS E JS.pdf" },
    { id: 4, title: "Certificado Hora do Código", image: "/CERTIFICADO HORA DO CODIGO.pdf" },
    { id: 5, title: "Certificado APICE", image: "/LSI-TEC APICE1 Certificado APICE.pdf" }
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

  return (
    <section id="certificados" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Certificados</h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="certificate-swiper"
        >
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <div 
                className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.03]"
                onClick={() => openModal(certificate)}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{certificate.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {modalOpen && currentCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            <button 
              className="absolute top-4 right-4 text-gray-800 hover:text-red-600 z-10"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            
            <div className="p-4">
              <h3 className="text-xl font-bold mb-4">{currentCertificate.title}</h3>
              
              <div className="relative">
                <Swiper
                  ref={modalSwiperRef}
                  modules={[Navigation, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  initialSlide={certificates.findIndex(c => c.id === currentCertificate.id)}
                  pagination={{ clickable: true }}
                  className="modal-swiper"
                >
                  {certificates.map((certificate) => (
                    <SwiperSlide key={certificate.id}>
                      <div className="flex justify-center">
                        <img 
                          src={certificate.image} 
                          alt={certificate.title}
                          className="max-h-[70vh] object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                <button 
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-blue-600 z-10"
                  onClick={() => modalSwiperRef.current?.swiper.slidePrev()}
                >
                  <FaArrowLeft size={20} />
                </button>
                
                <button 
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-blue-600 z-10"
                  onClick={() => modalSwiperRef.current?.swiper.slideNext()}
                >
                  <FaArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;