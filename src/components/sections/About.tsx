"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "5", label: "Production Apps" },
  { value: "99%", label: "Uptime SLA" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-[family-name:var(--font-mono)] text-accent text-sm uppercase tracking-widest">
            01
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-[family-name:var(--font-mono)] text-muted text-sm uppercase tracking-widest">
            About
          </span>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            I turn complex problems into{" "}
            <span className="text-accent">clean, performant code.</span>
          </h2>
          <p className="font-[family-name:var(--font-mono)] text-muted text-base sm:text-lg max-w-3xl leading-relaxed">
            I&apos;m a full-stack developer who obsesses over performance metrics, clean
            architecture, and shipping fast. I don&apos;t just write code — I build
            systems that scale and UIs that convert.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="p-6 border border-border bg-surface/50 group hover:border-accent/50 transition-colors duration-300"
            >
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-black text-accent mb-2">
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-xs text-muted uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
