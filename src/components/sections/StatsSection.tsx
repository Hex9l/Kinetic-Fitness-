import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Users, Target, Activity } from "lucide-react";

import { motion, Variants } from "framer-motion";

const stats = [
  { value: 300, suffix: "+", label: "Athletes", icon: Users, accent: "text-primary" },
  { value: 10, suffix: "+", label: "Years", icon: Target, accent: "text-secondary" },
  { value: 98, suffix: "%", label: "Retention", icon: Activity, accent: "text-white" },
  { value: 4, suffix: "M", label: "Burned", icon: TrendingUp, accent: "text-primary" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "expo.out",
          onUpdate: () => { el.textContent = Math.floor(obj.val) + suffix; },
        });
      },
      once: true,
    });
  }, [target, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function StatsSection() {
  const container = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "circOut"
      }
    }
  };

  return (
    <section ref={container} className="section-padding bg-background relative overflow-hidden">
      <div className="app-container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="app-grid"
        >
          {stats.map((s, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="col-span-2 md:col-span-4 lg:col-span-3 group app-glass p-8 rounded-3xl relative overflow-hidden app-glow transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex flex-col w-full items-center md:items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 mb-6 group-hover:text-primary transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-5xl md:text-6xl text-white mb-2 leading-none tracking-tighter">
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/30 text-[10px] tracking-[0.3em] font-bold uppercase">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
