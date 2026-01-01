"use client";

import React, { useEffect, useState } from "react";
import {
  HeroSection,
  GradientOrbs,
  ProjectsGrid,
  StatsSection,
  CTASection,
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

      {/* Featured Projects */}
      <ProjectsGrid />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
