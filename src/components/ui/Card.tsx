import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "primary" | "secondary";
}

export function Card({ className, glowColor, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[2px] bg-surface/80 backdrop-blur-md border border-white/5",
        "relative overflow-hidden group",
        className
      )}
      {...props}
    >
      {glowColor && (
        <div 
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none",
            glowColor === "primary" ? "bg-primary" : "bg-secondary"
          )} 
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
