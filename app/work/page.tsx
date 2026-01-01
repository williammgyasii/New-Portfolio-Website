"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLoading } from "@/app/contexts/LoadingSpinnerProvider";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkExperienceCard, WorkExperienceModal } from "@/components/work";
import { WorkExperience } from "@/types/work.types";
import { workExperiences, experienceFilters } from "@/lib/work.constants";

export default function WorkPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedExperience, setSelectedExperience] =
    useState<WorkExperience | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { isContentReady } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredExperiences = workExperiences.filter(
    (experience) => selectedType === "all" || experience.type === selectedType
  );

  const handleReadMore = (experience: WorkExperience) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  useEffect(() => {
    if (isContentReady) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isContentReady]);

  return (
    <div ref={containerRef} className="w-full">
      {/* Header Section */}
      <PageHeader startAnimation={startAnimation} />

      {/* Experience Type Filter */}
      <ExperienceFilter
        startAnimation={startAnimation}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      {/* Experience Timeline */}
      <WorkTimeline
        experiences={filteredExperiences}
        onReadMore={handleReadMore}
      />

      {/* No Results */}
      {filteredExperiences.length === 0 && <NoResultsMessage />}

      {/* Experience Modal */}
      <WorkExperienceModal
        experience={selectedExperience}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}

// Sub-components
interface PageHeaderProps {
  startAnimation: boolean;
}

function PageHeader({ startAnimation }: PageHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="inline-flex items-center gap-2 mb-4"
        initial={{ scale: 0 }}
        animate={startAnimation ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Briefcase className="w-6 h-6 text-blue-400" />
        <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
          Professional Experience
        </span>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Work Experience
      </motion.h1>

      <motion.p
        className="text-lg text-white/70 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        A journey through my professional career, showcasing growth,
        achievements, and the technologies I&apos;ve mastered along the way.
      </motion.p>
    </motion.div>
  );
}

interface ExperienceFilterProps {
  startAnimation: boolean;
  selectedType: string;
  onTypeChange: (type: string) => void;
}

function ExperienceFilter({
  startAnimation,
  selectedType,
  onTypeChange,
}: ExperienceFilterProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {experienceFilters.map((filter, index) => (
        <motion.div
          key={filter.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            startAnimation
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
        >
          <Button
            onClick={() => onTypeChange(filter.id)}
            variant={selectedType === filter.id ? "default" : "outline"}
            className={`flex items-center gap-2 transition-all duration-300 ${
              selectedType === filter.id
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-transparent text-white/70 border-white/20 hover:border-blue-400 hover:text-blue-400"
            }`}
          >
            <filter.icon className="w-4 h-4" />
            {filter.label}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}

interface WorkTimelineProps {
  experiences: WorkExperience[];
  onReadMore: (experience: WorkExperience) => void;
}

function WorkTimeline({ experiences, onReadMore }: WorkTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto px-4">
      {/* Timeline Line - Desktop only */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20 hidden lg:block">
        <motion.div
          className="w-full bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      {experiences.map((experience, index) => (
        <WorkExperienceCard
          key={experience.id}
          experience={experience}
          index={index}
          isLast={index === experiences.length - 1}
          onReadMore={onReadMore}
        />
      ))}
    </div>
  );
}

function NoResultsMessage() {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Briefcase className="w-16 h-16 text-white/20 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">
        No experience found
      </h3>
      <p className="text-white/60">
        Try selecting a different experience type.
      </p>
    </motion.div>
  );
}
