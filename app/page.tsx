"use client"

import React from "react"
import Background from "@/components/Background"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import MobileCTA from "@/components/MobileCTA"

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground select-none overflow-x-hidden">
      {/* Animated Glowing Tech Grid Background */}
      <Background />

      {/* Sticky Glassmorphic Header Navigation */}
      <Navbar />

      {/* Structured Sections */}
      <div className="flex flex-col w-full relative z-10 max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

      {/* Sticky bottom Action dock on mobile viewports */}
      <MobileCTA />
    </main>
  )
}
