"use client";
import React, { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingSpinnerProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { person } from "../lib/content";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "../utils/utils";
import { CalendarRangeIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "../lib/constants";
import {
  Timeline,
  TimelineEntry,
} from "@/components/animated/TimelineAnimations";
import { motion } from "framer-motion";
import { useRef } from "react";

const timeLineEnteries: TimelineEntry[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Intuitive Analytica",
    duration: "May 2025 - Present",
    country: "United States",
    countryFlag: "🇺🇸",
    description:
      "Leading a team of developers to build scalable web applications using React and Node.js. Implemented CI/CD pipelines to streamline deployment processes.",
    responsibilities: [
      "Led a team of 5 developers in building enterprise-grade web applications",
      "Architected and implemented microservices using Node.js and Express",
      "Developed responsive React frontends with TypeScript and modern state management",
      "Established CI/CD pipelines using GitHub Actions and Docker",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with product managers to define technical requirements",
    ],
  },
  {
    title: "Software Engineer",
    company: "Web Innovations",
    duration: "Jun 2019 - Dec 2021",
    country: "Canada",
    countryFlag: "🇨🇦",
    description:
      "Developed and maintained client-side applications with a focus on performance and user experience. Collaborated with designers to create responsive UI components.",
    responsibilities: [
      "Built and maintained React applications serving 100K+ daily users",
      "Optimized application performance, reducing load times by 40%",
      "Implemented responsive designs using CSS-in-JS and styled-components",
      "Integrated RESTful APIs and GraphQL endpoints",
      "Collaborated with UX/UI designers to create intuitive user interfaces",
      "Participated in agile development processes and sprint planning",
    ],
  },
  {
    title: "Junior Developer",
    company: "Startup Hub",
    duration: "Jan 2018 - May 2019",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    description:
      "Assisted in the development of MVPs for various startups. Gained experience in full-stack development and agile methodologies.",
    responsibilities: [
      "Developed MVP features using React, Node.js, and MongoDB",
      "Assisted in database design and API development",
      "Participated in daily standups and sprint retrospectives",
      "Learned modern development tools and version control with Git",
      "Contributed to code documentation and testing procedures",
      "Worked closely with senior developers to improve coding skills",
    ],
  },
];

export default function AboutPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const { isContentReady } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center "
    >
      {/* Enhanced Navigation Sidebar */}
      <motion.div
        className="hidden md:flex mt-6 absolute items-start justify-center left-0 top-[40vh] flex-col gap-3 z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {scrollToSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={
              startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection(section.id)}
              variant={"default"}
              className="border-none bg-transparent cursor-pointer group"
            >
              <motion.div
                className="h-1 w-[40px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                whileHover={{ width: 60 }}
                transition={{ duration: 0.2 }}
              />
              <span className="font-sans text-sm text-white/80 group-hover:text-white transition-colors duration-200">
                {section.label}
              </span>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Schedule Call Button */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={
          startAnimation
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 20, scale: 0.9 }
        }
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={"https://cal.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <motion.div
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 p-1"
            whileHover={{
              background:
                "linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
              borderColor: "rgba(255, 255, 255, 0.4)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CalendarRangeIcon className="w-5 h-5 text-blue-400" />
              </motion.div>
              <span className="font-sans text-base text-white font-medium">
                Schedule a call
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Enhanced Introduction Section */}
      <motion.div
        id="introduction"
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {/* Enhanced Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={
            startAnimation
              ? { scale: 1, rotate: 0 }
              : { scale: 0, rotate: -180 }
          }
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative mt-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30" />
          <Avatar className="size-50 relative z-10 border-4 border-white/20">
            <AvatarImage className="object-cover" src={person.avatar} />
            <AvatarFallback>WG</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Enhanced Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.h1
            className="mt-6 text-5xl font-sans md:text-7xl font-bold text-center bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={
              startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            William Gyasi
          </motion.h1>
          <motion.p
            className="font-sans font-light text-xl text-center text-white/90 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={
              startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                startAnimation
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4, delay: 2.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-sans px-4 py-2 cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-sm transition-all duration-300"
              >
                {link.icon}
                <span className="font-sans">{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <motion.p
            className="mt-8 max-w-3xl md:text-center font-sans text-lg text-white/80 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={
                startAnimation
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.5, delay: 2.8 }}
              className="inline-block mr-2"
            >
              ✨
            </motion.span>
            I&apos;m William, a full-stack developer passionate about building
            intelligent applications that solve real problems. From designing
            efficient backend architectures to crafting elegant frontend
            experiences, I focus on creating solutions that are both powerful
            and intuitive.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced Experience Section */}
      <motion.div
        id="experience"
        className="w-full mt-15"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2"
          >
            <span className="text-sm font-inter font-medium text-blue-300 uppercase tracking-wider">
              Professional Journey
            </span>
          </motion.div>

          <motion.h1
            className="font-sans text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h1>
        </motion.div>

        <Timeline entries={timeLineEnteries} />
      </motion.div>
    </div>
  );
}
