import React from 'react';

const Services = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full px-6 lg:px-20 py-12 lg:py-20 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex flex-col gap-6 lg:w-1/2 order-2 lg:order-1">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-[#121616] dark:text-white text-4xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em] text-balance">
                Cuidado Personalizado para sua Saúde Integral
              </h1>
              <h2 className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl font-normal leading-relaxed text-balance">
                Oferecemos uma abordagem holística em reabilitação física e bem-estar, combinando fisioterapia baseada em evidências com o equilíbrio do Pilates clínico.
              </h2>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://www.instagram.com/p/DNQNIFIgiA9/" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#121616] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="truncate">Conheça a Clínica</span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="w-full aspect-[4/3] rounded-2xl bg-gray-200 overflow-hidden shadow-2xl relative" data-alt="Physical therapist assisting a patient with shoulder exercises in a modern, sunlit clinic room" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX9hYp_dM3N3ORcBwSBbFDmdJOSBciTR2oSf3bwcvTrhkKBnx7o4Jhcpxv7Msz1qzaEX8IrR46W23b_Q2sbFAyaYgD1kngWMq8mJLwr3Tw3jILuQit0Qa5CldOJIYQhwdmViS0_6o8hNbldUMBdlefBydZMCZs7qRLI7gCxVCTOgkrvmWoXydZcqYV1EWh6nIPw-KrkJpUyoLRPiM_JyUjpkdbkAqOoez8wKzNAYnjLhF3_FIpVRt60EMCrzqFFXxhttwS4w_Vi6U")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="sticky top-[72px] z-40 w-full bg-white/95 dark:bg-[#1d1f20]/95 backdrop-blur-sm border-b border-[#dde3e3] dark:border-gray-800">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-3 pt-4 whitespace-nowrap cursor-pointer" href="#fisioterapia" onClick={(e) => scrollToSection(e, 'fisioterapia')}>
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Fisioterapia</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 pb-3 pt-4 whitespace-nowrap transition-colors cursor-pointer" href="#pilates" onClick={(e) => scrollToSection(e, 'pilates')}>
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Pilates</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 pb-3 pt-4 whitespace-nowrap transition-colors cursor-pointer" href="#avaliacao" onClick={(e) => scrollToSection(e, 'avaliacao')}>
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">A Jornada do Paciente</p>
            </a>
          </div>
        </div>
      </div>

      <section className="w-full px-6 lg:px-20 py-16 lg:py-24 max-w-[1440px] scroll-mt-32" id="fisioterapia">
        <div className="mb-10">
          <span className="uppercase tracking-widest text-primary font-bold text-xs mb-2 block">Especialidades</span>
          <h2 className="text-[#121616] dark:text-white text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.015em]">Fisioterapia Especializada</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl text-lg">Tratamentos focados na raiz do problema, utilizando técnicas manuais e equipamentos de última geração.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group flex flex-col p-8 bg-white dark:bg-[#252829] border border-[#dde3e3] dark:border-gray-700 rounded-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
            <div className="size-12 rounded-full bg-sage-light dark:bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">accessibility_new</span>
            </div>
            <h3 className="text-[#121616] dark:text-white text-xl font-bold mb-3">Reabilitação Ortopédica</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">Recuperação acelerada para pós-operatório e lesões traumáticas, restaurando a mobilidade total.</p>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check</span>
                Pós-operatório de joelho e ombro
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check</span>
                Terapia manual avançada
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check</span>
                Eletroterapia
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
              <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors" href="#">
                Saiba Mais <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="group flex flex-col p-8 bg-white dark:bg-[#252829] border border-[#dde3e3] dark:border-gray-700 rounded-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
            <div className="size-12 rounded-full bg-sage-light dark:bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">healing</span>
            </div>
            <h3 className="text-[#121616] dark:text-white text-xl font-bold mb-3">Gestão da Dor Crônica</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">Abordagem multidisciplinar para alívio de dores nas costas, ciática e condições persistentes.</p>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check</span>
                Descompressão vertebral
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check</span>
                Liberação miofascial
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check</span>
                Educação em neurociência da dor
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
              <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors" href="#">
                Saiba Mais <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="group flex flex-col p-8 bg-white dark:bg-[#252829] border border-[#dde3e3] dark:border-gray-700 rounded-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
            <div className="size-12 rounded-full bg-sage-light dark:bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">sprint</span>
            </div>
            <h3 className="text-[#121616] dark:text-white text-xl font-bold mb-3">Fisioterapia Esportiva</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">Retorne ao seu esporte mais forte. Foco em biomecânica e prevenção de novas lesões.</p>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check</span>
                Análise de gesto esportivo
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check</span>
                Recovery e prevenção
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check</span>
                Bandagem funcional
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
              <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors" href="#">
                Saiba Mais <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8fafc] dark:bg-[#181a1b] py-16 lg:py-24 border-y border-[#f1f4f3] dark:border-gray-800 scroll-mt-32" id="pilates">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-32">
              <span className="uppercase tracking-widest text-primary font-bold text-xs mb-2 block">Bem-estar e Controle</span>
              <h2 className="text-[#121616] dark:text-white text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">Pilates Clínico e Fitness</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">O método Pilates adaptado para suas necessidades, seja para reabilitação de uma patologia ou para o fortalecimento global do corpo.</p>
              <div className="w-full aspect-square rounded-xl bg-gray-200 overflow-hidden shadow-lg mb-6" data-alt="Close up of pilates reformer machine springs and leather straps in soft focus">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs1CEH2YZkYwGTP8WZ4HP4Am0qkrWXjGjhT4ZIBzYASyzsV2tMfqDyJt7v13oWhcFANL1kk4PskDHw4ntGkHzt7TSG1E7u9YDGmlUG2aX_oh9lhw7ukQ9bxh0VM9gLPqB2dyiPZerSnBhRyvG0UJhr8p42H3mQtS_Yb5XtfGqthQlUOrpZt9dmFnaQUtLYXgYS86rj5HZ70n_YvjyKgBiQwFoRw6q0AlYAAkMp5aWONcu2Msvy5v6KohsvW-u5p6V0lkO1PHhgmOU")' }}></div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 gap-6">
              <div className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-[#252829] rounded-xl shadow-sm border border-[#dde3e3] dark:border-gray-700">
                <div className="w-full md:w-48 h-48 md:h-auto rounded-lg bg-gray-100 shrink-0 overflow-hidden" data-alt="Instructor guiding a student on a pilates cadillac machine">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxN-oqvTo_T_00L0VtlByVp8xnpvMrYT-unu7aIiJyHUaws707Q_iTWFTj_0-oFuuvNdGLfj2VCPsQR1pC0vvhp3FHS8LPEdxRTnf17YUZ1MJ4Mib4fTEqZIGDiODpnMSjDhkiZ8Pt4ABjg6Z7IOtxr6vTes7qYuKXzNz72wfY_JxfE9W2Lm8xKg_wLa1tIsTm4SUmUrzdEgLLJqGdopy7_78BmlL6-EbOvtvWKXxlharDnZdM9DqRJSuWulNA960oj0ueV5X2p5g")' }}></div>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary">spa</span>
                    <h3 className="text-xl font-bold text-[#121616] dark:text-white">Pilates Clínico</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Focado em patologias específicas como hérnia de disco, escoliose e pós-cirúrgicos. Aulas ministradas exclusivamente por fisioterapeutas.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-sage-light dark:bg-primary/20 text-primary text-xs font-bold rounded-full">Correção Postural</span>
                    <span className="px-3 py-1 bg-sage-light dark:bg-primary/20 text-primary text-xs font-bold rounded-full">Sem Impacto</span>
                    <span className="px-3 py-1 bg-sage-light dark:bg-primary/20 text-primary text-xs font-bold rounded-full">Máx. 2 alunos</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-[#252829] rounded-xl shadow-sm border border-[#dde3e3] dark:border-gray-700">
                <div className="w-full md:w-48 h-48 md:h-auto rounded-lg bg-gray-100 shrink-0 overflow-hidden" data-alt="Group pilates class focusing on core strength with balance balls">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsukOn-tdPmqshw4FIdJ86ZcynWBdUc1lspWyszZS0RWC2pEH8jlxwp0v2b0tWiUTzIewzxKpQykBBGzYTEb1I7VSGjNL8QbCf5HWRySS66C5nE3aoLaP-YDnBUiD9unfuWBz0JDF8AppJ2Ts3lp0IAU_XVcEopANIcrNPnJW4IK3hr428anv1T2Q9P95ODkprn6jjFPREfJV9KEg3ZqcsZlEuq32sr1NTFjMsw4aTY91scIQBIvZxQ8ph4YCYNJRRJ13TjM65PjE")' }}></div>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary">fitness_center</span>
                    <h3 className="text-xl font-bold text-[#121616] dark:text-white">Pilates Fitness & Power</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Aulas dinâmicas para quem busca definição muscular, flexibilidade e consciência corporal. Desafie seu corpo com segurança.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-sage-light dark:bg-primary/20 text-primary text-xs font-bold rounded-full">Core Strength</span>
                    <span className="px-3 py-1 bg-sage-light dark:bg-primary/20 text-primary text-xs font-bold rounded-full">Flexibilidade</span>
                    <span className="px-3 py-1 bg-sage-light dark:bg-primary/20 text-primary text-xs font-bold rounded-full">Tonificação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-sage-light/30 dark:bg-primary/5 scroll-mt-32" id="avaliacao">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-[#121616] dark:text-white text-3xl font-bold mb-4">A Jornada do Paciente</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Entenda como funciona nossa avaliação inicial detalhada, o primeiro passo para um tratamento eficaz.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-primary/20 -z-10"></div>
            <div className="flex flex-col items-center text-center">
              <div className="size-24 rounded-full bg-white dark:bg-[#2c2e2f] border-4 border-primary/20 flex items-center justify-center text-primary mb-6 shadow-sm">
                <span className="material-symbols-outlined text-4xl">clinical_notes</span>
              </div>
              <h3 className="text-xl font-bold text-[#121616] dark:text-white mb-2">1. Anamnese</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 px-4">Entrevista detalhada para entender seu histórico, dores, rotina e objetivos pessoais.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="size-24 rounded-full bg-white dark:bg-[#2c2e2f] border-4 border-primary/20 flex items-center justify-center text-primary mb-6 shadow-sm">
                <span className="material-symbols-outlined text-4xl">body_system</span>
              </div>
              <h3 className="text-xl font-bold text-[#121616] dark:text-white mb-2">2. Exame Físico</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 px-4">Avaliação postural, testes de força, mobilidade e palpação para identificar a causa raiz.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="size-24 rounded-full bg-white dark:bg-[#2c2e2f] border-4 border-primary/20 flex items-center justify-center text-primary mb-6 shadow-sm">
                <span className="material-symbols-outlined text-4xl">edit_document</span>
              </div>
              <h3 className="text-xl font-bold text-[#121616] dark:text-white mb-2">3. Plano de Tratamento</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 px-4">Definição personalizada da frequência, técnicas a serem usadas e metas de curto prazo.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Floating WhatsApp Button */}
      <a className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition hover:scale-110 hover:bg-primary-dark" href="https://wa.me/5571991233327" target="_blank" rel="noopener noreferrer">
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </a>
    </div>
  );
};

export default Services;