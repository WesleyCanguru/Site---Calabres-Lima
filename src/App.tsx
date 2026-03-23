import { motion } from 'motion/react';
import { ArrowRight, Scale, Shield, Smartphone, Clock, CheckCircle, Star, MapPin, Mail, MessageCircle, Menu, X, ChevronDown, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Tive minha conta bloqueada, o que fazer?",
      a: "O primeiro passo é não se desesperar e não tentar resolver sozinho com o banco, pois isso pode gerar provas contra você. Reúna todos os extratos e prints que demonstram o bloqueio e entre em contato conosco imediatamente para analisarmos a legalidade da medida e buscarmos o desbloqueio judicial."
    },
    {
      q: "Meu veículo foi apreendido, o que pode ser feito?",
      a: "A busca e apreensão de veículos exige o cumprimento de requisitos legais estritos pelo banco. Muitas vezes há cobrança de juros abusivos ou falhas na notificação. Nossa equipe pode analisar o seu contrato e o processo para buscar a recuperação do veículo ou a redução da dívida."
    },
    {
      q: "Meu plano de saúde negou o tratamento, há solução?",
      a: "Sim. A negativa de tratamentos, cirurgias ou medicamentos prescritos pelo médico é frequentemente considerada abusiva pela Justiça, mesmo que não constem no rol da ANS. Podemos ingressar com uma ação judicial com pedido de liminar para garantir o seu direito à saúde o mais rápido possível."
    },
    {
      q: "Bateram no meu carro, quais meus direitos?",
      a: "Você tem direito à reparação integral dos danos materiais (conserto do veículo, despesas com transporte enquanto o carro está na oficina) e, dependendo do caso, danos morais e lucros cessantes (se você usa o carro para trabalhar). É fundamental registrar o boletim de ocorrência e reunir provas e testemunhas."
    },
    {
      q: "Vocês garantem o resultado ou trabalham com 'causa ganha'?",
      a: "A ética profissional da advocacia nos proíbe de prometer 'causa ganha' ou 'resultado garantido', pois toda decisão final depende do juiz. O que garantimos é o nosso compromisso inegociável com a excelência técnica, transparência, comunicação clara e a defesa incansável dos seus direitos em cada etapa do processo."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFAF8] text-[#1A222B] font-sans selection:bg-[#C5A059] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="https://i.postimg.cc/nzbxJnZq/Calabres-lima-logo-transparente.png" 
              alt="Calabres & Lima" 
              className="h-24 md:h-28 object-contain"
            />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm tracking-wide hover:text-[#C5A059] transition-colors">O Escritório</a>
            <a href="#advogadas" className="text-sm tracking-wide hover:text-[#C5A059] transition-colors">As Advogadas</a>
            <a href="#areas" className="text-sm tracking-wide hover:text-[#C5A059] transition-colors">Áreas de Atuação</a>
            <a href="#faq" className="text-sm tracking-wide hover:text-[#C5A059] transition-colors">FAQ</a>
            <a href="#contato" className="text-sm tracking-wide hover:text-[#C5A059] transition-colors">Contato</a>
          </div>

          <div className="hidden md:block">
            <a href="https://wa.me/5511926199897?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Calabres%20%26%20Lima%20Advocacia%20e%20gostaria%20do%20servi%C3%A7o%20de%20voc%C3%AAs." target="_blank" rel="noreferrer" className="px-6 py-3 border border-[#1A222B] text-sm tracking-wide hover:bg-[#1A222B] hover:text-white transition-all duration-300">
              Agende sua Consulta
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FCFAF8] pt-24 px-6 flex flex-col gap-6 md:hidden">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif border-b border-black/10 pb-4">O Escritório</a>
            <a href="#advogadas" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif border-b border-black/10 pb-4">As Advogadas</a>
            <a href="#areas" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif border-b border-black/10 pb-4">Áreas de Atuação</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif border-b border-black/10 pb-4">FAQ</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif border-b border-black/10 pb-4">Contato</a>
            <a href="https://wa.me/5511926199897?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Calabres%20%26%20Lima%20Advocacia%20e%20gostaria%20do%20servi%C3%A7o%20de%20voc%C3%AAs." target="_blank" rel="noreferrer" className="mt-4 px-6 py-4 bg-[#1A222B] text-white text-center tracking-wide">
              Agende sua Consulta
            </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <span className="text-[#C5A059] text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-6 block">
            Advocacia Especializada
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8 max-w-5xl">
            Da insegurança para a <span className="italic text-[#C5A059]">proteção</span> dos seus direitos.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance">
            Quando a justiça parece distante, a Calabres & Lima está ao seu lado. Advogadas comprometidas, comunicação clara e dedicação real em cada caso.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/5511926199897?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Calabres%20%26%20Lima%20Advocacia%20e%20gostaria%20do%20servi%C3%A7o%20de%20voc%C3%AAs." target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#1A222B] text-white tracking-wide hover:bg-[#C5A059] transition-colors duration-300 flex items-center justify-center gap-2">
            Falar com uma Advogada <ArrowRight size={18} />
          </a>
          <a href="#areas" className="px-8 py-4 border border-black/10 tracking-wide hover:border-[#1A222B] transition-colors duration-300 flex items-center justify-center">
            Nossas Áreas
          </a>
        </FadeIn>

        <FadeIn delay={0.5} className="w-full mt-24">
          <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
            <img 
              src="https://i.postimg.cc/jS75FnSN/Calabres-Lima-Site.png" 
              alt="Calabres & Lima Advocacia" 
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-black/5 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
            {[
              { icon: Scale, text: "Inscrição OAB ativa" },
              { icon: Shield, text: "Sigilo profissional garantido" },
              { icon: Smartphone, text: "Atendimento digital no Brasil" },
              { icon: CheckCircle, text: "Agendamento de consulta" },
              { icon: Clock, text: "Resposta em até 24 horas" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center md:items-start gap-3">
                <item.icon className="text-[#C5A059]" size={24} strokeWidth={1.5} />
                <span className="text-sm text-gray-600">{item.text}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/rpMKwP12/IMG-7677.png" 
                alt="Detalhe escritório" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 border border-black/5 shadow-xl hidden md:block">
                <span className="block font-serif text-5xl text-[#C5A059] mb-2">10+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Anos de atuação</span>
              </div>
            </div>
          </FadeIn>
          <div>
            <FadeIn>
              <span className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
                Quem Somos
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Competência que transforma insegurança em proteção.
              </h2>
              <div className="w-12 h-[1px] bg-[#C5A059] mb-8"></div>
              <p className="text-gray-600 mb-6 font-light leading-relaxed text-justify">
                Calabres & Lima nasceu com uma proposta clara: ser o escritório que as pessoas encontram quando mais precisam de ajuda e no qual confiam para defender o que conquistaram.
              </p>
              <p className="text-gray-600 mb-12 font-light leading-relaxed">
                Acreditamos que o acesso à justiça não deve ser obscurecido por linguagem técnica ou burocracia desnecessária. Por isso, explicamos cada etapa do processo com clareza, mantemos nossos clientes informados e agimos com a firmeza que cada situação exige.
              </p>
            </FadeIn>
            
            <div className="space-y-6">
              {[
                { title: "Advogadas comprometidas", desc: "Equipe especializada com atuação em múltiplas áreas do direito." },
                { title: "Comunicação clara e firme", desc: "Você sempre saberá o que está acontecendo com seu caso." },
                { title: "Atendimento digital", desc: "Processos 100% digitais, atendemos em todo o Brasil." }
              ].map((feature, i) => (
                <FadeIn key={i} delay={0.2 + (i * 0.1)} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500 font-light">{feature.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lawyers Section */}
      <section id="advogadas" className="py-24 md:py-32 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
              Quem cuida do seu caso
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">As Advogadas</h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto"></div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            {/* Cynthia */}
            <FadeIn delay={0.1} className="group">
              <div className="overflow-hidden mb-8">
                <img 
                  src="https://i.postimg.cc/dV5X6wDp/2.png" 
                  alt="Cynthia Calabres" 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-3xl mb-2">Cynthia Calabres</h3>
              <p className="text-[#C5A059] text-xs tracking-widest uppercase mb-6">OAB/SP 313.669 – ADVOGADA</p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Especialista em Direito Civil e Contratos, a Dra. Cynthia atua há mais de uma década na advocacia, dedicando-se à prevenção e à solução de conflitos jurídicos com técnica, estratégia e atenção às necessidades de cada cliente. Possui ampla experiência na elaboração, análise e revisão de contratos, bem como na condução de demandas judiciais nas áreas securitária, de Direito de Família e do Consumidor.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Civil', 'Contratos', 'Securitário', 'Família', 'Consumidor'].map(tag => (
                  <span key={tag} className="text-xs border border-black/10 px-3 py-1 text-gray-500">{tag}</span>
                ))}
              </div>
            </FadeIn>

            {/* Gabriela */}
            <FadeIn delay={0.2} className="group">
              <div className="overflow-hidden mb-8">
                <img 
                  src="https://i.postimg.cc/8C3Y84dN/3.png" 
                  alt="Gabriela Lima" 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-3xl mb-2">Gabriela Lima</h3>
              <p className="text-[#C5A059] text-xs tracking-widest uppercase mb-6">OAB/SP 500.334 – ADVOGADA</p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Com expertise em Direito Civil, de Família e Direito de Trânsito, a Dra. Gabriela construiu sua trajetória profissional pautada na dedicação à defesa dos direitos de seus clientes, atuando com responsabilidade, sensibilidade e rigor técnico na condução de demandas judiciais e na busca por soluções jurídicas eficazes.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Civil', 'Família', 'Trânsito'].map(tag => (
                  <span key={tag} className="text-xs border border-black/10 px-3 py-1 text-gray-500">{tag}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <span className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            O que fazemos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Áreas de Atuação</h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto"></div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {[
            { title: "Direito Bancário", desc: "Conta bloqueada, dívidas indevidas, tarifas abusivas, negativação injusta? Defendemos seus direitos frente às instituições financeiras." },
            { title: "Direito do Consumidor", desc: "Propaganda enganosa, produto defeituoso, cobrança indevida, cancelamento sem restituição. Você tem direitos e estamos prontas para garantir." },
            { title: "Direito Trabalhista", desc: "Rescisão indevida, horas extras não pagas, assédio moral, FGTS e verbas rescisórias. Protegemos o trabalhador com conhecimento e firmeza." },
            { title: "Direito Civil", desc: "Contratos, indenizações, responsabilidade civil, disputas patrimoniais. Soluções jurídicas práticas para as questões do dia a dia." },
            { title: "Direito de Família", desc: "Divórcio, guarda de filhos, pensão alimentícia, inventário e herança. Cuidamos das questões mais sensíveis com respeito e profissionalismo." },
            { title: "Direito Previdenciário", desc: "Aposentadoria, auxílio-doença, benefícios negados pelo INSS, revisão de benefícios. Garantimos o que é seu por direito." }
          ].map((area, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group border-t border-black/10 pt-8">
              <h3 className="font-serif text-2xl mb-4 group-hover:text-[#C5A059] transition-colors">{area.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">{area.desc}</p>
              <a href="https://wa.me/5511926199897?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Calabres%20%26%20Lima%20Advocacia%20e%20gostaria%20do%20servi%C3%A7o%20de%20voc%C3%AAs." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium hover:text-[#C5A059] transition-colors">
                Consultar <ArrowRight size={14} />
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-[#1A222B] text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
              Nosso Processo
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Como Trabalhamos</h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto"></div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-[1px] bg-white/10"></div>
            {[
              { num: "01", title: "Agendamento de Consulta", desc: "Você nos conta sua situação. Fazemos um agendamento para avaliar o melhor caminho jurídico." },
              { num: "02", title: "Estratégia Jurídica", desc: "Definimos juntos a estratégia mais adequada, com clareza sobre prazos, possibilidades e honorários." },
              { num: "03", title: "Atuação Dedicada", desc: "Nossa equipe conduz todas as etapas processuais com rigor técnico, mantendo você informada." },
              { num: "04", title: "Resolução", desc: "Trabalhamos para alcançar o melhor desfecho possível. Você sai com seus direitos protegidos." }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative text-center">
                <div className="w-12 h-12 rounded-full bg-[#C5A059] text-[#1A222B] flex items-center justify-center font-serif text-lg mx-auto mb-6 relative z-10">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <span className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Histórias reais</h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto"></div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { text: "Depois do acidente de trânsito que sofri, fiquei inseguro e sem saber como resolver a situação, principalmente diante da burocracia e da negativa da seguradora. Procurei o escritório e fui orientado com muita clareza desde o início. Com profissionalismo, conduziram todo o processo e consegui receber a indenização devida. Recomendo a quem precisa de apoio jurídico após um acidente.", author: "Joaquina R.", role: "Recepcionista" },
            { text: "Fui demitido e a empresa demorou meses para pagar o que me devia. Contratei o Calabres & Lima e, além de receber tudo, ainda ganhei uma indenização pelo atraso.", author: "Marcos A.", role: "Técnico de Manutenção" },
            { text: "Estava com medo de não conseguir minha aposentadoria por invalidez. O INSS tinha negado três vezes. Com o escritório, consegui na Justiça com direito a retroativos.", author: "Aparecida S.", role: "Costureira" }
          ].map((test, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white p-10 border border-black/5 relative">
              <div className="text-[#C5A059] flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 font-light italic mb-8 leading-relaxed">"{test.text}"</p>
              <div>
                <p className="font-serif text-lg">{test.author}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{test.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 bg-[#FCFAF8] px-6 md:px-12 border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
              Tire suas dúvidas
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Perguntas Frequentes</h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto"></div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div 
                  className="bg-white border border-black/5 cursor-pointer transition-all duration-300 hover:border-[#C5A059]/30"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="p-6 flex justify-between items-center gap-4">
                    <h3 className="font-serif text-lg text-[#1A222B]">{faq.q}</h3>
                    <ChevronDown 
                      className={`text-[#C5A059] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="p-6 pt-0 text-gray-600 font-light leading-relaxed border-t border-black/5 mt-4 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 md:py-32 bg-white px-6 md:px-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <FadeIn>
            <span className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
              Fale Conosco
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Agende sua Consulta</h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mb-8"></div>
            <p className="text-gray-600 font-light leading-relaxed mb-12">
              Entendemos que buscar ajuda jurídica pode ser um passo delicado. Por isso, garantimos um atendimento acolhedor, sem julgamentos, com foco em entender a sua situação antes de qualquer coisa.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MessageCircle className="text-[#C5A059] mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-xl mb-1">WhatsApp</h4>
                  <a href="https://wa.me/5511926199897?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Calabres%20%26%20Lima%20Advocacia%20e%20gostaria%20do%20servi%C3%A7o%20de%20voc%C3%AAs." target="_blank" rel="noreferrer" className="text-gray-500 font-light hover:text-[#C5A059] transition-colors">Iniciar conversa</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#C5A059] mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-xl mb-1">E-mail</h4>
                  <a href="mailto:contato@calabreselimaadvocacia.com.br" className="text-gray-500 font-light hover:text-[#C5A059] transition-colors">contato@calabreselimaadvocacia.com.br</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-[#C5A059] mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-xl mb-1">Endereço</h4>
                  <p className="text-gray-500 font-light">Rua Claudino Barbosa, nº 306, Macedo, Guarulhos/SP<br/>Atendimento 100% digital em todo o Brasil</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form className="bg-[#FCFAF8] p-8 md:p-12 border border-black/5" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-serif text-2xl mb-8">Envie sua mensagem</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nome Completo</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#C5A059] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#C5A059] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Sua Situação</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"></textarea>
                </div>
                <button className="w-full py-4 bg-[#1A222B] text-white tracking-wide hover:bg-[#C5A059] transition-colors duration-300 mt-4">
                  Agendar Consulta
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A222B] text-white/50 py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img 
              src="https://i.postimg.cc/Y0jZykRP/Calabres-lima-logo-dourado-transparente.png" 
              alt="Calabres & Lima" 
              className="h-24 md:h-28 object-contain mb-8"
            />
            <p className="font-light text-sm max-w-sm mb-8 leading-relaxed">
              Um escritório de mulheres, construído com confiança, competência e comunicação clara. Defendendo os direitos das pessoas com dedicação e profissionalismo.
            </p>
            <a href="https://www.instagram.com/calabreselima.adv/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white/50 hover:text-[#C5A059] transition-colors">
              <Instagram size={28} />
              <span className="text-base font-light">@calabreselima.adv</span>
            </a>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Links</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><a href="#sobre" className="hover:text-white transition-colors">O Escritório</a></li>
              <li><a href="#advogadas" className="hover:text-white transition-colors">As Advogadas</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contato</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><a href="https://wa.me/5511926199897?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Calabres%20%26%20Lima%20Advocacia%20e%20gostaria%20do%20servi%C3%A7o%20de%20voc%C3%AAs." target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="https://www.instagram.com/calabreselima.adv/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="mailto:contato@calabreselimaadvocacia.com.br" className="hover:text-white transition-colors">E-mail</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-xs font-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Calabres & Lima Advocacia e Consultoria Jurídica.</p>
          <p>
            Site desenvolvido por <a href="https://cangurudigital.com.br/" target="_blank" rel="noreferrer" className="hover:text-[#C5A059] transition-colors">Canguru Digital</a> e <a href="https://kanoastudio.com/" target="_blank" rel="noreferrer" className="hover:text-[#C5A059] transition-colors">Kanoa Studio</a>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5511926199897?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Calabres%20%26%20Lima%20Advocacia%20e%20gostaria%20do%20servi%C3%A7o%20de%20voc%C3%AAs." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
