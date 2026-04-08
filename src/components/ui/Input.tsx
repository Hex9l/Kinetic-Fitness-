import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full bg-surface-low border-b-2 border-white/10 px-4 py-4 text-white outline-none transition-all duration-300 font-body placeholder:text-white/40",
        "focus:border-secondary focus:bg-surface focus:shadow-[0_8px_20px_-8px_rgba(189,244,255,0.2)]",
        className
      )}
      {...props}
    />
  );
}
