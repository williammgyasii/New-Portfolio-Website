"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from "@/components/ui/dialog";
import {
  Building,
  MapPin,
  Briefcase,
  Award,
  Code2,
  ChevronRight,
  Sparkles,
  Calendar,
  Users,
} from "lucide-react";
import { WorkExperience } from "@/types/work.types";

interface WorkExperienceModalProps {
  experience: WorkExperience | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function WorkExperienceModal({
  experience,
  open,
  onOpenChange,
}: WorkExperienceModalProps) {
  if (!experience) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="border-b border-white/10 pb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <DialogTitle className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {experience.title}
            </DialogTitle>
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
                Current Role
              </motion.span>
            )}
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-blue-500/20">
              <Building className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-xl font-semibold text-blue-300">
              {experience.company}
            </span>
          </div>

          {/* Meta info grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <MetaInfoItem
              icon={Calendar}
              text={experience.duration}
              color="blue"
            />
            <MetaInfoItem
              icon={MapPin}
              text={experience.location}
              color="purple"
            />
            <MetaInfoItem
              icon={Users}
              text={experience.companySize}
              color="cyan"
            />
            <MetaInfoItem
              icon={Briefcase}
              text={experience.industry}
              color="green"
            />
          </div>
        </DialogHeader>

        <DialogBody>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-white/80 leading-relaxed text-base">
                {experience.description}
              </p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div variants={itemVariants}>
              <SectionHeader
                icon={ChevronRight}
                title="Key Responsibilities"
                colorClass="from-blue-500/20 to-blue-600/20"
                iconColor="text-blue-400"
              />
              <ul className="space-y-3 pl-2">
                {experience.responsibilities.map((responsibility, idx) => (
                  <ListItem
                    key={idx}
                    text={responsibility}
                    index={idx}
                    type="responsibility"
                  />
                ))}
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <SectionHeader
                icon={Award}
                title="Key Achievements"
                colorClass="from-yellow-500/20 to-orange-500/20"
                iconColor="text-yellow-400"
              />
              <ul className="space-y-3 pl-2">
                {experience.achievements.map((achievement, idx) => (
                  <ListItem
                    key={idx}
                    text={achievement}
                    index={idx}
                    type="achievement"
                  />
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={itemVariants}>
              <SectionHeader
                icon={Code2}
                title="Technologies & Tools"
                colorClass="from-green-500/20 to-emerald-500/20"
                iconColor="text-green-400"
              />
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} index={idx} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

// Sub-components
interface MetaInfoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  color: "blue" | "purple" | "cyan" | "green";
}

function MetaInfoItem({ icon: Icon, text, color }: MetaInfoItemProps) {
  const colorClasses = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    cyan: "text-cyan-400",
    green: "text-green-400",
  };

  return (
    <div className="flex items-center gap-2 text-white/60 bg-white/5 rounded-lg px-3 py-2">
      <Icon className={`w-3.5 h-3.5 ${colorClasses[color]}`} />
      <span className="truncate">{text}</span>
    </div>
  );
}

interface SectionHeaderProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  colorClass: string;
  iconColor: string;
}

function SectionHeader({
  icon: Icon,
  title,
  colorClass,
  iconColor,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className={`p-2 rounded-xl bg-gradient-to-br ${colorClass}`}>
        <Icon className={`w-5 h-5 ${iconColor as string}`} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  );
}

interface ListItemProps {
  text: string;
  index: number;
  type: "responsibility" | "achievement";
}

function ListItem({ text, index, type }: ListItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
      className="flex items-start gap-3 text-white/70 group hover:text-white/90 transition-colors"
    >
      {type === "responsibility" ? (
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
      ) : (
        <span className="text-yellow-400 flex-shrink-0 group-hover:scale-125 transition-transform">
          ★
        </span>
      )}
      <span>{text}</span>
    </motion.li>
  );
}

interface TechBadgeProps {
  tech: string;
  index: number;
}

function TechBadge({ tech, index }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.4 + index * 0.03,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(59, 130, 246, 0.3)",
      }}
      className="px-4 py-2 bg-white/5 text-white/80 text-sm rounded-xl border border-white/10 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300 cursor-default"
    >
      {tech}
    </motion.span>
  );
}
