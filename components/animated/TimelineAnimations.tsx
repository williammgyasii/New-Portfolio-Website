/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities?: string[];
  country?: string;
  countryFlag?: string;
  id?: number;
  image?: string;
  alt?: string;
  layout?: "left" | "right";
}

interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

export function Timeline({ entries, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate the timeline line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className={cn("relative max-w-4xl mx-auto md:px-8", className)}
    >
      {/* Timeline Line positioned on the left - only on larger screens */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300/50 hidden md:block">
        <motion.div
          className="w-full bg-gradient-to-b from-blue-400 to-cyan-400"
          style={{ height: lineHeight }}
        />
      </div>

      {entries.map((entry, index) => (
        <TimelineItem
          key={index}
          entry={entry}
          index={index}
          scrollProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  scrollProgress: any;
}

function TimelineItem({ entry, index }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(
    itemProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4]
  );

  const scale = useTransform(itemProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  const y = useTransform(itemProgress, [0, 0.2, 0.8, 1], [30, 0, 0, -30]);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, scale, y }}
      className="relative mb-10 md:mb-10"
    >
      {/* Timeline Dot positioned on the left - only on larger screens */}
      <motion.div
        className="absolute left-8 top-6 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 z-10 hidden md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          className="absolute inset-0 bg-blue-400 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content - full width on mobile, positioned to the right of timeline on desktop */}
      <motion.div
        className="md:ml-20"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      >
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          >
            <div className="flex  gap-3 mb-2 flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
                  {entry.duration}
                </span>
              </div>

              <div className="flex-col items-center justify-end gap-0">
                <p className="text-base font-inter font-medium text-blue-200">
                  {entry.company}
                </p>
                {entry.countryFlag && (
                  <p className="text-xs font-inter text-end">{entry.country}</p>
                )}
              </div>
            </div>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              {entry.title}
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-white/70 mb-4">
              {entry.description}
            </p>

            {/* Responsibilities List */}
            {entry.responsibilities && entry.responsibilities.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                className="space-y-2"
              >
                <h4 className="text-sm font-medium text-blue-200 mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-1">
                  {entry.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + 0.7 + idx * 0.1,
                      }}
                      className="flex items-start gap-2 text-xs md:text-sm text-white/60"
                    >
                      <span className="text-blue-400 mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
