import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Zap } from "lucide-react";

export function Preloader() {
  const container = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 18) + 8;
      current = Math.min(current + step, 100);
      setPct(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 300);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!done || !container.current) return;
    gsap.to(container.current, {
      yPercent: -100,
      duration: 0.9,
      ease: "expo.inOut",
      onComplete: () => {
        if (container.current) container.current.style.display = "none";
      },
    });
  }, [done]);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <span className="font-heading font-bold text-3xl tracking-tighter text-white">
            KINETIC<span className="text-primary">.</span>
          </span>
        </div>
        <div className="w-52 h-[2px] bg-white/5 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-primary transition-all duration-150"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="font-heading text-[10px] tracking-[0.3em] text-primary/70 uppercase">
          Initializing {Math.min(pct, 100)}%
        </span>
      </div>
      <div className="absolute bottom-8 left-0 right-0 text-center font-heading text-[10px] text-white/10 tracking-widest uppercase">
        Precision Engineered Performance
      </div>
    </div>
  );
}
