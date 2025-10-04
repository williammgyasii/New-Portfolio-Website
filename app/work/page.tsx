"use client";

import React, { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingSpinnerProvider";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  Users,
  Award,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  type: "full-time" | "contract" | "freelance" | "internship";
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companySize: string;
  industry: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Intuitive Analytica",
    duration: "May 2025 - Present",
    location: "Remote",
    type: "full-time",
    companySize: "50-100 employees",
    industry: "Analytics & Data Science",
    startDate: "2025-05-01",
    current: true,
    description:
      "Leading development of enterprise-grade analytics platforms and mentoring junior developers in modern web technologies.",
    responsibilities: [
      "Led a team of 5 developers in building enterprise-grade web applications",
      "Architected and implemented microservices using Node.js and Express",
      "Developed responsive React frontends with TypeScript and modern state management",
      "Established CI/CD pipelines using GitHub Actions and Docker",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with product managers to define technical requirements",
      "Implemented automated testing strategies and performance optimization",
    ],
    achievements: [
      "Reduced application load time by 60% through performance optimization",
      "Increased team productivity by 40% through improved development processes",
      "Successfully delivered 3 major product releases on schedule",
      "Implemented security best practices resulting in zero security incidents",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AWS",
      "GraphQL",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Web Innovations",
    duration: "Jun 2019 - Dec 2021",
    location: "Toronto, Canada",
    type: "full-time",
    companySize: "20-50 employees",
    industry: "Web Development",
    startDate: "2019-06-01",
    endDate: "2021-12-31",
    current: false,
    description:
      "Developed and maintained client-side applications with a focus on performance and user experience. Collaborated with designers to create responsive UI components.",
    responsibilities: [
      "Built and maintained React applications serving 100K+ daily users",
      "Optimized application performance, reducing load times by 40%",
      "Implemented responsive designs using CSS-in-JS and styled-components",
      "Integrated RESTful APIs and GraphQL endpoints",
      "Collaborated with UX/UI designers to create intuitive user interfaces",
      "Participated in agile development processes and sprint planning",
      "Contributed to architectural decisions and technical documentation",
    ],
    achievements: [
      "Improved user engagement by 25% through UI/UX enhancements",
      "Reduced bug reports by 30% through improved testing practices",
      "Successfully migrated legacy applications to modern React architecture",
      "Mentored 2 junior developers and helped them grow their skills",
    ],
    technologies: [
      "React",
      "JavaScript",
      "CSS-in-JS",
      "GraphQL",
      "MongoDB",
      "Jest",
      "Webpack",
    ],
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Startup Hub",
    duration: "Jan 2018 - May 2019",
    location: "London, UK",
    type: "full-time",
    companySize: "10-20 employees",
    industry: "Startup Incubator",
    startDate: "2018-01-01",
    endDate: "2019-05-31",
    current: false,
    description:
      "Assisted in the development of MVPs for various startups. Gained experience in full-stack development and agile methodologies.",
    responsibilities: [
      "Developed MVP features using React, Node.js, and MongoDB",
      "Assisted in database design and API development",
      "Participated in daily standups and sprint retrospectives",
      "Learned modern development tools and version control with Git",
      "Contributed to code documentation and testing procedures",
      "Worked closely with senior developers to improve coding skills",
      "Collaborated with product teams to understand business requirements",
    ],
    achievements: [
      "Successfully delivered 5 MVP projects for different startups",
      "Improved code quality by implementing ESLint and Prettier",
      "Completed 3 months of intensive React and Node.js training",
      "Received positive feedback from senior developers and project managers",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "Git",
      "Agile",
      "REST APIs",
    ],
  },
];

const experienceTypes = [
  { id: "all", label: "All Experience", icon: Briefcase },
  { id: "full-time", label: "Full Time", icon: Building },
  { id: "contract", label: "Contract", icon: Clock },
  { id: "freelance", label: "Freelance", icon: Users },
];

export default function WorkPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const { isContentReady } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredExperiences = workExperiences.filter(
    (experience) => selectedType === "all" || experience.type === selectedType
  );

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
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Work Experience
        </motion.h1>

        <motion.p
          className="text-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          A journey through my professional career, showcasing growth,
          achievements, and the technologies I&apos;ve mastered along the way.
        </motion.p>
      </motion.div>

      {/* Experience Type Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {experienceTypes.map((type, index) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              startAnimation
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
          >
            <Button
              onClick={() => setSelectedType(type.id)}
              variant={selectedType === type.id ? "default" : "outline"}
              className={`flex items-center gap-2 transition-all duration-300 ${
                selectedType === type.id
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-transparent text-white/70 border-white/20 hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              <type.icon className="w-4 h-4" />
              {type.label}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {filteredExperiences.map((experience, index) => (
          <WorkExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredExperiences.length === 0 && (
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
      )}
    </div>
  );
}

interface WorkExperienceCardProps {
  experience: WorkExperience;
  index: number;
}

function WorkExperienceCard({ experience, index }: WorkExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
        <CardContent className="p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {experience.title}
                </h3>
                {experience.current && (
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full font-medium">
                    Current
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Building className="w-4 h-4 text-blue-400" />
                <span className="text-lg font-semibold text-blue-300">
                  {experience.company}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {experience.location}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {experience.companySize}
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {experience.industry}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/80 mb-6 leading-relaxed">
            {experience.description}
          </p>

          {/* Responsibilities */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((responsibility, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-2 text-white/70"
                >
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{responsibility}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  className="flex items-start gap-2 text-white/70"
                >
                  <span className="text-yellow-400 mt-1">★</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                  className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-300 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
