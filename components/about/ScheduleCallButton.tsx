"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarRangeIcon, ChevronRight } from "lucide-react";

interface ScheduleCallButtonProps {
  href: string;
  startAnimation: boolean;
}

export function ScheduleCallButton({
  href,
  startAnimation,
}: ScheduleCallButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={
        startAnimation
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.9 }
      }
      transition={{ duration: 0.6, delay: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <motion.div
          className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 p-1"
          whileHover={{
            background:
              "linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
            borderColor: "rgba(255, 255, 255, 0.4)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <CalendarRangeIcon className="w-5 h-5 text-blue-400" />
            </motion.div>
            <span className="font-sans text-base text-white font-medium">
              Schedule a call
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronRight className="w-4 h-4 text-purple-400" />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

