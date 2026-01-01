"use client";

import { cn } from "@/lib/utils";
import {
  User,
  Briefcase,
  FileText,
  LucideIcon,
  HomeIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./Theme-Toggle";
import { motion, useScroll, useTransform } from "framer-motion";

type NavigationLink = {
  label: string;
  path: string;
  icon: LucideIcon;
};

// Theme colors for each route
type ThemeColors = {
  bg: string;
  border: string;
  glow: string;
};

const routeThemes: Record<string, ThemeColors> = {
  "/": {
    bg: "bg-sky-500/20",
    border: "border-sky-400/30",
    glow: "shadow-sky-500/20",
  },
  "/about": {
    bg: "bg-amber-500/20",
    border: "border-amber-400/30",
    glow: "shadow-amber-500/20",
  },
  "/work": {
    bg: "bg-emerald-500/20",
    border: "border-emerald-400/30",
    glow: "shadow-emerald-500/20",
  },
  "/projects": {
    bg: "bg-sky-500/20",
    border: "border-sky-400/30",
    glow: "shadow-sky-500/20",
  },
};

const getThemeForPath = (pathname: string): ThemeColors => {
  // Check for exact match first
  if (routeThemes[pathname]) return routeThemes[pathname];

  // Check for partial matches (e.g., /projects/something)
  for (const route of Object.keys(routeThemes)) {
    if (pathname.startsWith(route) && route !== "/") {
      return routeThemes[route];
    }
  }

  // Default theme
  return routeThemes["/"];
};

const navigationLinks: NavigationLink[] = [
  { label: "Home", icon: HomeIcon, path: "/" },
  { label: "About", icon: User, path: "/about" },
  { label: "Work", icon: Briefcase, path: "/work" },
  { label: "Projects", icon: FileText, path: "/projects" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const currentTheme = getThemeForPath(pathname);

  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navY = useTransform(scrollY, [0, 100], [0, -5]);

  // Check if a link is active (exact match or starts with for nested routes)
  const isLinkActive = (linkPath: string) => {
    if (linkPath === "/") return pathname === "/";
    return pathname === linkPath || pathname.startsWith(linkPath + "/");
  };

  // Get the theme for a specific link
  const getLinkTheme = (linkPath: string) => {
    return routeThemes[linkPath] || routeThemes["/"];
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      style={{ scale: navScale, y: navY }}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div
        className={cn(
          "flex items-center gap-1 px-2 py-2 bg-gray-900/80 backdrop-blur-xl border rounded-full shadow-2xl transition-all duration-500",
          currentTheme.border,
          currentTheme.glow
        )}
        whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
      >
        {navigationLinks.map((link) => {
          const isActive = isLinkActive(link.path);
          const linkTheme = getLinkTheme(link.path);
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
              {/* Active background with dynamic theme color */}
              {isActive && (
                <motion.div
                  className={cn(
                    "absolute inset-0 rounded-full border shadow-lg transition-colors duration-500",
                    linkTheme.bg,
                    linkTheme.border,
                    linkTheme.glow
                  )}
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
