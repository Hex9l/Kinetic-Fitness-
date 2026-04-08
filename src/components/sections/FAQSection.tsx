import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "WHAT IS THE FIRST STEP IN THE PROTOCOL?",
    answer: "Every athlete begins with a Baseline Metabolic Assessment. We analyze your current state, performance metrics, and bloodwork (optional) to build your custom blueprint."
  },
  {
    question: "DO I NEED ELITE EQUIPMENT ACCESS?",
    answer: "No. Our systems are built to adapt to your environment, whether it's a fully-equipped performance lab or a high-end commercial facility."
  },
  {
    question: "HOW OFTEN ARE THE METRICS UPDATED?",
    answer: "Data points are tracked daily. Strategy calls occur bi-weekly or monthly depending on your tier, but adjustments happen in real-time based on your feedback."
  },
  {
    question: "CAN I CANCEL MY INTEGRATION?",
    answer: "We operate on a 30-day renewal cycle. No long-term lock-ins. We believe in results, not contracts. If the system isn't for you, cancel anytime."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="app-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary/30" />
              <span className="text-primary text-[10px] tracking-[0.3em] font-bold uppercase">Technical Support</span>
              <div className="w-8 h-px bg-primary/30" />
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9] mb-4">
              SYSTEM <span className="text-primary italic">INQUIRIES.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`app-glass rounded-3xl overflow-hidden transition-all duration-500 ${openIndex === i ? 'border-primary/20' : 'app-border'}`}>
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-primary text-white' : 'bg-white/5 text-white/30 group-hover:text-white group-hover:bg-white/10'}`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className={`font-heading font-bold text-base md:text-xl uppercase tracking-tight transition-colors ${openIndex === i ? 'text-white' : 'text-white/40'}`}>
                      {faq.question}
                    </span>
                  </div>
                  {openIndex === i ? (
                    <Minus className="w-6 h-6 text-primary" />
                  ) : (
                    <Plus className="w-6 h-6 text-white/20 group-hover:text-white transition-colors" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-10 ml-16">
                        <div className="max-w-2xl text-white/50 text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
