import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Zap, Users, Target } from "lucide-react";

export function AboutSection() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "expo.out",
        scrollTrigger: { trigger: container.current, start: "top 70%" },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const features = [
    { title: "Elite Certification", label: "NSCA SPECIALIST", icon: Award, color: "text-primary" },
    { title: "Systemic Power", label: "DATA-DRIVEN", icon: Zap, color: "text-secondary" },
    { title: "Community Hub", label: "300+ ATHLETES", icon: Users, color: "text-white" },
    { title: "Target Focus", label: "10+ YEARS Mastery", icon: Target, color: "text-primary" },
  ];

  return (
    <section ref={container} id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(255,82,92,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="app-container">
        <div className="app-grid items-stretch">
          {/* Main Info Card */}
          <div className="col-span-4 md:col-span-8 lg:col-span-8 app-glass p-8 md:p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="animate-pulse w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-[10px] tracking-[0.3em] font-bold uppercase underline underline-offset-4">The Architect x The Method</span>
            </div>

            <h2 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tighter uppercase leading-none mb-10 max-w-2xl">
              SYSTEMIC <span className="text-primary italic text-6xl md:text-8xl">Results.</span><br />
              PERSONAL <span className="text-secondary italic">Mastery.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-6">
                <p className="text-white/60 text-base leading-relaxed">
                  I am Coach John. I don't just build muscle — I engineer human potential. Kinetic Fitness was founded to bridge the gap between hard-data science and old-school intensity.
                </p>
                <div className="pt-4 border-t border-white/5 space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-[10px] text-white/40 tracking-widest font-bold uppercase">10+ Years Elite Coaching</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-[10px] text-white/40 tracking-widest font-bold uppercase">Certified NSCA Specialist</span>
                   </div>
                </div>
              </div>
              <div className="relative aspect-video md:aspect-auto rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 app-border group/img">
                <div className="absolute inset-0 bg-cover bg-center bg-top" style={{ backgroundImage: "url('/images/coach.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Technical Overlay */}
                <div className="absolute bottom-4 left-4 p-3 app-glass rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                  <div className="text-[8px] font-bold tracking-[0.2em] text-primary uppercase">ID: ARCHITECT-01 | JOHN</div>
                  <div className="text-[7px] font-bold tracking-[0.1em] text-white/40 uppercase">STATUS: LIVE_COACHING_ENABLED</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Feature Cards */}
          <div className="col-span-4 md:col-span-8 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
            {features.map((f, i) => (
              <div key={i} className="about-card app-glass p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform duration-500 border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 group-hover:text-primary transition-colors">
                  <f.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[9px] tracking-widest text-primary font-bold uppercase mb-1">{f.label}</div>
                  <div className="font-heading font-bold text-white uppercase text-base">{f.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
