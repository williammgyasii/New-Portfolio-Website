"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { heroContent } from "@/lib/home.constants";

export function HeroSection() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.section
      style={{ y, opacity }}
      className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4"
    >
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
          <span className="text-sm text-white/70">{heroContent.badge}</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Main headline */}
      <div className="text-center max-w-5xl">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="block text-white">{heroContent.headline.line1}</span>
          <motion.span
            className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {heroContent.headline.line2}
          </motion.span>
          <span className="block text-white">{heroContent.headline.line3}</span>
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {heroContent.description}
        </motion.p>
      </div>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.button
          onClick={() => router.push("/projects")}
          className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            {heroContent.cta.primary}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        <motion.button
          onClick={() => router.push("/about")}
          className="group px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center gap-2">
            {heroContent.cta.secondary}
            <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

