"use client";

import React from "react";
import { motion } from "framer-motion";
import { workHighlights } from "@/lib/home.constants";
import { Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ExperienceSection() {
  return (
    <section className="relative z-10 px-4 py-24 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full"
          whileHover={{ scale: 1.05 }}
        >
          <Briefcase className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-white/70">Experience</span>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Where I&apos;ve Worked
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          A journey through impactful roles and meaningful projects
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />

        <div className="space-y-12">
          {workHighlights.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 md:-translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              />

              {/* Content card */}
              <motion.div
                className={`ml-8 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300">
                  <span className="text-sm text-blue-400 font-medium">
                    {work.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {work.role}
                  </h3>
                  <p className="text-white/60 mt-1">{work.company}</p>
                  <p className="text-white/50 text-sm mt-4 leading-relaxed">
                    {work.highlight}
                  </p>
                </div>
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* View full experience link */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link href="/work">
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View full experience
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}

