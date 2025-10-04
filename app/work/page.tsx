"use client";

import React, { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingSpinnerProvider";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "fullstack" | "design";
  status: "completed" | "in-progress" | "archived";
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  challenges: string[];
  results: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with advanced features",
    longDescription:
      "Built a comprehensive e-commerce platform from scratch using modern technologies. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "/images/e-commerce-website-layout.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "fullstack",
    status: "completed",
    year: "2024",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "User authentication and authorization",
      "Payment processing with Stripe",
      "Real-time inventory management",
      "Admin dashboard with analytics",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for performance",
      "Creating intuitive admin interface",
    ],
    results: [
      "40% increase in conversion rate",
      "99.9% uptime achieved",
      "Reduced page load time by 60%",
    ],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication",
    longDescription:
      "Developed a secure mobile banking application with advanced security features including biometric authentication, real-time transactions, and comprehensive financial tracking.",
    image: "/images/mobile-app-interface.png",
    technologies: ["React Native", "TypeScript", "Firebase", "Biometric Auth"],
    category: "mobile",
    status: "completed",
    year: "2024",
    githubUrl: "https://github.com",
    features: [
      "Biometric authentication (Face ID, Touch ID)",
      "Real-time transaction processing",
      "Budget tracking and analytics",
      "Secure data encryption",
      "Offline transaction support",
    ],
    challenges: [
      "Implementing secure biometric authentication",
      "Ensuring data privacy and compliance",
      "Creating smooth offline functionality",
    ],
    results: [
      "Zero security breaches",
      "4.8/5 user rating",
      "50% reduction in support tickets",
    ],
  },
  {
    id: 3,
    title: "Design System Library",
    description: "Comprehensive design system for consistent UI development",
    longDescription:
      "Created a comprehensive design system library that ensures consistency across all products. Includes components, tokens, and documentation for seamless development.",
    image: "/images/modern-design-system-interface-with-dark-theme.png",
    technologies: ["React", "Storybook", "Figma", "TypeScript"],
    category: "design",
    status: "completed",
    year: "2023",
    githubUrl: "https://github.com",
    liveUrl: "https://design-system.example.com",
    features: [
      "50+ reusable components",
      "Dark and light theme support",
      "Comprehensive documentation",
      "Accessibility compliance (WCAG 2.1)",
      "Automated testing and validation",
    ],
    challenges: [
      "Creating consistent component API",
      "Ensuring accessibility standards",
      "Maintaining design tokens",
    ],
    results: [
      "75% faster development time",
      "Consistent UI across 10+ products",
      "Reduced design debt by 80%",
    ],
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with advanced data visualization",
    longDescription:
      "Built a powerful analytics dashboard that provides real-time insights into business metrics. Features interactive charts, custom reports, and automated alerts.",
    image: "/images/modern-web-design-dashboard.png",
    technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis", "Docker"],
    category: "web",
    status: "completed",
    year: "2023",
    githubUrl: "https://github.com",
    liveUrl: "https://analytics.example.com",
    features: [
      "Real-time data visualization",
      "Custom report generation",
      "Automated alert system",
      "Data export capabilities",
      "Multi-tenant architecture",
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Creating responsive data visualizations",
      "Implementing real-time updates",
    ],
    results: [
      "90% faster data processing",
      "Real-time insights for 1000+ users",
      "Reduced manual reporting by 85%",
    ],
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio website with advanced animations",
    longDescription:
      "Designed and developed a modern portfolio website showcasing professional work with smooth animations, responsive design, and optimal performance.",
    image: "/images/portfolio-website-design.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "web",
    status: "completed",
    year: "2024",
    githubUrl: "https://github.com",
    liveUrl: "https://williamgyasi.com",
    features: [
      "Smooth scroll animations",
      "Responsive design",
      "Dark/light theme toggle",
      "Optimized performance",
      "SEO optimized",
    ],
    challenges: [
      "Creating smooth animations",
      "Optimizing for performance",
      "Ensuring accessibility",
    ],
    results: [
      "95+ Lighthouse score",
      "Sub-2s load time",
      "Fully accessible design",
    ],
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "web", label: "Web Apps", icon: Monitor },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "fullstack", label: "Full Stack", icon: Database },
  { id: "design", label: "Design Systems", icon: Palette },
];

export default function WorkPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { isContentReady } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            Featured Work
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
          A collection of projects that showcase my skills in full-stack
          development, mobile app development, and design systems.
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
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
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`flex items-center gap-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-transparent text-white/70 border-white/20 hover:border-blue-400 hover:text-blue-400"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            startAnimation={startAnimation}
          />
        ))}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  startAnimation: boolean;
}

function ProjectCard({ project, index, startAnimation }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400 bg-green-400/10";
      case "in-progress":
        return "text-yellow-400 bg-yellow-400/10";
      case "archived":
        return "text-gray-400 bg-gray-400/10";
      default:
        return "text-blue-400 bg-blue-400/10";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return Monitor;
      case "mobile":
        return Smartphone;
      case "fullstack":
        return Database;
      case "design":
        return Palette;
      default:
        return Globe;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

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
        <CardContent className="p-0">
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  project.status
                )}`}
              >
                {project.status.replace("-", " ")}
              </span>
            </div>

            {/* Category Icon */}
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <CategoryIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              <span className="text-sm text-white/60">{project.year}</span>
            </div>

            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {project.liveUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:border-blue-400 hover:text-blue-400"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
