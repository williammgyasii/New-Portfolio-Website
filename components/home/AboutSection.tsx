"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutSnippet } from "@/lib/home.constants";
import { ArrowRight, CheckCircle2, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { person } from "@/lib/content";

export function AboutSection() {
  return (
    <section className="relative z-10 px-4 py-24 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative">
            {/* Background decorations */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

            {/* Main image container */}
            <motion.div
              className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={person.avatar}
                alt={person.name}
                fill
                className="object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-white/10"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-xl">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {person.name}
                    </p>
                    <p className="text-white/60 text-xs">{person.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <User className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/70">About Me</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {aboutSnippet.greeting}
          </h2>

          <p className="text-white/70 leading-relaxed mb-8">
            {aboutSnippet.bio}
          </p>

          {/* Highlights */}
          <div className="space-y-3 mb-8">
            {aboutSnippet.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-white/60 text-sm">{highlight}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/about">
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more about me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

