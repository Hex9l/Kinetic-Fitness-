import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  trigger?: string | Element;
}

export function RevealText({ 
  children, 
  className, 
  as: Component = "h1", 
  delay = 0,
  trigger
}: RevealTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = textRef.current;
    if (!el) return;

    // Split text into characters and lines
    const split = new SplitType(el, { types: "chars,lines", tagName: "span" });

    // Initial state: chars hidden downwards
    gsap.set(split.chars, { 
      y: "110%",
      opacity: 0
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || el,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    timeline.to(split.chars, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.02,
      ease: "expo.out",
      delay: delay
    });

    // Clean up
    return () => {
      split.revert();
      timeline.kill();
    };
  }, [children, delay, trigger]);

  return (
    <Component ref={textRef as any} className={cn("overflow-hidden block", className)}>
      {children}
    </Component>
  );
}
