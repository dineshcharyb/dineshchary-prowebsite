"use client"

import React from "react"
import { motion } from "framer-motion"

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-background">
      {/* Dynamic tech-grid background overlay */}
      <div className="absolute inset-0 w-full h-full tech-grid opacity-[0.8] animate-grid-drift" />

      {/* Radial soft ambient dark gradient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030712_85%)]" />

      {/* Large Glowing Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cyan Orb - representing AWS cloud nodes */}
        <motion.div
          animate={{
            x: ["-20%", "20%", "-10%", "-20%"],
            y: ["-10%", "30%", "10%", "-10%"],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-cyan/15 blur-[130px] opacity-75 md:w-[800px] md:h-[800px]"
        />

        {/* Blue Orb - representing secure DevSecOps pipelines */}
        <motion.div
          animate={{
            x: ["20%", "-25%", "10%", "20%"],
            y: ["30%", "-10%", "20%", "30%"],
            scale: [1.1, 0.9, 1.2, 1.1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/15 blur-[130px] opacity-70 md:w-[800px] md:h-[800px]"
        />

        {/* Indigo Center Ambient Light */}
        <motion.div
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-indigo/10 blur-[120px] md:w-[700px] md:h-[700px]"
        />
      </div>
    </div>
  )
}
