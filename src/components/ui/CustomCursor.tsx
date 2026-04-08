import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);

  useEffect(() => {
    const dot = cursorDot.current;
    const ring = cursorRing.current;
    if (!dot || !ring) return;

    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const updateCursor = () => {
      const dx = mousePos.current.x - prevMousePos.current.x;
      const dy = mousePos.current.y - prevMousePos.current.y;
      
      // Calculate velocity for dynamic scaling
      const currentVelocity = Math.sqrt(dx * dx + dy * dy);
      velocity.current += (currentVelocity - velocity.current) * 0.15;
      
      const vScale = 1 + (velocity.current * 0.015);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      gsap.to(dot, { 
        x: mousePos.current.x, 
        y: mousePos.current.y, 
        duration: 0.1,
        ease: "power2.out"
      });

      gsap.to(ring, { 
        x: mousePos.current.x, 
        y: mousePos.current.y, 
        scaleX: Math.min(vScale, 2.5),
        scaleY: Math.max(1 / vScale, 0.4),
        rotate: angle,
        duration: 0.3,
        ease: "power2.out"
      });

      prevMousePos.current = { ...mousePos.current };
      requestAnimationFrame(updateCursor);
    };

    const onMouseEnterLink = () => {
      gsap.to(ring, { scale: 2.2, borderColor: "#ff525c", duration: 0.3 });
      gsap.to(dot, { scale: 0, duration: 0.3 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(ring, { scale: 1, borderColor: "#bdf4ff", duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);
    const animationFrame = requestAnimationFrame(updateCursor);

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrame);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDot}
        className="fixed z-[999] w-2 h-2 bg-primary rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden xl:block mix-blend-difference"
      />
      <div
        ref={cursorRing}
        className="fixed z-[999] w-8 h-8 border border-secondary rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden xl:block"
      />
    </>
  );
}

