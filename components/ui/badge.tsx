import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "blue" | "emerald" | "slate"
}

export function Badge({ className, variant = "slate", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide border transition-all duration-300"
  
  const variants = {
    cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20 hover:bg-accent-cyan/15",
    blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:bg-accent-blue/15",
    emerald: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20 hover:bg-accent-emerald/15",
    slate: "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:bg-slate-800/80 hover:text-white"
  }

  return (
    <span
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  )
}
