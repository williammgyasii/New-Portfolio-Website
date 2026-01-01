"use client";

import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/animated/TimelineAnimations";
import { TimelineEntry } from "@/types/about.types";

interface ExperienceSectionProps {
  entries: TimelineEntry[];
}

export function ExperienceSection({ entries }: ExperienceSectionProps) {
  return (
    <motion.div
      id="experience"
      className="w-full mt-15"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <ExperienceHeader />
      <Timeline entries={entries} />
    </motion.div>
  );
}

function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center mb-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2"
      >
        <span className="text-sm font-inter font-medium text-blue-300 uppercase tracking-wider">
          Professional Journey
        </span>
      </motion.div>

      <motion.h1
        className="font-sans text-3xl md:text-4xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h1>
    </motion.div>
  );
}

