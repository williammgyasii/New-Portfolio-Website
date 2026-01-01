"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/home.constants";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="relative z-10 px-4 py-24 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-sm text-white/40 uppercase tracking-widest mb-4 block">
          What I Do
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Services & Expertise
          </h2>
          <p className="text-white/50 max-w-md text-sm md:text-base">
            End-to-end development solutions tailored to bring your ideas to life
          </p>
        </div>
      </motion.div>

      {/* Services - Bento style grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isLarge = index === 0 || index === 3;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${
                isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"
              }`}
            >
              <motion.div
                className="relative h-full min-h-[280px] p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] overflow-hidden cursor-pointer"
                whileHover={{ 
                  borderColor: "rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.05)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-7xl font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors">
                  0{index + 1}
                </span>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:bg-white/[0.08] transition-colors"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                  </motion.div>

                  {/* Title & Description */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors flex items-center gap-2">
                      {service.title}
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -5 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.span>
                    </h3>
                    <p className="text-white/40 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom line accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white/20"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
