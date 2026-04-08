import { Check, Zap, Target, Award, Globe, Share2, Play } from "lucide-react";
import { Button } from "../ui/Button";
import { Magnetic } from "../ui/Magnetic";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "90-DAY BLAST",
    price: "199",
    tagline: "RAPID BODY RECOMPOSITION",
    features: ["Custom Training Protocol", "Nutrition Framework", "Weekly Video Audit", "Community Lab Access"],
    icon: Target,
    accent: "secondary"
  },
  {
    name: "THE ELITE TRANSFORMATION",
    price: "349",
    tagline: "PERSONAL COACHING MASTERY",
    features: ["1:1 Strategy Calls", "Daily Accountability", "Bi-Weekly Bloodwork Review", "Premium Nutrition Hub"],
    popular: true,
    icon: Zap,
    accent: "primary"
  },
  {
    name: "VIP 1:1 COACHING",
    price: "599",
    tagline: "THE ARCHITECT'S INNER CIRCLE",
    features: ["Unlimited 24/7 Priority Access", "Custom Supplement Protocol", "In-Person Meetups (Opt)", "Full Life Optimization"],
    icon: Award,
    accent: "white"
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="app-container relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary/30" />
            <span className="text-primary text-[10px] tracking-[0.3em] font-bold uppercase">Pricing Architecture</span>
            <div className="w-8 h-px bg-primary/30" />
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9] mb-4">
            SELECT YOUR <span className="text-primary italic">TIER.</span>
          </h2>
        </div>

        <div className="app-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "col-span-4 md:col-span-4 lg:col-span-4 relative app-glass p-8 md:p-10 rounded-3xl overflow-hidden group transition-all duration-500",
                plan.popular ? "border-primary/20 shadow-[0_0_50px_rgba(255,82,92,0.1)]" : "app-border",
                i === 2 && "md:col-span-8 lg:col-span-4"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 py-1.5 px-4 bg-primary text-white text-[9px] font-bold tracking-widest uppercase rounded-bl-xl">
                  MOST POPULAR
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 mb-6 group-hover:text-primary transition-colors`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white uppercase mb-2 tracking-tighter">{plan.name}</h3>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase font-bold">{plan.tagline}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/40 text-lg">$</span>
                    <span className="text-white font-heading font-bold text-6xl tracking-tighter">{plan.price}</span>
                    <span className="text-white/40 text-sm italic">/mo</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mb-12 flex-grow">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-white/60 text-xs">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <Magnetic>
                  <a href="#booking" className="block mt-auto">
                    <Button 
                      variant={plan.popular ? "primary" : "outline"} 
                      className="w-full justify-center py-5 text-[10px]"
                    >
                      SELECT PROTOCOL
                    </Button>
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
