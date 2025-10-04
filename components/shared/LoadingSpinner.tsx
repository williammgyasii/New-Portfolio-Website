"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#05081c] via-[#0a0f2e] to-[#1a1f3a] flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {/* Animated background particles */}
        <div className="absolute inset-0 -z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main loading container */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Outer spinning ring */}
          <motion.div
            className="size-16 border-4 border-slate-700/50 border-t-blue-500 border-r-purple-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle ring */}
          <motion.div
            className="absolute inset-2 border-2 border-slate-600/30 border-b-purple-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.p
            className="text-white/80 text-sm font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
