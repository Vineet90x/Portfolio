"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-[family-name:var(--font-mono)] text-accent text-sm uppercase tracking-widest">
            03
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-[family-name:var(--font-mono)] text-muted text-sm uppercase tracking-widest">
            Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-16"
        >
          Things I&apos;ve{" "}
          <span className="text-accent">built.</span>
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="card-glow group border border-border bg-surface/50 overflow-hidden"
            >
              {/* Gradient Placeholder Image */}
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300 relative`}
              >
                <div className="absolute inset-0 bg-surface/20" />
                <div className="absolute bottom-3 right-3 font-[family-name:var(--font-mono)] text-xs text-white/60">
                  preview
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="font-[family-name:var(--font-mono)] text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-[family-name:var(--font-mono)] border border-border text-muted uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-3 border-t border-border">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-[family-name:var(--font-mono)] text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-[family-name:var(--font-mono)] text-muted hover:text-accent transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
