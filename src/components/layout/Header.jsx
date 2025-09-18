import { useState, useEffect } from 'react';
import { RiInstagramLine, RiLinkedinBoxFill, RiMenuLine, RiCloseLine, RiDownloadLine } from 'react-icons/ri';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Pedro<span className="text-primary">Lira</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-text hover:text-primary transition-colors duration-300 font-medium">Início</a>
          <a href="#about" className="text-text hover:text-primary transition-colors duration-300 font-medium">Sobre</a>
          <a href="#experience" className="text-text hover:text-primary transition-colors duration-300 font-medium">Experiência</a>
          <a href="#certificates" className="text-text hover:text-primary transition-colors duration-300 font-medium">Certificados</a>
          <a href="#projects" className="text-text hover:text-primary transition-colors duration-300 font-medium">Projetos</a>
          <a href="#contact" className="text-text hover:text-primary transition-colors duration-300 font-medium">Contato</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors duration-300">
            <RiInstagramLine size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors duration-300">
            <RiLinkedinBoxFill size={24} />
          </a>
          <a 
            href="/curriculo.pdf" 
            download="Pedro_Henrique_Lira_CV.pdf"
            className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
          >
            <RiDownloadLine className="mr-2" /> Currículo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold">
              Pedro<span className="text-primary">Lira</span>
            </div>
            <button onClick={toggleMenu} className="focus:outline-none">
              <RiCloseLine size={28} className="text-text" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-lg">
            <a href="#home" className="text-text hover:text-primary transition-colors duration-300" onClick={toggleMenu}>Início</a>
            <a href="#about" className="text-text hover:text-primary transition-colors duration-300" onClick={toggleMenu}>Sobre</a>
            <a href="#experience" className="text-text hover:text-primary transition-colors duration-300" onClick={toggleMenu}>Experiência</a>
            <a href="#certificates" className="text-text hover:text-primary transition-colors duration-300" onClick={toggleMenu}>Certificados</a>
            <a href="#projects" className="text-text hover:text-primary transition-colors duration-300" onClick={toggleMenu}>Projetos</a>
            <a href="#contact" className="text-text hover:text-primary transition-colors duration-300" onClick={toggleMenu}>Contato</a>
          </nav>
          
          <div className="mt-auto flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors duration-300">
              <RiInstagramLine size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors duration-300">
              <RiLinkedinBoxFill size={24} />
            </a>
            <a 
              href="/curriculo.pdf" 
              download="Pedro_Henrique_Lira_CV.pdf"
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
            >
              <RiDownloadLine className="mr-2" /> Currículo
            </a>
          </div>
        </div>
      </div>
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