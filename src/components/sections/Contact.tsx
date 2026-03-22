"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Mail, Copy, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Vineet90x",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vsa2/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/vineet_salxdev",
    icon: Twitter,
  },
];

const email = "vineetsalianxdev@gmail.com";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!", {
      description: email,
      duration: 2000,
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-[family-name:var(--font-mono)] text-accent text-sm uppercase tracking-widest">
            05
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-[family-name:var(--font-mono)] text-muted text-sm uppercase tracking-widest">
            Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6"
        >
          Let&apos;s work
          <br />
          <span className="text-accent">together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-mono)] text-muted text-base sm:text-lg mb-12 max-w-xl mx-auto"
        >
          Got a project in mind? I&apos;m always open to discussing new opportunities
          and interesting ideas.
        </motion.p>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 px-6 py-4 border border-border hover:border-accent transition-colors duration-300"
          >
            <Mail className="w-5 h-5 text-accent" />
            <span className="font-[family-name:var(--font-mono)] text-lg sm:text-xl text-foreground group-hover:text-accent transition-colors">
              {email}
            </span>
            <Copy className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6 text-muted group-hover:text-accent group-hover:scale-110 transition-all duration-200" />
              <ArrowUpRight className="absolute top-1 right-1 w-3 h-3 text-muted/0 group-hover:text-accent/60 transition-all duration-200" />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-border"
        >
          <p className="font-[family-name:var(--font-mono)] text-xs text-muted uppercase tracking-widest">
            Designed & built with{" "}
            <span className="text-accent">precision</span>
            {" · "}© {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
