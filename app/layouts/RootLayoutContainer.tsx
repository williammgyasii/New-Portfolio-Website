"use client";
import AnimatedBackground from "@/components/shared/AnimatedBackground";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import ParallaxContainer from "@/components/shared/ParallaxContainer";
import { useEffect, useState } from "react";

export default function RootLayoutContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full min-h-screen relative">
      <ParallaxContainer speed={-0.3} className="fixed inset-0">
        <AnimatedBackground />
      </ParallaxContainer>
      {children}
    </div>
  );
}
