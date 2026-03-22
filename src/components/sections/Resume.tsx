"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-[family-name:var(--font-mono)] text-accent text-sm uppercase tracking-widest">
            04
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-[family-name:var(--font-mono)] text-muted text-sm uppercase tracking-widest">
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-16"
        >
          Where I&apos;ve{" "}
          <span className="text-accent">worked.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="timeline-dot" />

              {/* Card */}
              <div className="border border-border bg-surface/50 p-6 ml-4 hover:border-accent/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">
                      {exp.role}
                    </h3>
                    <p className="font-[family-name:var(--font-mono)] text-accent text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-muted text-xs uppercase tracking-widest">
                    {exp.dates}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, j) => (
                    <li
                      key={j}
                      className="font-[family-name:var(--font-mono)] text-muted text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-accent mt-1 shrink-0">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-[#0a0a0a] font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-widest hover:bg-accent/90 active:scale-[0.98] transition-all duration-200"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
