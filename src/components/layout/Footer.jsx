import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© 2024 Pedro Henrique Lira. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;