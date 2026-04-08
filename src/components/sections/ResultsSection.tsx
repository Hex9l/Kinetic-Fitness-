import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

const results = [
  { img: `${import.meta.env.BASE_URL}images/result-1.png`, title: "PROJECT LEAN", stat: "-20KG in 12 Weeks", tag: "Fat Loss", accent: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
  { img: `${import.meta.env.BASE_URL}images/result-2.png`, title: "HYPERTROPHY LAB", stat: "Muscle Gain +8KG", tag: "Mass Gain", accent: "text-secondary", border: "border-secondary/30", bg: "bg-secondary/10" },
  { img: `${import.meta.env.BASE_URL}images/result-3.png`, title: "STRENGTH CORE", stat: "PB: 240KG Deadlift", tag: "Strength", accent: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
];

export function ResultsSection() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".result-card", {
        y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "expo.out",
        scrollTrigger: { trigger: container.current, start: "top 70%" },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="results" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(189,244,255,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="app-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary/30" />
              <span className="text-primary text-[10px] tracking-[0.3em] font-bold uppercase">Transformation Registry</span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9] mb-4">
              RESULTS <span className="text-primary italic">DON'T LIE</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed mb-4">
            Concrete evidence of precision engineering. These athletes committed to the process and redefined their limits.
          </p>
        </div>

        {/* Grid */}
        <div className="app-grid">
          {results.map((r, i) => (
            <div
              key={i}
              className={cn(
                "col-span-4 md:col-span-4 lg:col-span-4 result-card group relative aspect-[4/5] rounded-3xl overflow-hidden app-border",
                i === 2 && "md:col-span-8 lg:col-span-4"
              )}
            >
              {/* Image with zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${r.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-black/40" />

              {/* HUD interface elements */}
              <div className="absolute top-6 left-6 scale-x-[-1]">
                <div className="w-1 h-1 bg-white/40 rounded-full mb-1" />
                <div className="w-4 h-px bg-white/20" />
              </div>

              {/* Content box */}
              <div className="absolute bottom-4 left-4 right-4 p-5 md:p-6 app-glass rounded-2xl group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex flex-col gap-1">
                   <div className="text-[9px] font-bold tracking-[0.3em] text-primary uppercase mb-2">PROJECT {i + 1}</div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                      <h3 className="font-heading font-bold text-lg md:text-xl text-white uppercase leading-none">{r.title}</h3>
                      <div className="text-[9px] md:text-[10px] font-bold text-white/40 mb-0.5 whitespace-nowrap">{r.stat}</div>
                   </div>
                </div>
                
                {/* Micro glow on hover */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
