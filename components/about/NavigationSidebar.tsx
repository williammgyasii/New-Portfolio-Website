"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/utils";
import { SectionNavItem } from "@/types/about.types";

interface NavigationSidebarProps {
  sections: SectionNavItem[];
  startAnimation: boolean;
}

export function NavigationSidebar({
  sections,
  startAnimation,
}: NavigationSidebarProps) {
  return (
    <motion.div
      className="hidden md:flex mt-6 absolute items-start justify-center left-0 top-[40vh] flex-col gap-3 z-20"
      initial={{ opacity: 0, x: -50 }}
      animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={
            startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
          }
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => scrollToSection(section.id)}
            variant="default"
            className="border-none bg-transparent cursor-pointer group"
          >
            <motion.div
              className="h-1 w-[40px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
              whileHover={{ width: 60 }}
              transition={{ duration: 0.2 }}
            />
            <span className="font-sans text-sm text-white/80 group-hover:text-white transition-colors duration-200">
              {section.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}

