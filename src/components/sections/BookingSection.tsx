import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Calendar, Clock, MessageSquare, Send, Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BookingSection() {
  const [form, setForm] = useState({ name: "", email: "", goal: "" });

  return (
    <section id="booking" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="app-container relative z-10">
        <div className="app-grid items-center">
          {/* Text Content */}
          <div className="col-span-4 md:col-span-8 lg:col-span-6 mb-12 lg:mb-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-[10px] tracking-[0.3em] font-bold uppercase underline underline-offset-4 decoration-primary/20">Elite Enrollment 2026</span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-7xl text-white tracking-tighter uppercase leading-[0.9] mb-8">
              APPLY FOR <span className="text-primary italic text-5xl md:text-8xl">RESULTS.</span>
            </h2>
            <p className="text-white/40 text-base md:text-lg max-w-md leading-relaxed mb-10 uppercase tracking-widest font-bold">
              I only take on a limited number of new transformation clients per month to ensure absolute precision. Apply now for a strategy audit.
            </p>
            
            <div className="space-y-6">
              {[
                { label: 'Limited Intake', sub: 'Maximum 5 New Clients/Mo' },
                { label: 'Personalized Strategy', sub: 'Every Protocol is Unique' },
                { label: '1:1 Direct Access', sub: 'No Middlemen. Direct Coaching.' }
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-white font-heading font-bold text-sm uppercase tracking-wider">{item.label}</div>
                    <div className="text-white/30 text-[10px] uppercase font-bold tracking-[0.2em]">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="col-span-4 md:col-span-8 lg:col-span-6">
            <motion.div 
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="app-glass p-6 md:p-10 lg:p-12 rounded-[32px] md:rounded-[40px] border border-primary/10 shadow-[0_0_50px_rgba(255,82,92,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-6 right-8 opacity-20 hidden lg:flex items-center gap-2">
                <span className="text-[8px] font-bold tracking-widest text-white/50 uppercase">ENROLLMENT: ACTIVE</span>
              </div>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest text-primary uppercase ml-4">Full Identity</label>
                    <Input 
                      placeholder="E.G. JOHN DOE" 
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest text-primary uppercase ml-4">Digital Contact</label>
                    <Input 
                      placeholder="E.G. JOHN@KINETIC.FIT" 
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest text-primary uppercase ml-4">Transformation Goal</label>
                  <textarea 
                    className="w-full bg-white/3 p-4 border border-white/5 rounded-2xl h-32 text-white placeholder:text-white/20 transition-all focus:border-primary outline-none text-sm font-bold uppercase tracking-widest"
                    placeholder="TELL US WHAT YOU WANT TO ACHIEVE..."
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  />
                </div>

                <Button variant="primary" className="w-full justify-center py-5 text-[11px] gap-2 mt-4 shadow-[0_0_30px_rgba(255,82,92,0.3)]">
                  SUBMIT APPLICATION <Send className="w-3 h-3" />
                </Button>
                <p className="text-center text-[9px] text-white/20 tracking-widest uppercase font-bold">I will review your application within 24-48 hours.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
