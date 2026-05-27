"use client"

import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const EXPERIENCE_DATA = [
  {
    role: "AWS DevOps & DevSecOps Engineer",
    company: "PruTech Solutions",
    duration: "Sep 2021 – Present",
    location: "Hyderabad, India",
    type: "Full-Time",
    tech: ["AWS", "Kubernetes", "DevSecOps", "Terraform", "Jenkins", "SonarQube", "Trivy", "Linux", "Nginx"],
    bullets: [
      "Built scalable, secure AWS cloud infrastructure using modular Terraform modules, promoting reliable replication across elastic environments.",
      "Orchestrated container deployments and handled cluster scaling using managed Amazon EKS (Kubernetes) environments.",
      "Designed and automated production-grade CI/CD pipelines integrating Trivy vulnerability scanning and SonarQube quality gates to achieve robust DevSecOps compliance.",
      "Configured high-performance Nginx reverse proxies, SSL keys, and optimized load balancing setups.",
      "Administered enterprise Linux (RHEL) server environments, automating patch maintenance and shell scripts.",
      "Drove infrastructure reliability engineering, enforcing proactive CloudWatch alerting, and maintaining 99.9% uptime architectures."
    ]
  },
  {
    role: "Software Engineering Trainee",
    company: "Elite Idea Solutions",
    duration: "Nov 2020 – May 2021",
    location: "Hyderabad, India",
    type: "Internship",
    tech: ["Linux", "Git", "Shell Scripting", "Networking Basics", "CI/CD Foundations"],
    bullets: [
      "Introduced to automated scripting frameworks, composing custom bash scripts to automate raw logging and server analysis.",
      "Gained deep understanding of Linux system architectures, networking, routing protocols, and access management profiles.",
      "Assisted in maintaining code repositories using Git version control, structuring branch merges and pipeline integrations.",
      "Acquired foundations in CI/CD concepts, virtualization, and modern container systems."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-8 relative border-t border-white/5 bg-slate-900/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 w-full">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-1">
            Proven track record of engineering cloud systems, automating delivery workflows, and integrating security parameters.
          </p>
        </div>

        {/* Timeline Pipeline */}
        <div className="relative w-full flex flex-col gap-10 mt-4 pl-4 sm:pl-8">
          
          {/* Vertical Pipeline Connection Line */}
          <div className="absolute left-[21px] sm:left-[37px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-indigo opacity-35" />

          {EXPERIENCE_DATA.map((job, idx) => (
            <div key={job.company} className="relative w-full flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
              
              {/* Timeline Bullet Node */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="absolute left-[-5px] sm:left-[-1px] z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950 border-2 border-accent-cyan hover:border-accent-blue flex items-center justify-center text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-colors duration-300"
              >
                <Briefcase size={16} className="sm:w-[18px] sm:h-[18px] stroke-[2]" />
              </motion.div>

              {/* Experience Card */}
              <Card
                delay={idx * 0.15}
                className="w-full ml-8 sm:ml-12 bg-slate-900/35 border-white/5 hover:border-accent-cyan/15 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.15)] flex flex-col gap-5 p-6 sm:p-8"
              >
                {/* Card Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/5 pb-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] sm:text-xs font-bold text-accent-cyan tracking-wider uppercase font-mono">{job.type}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{job.role}</h3>
                    <div className="text-sm font-semibold text-slate-350">{job.company}</div>
                  </div>
                  
                  {/* Metadata labels */}
                  <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1 bg-slate-950/50 border border-white/5 px-2.5 py-1 rounded-md text-[11px]">
                      <Calendar size={12} className="text-accent-cyan" />
                      {job.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-950/50 border border-white/5 px-2.5 py-1 rounded-md text-[11px]">
                      <MapPin size={12} className="text-accent-cyan" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2.5 items-start">
                      <ChevronRight size={16} className="text-accent-cyan/80 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Skills Badge display */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {job.tech.map((tag) => (
                    <Badge key={tag} variant="slate" className="text-[10px] px-2 py-0.5 rounded">
                      {tag}
                    </Badge>
                  ))}
                </div>

              </Card>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
