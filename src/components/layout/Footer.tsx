import { ArrowUpRight, Globe, Share2, Play, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { Magnetic } from "../ui/Magnetic";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="app-container relative z-10">
        <div className="app-grid mb-20">
          {/* Brand */}
          <div className="col-span-4 md:col-span-4 lg:col-span-3">
            <a href="#hero" className="font-heading font-bold text-2xl tracking-tighter text-white mb-6 block uppercase">
              KINETIC <span className="text-white/20 font-light">X</span> <span className="text-primary italic">JOHN.</span>
            </a>
            <p className="text-white/40 text-[11px] leading-loose mb-8 max-w-xs uppercase tracking-widest font-bold">
              Engineering human performance through data-driven science and personal coaching excellence.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, Share2, Play].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-primary/40 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-4 md:col-span-4 lg:col-span-3 lg:pl-12">
            <div className="text-white font-heading font-bold text-xs tracking-[0.3em] uppercase mb-10">Protocols</div>
            <ul className="flex flex-col gap-5">
              {["About", "Results", "Programs", "Testimonials", "Apply Now"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-white/30 hover:text-primary text-[10px] tracking-[0.25em] font-bold uppercase transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-4 md:col-span-4 lg:col-span-3">
            <div className="text-white font-heading font-bold text-xs tracking-[0.3em] uppercase mb-10">Coach Terminal</div>
            <ul className="flex flex-col gap-8">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-white/30 text-[10px] tracking-[0.2em] font-bold uppercase leading-relaxed">
                  Elite Performance Hub<br/>Digital & Remote Global
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-white/30 text-[10px] tracking-[0.2em] font-bold uppercase">john@kinetic.fit</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-white/30 text-[10px] tracking-[0.2em] font-bold uppercase">+1 (555) 012-3456</span>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="col-span-4 md:col-span-4 lg:col-span-3 app-glass p-8 rounded-3xl relative group flex flex-col justify-center border-primary/20">
            <div className="absolute inset-0 bg-primary/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700 rounded-3xl" />
            <div className="relative z-10">
              <div className="text-white font-heading font-bold text-lg mb-4 uppercase tracking-tighter">Ready to Evolve?</div>
              <p className="text-white/30 text-[9px] mb-8 uppercase tracking-[0.3em] font-bold line-clamp-2 italic">
                "Peak performance is not an accident—it is the result of focused engineering."
              </p>
              <Magnetic>
                <a href="#booking" className="block w-full">
                  <Button variant="primary" className="w-full h-[56px] px-6 gap-3 text-[10px]">
                    START TRANSFORMATION <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/10 text-[9px] tracking-[0.5em] font-bold uppercase">
            © 2026 KINETIC X JOHN. DESIGNED FOR PERFORMANCE.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-white/10 hover:text-white transition-colors text-[9px] tracking-widest font-bold uppercase">Privacy Policy</a>
            <a href="#" className="text-white/10 hover:text-white transition-colors text-[9px] tracking-widest font-bold uppercase">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl app-glass flex items-center justify-center text-white/40 hover:text-white hover:border-primary transition-all duration-300 group"
          >
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
