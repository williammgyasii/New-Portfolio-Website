"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/home.constants";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="relative z-10 px-4 py-24 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full"
          whileHover={{ scale: 1.05 }}
        >
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-white/70">Testimonials</span>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          What People Say
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Feedback from clients and colleagues I&apos;ve had the pleasure to
          work with
        </p>
      </motion.div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                  <Image
                    src={testimonial.avatar || "https://i.pravatar.cc/100"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-white/50 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

