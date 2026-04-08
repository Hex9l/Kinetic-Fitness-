import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { BookOpen, CheckCircle2, Download } from "lucide-react";

export function LeadMagnetSection() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".lead-card", {
        scale: 0.95, opacity: 0, duration: 1.2, ease: "expo.out",
        scrollTrigger: { trigger: container.current, start: "top 70%" },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="app-container relative z-10">
        <div className="lead-card app-glass rounded-3xl p-8 md:p-16 lg:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 py-2 px-6 bg-primary text-white text-[9px] font-bold tracking-[0.4em] uppercase rounded-bl-3xl">
            DIGITAL DOWNLOAD
          </div>

          <div className="app-grid items-center">
             {/* Mockup Window */}
            <div className="col-span-4 md:col-span-8 lg:col-span-6 order-2 lg:order-1 flex justify-center perspective-1000">
               <div className="w-64 md:w-80 aspect-[3/4] app-glass rounded-2xl p-8 flex flex-col items-center justify-center text-center rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-1000 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                  <BookOpen className="w-16 h-16 text-primary mb-8 animate-bounce-slow" />
                  <h3 className="font-heading font-bold text-3xl text-white uppercase leading-[0.9] mb-4 tracking-tighter">
                    THE KINETIC<br/>NUTRITION<br/>BLUEPRINT
                  </h3>
                  <div className="w-12 h-px bg-white/20 mb-6" />
                  <div className="text-[10px] text-white/30 tracking-[0.3em] font-bold uppercase">PROTOCOL v1.0.4</div>

                  {/* HUD Scan Line */}
                  <div className="absolute left-0 right-0 h-px bg-white/10 top-0 animate-scan-y pointer-events-none" />
               </div>
            </div>

            {/* Content Sidebar */}
            <div className="col-span-4 md:col-span-8 lg:col-span-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-5 mt-2">
                <div className="w-10 h-px bg-primary/40" />
                <span className="text-primary text-[10px] tracking-[0.3em] font-bold uppercase">System Update Available</span>
              </div>
              
              <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[0.9] uppercase mb-10">
                STOP GUESSING. <span className="text-secondary italic">START FUELING.</span>
              </h2>

              <p className="text-white/50 text-base leading-relaxed mb-12">
                Download the exact nutritional framework our pro-athletes use to shred fat and maintain peak metabolic output. 40+ pages of pure data science.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                 {["Macro Tuning", "Pro Protocol", "Supplements", "Recipes"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70 text-xs py-2 px-4 rounded-xl app-glass border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-bold tracking-tight">{item}</span>
                    </div>
                 ))}
              </div>

              <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
                <div className="flex-1">
                  <Input placeholder="Enter your system email" type="email" className="py-5 px-6 rounded-2xl" />
                </div>
                <Button variant="primary" className="py-5 px-8 shrink-0 rounded-2xl text-[11px] gap-2">
                  DOWNLOAD <Download className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
