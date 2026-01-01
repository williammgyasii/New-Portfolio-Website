"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { Projects } from "@/lib/projects";
import { Scene3D, Scene3DOverlay } from "@/components/3d";

// Hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
      );
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

// 3D Tilt Card Component - disabled on mobile for performance
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Disable tilt on mobile or if user prefers reduced motion
  const shouldDisableTilt = isMobile || prefersReducedMotion;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldDisableTilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Simple div on mobile, animated on desktop
  if (shouldDisableTilt) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Project Card
function ProjectCard({
  project,
  index,
}: {
  project: (typeof Projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <TiltCard>
        <Link href={`/projects/${project.slug}`}>
          <div className="group relative h-full p-6 rounded-2xl bg-[#0d1a2d]/80 border border-[#1e3a5f]/50 backdrop-blur-sm overflow-hidden hover:border-sky-500/50 transition-all duration-500">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Status badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-sky-500/20 text-sky-300 text-xs rounded-full font-medium border border-sky-500/30">
                {project.status === "in-progress" ? "Building" : "Live"}
              </span>
            </div>

            {/* Project number - 3D effect */}
            <div
              className="absolute -top-4 -left-2 text-8xl font-bold text-white/[0.03] group-hover:text-sky-500/10 transition-colors duration-500"
              style={{ transform: "translateZ(20px)" }}
            >
              0{index + 1}
            </div>

            {/* Content */}
            <div
              className="relative z-10"
              style={{ transform: "translateZ(30px)" }}
            >
              {/* Icon placeholder */}
              <motion.div
                className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Sparkles className="w-6 h-6 text-sky-400" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-sky-400/80 text-sm mb-4">{project.subline}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg border border-white/10"
                  >
                    {tech.name}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-white/5 text-white/40 text-xs rounded-lg">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sky-400 text-sm font-medium group-hover:gap-3 transition-all">
                <span>View Project</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom gradient line */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen">
      {/* 3D Background - Blue theme */}
      <Scene3D theme="blue" />
      <Scene3DOverlay theme="blue" />

      {/* Content */}
      <div className="relative z-10 px-4 py-12 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-sky-500/10 border border-sky-500/20 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sm text-sky-300">Featured Work</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My <span className="text-sky-400">Projects</span>
          </motion.h1>

          <motion.p
            className="text-lg text-white/50 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A collection of products I&apos;m building — from AI-powered tools
            to culture-first platforms. Each one solving real problems.
          </motion.p>
        </motion.div>

        {/* Projects Grid - 2 column bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 mb-4">Want to work together?</p>
          <motion.a
            href="mailto:williammgyasii@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Talk
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
