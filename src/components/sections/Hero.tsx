"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 animate-grid-pulse" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] font-[family-name:var(--font-mono)] text-accent/10 text-sm select-none"
        >
          {"const build = () => ship();"}
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[15%] font-[family-name:var(--font-mono)] text-accent/10 text-sm select-none"
        >
          {"async function deploy() {}"}
        </motion.div>
        <motion.div
          animate={{ y: [-15, 25, -15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[20%] font-[family-name:var(--font-mono)] text-accent/10 text-sm select-none"
        >
          {"git push origin main"}
        </motion.div>
        <motion.div
          animate={{ y: [10, -30, 10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] font-[family-name:var(--font-mono)] text-accent/10 text-sm select-none"
        >
          {"npm run build && deploy"}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-[family-name:var(--font-mono)] text-xs text-muted uppercase tracking-widest">
              Available for work
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6"
        >
          I build things
          <br />
          <span className="text-accent">that work.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-mono)] text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          Full-stack developer crafting fast, scalable web apps — from pixel-perfect
          UIs to battle-tested backends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#0a0a0a] font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-widest rounded-none hover:bg-accent/90 active:scale-[0.98] transition-all duration-200"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Ghost CTA */}
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-widest rounded-none hover:border-accent hover:text-accent active:scale-[0.98] transition-all duration-200"
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
