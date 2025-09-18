import { RiHeartFill, RiCopyrightLine, RiArrowUpLine, RiInstagramLine, RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-text text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center text-sm md:text-base">
              <RiCopyrightLine className="mr-1" /> {new Date().getFullYear()} Pedro Henrique Lira. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <RiInstagramLine size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <RiLinkedinBoxLine size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <RiGithubLine size={24} />
              </a>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-primary hover:bg-secondary text-white p-2 rounded-full transition-colors duration-300"
            aria-label="Voltar ao topo"
          >
            <RiArrowUpLine size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;