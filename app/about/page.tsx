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

export default function AboutPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const { isContentReady } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isContentReady) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isContentReady]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center"
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
  );
}
