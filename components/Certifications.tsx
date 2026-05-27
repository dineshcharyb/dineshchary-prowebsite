"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Award, Lock, ExternalLink, Calendar } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const CERTS_DATA = [
  {
    title: "AWS Certified DevOps Engineer Professional",
    issuer: "Amazon Web Services (AWS)",
    date: "Verified",
    iconColor: "text-amber-500",
    bgColor: "from-amber-500/10 to-amber-600/5",
    borderColor: "group-hover:border-amber-500/30",
    id: "AWS-DEVOPS-PRO"
  },
  {
    title: "CKA: Certified Kubernetes Administrator",
    issuer: "The Linux Foundation & CNCF",
    date: "Verified",
    iconColor: "text-blue-500",
    bgColor: "from-blue-500/10 to-blue-600/5",
    borderColor: "group-hover:border-blue-500/30",
    id: "CKA-CNCF"
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "Verified",
    iconColor: "text-indigo-500",
    bgColor: "from-indigo-500/10 to-indigo-600/5",
    borderColor: "group-hover:border-indigo-500/30",
    id: "TF-ASSOC-HASHI"
  }
]

export default function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8 relative border-t border-white/5 bg-slate-900/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Credentials & <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mt-1">
            Independently verified technical credentials validating cloud architectures, infrastructure as code, and orchestration security.
          </p>
        </div>

        {/* Credentials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {CERTS_DATA.map((cert, idx) => (
            <Card
              key={cert.title}
              delay={idx * 0.1}
              className={`bg-slate-900/30 border-white/5 hover:bg-slate-950/45 group flex flex-col justify-between gap-5 p-6 hover:shadow-[0_10px_25px_-12px_rgba(6,182,212,0.15)] transition-all duration-300`}
            >
              <div className="flex flex-col gap-4">
                {/* Cert Badge Header */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.bgColor} border border-white/5 flex items-center justify-center ${cert.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                    <Award size={24} className="stroke-[2]" />
                  </div>
                  <Badge variant="emerald" className="flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full">
                    <ShieldCheck size={10} className="stroke-[2.5]" />
                    Verified
                  </Badge>
                </div>

                {/* Cert Titles */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight group-hover:text-accent-cyan transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">{cert.issuer}</p>
                </div>
              </div>

              {/* Bottom Stamp info */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-3 border-t border-white/5">
                <span className="flex items-center gap-1 font-semibold text-slate-400">
                  <Lock size={10} className="text-accent-cyan" />
                  ID: {cert.id}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={10} />
                  {cert.date}
                </span>
              </div>

            </Card>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
