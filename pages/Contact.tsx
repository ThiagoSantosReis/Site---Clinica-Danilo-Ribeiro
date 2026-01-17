import React from 'react';

const Contact = () => {
  return (
    <div className="flex-grow py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-4 leading-tight">
            Agende sua Avaliação ou <br /><span className="text-primary">Fale Conosco</span>
          </h1>
          <p className="text-lg text-text-muted dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
            Estamos prontos para ajudar na sua recuperação e bem-estar em Stella Maris. Escolha o melhor horário para você ou envie uma mensagem.
          </p>
        </div>
        
        {/* Centralized Content Container */}
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
            {/* Contact Info Cards */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-xl font-semibold mb-2 dark:text-white text-center">Canais de Atendimento</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Address */}
                <div className="group flex items-start gap-4 rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:border-primary/20">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background-light dark:bg-gray-800 text-text-main dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-text-main dark:text-white">Endereço</p>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-1">Emporio Greco - Alameda Dilson Jatahy Fonseca, 1248 - Sala 11 - Stella Maris, Salvador - BA, 41600-020</p>
                  </div>
                </div>
                {/* Phone */}
                <a className="group flex items-start gap-4 rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:border-primary/20" href="tel:+5571991233327">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background-light dark:bg-gray-800 text-text-main dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-text-main dark:text-white">Telefone</p>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-1">(71) 99123-3327</p>
                  </div>
                </a>
                {/* WhatsApp */}
                <a className="group flex items-start gap-4 rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:border-primary/20" href="https://wa.me/5571991233327" target="_blank" rel="noopener noreferrer">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background-light dark:bg-gray-800 text-text-main dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-text-main dark:text-white">WhatsApp</p>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-1">(71) 99123-3327</p>
                  </div>
                </a>
                {/* Email */}
                <a className="group flex items-start gap-4 rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:border-primary/20" href="mailto:contato@clinicadaniloribeiro.com.br">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background-light dark:bg-gray-800 text-text-main dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-text-main dark:text-white">Email</p>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-1">contato@clinicadaniloribeiro.com.br</p>
                  </div>
                </a>
              </div>
            </div>
            {/* Map Section */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-xl font-semibold mb-2 dark:text-white text-center">Localização</h3>
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group">
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
            {/* Social Links */}
            <div className="flex gap-4 items-center justify-center pt-2">
              <a className="h-16 w-16 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-text-muted hover:border-primary hover:text-primary hover:bg-primary/5 transition-all" href="https://www.instagram.com/clinica.daniloribeiro/" target="_blank" rel="noopener noreferrer">
                {/* Instagram Generic Icon */}
                <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.153 1.772c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 A4.902 4.902 0 017.5 2.465c.636-.247 1.363-.416 2.427-.465C10.948 2.013 11.292 2 13.73 2h-1.415zM12.315 3.824h1.416c2.39 0 2.674.01 3.553.05.813.037 1.25.176 1.544.29.39.15.668.33.96.623.292.292.472.57.623.96.114.295.253.732.29 1.544.04.879.05 1.163.05 3.553v1.416c0 2.39-.01 2.674-.05 3.553-.037.813-.176 1.25-.29 1.544-.15.39-.33.668-.623.96-.292.292-.57.472-.96.623-.114-.295.253-.732.29-1.544.04-.879.05-1.163.05-3.553zM12.315 7.47a4.845 4.845 0 100 9.69 4.845 4.845 0 000-9.69zm0 1.824a3.021 3.021 0 110 6.042 3.021 3.021 0 010-6.042zm5.787-4.38a1.215 1.215 0 100 2.43 1.215 1.215 0 000-2.43z" fillRule="evenodd"></path></svg>
              </a>
              <a className="h-16 w-16 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-text-muted hover:border-primary hover:text-primary hover:bg-primary/5 transition-all" href="https://www.facebook.com/daniloribeirofisioterapeuta/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                {/* Facebook Generic Icon */}
                <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
              </a>
            </div>
        </div>
      </div>
      {/* Floating WhatsApp Button */}
      <a className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition hover:scale-110 hover:bg-primary-dark" href="https://wa.me/5571991233327" target="_blank" rel="noopener noreferrer">
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </a>
    </div>
  );
};

export default Contact;