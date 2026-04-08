
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  children?: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-10 py-5 font-heading font-bold text-[10px] tracking-[0.3em] uppercase overflow-hidden rounded-full transition-all duration-300 select-none whitespace-nowrap";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(255,82,92,0.4)]",
    secondary: "bg-secondary text-background hover:bg-secondary/90 hover:shadow-[0_0_40px_rgba(189,244,255,0.4)]",
    outline: "border border-white/10 text-white hover:border-primary hover:text-primary hover:bg-primary/5",
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.02,
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className={cn(baseStyles, variants[variant], "group", className)}
      {...props}
    >
      {/* Glow Effect */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none",
        variant === "primary" ? "bg-primary/20" : variant === "secondary" ? "bg-secondary/20" : "bg-primary/10"
      )} />

       {/* Shine Effect */}
      <div className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
    </motion.button>
  );
}
