"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { ctaContent } from "@/lib/home.constants";

export function CTASection() {
  return (
    <motion.section
      className="relative z-10 px-4 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="p-12 md:p-16 rounded-3xl bg-[#0d1a2d] border border-[#1e3a5f]/50 relative overflow-hidden"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "rgba(56, 189, 248, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-sky-500/10 blur-[100px] rounded-full" />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              className="inline-flex p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-6"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Mail className="w-6 h-6 text-sky-400" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {ctaContent.title.split("amazing")[0]}
              <span className="text-sky-400">amazing</span>
              {ctaContent.title.split("amazing")[1]}
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              {ctaContent.description}
            </p>
            <motion.a
              href={`mailto:${ctaContent.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaContent.buttonText}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
