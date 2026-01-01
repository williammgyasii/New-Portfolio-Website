"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { person } from "@/lib/content";
import { socialLinks } from "@/lib/constants";

interface ProfileSectionProps {
  name: string;
  title: string;
  bio: string;
  startAnimation: boolean;
}

export function ProfileSection({
  name,
  title,
  bio,
  startAnimation,
}: ProfileSectionProps) {
  return (
    <motion.div
      id="introduction"
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {/* Avatar */}
      <ProfileAvatar startAnimation={startAnimation} />

      {/* Name and Title */}
      <ProfileNameTitle
        name={name}
        title={title}
        startAnimation={startAnimation}
      />

      {/* Social Links */}
      <SocialLinksSection startAnimation={startAnimation} />

      {/* Bio */}
      <ProfileBio bio={bio} startAnimation={startAnimation} />
    </motion.div>
  );
}

function ProfileAvatar({ startAnimation }: { startAnimation: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={
        startAnimation ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
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
  );
}

interface ProfileNameTitleProps {
  name: string;
  title: string;
  startAnimation: boolean;
}

function ProfileNameTitle({
  name,
  title,
  startAnimation,
}: ProfileNameTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 1.4 }}
    >
      <motion.h1
        className="mt-6 text-5xl font-sans md:text-7xl font-bold text-center bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        {name}
      </motion.h1>
      <motion.p
        className="font-sans font-light text-xl text-center text-white/90 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        {title}
      </motion.p>
    </motion.div>
  );
}

function SocialLinksSection({ startAnimation }: { startAnimation: boolean }) {
  return (
    <motion.div
      className="mt-6 flex flex-wrap justify-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
  );
}

interface ProfileBioProps {
  bio: string;
  startAnimation: boolean;
}

function ProfileBio({ bio, startAnimation }: ProfileBioProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
        {bio}
      </motion.p>
    </motion.div>
  );
}

