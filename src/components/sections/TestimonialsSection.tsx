import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { text: "The data-driven approach changed everything. I stopped guessing and started seeing results within the first 14 days. This is actual science.", name: "MARK R.", role: "CO-FOUNDER", img: "/images/testimonial-1.png" },
  { text: "Kinetic Precision isn't just coaching; it's high-level performance engineering. My metabolic health has never been better. Truly elite.", name: "SARAH L.", role: "CEO", img: "/images/testimonial-2.png" },
  { text: "I've tried every protocols out there. Nothing compares to the precision and intensity of the Master Architect tier. Simply the best.", name: "JAMES T.", role: "TECH EXEC", img: "/images/testimonial-3.png" },
];

export function TestimonialsSection() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scale: 0.9, opacity: 0, duration: 1, stagger: 0.1, ease: "expo.out",
        scrollTrigger: { trigger: container.current, start: "top 75%" },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="testimonials" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="app-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <div className="max-w-xl">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary/30" />
              <span className="text-secondary text-[10px] tracking-[0.3em] font-bold uppercase">Feedback Feed</span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9] mb-4">
              ELITE <span className="text-secondary italic">VALIDATION.</span>
            </h2>
          </div>
          <div className="flex gap-1 text-primary">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>

        <div className="app-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="col-span-4 md:col-span-4 lg:col-span-4 testimonial-card app-glass p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-[40px] -mr-16 -mt-16 group-hover:bg-secondary/10 transition-colors" />
              
              <Quote className="w-10 h-10 text-secondary/20 mb-8" />
              <p className="text-white/70 text-base md:text-lg italic leading-relaxed mb-10">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="w-12 h-12 rounded-full bg-surface-low border border-white/10 overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-surface-low to-surface flex items-center justify-center text-[10px] font-bold text-white/40">
                      {t.name[0]}
                   </div>
                </div>
                <div>
                   <div className="font-heading font-bold text-white uppercase text-base">{t.name}</div>
                   <div className="text-white/30 text-[9px] tracking-widest font-bold uppercase">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
