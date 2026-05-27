"use client"

import React from "react"
import { motion } from "framer-motion"
import { Activity, ShieldCheck, Box, Code, ExternalLink, ArrowRight } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const PROJECTS_DATA = [
  {
    title: "AWS Elastic Disaster Recovery",
    desc: "Designed and engineered an automated cross-AZ disaster recovery setup for enterprise Windows Server 2019 and high-availability Microsoft SQL Server workloads in the AWS Mumbai region.",
    icon: Activity,
    tech: ["AWS", "DRS", "EC2", "Networking", "Windows", "SQL Server"],
    metrics: "RTO < 15 mins | RPO < 5 mins"
  },
  {
    title: "DevSecOps Secure CI/CD Pipeline",
    desc: "Designed a secure 'shift-left' integration inside Jenkins and GitHub Actions workflows, executing static analysis code gates and vulnerability assessments before compilation.",
    icon: ShieldCheck,
    tech: ["Jenkins", "Docker", "Trivy", "SonarQube", "GitHub Actions"],
    metrics: "Zero Critical Vulnerabilities in Prod"
  },
  {
    title: "Kubernetes Deployment Automation",
    desc: "Orchestrated containerization strategies for legacy web modules and managed auto-scaling production services inside Kubernetes using custom Ingress controllers and Helm package configurations.",
    icon: Box,
    tech: ["Kubernetes", "Docker", "Ingress", "Helm", "AutoScaling"],
    metrics: "99.99% Availability Architecture"
  },
  {
    title: "Terraform Infrastructure as Code",
    desc: "Automated AWS environment provisioning by authoring reusable IaC configurations. Provisioned safe VPC subnets, IAM boundaries, EC2 nodes, and secure storage structures.",
    icon: Code,
    tech: ["Terraform", "AWS", "EC2", "IAM", "VPC", "S3"],
    metrics: "100% Environment Replication Speed"
  }
]

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-8 relative border-t border-white/5 bg-slate-950/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 w-full">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-1">
            Real-world deployments, infrastructure automation packages, and shift-left pipelines.
          </p>
        </div>

        {/* Project Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        >
          {PROJECTS_DATA.map((project, idx) => {
            const Icon = project.icon
            return (
              <Card
                key={project.title}
                delay={idx * 0.1}
                className="bg-slate-900/35 border-white/5 hover:border-accent-cyan/15 group flex flex-col justify-between gap-6 p-6 sm:p-8"
              >
                <div className="flex flex-col gap-4">
                  {/* Project Header Info */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/15 text-accent-cyan flex items-center justify-center group-hover:scale-105 group-hover:text-white transition-all duration-300">
                      <Icon size={22} className="stroke-[2]" />
                    </div>
                    {/* Architectural KPI */}
                    <span className="text-[10px] sm:text-xs font-mono font-bold bg-slate-950/80 border border-white/5 text-slate-350 px-2.5 py-1 rounded-md">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Tech Tags & Bottom link */}
                <div className="flex flex-col gap-4 border-t border-white/5 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <Badge key={tag} variant="slate" className="text-[10px] px-2 py-0.5 rounded">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-accent-cyan hover:text-white cursor-pointer transition-colors w-fit group/btn">
                    <span>Inspect Infrastructure Pipeline</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-205" />
                  </div>
                </div>

              </Card>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
