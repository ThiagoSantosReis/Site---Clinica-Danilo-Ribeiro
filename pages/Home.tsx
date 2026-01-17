import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <span className="inline-block self-center lg:self-start rounded-full bg-secondary-sage/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#557c55] dark:text-[#a1c298]">
                Bem-vindo à Clínica Danilo Ribeiro
              </span>
              <h1 className="text-heading text-4xl font-semibold leading-[1.1] tracking-tight text-[#121616] dark:text-white sm:text-5xl lg:text-6xl">
                Restaure o Movimento, <span className="text-primary">Recupere a Vida</span>
              </h1>
              <p className="text-lg leading-relaxed text-[#576060] dark:text-gray-400">
                Fisioterapia especializada e Pilates em Salvador. Experimente um cuidado personalizado em um ambiente moderno e acolhedor, focado no seu bem-estar integral.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start pt-4">
                <a href="https://www.instagram.com/p/DLzzVAZAvNi/" target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-lg border border-[#e5e7eb] dark:border-[#444] bg-white dark:bg-surface-dark px-6 text-base font-bold text-[#121616] dark:text-white transition hover:bg-gray-50 dark:hover:bg-[#3d4042]">
                  <span className="material-symbols-outlined">play_circle</span>
                  Conheça o Studio
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-8 lg:justify-start text-sm text-[#576060] dark:text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-sage">verified</span>
                  <span>Especialistas Certificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-sage">verified</span>
                  <span>Ambiente Moderno</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl dark:shadow-black/50 aspect-[4/3] lg:aspect-square group">
              {/* Decorative bg element */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary-sage/30 blur-3xl dark:bg-secondary-sage/10"></div>
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10"></div>
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800" data-alt="Modern bright pilates studio interior with reformers and stability balls" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvErVqfH44o1TdRKO16SWhw0al4Ht4JcW-YJUKzlIg_vvRt-sQdA-lu4u3uU3lrTRYtkVa-oB1DT19rePfpeEnJPgYXaCrsvHCsn9W_lx5tVvLE8JuoHTtB5MmS4LBOwA1pZCzI0uMxGGTq5znIesD5aiRnZ6zOiCSXHmvMcIVgbrE5vn0RWRNwdpbmLG2Ars3EOh7xJW1Ci_nP-iSVfOobQr463DrY8CBfYScUwet3aSnT5OGvNGReVq7F1wfa5bal4lPWi0WQuI')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 rounded-lg bg-white/20 px-3 py-2 w-fit backdrop-blur-md border border-white/10 mb-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-xs font-semibold">Salvador, BA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 bg-white dark:bg-surface-dark" id="services">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-heading text-3xl font-bold text-[#121616] dark:text-white lg:text-4xl">Nossos Serviços</h2>
            <p className="mt-4 max-w-2xl text-lg text-[#576060] dark:text-gray-400">
              Abordagens terapêuticas integradas para recuperar sua força, flexibilidade e qualidade de vida.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1: Physiotherapy */}
            <div className="group relative overflow-hidden rounded-2xl bg-background-light dark:bg-[#1d1f20] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-gray-100 dark:border-gray-700">
              <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">accessibility_new</span>
              </div>
              <h3 className="mb-3 text-heading text-2xl font-bold text-[#121616] dark:text-white">Fisioterapia</h3>
              <p className="mb-6 text-[#576060] dark:text-gray-400 leading-relaxed">
                Programas de reabilitação personalizados projetados para ajudar você a se recuperar de lesões, aliviar dores crônicas e melhorar sua mobilidade funcional com técnicas baseadas em evidências.
              </p>
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl"></div>
            </div>
            {/* Card 2: Pilates */}
            <div className="group relative overflow-hidden rounded-2xl bg-background-light dark:bg-[#1d1f20] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-gray-100 dark:border-gray-700">
              <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-secondary-sage/20 text-[#557c55] dark:text-[#a1c298] group-hover:bg-[#557c55] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">self_improvement</span>
              </div>
              <h3 className="mb-3 text-heading text-2xl font-bold text-[#121616] dark:text-white">Studio de Pilates</h3>
              <p className="mb-6 text-[#576060] dark:text-gray-400 leading-relaxed">
                Fortaleça seu core, melhore a postura e aumente a flexibilidade com nossas sessões de Pilates guiadas por especialistas, utilizando equipamentos modernos em um ambiente climatizado.
              </p>
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary-sage/10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative w-full py-20">
        <div className="absolute inset-0 bg-secondary-sage/5 dark:bg-secondary-sage/5 -skew-y-1 origin-top-left transform"></div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[500px]" data-alt="Close up of a physical therapist hands helping a patient stretch" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9Bwv7uC6rsPCDZklqZEH9J8AMqwQaLrwtmbMpIITAoO7zAKL2q8jWZfMPHcco7gLsKXVTKQ6Kt3hujasGUk4QTDzLTepBvz2zsLg9KPZ-lb1nAaGEwXUbqD92qqMzZeGve3j7Iw-f-tcWxSRxOoV_-xJuyHQs2yME_RHdzkctQZKD556vC84GB_dEV5PPA7pHL2IRCfwa6TFWrWj9EGyXMO3LGmtjiXCy6kd8thiXEdhbiNRDugOhq506XFSyesx2XiJpZ3p3hZo')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-heading text-3xl font-bold text-[#121616] dark:text-white lg:text-4xl mb-6">
                Por que escolher a <br className="hidden lg:block" />Clínica Danilo Ribeiro?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-lg">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121616] dark:text-white text-lg">Atendimento Individualizado</h4>
                    <p className="text-[#576060] dark:text-gray-400 mt-1">Cada paciente recebe um plano de tratamento único, focado em suas necessidades específicas e objetivos de recuperação.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-lg">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121616] dark:text-white text-lg">Equipamentos Modernos</h4>
                    <p className="text-[#576060] dark:text-gray-400 mt-1">Utilizamos tecnologia de ponta e equipamentos de Pilates de última geração para garantir os melhores resultados.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-lg">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121616] dark:text-white text-lg">Profissionais Experientes</h4>
                    <p className="text-[#576060] dark:text-gray-400 mt-1">Nossa equipe é formada por especialistas altamente qualificados e em constante atualização.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-heading text-3xl font-bold text-[#121616] dark:text-white">Histórias de Recuperação</h2>
            <p className="mt-2 text-[#576060] dark:text-gray-400">O que nossos pacientes dizem sobre nós</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Testimonial 1 */}
            <div className="flex-1 rounded-2xl bg-background-light dark:bg-[#1d1f20] p-8 border border-gray-100 dark:border-gray-700">
              <div className="mb-4 flex text-yellow-400">
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
              </div>
              <p className="italic text-[#576060] dark:text-gray-300 mb-6 font-display leading-relaxed">
                "Cheguei na clínica com dores crônicas na lombar. Após 3 meses de Pilates e fisioterapia combinados, me sinto outra pessoa. O atendimento do Danilo é excepcional."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-gray-300 overflow-hidden" data-alt="Portrait of happy patient" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9r0JIU3u_Z9EHRotXjX61SXfprXtnhxVJmzqAoY8u8_rgR_L3TqbNwIzgHIpqw5uQXaqVtfabxb5WhqFcXvmEbRaPYb_EOYpQ60rLrukofxUcjDDv81NYb_ZhG0jOgo2PD-97J-c51i1gv3pxtMK0mKkqdUJx1SUJu4Is8Bzl6y__oAXogbg6sRLHkCrH-gCBdq7zTk9cVGWmuIBc-I0bWemIQg4XeYYFLZ2bjX1pI8Bj-C6cTqhx4lZUGxqBo8Gc6utLEEbdmDQ')", backgroundSize: 'cover' }}></div>
                <div>
                  <p className="font-bold text-sm text-[#121616] dark:text-white">Mariana Costa</p>
                  <p className="text-xs text-[#576060] dark:text-gray-500">Paciente de Pilates</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex-1 rounded-2xl bg-background-light dark:bg-[#1d1f20] p-8 border border-gray-100 dark:border-gray-700 relative">
              <span className="absolute top-6 right-8 text-6xl text-primary/10 font-serif leading-none">"</span>
              <div className="mb-4 flex text-yellow-400">
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
              </div>
              <p className="italic text-[#576060] dark:text-gray-300 mb-6 font-display leading-relaxed">
                "Ambiente super limpo e organizado. A equipe é muito atenciosa desde a recepção até o tratamento. Recomendo para todos que buscam qualidade de vida."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-gray-300 overflow-hidden" data-alt="Portrait of happy patient" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAos8AfGBzb2I4YcS0OWMaRt0E7IA7vSDXQE5nyPvLmBiBpHCGZnHuYFkJXYryZNhOU5TA8_EvcD7oDSwe8dPweTc9iZTP9e4lXL7tjIfuHltXGVNGPvTcdaUcf7t90VJ_Ipu-JefQ5PQiZbuSUweC02coi1GC8UnSdvC_p1hIXE6wZmCViE5fDdZeOfXwynaBgyoNhcYRPll1Uz7EprcPw8NOMMx1My0tdKMXietK4JK3Z9YkSQf6ojjWl8BwQD_vsCwtXv0fmuw8')", backgroundSize: 'cover' }}></div>
                <div>
                  <p className="font-bold text-sm text-[#121616] dark:text-white">Roberto Silva</p>
                  <p className="text-xs text-[#576060] dark:text-gray-500">Paciente de Fisioterapia</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="flex-1 rounded-2xl bg-background-light dark:bg-[#1d1f20] p-8 border border-gray-100 dark:border-gray-700 hidden md:block">
              <div className="mb-4 flex text-yellow-400">
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
                <span className="material-symbols-outlined text-xl fill-current">star</span>
              </div>
              <p className="italic text-[#576060] dark:text-gray-300 mb-6 font-display leading-relaxed">
                "A recuperação do meu joelho foi muito mais rápida do que eu esperava. Os exercícios são focados e o acompanhamento é constante. Excelente!"
              </p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-gray-300 overflow-hidden" data-alt="Portrait of happy patient" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmhD2yI1Z8TfOIbao2ThoPN4ibTu0kDiW2Gbvs_zbRmP9Kkysc2KN3NhoGlpzCCb6jm_otO0rsaoT6Mr3L3Dq5TFnPRPm69-m6_n_cUmTx1k4njT2Hdb_Hc0_FgJYCGSiLnPZz9ktlgXgM6hRoX5vY-1WpYXD0ddEnnn3xlnauBTDBieXougquySfBLeS2ghFLANQUYAEfi-C6L7iRCuvLXZJYTHJ4bejowUiWgqAM37q-U53vN1c_ud7zhGN5bIxHctG1cTFRbnc')", backgroundSize: 'cover' }}></div>
                <div>
                  <p className="font-bold text-sm text-[#121616] dark:text-white">Carla Mendes</p>
                  <p className="text-xs text-[#576060] dark:text-gray-500">Paciente de Reabilitação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="w-full py-20 bg-secondary-sage/5 dark:bg-[#1d1f20]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-heading text-2xl font-bold text-[#121616] dark:text-white">Siga @clinicadaniloribeiro</h2>
              <p className="text-[#576060] dark:text-gray-400 text-sm">Dicas de saúde, bem-estar e nosso dia a dia.</p>
            </div>
            <a className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-6 py-2 text-sm font-bold transition hover:bg-white hover:text-pink-600 dark:hover:bg-gray-800" href="https://www.instagram.com/clinica.daniloribeiro/" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-lg">photo_camera</span>
              Seguir no Instagram
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative" data-alt="Person performing physiotherapy exercises with resistance band" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity">favorite</span>
              </div>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative" data-alt="Physiotherapist assisting patient with arm exercises" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity">favorite</span>
              </div>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative" data-alt="Rehabilitation exercises with stability ball" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity">favorite</span>
              </div>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative" data-alt="Therapist helping patient with leg stretching" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity">favorite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary py-16 dark:bg-primary-dark">
        <div className="mx-auto max-w-[960px] px-6 text-center">
          <h2 className="text-heading mb-6 text-3xl font-bold text-white lg:text-4xl">
            Pronto para começar sua jornada?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Agende sua consulta hoje e dê o primeiro passo para uma vida com mais movimento e saúde.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/5571991233327" target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 text-base font-bold text-white transition hover:bg-white/20">
              <span className="material-symbols-outlined text-lg">chat</span>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
      
      {/* Floating WhatsApp Button (Bottom Right) */}
      <a className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition hover:scale-110 hover:bg-primary-dark" href="https://wa.me/5571991233327" target="_blank" rel="noopener noreferrer">
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </a>
    </div>
  );
};

export default Home;