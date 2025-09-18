import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contato</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/contato.jpg" 
              alt="Contato" 
              className="rounded-lg shadow-lg max-w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/600x400?text=Imagem+de+Contato';
              }}
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Vamos conversar!</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium">pedro.lira@exemplo.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefone</p>
                    <p className="text-gray-800 font-medium">(11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-gray-700 mb-4">Conecte-se comigo nas redes sociais:</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;