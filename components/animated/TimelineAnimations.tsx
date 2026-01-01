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
  const lineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map scroll progress to line height - starts at 0% when first item reaches center,
  // grows as we scroll through entries
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className={cn("relative max-w-4xl mx-auto md:px-8", className)}
    >
      {/* Timeline Line positioned on the left - only on larger screens */}
      <div 
        ref={lineRef}
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300/20 hidden md:block"
      >
        <motion.div
          className="w-full bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      {entries.map((entry, index) => (
        <TimelineItem
          key={index}
          entry={entry}
          index={index}
          isLast={index === entries.length - 1}
          scrollProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
  scrollProgress: any;
}

function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  // All items animate in as they scroll into view and stay visible
  const opacity = useTransform(
    itemProgress,
    [0, 0.3, 0.6],
    [0.3, 0.7, 1]
  );

  const scale = useTransform(
    itemProgress,
    [0, 0.3, 0.6],
    [0.95, 0.98, 1]
  );

  const x = useTransform(
    itemProgress,
    [0, 0.3, 0.6],
    [20, 10, 0]
  );

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, scale, x }}
      className={cn("relative mb-12 md:mb-16", isLast && "pb-10")}
    >
      {/* Timeline Dot positioned on the left - only on larger screens */}
      <motion.div
        className="absolute left-8 top-6 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 hidden md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 bg-blue-400/30 rounded-full"
          animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner solid dot */}
        <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full" />
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
