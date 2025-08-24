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
    <div className="w-full h-full relative">
      <AnimatedBackground />
      {children}
    </div>
  );
}
