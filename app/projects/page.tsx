"use client";

import React, { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingSpinnerProvider";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Projects } from "../lib/projects";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "web", label: "Web Apps", icon: Monitor },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "fullstack", label: "Full Stack", icon: Database },
  { id: "design", label: "Design Systems", icon: Palette },
];

export default function ProjectsPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { isContentReady } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = Projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
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
          <Code className="w-6 h-6 text-blue-400" />
          <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
            Portfolio
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
          My Projects
        </motion.h1>

        <motion.p
          className="text-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          A collection of projects that showcase my skills in web development,
          mobile applications, and innovative solutions.
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              startAnimation
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
          >
            <Button
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`flex items-center gap-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-transparent text-white/70 border-white/20 hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Code className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            No projects found
          </h3>
          <p className="text-white/60">Try selecting a different category.</p>
        </motion.div>
      )}
    </div>
  );
}

interface Project {
  id: number;
  slug: string;
  name: string;
  subline: string;
  category: string;
  technologies: Array<{ name: string; icon: React.ReactNode }>;
  description: string;
  images?: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
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
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden h-full">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <Image
              src={
                project.images?.[0] || "/images/portfolio-website-design.png"
              }
              alt={project.name}
              width={400}
              height={192}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Project Status */}
            <div className="absolute top-4 left-4">
              <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full font-medium">
                Completed
              </span>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
              {project.name}
            </h3>

            <p className="text-blue-300 text-sm mb-3">{project.subline}</p>

            <p className="text-white/70 text-sm mb-4 line-clamp-3 flex-1">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies
                .slice(0, 4)
                .map(
                  (
                    tech: { name: string; icon: React.ReactNode },
                    idx: number
                  ) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full flex items-center gap-1"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </span>
                  )
                )}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <Link href={`/projects/${project.slug}`}>
                <Button
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  View Details
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>

              {project.link && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="w-3 h-3" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
