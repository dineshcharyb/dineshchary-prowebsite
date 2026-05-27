"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Mail } from "lucide-react"

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  // Show bottom bar after user scrolls down slightly to prevent initial screen clutter
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial load check if already scrolled
    if (window.scrollY > 200) setIsVisible(true)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2 md:hidden bg-gradient-to-t from-background via-background/90 to-transparent"
        >
          <div className="glass-panel rounded-2xl p-2 flex items-center justify-between gap-3 shadow-2xl backdrop-blur-lg border-white/10">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/919346563449?text=Hi%20Dinesh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20DevOps%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-accent-cyan to-accent-blue text-background active:scale-95 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <MessageSquare size={16} className="stroke-[2.5]" />
                WhatsApp
              </button>
            </a>

            {/* Email Link */}
            <a
              href="mailto:bompelly.dineshchary@gmail.com?subject=DevOps%20Opportunity%20Discussion&body=Hi%20Dinesh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
              className="flex-1"
            >
              <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-slate-800 border border-slate-700/80 text-white hover:bg-slate-700 active:scale-95 transition-all">
                <Mail size={16} />
                Email
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
