"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLoading } from "../contexts/LoadingSpinnerProvider";
import {
  NavigationSidebar,
  ScheduleCallButton,
  ProfileSection,
  ExperienceSection,
} from "@/components/about";
import {
  timelineEntries,
  sectionNavItems,
  profileInfo,
} from "@/lib/about.constants";
import { Scene3D, Scene3DOverlay } from "@/components/3d";

export default function AboutPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isContentReady } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isContentReady) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isContentReady]);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen">
      {/* 3D Background - Amber theme */}
      <Scene3D theme="amber" />
      <Scene3DOverlay theme="amber" />

      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center justify-center px-4 md:px-0"
      >
        {/* Navigation Sidebar */}
        <NavigationSidebar
          sections={sectionNavItems}
          startAnimation={startAnimation}
        />

        {/* Schedule Call Button */}
        <ScheduleCallButton
          href={profileInfo.calendarLink}
          startAnimation={startAnimation}
        />

        {/* Profile Section */}
        <ProfileSection
          name={profileInfo.name}
          title={profileInfo.title}
          bio={profileInfo.bio}
          startAnimation={startAnimation}
        />

        {/* Experience Section */}
        <ExperienceSection entries={timelineEntries} />
      </div>
    </div>
  );
}
