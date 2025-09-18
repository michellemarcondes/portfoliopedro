import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-gray-800 hover:text-blue-600 font-medium">Início</a>
          <a href="#sobre" className="text-gray-800 hover:text-blue-600 font-medium">Sobre</a>
          <a href="#experiencia" className="text-gray-800 hover:text-blue-600 font-medium">Experiência</a>
          <a href="#certificados" className="text-gray-800 hover:text-blue-600 font-medium">Certificados</a>
          <a href="#projetos" className="text-gray-800 hover:text-blue-600 font-medium">Projetos</a>
          <a href="#contato" className="text-gray-800 hover:text-blue-600 font-medium">Contato</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <FaLinkedin size={20} />
          </a>
          <a 
            href="/curriculo.pdf" 
            download 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Baixar Currículo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a href="#inicio" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Início</a>
              <a href="#sobre" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Sobre</a>
              <a href="#experiencia" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Experiência</a>
              <a href="#certificados" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Certificados</a>
              <a href="#projetos" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Projetos</a>
              <a href="#contato" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Contato</a>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a 
                href="/curriculo.pdf" 
                download 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Baixar Currículo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;