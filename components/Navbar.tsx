"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShieldAlert, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Scroll handler for navigation updates and styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section calculation
      const sections = NAV_ITEMS.map(item => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full px-4 sm:px-8 py-4",
        scrolled ? "bg-background/75 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo - Styled as terminal command */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-background shadow-md">
            <Terminal size={16} className="stroke-[2.5]" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-accent-cyan transition-colors">
            dinesh.dev<span className="text-accent-cyan">_</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:text-white",
                  isActive ? "text-white" : "text-slate-400"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-accent-cyan/15 to-accent-blue/15 border border-accent-cyan/20 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Recruiters Tag - Available now status badge */}
        <div className="hidden lg:flex items-center gap-2 bg-accent-emerald/10 border border-accent-emerald/20 px-3 py-1 rounded-full text-xs font-semibold text-accent-emerald animate-pulse-slow">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
          Active Opportunity
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center p-2 rounded-xl border border-white/10 bg-slate-900/60 text-slate-300 hover:text-white focus:outline-none hover:bg-slate-950 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Glassmorphic Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden mt-3 px-1"
          >
            <div className="glass-panel rounded-2xl p-4 flex flex-col gap-2 shadow-2xl">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border",
                      isActive
                        ? "bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 border-accent-cyan/25 text-accent-cyan"
                        : "border-transparent hover:bg-white/5 text-slate-400 hover:text-white"
                    )}
                  >
                    {item.label}
                  </a>
                )}
              )}
              {/* Mobile Opportunity Tag */}
              <div className="mt-2 flex items-center justify-center gap-2 bg-accent-emerald/10 border border-accent-emerald/20 p-3 rounded-xl text-xs font-bold text-accent-emerald">
                <div className="w-2 h-2 rounded-full bg-accent-emerald" />
                Available for DevOps Opportunities
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
