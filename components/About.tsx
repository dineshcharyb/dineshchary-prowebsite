"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Server, Cpu, Cloud, Award, HelpCircle } from "lucide-react"
import { Card } from "./ui/card"

const STATS = [
  { value: "5+ Years", label: "Professional Experience", desc: "AWS, Kubernetes, & CI/CD" },
  { value: "20+", label: "Deployments Delivered", desc: "Production environments" },
  { value: "99.9%", label: "Uptime Focus", desc: "Reliability & redundancy" },
  { value: "Specialist", label: "Cloud & DevSecOps", desc: "End-to-end security" },
]

const HIGHLIGHTS = [
  { icon: Cloud, title: "AWS Cloud Engineering", desc: "Multi-AZ VPCs, scalable EC2 nodes, managed EKS clusters, secure IAM designs, and CloudWatch telemetry." },
  { icon: Server, title: "Kubernetes Platforms", desc: "Orchestrating scalable application deployment pipelines, handling Ingress controllers, and Helm charts." },
  { icon: Shield, title: "DevSecOps Security", desc: "Implementing shift-left security scans with SonarQube quality gates and Trivy container vulnerability tools." },
  { icon: Cpu, title: "Infrastructure as Code", desc: "Writing modular, highly reusable Terraform configurations to manage elastic environments securely." },
]

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 w-full">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">My Philosophy</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-1">
            Engineered systems designed to survive scale, prioritize shift-left security, and automate human errors out of existence.
          </p>
        </div>

        {/* Narrative & Highlights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 w-full items-start">
          
          {/* Left Side: Statement & Stats Grid */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Card hoverGlow={false} className="bg-slate-900/30 border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Architecting Resilient Platforms</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I design resilient AWS cloud infrastructures, secure automated deployment pipelines, and Kubernetes-based delivery platforms focused strictly on performance, absolute automation, long-term reliability, and defense-in-depth security.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-slate-800 border border-slate-700/50 px-3 py-1 rounded-lg text-slate-300 font-mono">Linux Systems</span>
                <span className="text-xs bg-slate-800 border border-slate-700/50 px-3 py-1 rounded-lg text-slate-300 font-mono">Shell Scripting</span>
                <span className="text-xs bg-slate-800 border border-slate-700/50 px-3 py-1 rounded-lg text-slate-300 font-mono">Nginx Proxy</span>
              </div>
            </Card>

            {/* Stat Cards Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((stat, idx) => (
                <Card 
                  key={stat.label} 
                  delay={idx * 0.1}
                  className="bg-gradient-to-br from-slate-900/60 to-slate-950 border-white/5 flex flex-col justify-between items-start gap-1 p-5 hover:border-accent-cyan/20"
                >
                  <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">{stat.label}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium">{stat.desc}</span>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Key Competencies Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon
              return (
                <Card 
                  key={item.title}
                  delay={idx * 0.12}
                  className="flex flex-col gap-3 p-5 bg-slate-900/40 border-white/5 hover:border-accent-cyan/20 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/15 to-accent-blue/15 border border-accent-cyan/20 text-accent-cyan flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon size={20} className="stroke-[2]" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-accent-cyan transition-colors">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </Card>
              )
            })}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
