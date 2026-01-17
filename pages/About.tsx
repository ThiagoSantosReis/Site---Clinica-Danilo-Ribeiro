import React, { useState, useEffect } from 'react';

const About = () => {
  const specialists = [
    {
      name: "Maicon",
      role: "Fisioterapeuta Líder",
      crefito: "CREFITO 123456-F",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6lihs1ZYWal02eg19IQCYL9QMCRBctDShSi0MJ__fOVaxZ0Zzn-yfMc06xZALwXbKzy-3eAp6nXO2KcBQIY2YOn3E6YaP7vJSD_T6RU8muIXjALijCv1LDob8zDSPOcz5mr-hFnQBVbTMS1LlXUW9veuYveogM6F-GyBppgZiorlsKevWjTWEyYf1kh9rFIU_kSAE-3TqhuMZ20RgQKLGS67XUTdcuv3215x8z0xPK3-z9gN-IRNH4EsSIRrag3K3OfBwLD4aq78",
      description: "Fundador da clínica com mais de 15 anos de experiência em reabilitação musculoesquelética. Danilo é especialista em saúde da coluna e técnicas de terapia manual voltadas para a recuperação ativa."
    },
    {
      name: "Vitoria",
      role: "Instrutora de Pilates",
      crefito: "CREFITO 987654-F",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgUULISriJ-7rXoO1fL1iaAXB-TvAVSmyEH4uowhR5Jx88XTxLuZqB1yOea-IS9RAVMwJySVqIRIj19_JsWp0wrgZQAJHF1iZDw6uD1Vgcq7nodWrGdqliq53uGa3sz8iCARYlqWbirK0VmXfkyVi5Z0PMdNt63IASHQEK3Ow090_3y3wtxK617YCFG91yPM56m8h7cfA5bsBpUcLoidgDWbKGZbhhBlItawCwV5Q_yurc23SG6Pezui6rD7yZFouo9Hqu8GHS6wI",
      description: "Instrutora de Pilates certificada com foco em estabilidade do core e flexibilidade. Mariana trabalha em estreita colaboração com pacientes em transição da terapia para exercícios de manutenção."
    },
    {
      name: "Vinício",
      role: "Reabilitação Esportiva",
      crefito: "CREFITO 456789-F",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBwbeMzUhkS-NFXAxK42k1BFtJGvfRbQKG7ASFVe1hMYldOCQSfuqnOZbS-211S5K6tw3wpJ2E1VrYMW_H-VD1gRs5WZEj1-YwrjZpuh_0oGwncct7TPsN37tWZcj2CiHD--DMARjmHqzB97V3ZnhoZlWEfOu90NvJw8V-wGKVqIBn4eusr0lqF2P-jmLb7dJ5nk2t5PPm1BkT2Oh-9NW2Hj1xxgDC1CGLvaW2fyeGFn8nHx_LkcbN9njc7V-EBCRaz1W2n9d0c2s",
      description: "Especializado em lesões esportivas, Roberto ajuda atletas a retornar ao pico de performance. Ele utiliza modalidades modernas, incluindo agulhamento seco (dry needling) e bandagem dinâmica."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === specialists.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center justify-center px-6 py-12 lg:px-40 lg:py-20 bg-white">
        <div className="layout-content-container flex flex-col max-w-[1024px] w-full">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-6 text-left">
              <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight lg:text-5xl text-[#121616]">
                Restaurando o Movimento,<br />Transformando Vidas
              </h1>
              <p className="text-text-muted text-lg font-normal leading-relaxed">
                Bem-vindo a um espaço onde a precisão clínica encontra o cuidado holístico. Unimos a fisioterapia e o bem-estar para ajudar você a viver sem limitações.
              </p>
            </div>
            <div className="order-1 lg:order-2 w-full h-[300px] lg:h-[450px] rounded-lg overflow-hidden shadow-sm relative group">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500"></div>
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Soft focused image of a modern physiotherapy clinic with natural light and wood accents" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCSJya9nALI_YCWOyu_BeNbPZAHWZDZ3rhpOQvmvvxD17k00DjBIz8o9L0o0LD5j935JgkzZ8iIdbfTCKqCMTt_qboAn-pqZs7qD2gHTdhOdbDRDE_71GgV3xgXH1hJ9nQEeypy5nsLP3YuazuVdmmqgH1aEFrsBPSrLTiTDQmm42Cr3TstwTrL14RrEJHCZ1lETKXg2gZ62s6iZslpQGUPX6Xtq_UFuP1gR_USXr24u7q4zveJJOeK6ORKsF9FjeU8WUfybvbGaM')" }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-6 py-16 lg:px-40 bg-background-light border-y border-[#f1f4f3]">
        <div className="layout-content-container flex flex-col max-w-[1024px] w-full gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg bg-white relative z-10">
                <div className="w-full h-full bg-cover bg-center" data-alt="Portrait of founder Danilo Ribeiro treating a patient in a sunny room" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYhl68JWpbJytyKx75PM-RId_OgnOxmL4Jv17Ur0H733IZ0hDAcG7sfe0ECCugzx_X8F7cWLb9LxFxHkrjMYhCuUKoyyPEtIAjzS3fQcBQCKcAp8WItPTdI2R5btUbYtqakxdB-2XU-ijffKt8aWNQQEXIIgzjak0bgyfpqTBSX0RfyLK-m2SsCYbJ7J3oCyFbs9KOMaCWAovrdO3AzoPm3uwIobUPzzYoBJvqeD4ElQmGz3BNC7jtzNlOLr5SFfj3384F2VSZKUA')" }}>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary/20 rounded-lg -z-0 hidden lg:block"></div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-10 lg:py-4">
              <h2 className="font-heading text-3xl font-semibold text-[#121616]">Fundada em Salvador</h2>
              <div className="space-y-4 text-text-muted text-base leading-relaxed">
                <p>
                  Danilo Ribeiro fundou a clínica com uma crença simples mas profunda: o movimento é remédio. Após anos trabalhando em hospitais tradicionais, ele percebeu uma desconexão entre o tratamento de lesões agudas e o bem-estar a longo prazo.
                </p>
                <p>
                  Em 2015, ele abriu as portas da nossa unidade em Salvador, criando um santuário onde os pacientes não apenas se recuperam — eles evoluem. Ao integrar a precisão biomecânica da fisioterapia com o movimento consciente do Pilates, oferecemos um caminho para uma vida ativa e sem dor.
                </p>
              </div>
              <div className="mt-4 p-6 bg-white rounded-lg border border-[#dde3e3] shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-[#121616] mb-2">Nossa Missão</h3>
                <p className="text-text-muted italic">"Oferecer cuidado personalizado e baseado em evidências que capacite cada paciente a recuperar sua qualidade de vida através da fisioterapia e pilates especializados."</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="h-px bg-primary/30 flex-1"></div>
              <h3 className="font-heading text-xl font-medium text-primary uppercase tracking-widest text-center">Qualidade de Vida</h3>
              <div className="h-px bg-primary/30 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-transparent hover:border-[#dde3e3] transition-all duration-300 hover:shadow-sm group">
                <div className="mb-4 flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-[#121616] mb-2">Atendimento Personalizado</h4>
                <p className="text-sm text-text-muted">Não acreditamos em soluções genéricas. Seu plano de tratamento é adaptado especificamente para o seu corpo e objetivos.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-transparent hover:border-[#dde3e3] transition-all duration-300 hover:shadow-sm group">
                <div className="mb-4 flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">directions_run</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-[#121616] mb-2">Recuperação Ativa</h4>
                <p className="text-sm text-text-muted">O movimento é a chave para a cura. Focamos em terapias ativas que constroem força e resiliência.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-transparent hover:border-[#dde3e3] transition-all duration-300 hover:shadow-sm group">
                <div className="mb-4 flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">self_improvement</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-[#121616] mb-2">Bem-estar Holístico</h4>
                <p className="text-sm text-text-muted">Integrando mente e corpo. Tratamos a pessoa, não apenas os sintomas, para uma saúde duradoura.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-6 py-20 lg:px-40 bg-white">
        <div className="layout-content-container flex flex-col max-w-[1024px] w-full gap-12">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end border-b border-[#f1f4f3] pb-6">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-[#121616]">Conheça nossos Especialistas</h2>
              <p className="text-text-muted mt-2">Mãos experientes em quem você pode confiar.</p>
            </div>
            {/* Botões de navegação manual removidos conforme solicitado */}
          </div>

          {/* Mobile/Tablet Carousel Version (< 1024px) */}
          <div className="lg:hidden relative overflow-hidden w-full h-auto">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {specialists.map((specialist, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <div className="group flex flex-col gap-4">
                    <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100">
                      <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{ backgroundImage: `url('${specialist.image}')` }}
                      ></div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="text-white text-xs font-bold uppercase tracking-wider">{specialist.crefito}</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-heading text-xl font-semibold text-[#121616]">{specialist.name}</h3>
                      <span className="text-primary font-medium text-sm">{specialist.role}</span>
                      <p className="mt-3 text-text-muted text-sm leading-relaxed">
                        {specialist.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Indicators - Mantidos para navegação manual discreta */}
            <div className="flex justify-center gap-2 mt-6">
              {specialists.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`size-2 rounded-full transition-all ${currentIndex === idx ? 'bg-primary w-4' : 'bg-gray-300'}`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Version (>= 1024px) */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {specialists.map((specialist, idx) => (
              <div key={idx} className="group flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url('${specialist.image}')` }}
                  ></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">{specialist.crefito}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading text-xl font-semibold text-[#121616]">{specialist.name}</h3>
                  <span className="text-primary font-medium text-sm">{specialist.role}</span>
                  <p className="mt-3 text-text-muted text-sm line-clamp-3 group-hover:line-clamp-none transition-all">
                    {specialist.description}
                  </p>
                </div>
              </div>
            ))}
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

export default About;