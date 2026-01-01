"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Building,
  MapPin,
  Briefcase,
  Award,
  Code2,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WorkExperience } from "@/types/work.types";

interface WorkExperienceCardProps {
  experience: WorkExperience;
  index: number;
  isLast: boolean;
  onReadMore: (experience: WorkExperience) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function WorkExperienceCard({
  experience,
  index,
  isLast,
  onReadMore,
}: WorkExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  const { scrollYProgress: itemProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(itemProgress, [0, 0.3, 0.6], [0, 0.6, 1]);
  const y = useTransform(itemProgress, [0, 0.3, 0.6], [60, 30, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className={cn(
        "relative mb-16 lg:mb-24",
        isLast && "pb-10",
        "lg:grid lg:grid-cols-2 lg:gap-12"
      )}
    >
      {/* Timeline Dot */}
      <TimelineDot isInView={isInView} />

      {/* Year Badge - Desktop */}
      <YearBadge
        duration={experience.duration}
        isEven={isEven}
        isInView={isInView}
      />

      {/* Card - Alternating sides on desktop */}
      <motion.div
        className={cn(
          "lg:col-span-1",
          isEven ? "lg:col-start-1 lg:pr-8" : "lg:col-start-2 lg:pl-8"
        )}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Animated border glow */}
          <AnimatedBorderGlow />

          <div className="relative p-6 md:p-8">
            {/* Header */}
            <CardHeader experience={experience} />

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 mb-6 leading-relaxed text-sm md:text-base line-clamp-3"
            >
              {experience.description}
            </motion.p>

            {/* Grid layout for Responsibilities & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResponsibilitiesSection
                responsibilities={experience.responsibilities}
                isInView={isInView}
              />
              <AchievementsSection
                achievements={experience.achievements}
                isInView={isInView}
              />
            </div>

            {/* Technologies */}
            <TechStackSection
              technologies={experience.technologies}
              isInView={isInView}
            />

            {/* Read More Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={() => onReadMore(experience)}
                className="group/btn flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-white/10 hover:border-white/20 rounded-xl text-sm font-medium text-white/80 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Empty column for alternating layout */}
      <div
        className={cn(
          "hidden lg:block lg:col-span-1",
          isEven ? "lg:col-start-2" : "lg:col-start-1"
        )}
      />
    </motion.div>
  );
}

// Sub-components
function TimelineDot({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className="absolute left-1/2 top-0 transform -translate-x-1/2 z-20 hidden lg:block"
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-md"
          animate={
            isInView ? { scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] } : {}
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative w-5 h-5 bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 rounded-full border-4 border-gray-900" />
      </div>
    </motion.div>
  );
}

interface YearBadgeProps {
  duration: string;
  isEven: boolean;
  isInView: boolean;
}

function YearBadge({ duration, isEven, isInView }: YearBadgeProps) {
  return (
    <motion.div
      className={cn(
        "hidden lg:flex absolute top-0 z-10",
        isEven ? "left-1/2 ml-10" : "right-1/2 mr-10"
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-blue-300">
        {duration}
      </span>
    </motion.div>
  );
}

function AnimatedBorderGlow() {
  return (
    <motion.div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
        backgroundSize: "200% 100%",
      }}
      animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
  );
}

function CardHeader({ experience }: { experience: WorkExperience }) {
  return (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
          {experience.title}
        </h3>
        {experience.current && (
          <motion.span
            className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-xs rounded-full font-medium border border-green-500/30"
            animate={{
              boxShadow: [
                "0 0 10px rgba(34, 197, 94, 0.3)",
                "0 0 20px rgba(34, 197, 94, 0.5)",
                "0 0 10px rgba(34, 197, 94, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-3 h-3 inline mr-1" />
            Current
          </motion.span>
        )}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-blue-500/20">
          <Building className="w-4 h-4 text-blue-400" />
        </div>
        <span className="text-lg font-semibold text-blue-300">
          {experience.company}
        </span>
      </div>

      {/* Mobile duration */}
      <div className="lg:hidden mb-4">
        <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-blue-300">
          {experience.duration}
        </span>
      </div>

      {/* Meta info grid */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center gap-2 text-white/60 bg-white/5 rounded-lg px-3 py-2">
          <MapPin className="w-3.5 h-3.5 text-blue-400" />
          <span className="truncate">{experience.location}</span>
        </div>
        <div className="flex items-center gap-2 text-white/60 bg-white/5 rounded-lg px-3 py-2">
          <Briefcase className="w-3.5 h-3.5 text-purple-400" />
          <span className="truncate">{experience.industry}</span>
        </div>
      </div>
    </motion.div>
  );
}

interface ResponsibilitiesSectionProps {
  responsibilities: string[];
  isInView: boolean;
}

function ResponsibilitiesSection({
  responsibilities,
  isInView,
}: ResponsibilitiesSectionProps) {
  return (
    <motion.div variants={itemVariants}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-blue-500/20">
          <ChevronRight className="w-4 h-4 text-blue-400" />
        </div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
          Responsibilities
        </h4>
      </div>
      <ul className="space-y-2.5">
        {responsibilities.slice(0, 3).map((responsibility, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
            className="flex items-start gap-2 text-sm text-white/60 group/item hover:text-white/80 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
            <span className="line-clamp-2">{responsibility}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

interface AchievementsSectionProps {
  achievements: string[];
  isInView: boolean;
}

function AchievementsSection({
  achievements,
  isInView,
}: AchievementsSectionProps) {
  return (
    <motion.div variants={itemVariants}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-yellow-500/20">
          <Award className="w-4 h-4 text-yellow-400" />
        </div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
          Achievements
        </h4>
      </div>
      <ul className="space-y-2.5">
        {achievements.slice(0, 3).map((achievement, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
            className="flex items-start gap-2 text-sm text-white/60 group/item hover:text-white/80 transition-colors"
          >
            <span className="text-yellow-400 flex-shrink-0">★</span>
            <span className="line-clamp-2">{achievement}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

interface TechStackSectionProps {
  technologies: string[];
  isInView: boolean;
}

function TechStackSection({ technologies, isInView }: TechStackSectionProps) {
  return (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-green-500/20">
          <Code2 className="w-4 h-4 text-green-400" />
        </div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
          Tech Stack
        </h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.slice(0, 5).map((tech, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.8, y: 10 }
            }
            transition={{
              duration: 0.3,
              delay: 0.6 + idx * 0.05,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(59, 130, 246, 0.2)",
            }}
            className="px-3 py-1.5 bg-white/5 text-white/70 text-xs rounded-lg border border-white/10 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300 cursor-default"
          >
            {tech}
          </motion.span>
        ))}
        {technologies.length > 5 && (
          <span className="px-3 py-1.5 bg-white/5 text-white/50 text-xs rounded-lg border border-white/10">
            +{technologies.length - 5} more
          </span>
        )}
      </div>
    </motion.div>
  );
}

