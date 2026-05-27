"use client"

import React from "react"
import { motion } from "framer-motion"
import { Cloud, Cpu, GitBranch, ShieldCheck } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const SKILLS_DATA = [
  {
    category: "Cloud Architecture (AWS Core)",
    icon: Cloud,
    color: "cyan",
    items: [
      { name: "AWS", level: 95 },
      { name: "EC2", level: 90 },
      { name: "IAM", level: 95 },
      { name: "VPC", level: 90 },
      { name: "CloudWatch", level: 85 },
      { name: "Route53", level: 85 },
      { name: "EKS", level: 90 },
      { name: "RDS", level: 80 }
    ]
  },
  {
    category: "Containerization & Systems",
    icon: Cpu,
    color: "blue",
    items: [
      { name: "Kubernetes", level: 90 },
      { name: "Docker", level: 95 },
      { name: "Linux", level: 90 },
      { name: "RHEL", level: 85 },
      { name: "Nginx", level: 80 }
    ]
  },
  {
    category: "CI/CD & Automation",
    icon: GitBranch,
    color: "indigo",
    items: [
      { name: "Jenkins", level: 90 },
      { name: "GitHub Actions", level: 90 },
      { name: "CI/CD", level: 95 },
      { name: "Shell Scripting", level: 85 }
    ]
  },
  {
    category: "DevSecOps & Quality",
    icon: ShieldCheck,
    color: "emerald",
    items: [
      { name: "DevSecOps", level: 95 },
      { name: "Terraform", level: 90 },
      { name: "SonarQube", level: 85 },
      { name: "Trivy", level: 85 }
    ]
  }
]

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-8 relative border-t border-white/5 bg-slate-950/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 w-full">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-1">
            Engineered using modern standards. A structured view of languages, cloud services, and tools I use on a daily basis.
          </p>
        </div>

        {/* Skill Card Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        >
          {SKILLS_DATA.map((group, idx) => {
            const Icon = group.icon
            
            // Map group colors
            const colorClasses = {
              cyan: "from-accent-cyan/15 to-accent-cyan/5 border-accent-cyan/20 text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)]",
              blue: "from-accent-blue/15 to-accent-blue/5 border-accent-blue/20 text-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.15)]",
              indigo: "from-accent-indigo/15 to-accent-indigo/5 border-accent-indigo/20 text-accent-indigo shadow-[0_0_15px_rgba(99,102,241,0.15)]",
              emerald: "from-accent-emerald/15 to-accent-emerald/5 border-accent-emerald/20 text-accent-emerald shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            }

            const barColorClasses = {
              cyan: "bg-accent-cyan shadow-[0_0_8px_#06b6d4]",
              blue: "bg-accent-blue shadow-[0_0_8px_#3b82f6]",
              indigo: "bg-accent-indigo shadow-[0_0_8px_#6366f1]",
              emerald: "bg-accent-emerald shadow-[0_0_8px_#10b981]"
            }

            return (
              <Card
                key={group.category}
                delay={idx * 0.12}
                className="bg-slate-900/35 border-white/5 hover:border-white/10 group flex flex-col gap-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center border ${colorClasses[group.color as keyof typeof colorClasses]}`}>
                    <Icon size={20} className="stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">{group.category}</h3>
                </div>

                {/* Sub items List */}
                <div className="flex flex-col gap-4">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                        <span className="text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                        <span className="text-slate-400 font-mono text-[10px] sm:text-xs">{skill.level}%</span>
                      </div>
                      
                      {/* Premium Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-850 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          className={`h-full rounded-full ${barColorClasses[group.color as keyof typeof barColorClasses]}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </motion.div>

        {/* Skill Badges Footnote */}
        <Card hoverGlow={false} className="w-full bg-slate-950/40 border-white/5 py-4 px-6 flex flex-wrap gap-2 items-center justify-center">
          <span className="text-xs font-mono text-slate-400">Other capabilities:</span>
          {["RHEL", "SonarQube", "Trivy", "EC2", "IAM", "VPC", "Route53", "RDS", "Nginx"].map(item => (
            <span key={item} className="text-[10px] sm:text-xs bg-slate-900 border border-white/5 px-2 py-0.5 rounded text-slate-400 font-mono">{item}</span>
          ))}
        </Card>

      </div>
    </section>
  )
}
