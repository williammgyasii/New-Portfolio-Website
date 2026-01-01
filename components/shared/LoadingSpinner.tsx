"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1e3a5f]/30 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo/Initials */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute -inset-6 rounded-full border border-sky-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner ring */}
          <motion.div
            className="absolute -inset-3 rounded-full border border-dashed border-sky-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Glow behind initials */}
          <motion.div
            className="absolute -inset-4 bg-sky-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main circle with initials */}
          <motion.div
            className="relative w-20 h-20 rounded-full bg-[#0d1a2d] border-2 border-sky-500/50 flex items-center justify-center"
            animate={{
              borderColor: ["rgba(56, 189, 248, 0.5)", "rgba(14, 165, 233, 0.7)", "rgba(56, 189, 248, 0.5)"],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              className="text-2xl font-bold text-sky-400"
              animate={{
                color: ["#38bdf8", "#0ea5e9", "#38bdf8"],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              WG
            </motion.span>
          </motion.div>

          {/* Orbiting dots */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-sky-400 rounded-full"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [
                  Math.cos((i * 2 * Math.PI) / 3) * 45,
                  Math.cos((i * 2 * Math.PI) / 3 + Math.PI) * 45,
                  Math.cos((i * 2 * Math.PI) / 3 + Math.PI * 2) * 45,
                ],
                y: [
                  Math.sin((i * 2 * Math.PI) / 3) * 45,
                  Math.sin((i * 2 * Math.PI) / 3 + Math.PI) * 45,
                  Math.sin((i * 2 * Math.PI) / 3 + Math.PI * 2) * 45,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="w-40 h-1 bg-white/5 rounded-full overflow-hidden"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 160 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-sky-500 rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="mt-6 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            className="text-white/40 text-sm tracking-wider"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading
          </motion.span>
          <motion.div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 bg-sky-400 rounded-full"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
