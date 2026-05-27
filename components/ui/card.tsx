"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverGlow?: boolean
  animate?: boolean
  delay?: number
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverGlow = true, animate = true, delay = 0, children, ...props }, ref) => {
// Removed Component variable; directly render conditionally
    
    const animationProps = animate ? {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.5, ease: "easeOut", delay }
    } : {};
    const MotionDiv = motion.div as any;

    return animate ? (
      // @ts-ignore
      <MotionDiv
        ref={ref as any}
        {...animationProps}
        className={cn(
          "glass-panel rounded-2xl p-6",
          hoverGlow && "glass-panel-hover shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </MotionDiv>
    ) : (
      <div
        ref={ref as any}
        className={cn(
          "glass-panel rounded-2xl p-6",
          hoverGlow && "glass-panel-hover shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
)
Card.displayName = "Card"

export { Card }
