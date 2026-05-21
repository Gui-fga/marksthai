import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Instagram, Sword, Dumbbell, Shield, Phone, ChevronRight } from "lucide-react";

import heroBg from "./assets/images/hero-bg.png";
import atmosphereImg from "./assets/images/atmosphere.png";
import training1 from "./assets/images/training-1.png";
import training2 from "./assets/images/training-2.png";
import instructor1 from "./assets/images/instructor-1.png";
import instructor2 from "./assets/images/instructor-2.png";

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-white min-h-screen overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isNavScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-black uppercase tracking-tighter text-white">
            MARKS<span className="text-primary">THAI</span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest font-bold">
            <a href="#filosofia" className="hover:text-primary transition-colors">Filosofia</a>
            <a href="#modalidades" className="hover:text-primary transition-colors">Modalidades</a>
            <a href="#mestres" className="hover:text-primary transition-colors">Mestres</a>
            <a href="#videos" className="hover:text-primary transition-colors">Vídeos</a>
            <a href="#planos" className="hover:text-primary transition-colors">Planos</a>
          </div>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-2 uppercase font-bold text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            Agendar Aula
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <img src={heroBg} alt="Muay Thai Fighter" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-60" />
        </motion.div>
        
        <div className="relative z-20 text-center px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter text-white drop-shadow-2xl">
              MARKS<span className="text-primary">THAI</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 space-y-4"
          >
            <p className="font-mono text-xl md:text-3xl uppercase tracking-[0.2em] text-white/80 font-bold">
              Disciplina. Dor. Glória.
            </p>
            <div className="pt-8">
              <a 
                href="#contato"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 text-xl font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
              >
                Sangre no Treino
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[2px] h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Manifesto */}
      <section id="filosofia" className="py-32 px-6 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-mono uppercase tracking-[0.3em] font-bold mb-6">/ A Filosofia</h2>
            <div className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1.1] space-y-8 text-white">
              <p>
                O VERDADEIRO MUAY THAI. SEM ATALHOS.
              </p>
              <p className="text-white/50">
                O ringue não mente. Aqui você não vem para malhar, vem para forjar seu corpo e sua mente.
              </p>
              <p>
                O SUOR É O PAGAMENTO. <span className="text-primary">O RESPEITO É A RECOMPENSA.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modalities */}
      <section id="modalidades" className="py-32 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
              Treina<span className="text-primary">mento</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Muay Thai Tradicional", desc: "Raízes tailandesas. Cotovelos, joelhos, clinch. A arte das oito armas em sua forma mais pura.", icon: <Sword className="w-8 h-8" />, schedule: "Seg, Qua, Sex - 19h" },
              { title: "Muay Thai Funcional", desc: "Condicionamento físico extremo baseado em movimentos de combate. Queime, construa, resista.", icon: <Dumbbell className="w-8 h-8" />, schedule: "Ter, Qui - 07h, 18h" },
              { title: "Kids Muay Thai", desc: "Disciplina, respeito e defesa pessoal para os pequenos. Construindo o caráter no tatame.", icon: <Shield className="w-8 h-8" />, schedule: "Seg, Qua - 16h" },
              { title: "Luta Livre / Grappling", desc: "Combate corpo-a-corpo sem kimono. Quedas, pressões e finalizações para domínio total.", icon: <Flame className="w-8 h-8" />, schedule: "Ter, Qui - 20h" },
            ].map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black border border-zinc-900 p-10 group hover:border-primary transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative z-10">
                  <div className="text-primary mb-6">{mod.icon}</div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-white">{mod.title}</h3>
                  <p className="font-mono text-zinc-400 text-sm leading-relaxed mb-8">{mod.desc}</p>
                  <div className="inline-flex items-center gap-2 bg-zinc-900 px-4 py-2 font-mono text-xs text-zinc-300 uppercase font-bold">
                    <Clock className="w-4 h-4 text-primary" />
                    {mod.schedule}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors & Gallery */}
      <section id="mestres" className="py-32 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 mb-20">
           <h2 className="text-primary font-mono uppercase tracking-[0.3em] font-bold mb-4">/ Quem Comanda</h2>
           <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">Os Mestres</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Instructor 1 */}
          <div className="group relative overflow-hidden aspect-[4/5] md:aspect-auto">
            <img src={instructor1} alt="Mestre Trovão" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h4 className="text-5xl font-black uppercase tracking-tighter text-white mb-2">Mestre Marcos "Trovão"</h4>
              <p className="text-primary font-mono uppercase font-bold text-lg mb-4">30 Lutas / 25 Vitórias</p>
              <p className="font-mono text-zinc-300 text-sm max-w-sm">Especialista em clinch e cotoveladas. Forjado nos ringues de Bangkok, traz a brutalidade da Tailândia para São Paulo.</p>
            </div>
          </div>
          {/* Instructor 2 */}
          <div className="group relative overflow-hidden aspect-[4/5] md:aspect-auto">
            <img src={instructor2} alt="Kru Fúria" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h4 className="text-5xl font-black uppercase tracking-tighter text-white mb-2">Kru Aline "Fúria"</h4>
              <p className="text-primary font-mono uppercase font-bold text-lg mb-4">Campeã Estadual 2022</p>
              <p className="font-mono text-zinc-300 text-sm max-w-sm">Velocidade, precisão e técnica impecável. Responsável pelo treinamento avançado de striking e condicionamento de atletas.</p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-2 border-t-2 border-black">
          <div className="aspect-square relative overflow-hidden group">
            <img src={training1} alt="Training" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={atmosphereImg} alt="Atmosphere" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={training2} alt="Sparring" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
          <div className="aspect-square relative overflow-hidden group bg-primary flex items-center justify-center p-8 text-center">
            <p className="text-black font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none">
              Respeito<br/>No<br/>Tatame
            </p>
          </div>
        </div>
      </section>

      {/* Videos — Instagram Feed */}
      <section id="videos" className="py-32 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <h2 className="text-primary font-mono uppercase tracking-[0.3em] font-bold mb-4">/ Instagram</h2>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
                No <span className="text-primary">Ringue</span>
              </h3>
              <a
                href="https://www.instagram.com/marksthai"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram"
                className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors pb-2 shrink-0"
              >
                @marksthai →
              </a>
            </div>
          </motion.div>

          {/* Instagram Reels grid — portrait 4:5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { postId: "C6example1AA", label: "Treino de Clinch" },
              { postId: "C6example2BB", label: "Sparring Avançado" },
              { postId: "C6example3CC", label: "Técnica de Joelho" },
              { postId: "C6example4DD", label: "Kids na Academia" },
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col"
                data-testid={`instagram-card-${i}`}
              >
                {/* Portrait aspect ratio for Instagram posts/Reels */}
                <div className="relative w-full bg-zinc-900 border border-zinc-800 hover:border-primary transition-colors duration-300 overflow-hidden" style={{ paddingBottom: "125%" }}>
                  <iframe
                    src={`https://www.instagram.com/reel/${post.postId}/embed/`}
                    title={post.label}
                    allowFullScreen
                    scrolling="no"
                    className="absolute inset-0 w-full h-full border-0"
                    style={{ background: "#000" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="https://www.instagram.com/marksthai"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-instagram-all"
              className="inline-flex items-center gap-3 border border-zinc-700 text-white font-mono text-sm uppercase tracking-widest px-8 py-4 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Ver todos no Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="py-32 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">O Preço do Suor</h2>
            <p className="font-mono text-zinc-400 uppercase tracking-widest text-sm">Sem taxas surpresas. Sem contratos amarrados.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Básico", price: "149", desc: "2x por semana", features: ["Acesso às aulas de Muay Thai", "Uso de equipamentos", "Acesso ao vestiário"] },
              { name: "Avançado", price: "199", desc: "Acesso Livre", features: ["Acesso ilimitado às aulas", "Muay Thai + Luta Livre", "Acompanhamento físico", "Horário livre"], featured: true },
              { name: "Elite", price: "349", desc: "Livre + Particular", features: ["Tudo do plano Avançado", "1 Aula particular por semana", "Plano de evolução", "Armário exclusivo"] },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`border p-10 flex flex-col ${tier.featured ? 'border-primary bg-primary/5 relative' : 'border-zinc-800 bg-black hover:border-zinc-600'} transition-colors`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-white font-mono text-xs uppercase font-bold px-3 py-1">
                    Mais Escolhido
                  </div>
                )}
                <h3 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">{tier.name}</h3>
                <p className="font-mono text-primary font-bold uppercase mb-6">{tier.desc}</p>
                <div className="mb-8 flex items-end gap-1">
                  <span className="text-2xl font-mono text-white/50">R$</span>
                  <span className="text-6xl font-black tracking-tighter text-white leading-none">{tier.price}</span>
                  <span className="text-sm font-mono text-white/50">/mês</span>
                </div>
                <ul className="space-y-4 font-mono text-sm text-zinc-400 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-10 w-full py-4 uppercase font-bold tracking-widest text-sm transition-colors ${tier.featured ? 'bg-primary text-white hover:bg-white hover:text-black' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
                  Assinar Agora
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contato" className="bg-black border-t border-zinc-900 py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 justify-between">
          <div className="flex-1">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-8">Pise no<br/>Tatame</h2>
            <p className="font-mono text-zinc-400 mb-12 max-w-md leading-relaxed">
              Pronto para começar? A primeira aula experimental é por nossa conta. Mande uma mensagem e agende seu horário.
            </p>
            
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-[#25D366] text-white px-8 py-5 text-xl font-bold uppercase tracking-widest hover:bg-white hover:text-[#25D366] transition-colors"
            >
              <Phone className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="flex-1 font-mono text-sm space-y-12">
            <div>
              <div className="flex items-center gap-3 text-primary mb-4 uppercase tracking-[0.2em] font-bold">
                <MapPin className="w-5 h-5" />
                <span>Onde Estamos</span>
              </div>
              <p className="text-zinc-300 text-lg">
                Rua da Sangria, 123<br/>
                Galpão Fundos<br/>
                São Paulo - SP
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-primary mb-4 uppercase tracking-[0.2em] font-bold">
                <Clock className="w-5 h-5" />
                <span>Horários</span>
              </div>
              <ul className="text-zinc-300 space-y-2">
                <li>Segunda a Sexta: 06h às 22h</li>
                <li>Sábados: 08h às 14h</li>
                <li>Domingos: Descanso dos guerreiros</li>
              </ul>
            </div>

            <div>
               <div className="flex items-center gap-3 text-primary mb-4 uppercase tracking-[0.2em] font-bold">
                <Instagram className="w-5 h-5" />
                <span>Redes</span>
              </div>
              <a href="#" className="text-zinc-300 hover:text-white text-lg transition-colors">@marksthai.sp</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 border-t border-zinc-900 text-center font-mono text-xs uppercase tracking-widest text-zinc-600">
        <p>© 2026 MARKSTHAI GYM. TODOS OS DIREITOS RESERVADOS.</p>
      </footer>
    </div>
  );
}

// Mock Flame icon since it's not exported by default in some lucide versions
function Flame(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}
