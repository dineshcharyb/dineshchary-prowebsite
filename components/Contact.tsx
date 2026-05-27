"use client"

import React, { useState } from "react"
import { MessageSquare, Mail, Github, Linkedin, Copy, Check, Terminal, ExternalLink } from "lucide-react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bompelly.dineshchary@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-8 relative border-t border-white/5 overflow-hidden">
      
      {/* Decorative vector grid backlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 w-full relative">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">Contact</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-1">
            Looking for a DevOps engineer who can deliver secure automation? Let's connect.
          </p>
        </div>

        {/* Premium Recruitment Board Card */}
        <Card 
          hoverGlow={true}
          className="w-full bg-slate-900/35 border-white/5 p-8 sm:p-12 text-center flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden"
        >
          {/* Top Status Alert */}
          <div className="inline-flex items-center gap-2 bg-accent-emerald/10 border border-accent-emerald/20 px-4 py-1.5 rounded-full text-xs font-bold text-accent-emerald animate-pulse-slow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
            Available for DevOps / DevSecOps opportunities
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight max-w-lg mt-2">
            Let's build secure, automated cloud infrastructures together.
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            Send a direct message on WhatsApp for rapid feedback, or launch a formal email to organize a call. I usually respond within a few hours.
          </p>

          {/* Action CTAs and Prefilled Path triggers */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto my-4">
            
            {/* Primary Action: WhatsApp */}
            <a 
              href="https://wa.me/919346563449?text=Hi%20Dinesh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20DevOps%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6">
                <MessageSquare size={18} className="stroke-[2.5]" />
                WhatsApp Message
              </Button>
            </a>

            {/* Secondary Action: Email */}
            <a 
              href="mailto:bompelly.dineshchary@gmail.com?subject=DevOps%20Opportunity%20Discussion&body=Hi%20Dinesh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6">
                <Mail size={18} />
                Send Email
              </Button>
            </a>

          </div>

          {/* Direct Address & Interactive Copy Board */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-950/80 border border-white/5 px-4 sm:px-6 py-3 rounded-2xl w-full max-w-md justify-between font-mono text-xs text-slate-300">
            <span className="truncate">bompelly.dineshchary@gmail.com</span>
            <button 
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-accent-cyan hover:text-white transition-colors border border-accent-cyan/25 hover:border-white px-3 py-1.5 rounded-lg bg-slate-900 shrink-0"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-accent-emerald" />
                  <span className="text-[10px] text-accent-emerald font-bold">COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span className="text-[10px] font-bold">COPY</span>
                </>
              )}
            </button>
          </div>

          {/* Contact Details Footnote */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 mt-2 font-mono">
            <div>WhatsApp: <span className="text-white">+91 9346563449</span></div>
            <div>Location: <span className="text-white">Hyderabad, India</span></div>
          </div>

        </Card>

        {/* Premium Cyber Footer */}
        <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/5 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1.5">
            <Terminal size={14} className="text-accent-cyan" />
            <span>© {new Date().getFullYear()} Bompelly Dinesh Chary. All rights reserved.</span>
          </div>

          {/* Secondary social profiles */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/dineshcharyb/dineshchary-prowebsite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Github size={12} />
              <span>GitHub</span>
              <ExternalLink size={10} className="opacity-50" />
            </a>
            <span>|</span>
            <a 
              href="LINKEDIN_URL_HERE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Linkedin size={12} />
              <span>LinkedIn</span>
              <ExternalLink size={10} className="opacity-50" />
            </a>
          </div>
        </footer>

      </div>
    </section>
  )
}
