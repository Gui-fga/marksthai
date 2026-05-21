import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, Instagram } from "lucide-react";

import heroImg from "./assets/images/hero.png";
import burger1 from "./assets/images/burger-1.png";
import burger2 from "./assets/images/burger-2.png";
import burger3 from "./assets/images/burger-3.png";
import burger4 from "./assets/images/burger-4.png";
import burger5 from "./assets/images/burger-5.png";
import burger6 from "./assets/images/burger-6.png";
import atmosphereImg from "./assets/images/atmosphere.png";

const menuItems = [
  {
    id: 1,
    name: "01",
    desc: "Pão, carne, queijo. Sem frescura.",
    price: "28",
    image: burger1,
  },
  {
    id: 2,
    name: "02",
    desc: "Duplo. Muito bacon, cebola caramelizada.",
    price: "36",
    image: burger2,
  },
  {
    id: 3,
    name: "03",
    desc: "Apimentado. Jalapeños e molho vermelho da casa.",
    price: "34",
    image: burger3,
  },
  {
    id: 4,
    name: "04",
    desc: "Cogumelos tostados, queijo branco derretido.",
    price: "38",
    image: burger4,
  },
  {
    id: 5,
    name: "05",
    desc: "O monstro. Anéis de cebola, triplo hambúrguer, o caos.",
    price: "48",
    image: burger5,
  },
  {
    id: 6,
    name: "06",
    desc: "Simples. Apenas para os fortes.",
    price: "24",
    image: burger6,
  },
];

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="font-mono text-xl font-bold tracking-tighter uppercase text-white">noname</span>
          <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest text-white">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#local" className="hover:text-primary transition-colors">Local</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply" />
          <img 
            src={heroImg} 
            alt="Hero burger" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] leading-none font-bold uppercase tracking-tighter text-white mix-blend-overlay"
          >
            noname
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 font-mono text-primary uppercase tracking-widest text-sm md:text-lg bg-black px-4 py-2"
          >
            Apenas a porra do hambúrguer.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-20 text-white font-mono text-xs uppercase tracking-widest"
        >
          Desça
        </motion.div>
      </section>

      {/* Intro / Manifesto */}
      <section id="sobre" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-12 text-primary">
            Nenhuma marca. Nenhum logo.
          </h2>
          <div className="space-y-8 font-mono text-lg md:text-2xl text-muted-foreground leading-relaxed">
            <p>
              Não precisamos de um mascote sorridente ou de uma paleta de cores testada em grupos focais. 
              O que fazemos aqui é sujo, quente e real.
            </p>
            <p>
              Você não nos acha no iFood. Você nos acha pelo cheiro de carne na chapa queimando às 2 da manhã em um beco qualquer.
            </p>
            <p className="text-white">
              Sente, coma, vaze.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white">Menu</h2>
            <p className="font-mono text-muted-foreground max-w-sm pb-4">
              Não alteramos os lanches. Não tiramos a cebola. Se não gosta, coma em outro lugar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {menuItems.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-zinc-900 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                  <img 
                    src={item.image} 
                    alt={`Burger ${item.name}`} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-black text-primary font-mono px-3 py-1 text-sm font-bold">
                    #{item.name}
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <p className="font-sans text-xl text-white font-medium leading-tight">
                    {item.desc}
                  </p>
                  <span className="font-mono text-2xl font-bold text-primary shrink-0">
                    R${item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Atmosphere */}
      <section id="local" className="relative h-[80vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <img 
            src={atmosphereImg} 
            alt="Alleyway atmosphere" 
            className="w-full h-full object-cover object-center grayscale"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex-1">
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-8">
              Onde
            </h2>
            <div className="space-y-6 font-mono text-xl text-muted-foreground">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>
                  Rua Augusta, Beco 13<br />
                  Porta preta, sem letreiro.<br />
                  São Paulo, SP
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>
                  Ter - Sab: 19h às 04h<br />
                  Dom - Seg: Fechado para recuperar a sanidade
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="bg-primary text-black p-12 max-w-md w-full transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">Avisos</h3>
              <ul className="font-mono space-y-4 text-sm font-bold">
                <li>- NÃO ACEITAMOS PIX. SÓ CARTÃO OU DINHEIRO VIVO.</li>
                <li>- SEM RESERVAS. CHEGUE CEDO OU ESPERE NA RUA.</li>
                <li>- SEM RECLAMAÇÕES.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-2xl font-bold uppercase tracking-tighter text-white">
            noname
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm uppercase">
              <Instagram className="w-5 h-5" />
              <span>@noname_burger</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
