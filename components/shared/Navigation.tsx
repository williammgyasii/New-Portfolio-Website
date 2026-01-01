"use client";

import { cn } from "@/lib/utils";
import {
  User,
  Briefcase,
  FileText,
  LucideIcon,
  HomeIcon,
  Newspaper,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./Theme-Toggle";
import { motion, useScroll, useTransform } from "framer-motion";

type NavigationLink = {
  label: string;
  path: string;
  icon: LucideIcon;
};

const navigationLinks: NavigationLink[] = [
  { label: "Home", icon: HomeIcon, path: "/" },
  { label: "About", icon: User, path: "/about" },
  { label: "Work", icon: Briefcase, path: "/work" },
  { label: "Projects", icon: FileText, path: "/projects" },
  { label: "Blog", icon: Newspaper, path: "/blog" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navY = useTransform(scrollY, [0, 100], [0, -5]);

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      style={{ scale: navScale, y: navY }}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div
        className="flex items-center gap-1 px-2 py-2 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50"
        whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
      >
        {navigationLinks.map((link, idx) => {
          const isActive = pathname === link.path;
          const Icon = link.icon;

          return (
            <motion.a
              key={link.label}
              href={link.path}
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors",
                isActive
                  ? "text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active background */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/10"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </span>
            </motion.a>
          );
        })}

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Theme Toggle */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ThemeToggle />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
