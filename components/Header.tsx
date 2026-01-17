import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const getLinkClass = (path: string) => {
    return `text-sm font-medium transition-colors ${
      isActive(path) ? 'text-primary font-bold' : 'text-[#121616] dark:text-gray-300 hover:text-primary'
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f1f4f3] dark:border-[#333] bg-white/95 dark:bg-[#1d1f20]/95 backdrop-blur-sm transition-colors duration-300">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-[28px]">spa</span>
          </div>
          <h2 className="font-heading text-lg font-bold leading-tight tracking-tight text-[#121616] dark:text-white lg:text-xl">
            Clínica Danilo Ribeiro
          </h2>
        </Link>
        
        {/* Desktop Nav - Hidden on mobile/tablet (lg and below) */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>Sobre Nós</Link>
          <Link to="/services" className={getLinkClass('/services')}>Serviços</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contato</Link>
        </nav>

        {/* Mobile/Tablet Menu Trigger */}
        <div className="flex gap-3">
          <div className="lg:hidden text-[#121616] dark:text-white flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             <span className="material-symbols-outlined cursor-pointer text-3xl">menu</span>
          </div>
        </div>
      </div>
      
      {/* Mobile/Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#1d1f20] border-b border-[#f1f4f3] dark:border-[#333] p-4 flex flex-col gap-2 shadow-lg z-40">
           <Link to="/" className="text-[#121616] dark:text-gray-200 text-base font-medium hover:text-primary px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
           <Link to="/about" className="text-[#121616] dark:text-gray-200 text-base font-medium hover:text-primary px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
           <Link to="/services" className="text-[#121616] dark:text-gray-200 text-base font-medium hover:text-primary px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
           <Link to="/contact" className="text-[#121616] dark:text-gray-200 text-base font-medium hover:text-primary px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</Link>
        </div>
      )}
    </header>
  );
};

export default Header;