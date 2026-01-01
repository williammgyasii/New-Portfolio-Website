"use client";

import { motion } from "framer-motion";

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Subtle grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Primary orb - Deep blue */}
      <motion.div
        className="absolute -top-32 -right-32 w-[600px] h-[600px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-[#1e3a5f] rounded-full blur-[150px] opacity-40" />
      </motion.div>

      {/* Secondary orb - Slightly lighter blue */}
      <motion.div
        className="absolute top-1/3 -left-32 w-[500px] h-[500px]"
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-[#1a4a6e] rounded-full blur-[140px] opacity-30" />
      </motion.div>

      {/* Tertiary orb - Navy accent */}
      <motion.div
        className="absolute -bottom-20 right-1/4 w-[400px] h-[400px]"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -35, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-[#162d50] rounded-full blur-[120px] opacity-35" />
      </motion.div>

      {/* Fourth orb - Darker blue for depth */}
      <motion.div
        className="absolute top-2/3 left-1/3 w-[350px] h-[350px]"
        animate={{
          scale: [1.05, 0.95, 1.05],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-[#0f2847] rounded-full blur-[100px] opacity-40" />
      </motion.div>

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,15,0.5)_100%)]" />
    </div>
  );
}
