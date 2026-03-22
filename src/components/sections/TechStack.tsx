"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { techStack, categories } from "@/data/stack";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="stack" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-[family-name:var(--font-mono)] text-accent text-sm uppercase tracking-widest">
            02
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-[family-name:var(--font-mono)] text-muted text-sm uppercase tracking-widest">
            Tech Stack
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-16"
        >
          Tools I use to{" "}
          <span className="text-accent">ship fast.</span>
        </motion.h2>

        {/* Category Groups */}
        {categories.map((category, catIndex) => {
          const items = techStack.filter((t) => t.category === category);
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
              className="mb-10"
            >
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-bold font-[family-name:var(--font-mono)] uppercase tracking-widest border border-accent/30 text-accent bg-accent/5">
                  {category}
                </span>
                <div className="h-px flex-1 bg-border/50" />
              </div>

              {/* Tech Items */}
              <div className="flex flex-wrap gap-3">
                {items.map((tech) => (
                  <div
                    key={tech.name}
                    className="relative"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <button
                      className="group px-4 py-2.5 border border-border bg-surface/50 font-[family-name:var(--font-mono)] text-sm text-foreground hover:border-accent hover:bg-accent/5 active:scale-[0.97] transition-all duration-200 cursor-default"
                    >
                      <span className="group-hover:text-accent transition-colors">
                        {tech.name}
                      </span>
                    </button>

                    {/* Tooltip */}
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-xs font-[family-name:var(--font-mono)] whitespace-nowrap z-10"
                      >
                        {tech.proficiency}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Scrolling Marquee at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 border-y border-border py-4 overflow-hidden"
      >
        <div className="marquee-container">
          <div className="marquee-content animate-marquee">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="font-[family-name:var(--font-mono)] text-sm text-muted/40 uppercase tracking-widest"
              >
                {tech.name} ·
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
