"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ctaContent } from "@/lib/home.constants";

export function CTASection() {
  return (
    <motion.section
      className="relative z-10 px-4 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="p-12 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden"
          whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          {/* Background gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {ctaContent.title.split("amazing")[0]}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                amazing
              </span>
              {ctaContent.title.split("amazing")[1]}
            </h2>
            <p className="text-white/60 mb-8">{ctaContent.description}</p>
            <motion.a
              href={`mailto:${ctaContent.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full"
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

