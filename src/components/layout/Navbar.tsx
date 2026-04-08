import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";
import { cn } from "@/lib/utils";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "RESULTS", href: "#results" },
  { label: "PROGRAMS", href: "#pricing" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "BOOK", href: "#booking" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: scrolled ? 10 : 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-[calc(100vw-1rem)] sm:max-w-fit px-5 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-between gap-4 md:gap-12 transition-all duration-300",
          scrolled ? "bg-background/90 backdrop-blur-xl border border-white/10 shadow-2xl" : "app-glass"
        )}
      >
        <a href="#hero" className="font-heading font-bold text-base md:text-xl tracking-tighter text-white group shrink-0">
          KINETIC <span className="text-white/20 font-light hidden sm:inline">X</span> <span className="text-primary italic">JOHN.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-grow">
          {links.filter(link => link.label !== "BOOK").map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-all duration-300 relative group"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden sm:block">
            <Magnetic>
              <a href="#booking">
                <Button variant="primary" className="py-2.5 px-6 text-[10px] tracking-[0.15em]">
                  BOOK NOW
                </Button>
              </a>
            </Magnetic>
          </div>
          
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-full hover:bg-primary/20 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[320px] bg-surface border-l border-white/5 flex flex-col p-8 md:p-12"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="font-heading font-bold text-2xl text-white italic">KINETIC<span className="text-primary">.</span></span>
                <button 
                  onClick={() => setMobileOpen(false)} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col gap-6 flex-grow">
                {links.map((link, i) => (
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-xl tracking-tight font-bold uppercase text-white/40 hover:text-primary transition-all duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-auto pt-8 border-t border-white/5">
                <a href="#booking" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" className="w-full justify-center py-5">
                    START TRANSFORMATION
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
