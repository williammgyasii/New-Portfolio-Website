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
import { socialLinks } from "../lib/constants";
import {
  Timeline,
  TimelineEntry,
} from "@/components/animated/TimelineAnimations";

const timeLineEnteries: TimelineEntry[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    description:
      "Leading a team of developers to build scalable web applications using React and Node.js. Implemented CI/CD pipelines to streamline deployment processes.",
  },
  {
    title: "Software Engineer",
    company: "Web Innovations",
    duration: "Jun 2019 - Dec 2021",
    description:
      "Developed and maintained client-side applications with a focus on performance and user experience. Collaborated with designers to create responsive UI components.",
  },
  {
    title: "Junior Developer",
    company: "Startup Hub",
    duration: "Jan 2018 - May 2019",
    description:
      "Assisted in the development of MVPs for various startups. Gained experience in full-stack development and agile methodologies.",
  },
];

export default function AboutPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const { isContentReady } = useLoading();

  const scrollToSections = [
    {
      label: "Introduction",
      id: "#introduction",
    },
    {
      label: "Work Experience",
      id: "#experience",
    },
    {
      label: "Skills",
      id: "#skills",
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
      <div className="hidden md:flex mt-6 absolute items-start justify-center left-0 top-[40vh] flex-col gap-2">
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

      {/* INTREODUCTION SECTION */}
      <div id="introduction" className="flex flex-col items-center">
        <Avatar className="size-50 mt-10">
          <AvatarImage className="object-cover" src={person.avatar} />
          <AvatarFallback>WG</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="mt-6 text-5xl font-sans md:text-7xl font-bold text-center">
            William Gyasi
          </h1>
          <p className="font-sans font-light text-xl text-center text-white/90">
            Full Stack Developer
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener)}"
              className="flex items-center gap-2 text-white font-sans px-3 cursor-pointer bg-gray-600 hover:bg-gray-900 py-1.5 transition-all duration-75 rounded-full text-sm shimmer"
            >
              {link.icon}
              <span className="font-sans"> {link.name}</span>
            </Link>
          ))}
        </div>

        <div>
          <p className="mt-6 max-w-3xl md:text-center font-sans text-lg text-white/70">
            ✨ I’m William, a full-stack developer passionate about building
            intelligent applications that solve real problems. From designing
            efficient backend architectures to crafting elegant frontend
            experiences,I focus on creating solutions that are both powerful and
            intuitive.
          </p>
        </div>
      </div>

      <div id="experience" className="w-full mt-10">
        <h1 className="font-sans text-3xl font-semibold md:text-center">
          Work Experience
        </h1>

        {/* <Timeline entries={timeLineEnteries} /> */}
      </div>
    </div>
  );
}
