import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 active:scale-[0.97] cursor-pointer select-none";

  const variants = {
    primary:
      "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_#7c3aed55]",
    secondary:
      "bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-sm",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}