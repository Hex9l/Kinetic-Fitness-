import { useRef, useEffect } from "react";
import gsap from "gsap";

const items = [
  "ELITE PERFORMANCE",
  "PRECISION ENGINEERED",
  "DATA-DRIVEN",
  "300+ ATHLETES TRANSFORMED",
  "10+ YEARS MASTERY",
  "98% RETENTION RATE",
  "NSCA CERTIFIED",
  "RESULTS GUARANTEED",
];

export function MarqueeTicker() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const totalWidth = el.scrollWidth / 2;
    gsap.to(el, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden bg-surface py-6 border-y border-white/5 relative group">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
      
      <div ref={track} className="flex items-center gap-0 whitespace-nowrap will-change-transform">
        {repeated.map((item, j) => (
          <div key={j} className="flex items-center gap-0 flex-shrink-0">
            <span className="font-heading font-bold text-[10px] tracking-[0.4em] text-white/40 px-12 group-hover:text-primary transition-colors duration-500">
              {item}
            </span>
            <span className="text-white/10 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
