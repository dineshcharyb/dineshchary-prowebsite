"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const MotionButton = motion.button as any;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 outline-none focus:ring-2 focus:ring-accent-cyan/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]"
    
    const variants = {
      primary: "bg-gradient-to-r from-accent-cyan to-accent-blue text-background font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.55)] border border-transparent",
      secondary: "bg-slate-800/80 hover:bg-slate-700/90 text-foreground border border-slate-700/50 hover:border-slate-600",
      outline: "border border-slate-700 hover:border-accent-cyan bg-transparent text-foreground hover:text-accent-cyan shadow-sm",
      ghost: "hover:bg-slate-800/40 text-foreground/80 hover:text-foreground border border-transparent",
    }

    const sizes = {
      sm: "px-3 py-1.5 text-xs sm:text-sm gap-1.5",
      md: "px-5 py-2.5 text-sm sm:text-base gap-2",
      lg: "px-6 py-3.5 text-base sm:text-lg gap-2.5",
    }

    return (
      <MotionButton
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
