import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#121616] dark:text-white">
              <span className="material-symbols-outlined text-primary text-3xl">spa</span>
              <span className="font-heading font-bold text-lg">Clínica Danilo Ribeiro</span>
            </div>
            <p className="text-sm text-[#576060] dark:text-gray-400">
              Cuidando de Salvador com fisioterapia de excelência e atendimento humanizado.
            </p>
            <div className="text-xs text-gray-400">
               CREFITO-7: 123456-F
            </div>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-bold text-[#121616] dark:text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-[#576060] dark:text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#121616] dark:text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-[#576060] dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                <span>Emporio Greco - Alameda Dilson Jatahy Fonseca, 1248<br />Sala 11 - Stella Maris, Salvador - BA</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span>(71) 99123-3327</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <span>contato@clinicadanilo.com.br</span>
              </li>
            </ul>
          </div>
          {/* Map */}
          <div>
            <div className="h-32 w-full rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-100 dark:border-gray-800">
              <iframe 
                src="https://maps.google.com/maps?q=Emporio%20Greco%20-%20Alameda%20Dilson%20Jatahy%20Fonseca%2C%201248%20-%20Sala%2011%20-%20Stella%20Maris%2C%20Salvador%20-%20BA%2C%2041600-020&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 dark:border-gray-700 pt-8 sm:flex-row text-sm text-[#9aa0a6]">
          <p>© 2026 Desenvolvido por MTsolutions. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a className="hover:text-primary transition-colors" href="#">Privacidade</a>
            <a className="hover:text-primary transition-colors" href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;