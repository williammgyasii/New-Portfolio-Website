"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStack } from "@/lib/home.constants";
import { Layers } from "lucide-react";

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Flatten all tech items for the floating animation
  const allTech = techStack.flatMap((cat) => cat.items);
  const reversedTech = [...allTech].reverse();

  // Create a longer array for seamless looping
  const row1Tech = [...allTech, ...allTech, ...allTech, ...allTech, ...allTech, ...allTech];
  const row2Tech = [...reversedTech, ...reversedTech, ...reversedTech, ...reversedTech, ...reversedTech, ...reversedTech];

  return (
    <section ref={containerRef} className="relative z-10 py-24 overflow-hidden">
      {/* Section header - constrained width */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm text-white/40 uppercase tracking-widest mb-4 block">
            Tech Stack
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Technologies I <span className="text-sky-400">Love</span>
            </h2>
            <p className="text-white/40 max-w-md text-sm md:text-base">
              Modern tools and frameworks to build fast, scalable applications
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating tech pills - FULL WIDTH edge to edge */}
      <div className="relative mb-16 w-screen left-1/2 -translate-x-1/2">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-10 pointer-events-none" />

        {/* First row - left to right - SLOWER */}
        <div className="flex mb-5 overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: [0, -2400] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {row1Tech.map((tech, idx) => (
              <TechPill key={`row1-${idx}`} name={tech.name} variant="default" />
            ))}
          </motion.div>
        </div>

        {/* Second row - right to left - SLOWER */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: [-2400, 0] }}
            transition={{
              duration: 70,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {row2Tech.map((tech, idx) => (
              <TechPill key={`row2-${idx}`} name={tech.name} variant="alt" />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech categories grid - constrained width */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-full hover:border-sky-500/30 transition-all duration-300">
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                  <span className="text-sm font-medium text-white/60">
                    {category.category}
                  </span>
                </div>

                {/* Tech items */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech, techIndex) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.1 + techIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 bg-white/[0.03] text-white/70 text-sm rounded-lg border border-white/[0.06] hover:border-sky-500/40 hover:text-sky-300 hover:bg-sky-500/10 transition-all duration-200 cursor-default"
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual floating tech pill component
function TechPill({
  name,
  variant = "default",
}: {
  name: string;
  variant?: "default" | "alt";
}) {
  const colors =
    variant === "default"
      ? "bg-[#0d1a2d] border-[#1e3a5f]/50 hover:border-sky-500/50"
      : "bg-[#0f1f35] border-[#1a3050]/50 hover:border-sky-400/50";

  return (
    <motion.div
      className={`flex-shrink-0 px-6 py-3 rounded-xl ${colors} border text-white/80 text-sm font-medium whitespace-nowrap hover:text-sky-300 transition-all duration-300 cursor-default`}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.div>
  );
}
