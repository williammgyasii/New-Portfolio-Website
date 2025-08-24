"use client";
import React, { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingSpinnerProvider";
import AnimatedPillTags from "@/components/animated/AnimatedPill";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { person } from "../lib/content";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "../utils/utils";
import { cn } from "@/lib/utils";
import { CalendarRangeIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const { isContentReady } = useLoading();

  const scrollToSections = [
    {
      label: "Introduction",
      id: "#introduction",
    },
    {
      label: "Skills",
      id: "#skills",
    },
    {
      label: "Experience",
      id: "#experience",
    },
    {
      label: "Education",
      id: "#education",
    },
    {
      label: "Contact",
      id: "#contact",
    },
  ];

  useEffect(() => {
    if (isContentReady) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isContentReady]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className={`transition-all duration-1000 ${
          startAnimation
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <Link
          href={"https://cal.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <AnimatedPillTags
            className="!cursor-pointer"
            size="medium"
            withDot={false}
          >
            <CalendarRangeIcon />
            <span className="font-sans text-base text-white">
              Schedule a call{" "}
            </span>
            <ChevronRight className="border rounded-full border-green-50" />
          </AnimatedPillTags>
        </Link>
      </div>

      <Avatar className="size-50 mt-10">
        <AvatarImage className="object-cover" src={person.avatar} />
        <AvatarFallback>WG</AvatarFallback>
      </Avatar>

      <div className="hidden md:flex mt-6 absolute items-start justify-center left-0 top-[90%] flex-col gap-2">
        {scrollToSections.map((section, index) => (
          <Button
            onClick={() => scrollToSection(section.id)}
            variant={"default"}
            key={index}
            className={cn(
              index === 0 ? "" : "mt-2",
              "border-none bg-transparent cursor-pointer"
            )}
          >
            <div className="h-1 w-[40px] bg-white shimmer  bg-gradient-to-r from-amber-300 via-sky-500 to-amber-900 [background-size:200%_100%] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60" />
            <span className="font-sans text-base text-white">
              {section.label}
            </span>
          </Button>
        ))}
      </div>

      <div>
        <h1 className="mt-6 text-5xl font-sans md:text-7xl font-bold text-center">
          William Gyasi
        </h1>
        <p className="font-sans font-light text-xl text-center text-white/90">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}
