import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Instagram, Gift, Trophy, Flame } from "lucide-react";

import heroImg from "./assets/images/hero.png";
import burger1 from "./assets/images/burger-1.png";
import burger2 from "./assets/images/burger-2.png";
import burger3 from "./assets/images/burger-3.png";
import burger4 from "./assets/images/burger-4.png";
import burger5 from "./assets/images/burger-5.png";
import burger6 from "./assets/images/burger-6.png";
import atmosphereImg from "./assets/images/atmosphere.png";

const LAUNCH_DATE = new Date("2026-07-01T00:00:00");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calc() {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

const menuItems = [
  { id: 1, name: "01", desc: "Pão, carne, queijo. Sem frescura.", price: "28", image: burger1 },
  { id: 2, name: "02", desc: "Duplo. Muito bacon, cebola caramelizada.", price: "36", image: burger2 },
  { id: 3, name: "03", desc: "Apimentado. Jalapeños e molho vermelho da casa.", price: "34", image: burger3 },
  { id: 4, name: "04", desc: "Cogumelos tostados, queijo branco derretido.", price: "38", image: burger4 },
  { id: 5, name: "05", desc: "O monstro. Anéis de cebola, triplo hambúrguer, o caos.", price: "48", image: burger5 },
  { id: 6, name: "06", desc: "Simples. Apenas para os fortes.", price: "24", image: burger6 },
];

export default function App() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-black">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-5 mix-blend-difference">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="font-mono text-xl font-bold tracking-tighter uppercase text-white">
            NONAME03
          </span>
          <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest text-white">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#raspadinha" className="hover:text-primary transition-colors">Raspadinha</a>
            <a href="#local" className="hover:text-primary transition-colors">Local</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/55 z-10" />
          <img src={heroImg} alt="Hero burger" className="w-full h-full object-cover object-center" />
        </div>

        <div className="relative z-20 text-center flex flex-col items-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-2 font-mono text-primary text-sm md:text-base uppercase tracking-[0.3em]"
          >
            🍔🔥
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-[18vw] md:text-[14vw] leading-none font-bold uppercase tracking-tighter text-white"
          >
            NONAME03
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-4 font-mono text-primary uppercase tracking-widest text-sm md:text-lg bg-black/80 px-5 py-2"
          >
            Sem nome, sem padrão. Só sabor.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-3 font-mono text-white/70 text-xs md:text-sm uppercase tracking-widest"
          >
            Feito pra quem não tem frescura.
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-20 text-white font-mono text-xs uppercase tracking-widest"
        >
          Desça
        </motion.div>
      </section>

      {/* Countdown / Inauguração */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-black text-sm uppercase tracking-[0.3em] mb-3">
              🎉 Data oficial de inauguração
            </p>
            <h2 className="font-bold text-5xl md:text-7xl uppercase tracking-tighter text-black mb-8">
              01 / 07 / 26 🤩
            </h2>
            <div className="flex justify-center gap-4 md:gap-8">
              {[
                { label: "Dias", value: days },
                { label: "Horas", value: hours },
                { label: "Min", value: minutes },
                { label: "Seg", value: seconds },
              ].map(({ label, value }) => (
                <div key={label} className="bg-black text-primary px-5 md:px-8 py-4 min-w-[70px]">
                  <div className="font-bold text-3xl md:text-5xl font-mono tabular-nums">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-white/60 mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="sobre" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-12 text-primary">
            Sem nome.<br />Sem padrão.
          </h2>
          <div className="space-y-8 font-mono text-lg md:text-2xl text-muted-foreground leading-relaxed">
            <p>
              Não precisamos de mascote sorridente ou de paleta de cores testada em grupos focais.
              O que fazemos aqui é sujo, quente e real.
            </p>
            <p>
              NONAME03 não é só um hambúrguer. É atitude. É pra quem sabe o que quer e vai direto ao ponto.
            </p>
            <p className="text-white text-2xl md:text-4xl font-bold uppercase tracking-tighter">
              🏆 Feito pra quem não tem frescura.
            </p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white">
              🍔 Menu
            </h2>
            <p className="font-mono text-muted-foreground max-w-sm pb-4">
              Não alteramos os lanches. Não tiramos a cebola. Se não gosta, come em outro lugar.
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
                data-testid={`card-burger-${item.id}`}
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

      {/* Raspadinhas Premiadas */}
      <section id="raspadinha" className="py-32 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🎁</div>
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-6">
              Raspadinhas<br />
              <span className="text-primary">Premiadas</span>
            </h2>
            <p className="font-mono text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-16">
              Cada pedido vem com uma raspadinha. Pode ser nada. Pode ser o lanche de graça. Pode ser muito mais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Flame className="w-8 h-8" />,
                title: "Lanche Grátis",
                desc: "Raspe e ganhe o seu próximo lanche sem pagar nada. Zero frescura.",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Combo Premiado",
                desc: "Lanche + bebida + batata. O pacote completo pra quem tem sorte grande.",
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Surpresa NONAME03",
                desc: "Prêmio surpresa. Só abrindo pra saber. Não pergunta — raspa.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border border-zinc-800 p-8 hover:border-primary transition-colors duration-300 group"
                data-testid={`card-raspadinha-${i}`}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-bold text-2xl uppercase tracking-tighter text-white mb-3">
                  {card.title}
                </h3>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-primary p-8 text-center"
          >
            <p className="font-mono text-black font-bold text-lg uppercase tracking-widest">
              🔥 Disponível a partir de 01/07/26 — um por pedido. Sem exceções.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section id="local" className="relative h-[80vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <img
            src={atmosphereImg}
            alt="Ambiente NONAME03"
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
                  Dom - Seg: Fechado
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="bg-primary text-black p-10 max-w-md w-full transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-5">Avisos</h3>
              <ul className="font-mono space-y-4 text-sm font-bold">
                <li>- NÃO ACEITAMOS PIX. SÓ CARTÃO OU DINHEIRO VIVO.</li>
                <li>- SEM RESERVAS. CHEGUE CEDO OU ESPERE NA RUA.</li>
                <li>- SEM RECLAMAÇÕES.</li>
                <li>- RASPADINHA: UMA POR PEDIDO.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-2xl font-bold uppercase tracking-tighter text-white">
            NONAME03 🍔🔥
          </div>
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-widest text-center">
            Sem nome, sem padrão. Só sabor.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              data-testid="link-instagram"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm uppercase"
            >
              <Instagram className="w-5 h-5" />
              <span>@noname03</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
