import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { Preloader } from "@/components/ui/Preloader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { LeadMagnetSection } from "@/components/sections/LeadMagnetSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <main className="w-full">
          <HeroSection />
          <MarqueeTicker />
          <StatsSection />
          <AboutSection />
          <ResultsSection />
          <PricingSection />
          <TestimonialsSection />
          <BookingSection />
          <LeadMagnetSection />
          <FAQSection />
        </main>
      </motion.div>

      <Footer />
    </SmoothScroll>
  );
}
