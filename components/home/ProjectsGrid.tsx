"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Projects } from "@/lib/projects";
import { projectImages } from "@/lib/home.constants";

export function ProjectsGrid() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  const getProjectImage = (slug: string) => {
    return (
      projectImages[slug as keyof typeof projectImages] || projectImages.default
    );
  };

  return (
    <motion.section style={{ y }} className="relative z-10 px-4 py-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full"
          whileHover={{ scale: 1.05 }}
        >
          <Rocket className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-white/70">Featured Projects</span>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Recent Work
        </h2>
      </motion.div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {Projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getProjectImage(project.slug)}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                  {/* Project number overlay */}
                  <div className="absolute top-4 right-4 text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.subline}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-white/40">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <div className="p-2 bg-white/10 rounded-full">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View all projects link */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link href="/projects">
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.span>
        </Link>
      </motion.div>
    </motion.section>
  );
}

