import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../ui/Button";
import { Magnetic } from "../ui/Magnetic";
import { RevealText } from "../ui/RevealText";
import { ArrowRight, Zap, Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animations
      gsap.from(".hero-content > *:not(h1):not(p)", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.8
      });
      
      gsap.from(".hero-window", {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5
      });

      // Tilt Animation for Window
      const el = windowRef.current;
      if (el) {
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = el.getBoundingClientRect();
          const x = (clientX - (left + width / 2)) / 25;
          const y = (clientY - (top + height / 2)) / 25;

          gsap.to(el, {
            rotateY: x,
            rotateX: -y,
            duration: 0.8,
            ease: "power3.out",
            transformPerspective: 1000,
            overwrite: "auto"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(el, {
            rotateY: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto"
          });
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          el.removeEventListener("mousemove", handleMouseMove);
          el.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, container);
    return () => ctx.revert();
  }, []);

  const stats = [
    { num: "10+", label: "YEARS EXP" },
    { num: "300+", label: "ATHLETES" },
    { num: "98%", label: "RETENTION" },
  ];

  return (
    <section ref={container} id="hero" className="relative pt-40 md:pt-48 pb-20 overflow-hidden bg-background bg-grid-tech">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 blur-[80px] md:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-secondary/5 blur-[70px] md:blur-[110px] rounded-full pointer-events-none" />

      <div className="app-container relative z-10 px-4 md:px-6">
        <div 
          ref={windowRef}
          className="hero-window will-change-transform relative aspect-[16/10] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden app-border mb-12 md:mb-16 group transition-colors duration-500 hover:border-primary/20"
        >
          {/* Hero Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: "url('/images/hero.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />

          {/* Scanline Animation */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1 w-full animate-scan" />
          </div>

          {/* Corner Brackets */}
          <div className="absolute top-4 md:top-8 left-4 md:left-8 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-sm pointer-events-none" />
          <div className="absolute top-4 md:top-8 right-4 md:right-8 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-sm pointer-events-none" />

          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex justify-end items-end">
            <div className="flex gap-6 md:gap-12 text-right">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading font-bold text-lg md:text-2xl text-white leading-none mb-1">{s.num}</span>
                  <span className="text-[7px] md:text-[8px] tracking-[0.2em] md:tracking-[0.3em] text-white/40 font-bold uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="app-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col items-center text-center max-w-4xl mx-auto hero-content">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-primary/40" />
              <span className="text-primary text-[9px] md:text-[10px] tracking-[0.4em] font-bold uppercase underline underline-offset-8 decoration-primary/20">Founded by Coach John</span>
              <div className="w-10 h-px bg-primary/40" />
            </div>

            <RevealText as="h1" className="font-heading font-bold text-3xl sm:text-5xl md:text-8xl lg:text-[140px] tracking-tight text-white uppercase leading-[0.9] mb-8 md:mb-10" delay={0.2}>
              Elite Kinetic <span className="text-primary italic whitespace-nowrap inline-block">Performance.</span>
            </RevealText>

            <RevealText as="p" className="text-white/40 text-sm md:text-xl max-w-2xl mb-10 md:mb-14 leading-relaxed font-medium uppercase tracking-widest" delay={0.6}>
              Elite coaching for high-achievers who demand scientific precision and personal accountability.
            </RevealText>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-2xl mx-auto mt-4 px-4 md:px-0">
              <Magnetic>
                <a href="#booking" className="block w-full sm:w-[260px]">
                  <Button variant="primary" className="w-full h-[56px] md:h-[64px] gap-3 text-[10px]">
                    INITIALIZE SETUP <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#about" className="block w-full sm:w-[260px]">
                  <Button variant="outline" className="w-full h-[56px] md:h-[64px] text-[10px]">
                    THE BLUEPRINT
                  </Button>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
