"use client";

import React, { useEffect, useState } from "react";
import {
  HeroSection,
  GradientOrbs,
  ProjectsGrid,
  StatsSection,
  CTASection,
  ServicesSection,
  TechStackSection,
  ExperienceSection,
  // TestimonialsSection,
  AboutSection,
} from "@/components/home";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background orbs */}
      <GradientOrbs />

      {/* Hero Section */}
      <HeroSection />

      {/* About Me Snippet */}
      <AboutSection />

      {/* Services/What I Do */}
      <ServicesSection />

      {/* Featured Projects */}
      <ProjectsGrid />

      {/* Tech Stack */}
      <TechStackSection />

      {/* Work Experience */}
      <ExperienceSection />

      {/* Testimonials - Coming Soon */}
      {/* <TestimonialsSection /> */}

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
