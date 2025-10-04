"use client";

import { cn } from "@/lib/utils";
import {
  User,
  Briefcase,
  FileText,
  LucideIcon,
  HomeIcon,
  NewspaperIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./Theme-Toggle";
import { motion, useScroll, useTransform } from "framer-motion";

type NavigationProps = {
  label: string;
  className?: string;
  path: string;
  icon: LucideIcon;
};

const navigationLinks: NavigationProps[] = [
  {
    label: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    label: "About",
    icon: User,
    path: "/about",
  },
  {
    label: "Work",
    icon: Briefcase,
    path: "/work",
  },
  {
    label: "Projects",
    icon: FileText,
    path: "/projects",
  },
  {
    label: "Blog",
    icon: NewspaperIcon,
    path: "/blog",
  },
];
export default function Navigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 16]);

  return (
    <motion.nav
      className="sticky top-7 transform z-50 bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg shadow-blue-500/20"
      style={{
        opacity: navOpacity,
        backdropFilter: `blur(${navBlur}px)`,
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center gap-3 md:gap-5 justify-between">
        {navigationLinks.map((link, idx) => (
          <motion.a
            key={link.label}
            href={link.path}
            className={cn(
              "text-white/80 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2 p-2 rounded-full relative overflow-hidden",
              idx === 0 && "pr-2 border-r border-white/30",
              pathname === link.path
                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white"
                : "hover:bg-white/10"
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Active indicator */}
            {pathname === link.path && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <div className="relative z-10 flex items-center gap-2">
              {link.label !== "Home" && (
                <motion.span
                  className="hidden sm:inline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  {link.label}
                </motion.span>
              )}
              <motion.div
                animate={
                  pathname === link.path ? { rotate: [0, 5, -5, 0] } : {}
                }
                transition={{ duration: 0.5 }}
              >
                <link.icon size={16} />
              </motion.div>
            </div>
          </motion.a>
        ))}

        {/* Enhanced Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </motion.nav>
  );
}
