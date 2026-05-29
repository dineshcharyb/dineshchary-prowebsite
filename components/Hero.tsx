"use client"

import React from "react"
import { motion } from "framer-motion"
import { MessageSquare, Mail, ShieldCheck } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

const HERO_BADGES = ["AWS", "Kubernetes", "DevSecOps", "Docker"]

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
        
        {/* Left Side: Professional Summary & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 flex flex-col items-start text-left gap-4"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-slate-900/60 border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan"></span>
            </span>
            <span>Available for Remote & Local Opportunities</span>
          </motion.div>

          {/* Dinesh's Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Bompelly <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-indigo bg-clip-text text-transparent">Dinesh Chary</span>
          </motion.h1>

          {/* Professional Role Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-200 tracking-wide flex items-center gap-2"
          >
            <ShieldCheck className="text-accent-cyan inline stroke-[2]" size={22} />
            AWS DevOps / DevSecOps Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg font-medium text-slate-400 max-w-xl"
          >
            Building secure cloud infrastructure that scales.
          </motion.p>

          {/* Brief Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl"
          >
            4+ years delivering AWS automation, production-grade Kubernetes platforms, secure shift-left CI/CD pipelines, and robust DevSecOps engineering across cloud environments.
          </motion.p>

          {/* Technology Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-1.5 sm:gap-2 my-2"
          >
            {HERO_BADGES.map((badge, idx) => (
              <Badge key={badge} variant={idx % 2 === 0 ? "cyan" : "blue"}>
                {badge}
              </Badge>
            ))}
          </motion.div>

          {/* Action CTAs & Prefilled links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto my-3"
          >
            {/* Primary Action: WhatsApp */}
            <a 
              href="https://wa.me/919346563449?text=Hi%20Dinesh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20DevOps%20opportunity."
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <MessageSquare size={18} />
                Connect on WhatsApp
              </Button>
            </a>

            {/* Secondary Action: Email */}
            <a 
              href="mailto:bompelly.dineshchary@gmail.com?subject=DevOps%20Opportunity%20Discussion&body=Hi%20Dinesh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <Mail size={18} />
                Send Email
              </Button>
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col gap-0.5 text-xs text-slate-400 font-mono mt-2 border-t border-white/5 pt-4 w-full"
          >
            <div>Email: <a href="mailto:bompelly.dineshchary@gmail.com" className="text-white hover:text-accent-cyan transition-colors">bompelly.dineshchary@gmail.com</a></div>
            <div>Tel: <a href="https://wa.me/919346563449" className="text-white hover:text-accent-cyan transition-colors">+91 9346563449</a></div>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Image Display & Floating Tech Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="md:col-span-5 flex justify-center items-center w-full relative group mt-8 md:mt-0"
        >
          {/* Glowing Backdrops behind the photo */}
          <div className="absolute w-72 h-72 rounded-full bg-accent-cyan/10 blur-3xl -z-10 group-hover:bg-accent-cyan/15 transition-all duration-500" />
          <div className="absolute w-72 h-72 rounded-full bg-accent-blue/10 blur-3xl -z-10 bottom-0 right-0 group-hover:bg-accent-blue/15 transition-all duration-500" />

          {/* Premium Floating Portrait Container */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl p-1.5 bg-gradient-to-br from-accent-cyan/35 to-accent-blue/35 shadow-2xl neon-glow-cyan overflow-hidden"
          >
            {/* Dark inside layer */}
            <div className="relative w-full h-full rounded-[14px] bg-slate-950 overflow-hidden group">
              {/* Profile Image with subtle scale on hover */}
              <img
                src="/dinesh.png"
                alt="Bompelly Dinesh Chary"
                className="w-full h-full object-cover object-top filter brightness-[0.9] hover:brightness-100 scale-100 hover:scale-[1.03] transition-all duration-500"
                loading="eager"
              />
              {/* Cyber Overlay Details */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] text-accent-cyan tracking-widest uppercase font-bold font-mono">AWS & Kubernetes DevOps</span>
                <span className="text-sm font-bold text-white tracking-wide">B. Dinesh Chary</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
