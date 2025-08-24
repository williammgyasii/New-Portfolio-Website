"use client";

import { person } from "@/app/lib/content";
import { cn } from "@/lib/utils";
import {
  User,
  Briefcase,
  FileText,
  ImageIcon,
  LucideIcon,
  HomeIcon,
  NewspaperIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./Theme-Toggle";

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
  console.log(pathname);
  return (
    <nav className="sticky top-7 transform  z-50 bg-black backdrop-blur-md border border-white/50 rounded-full px-4 py-2 shadow-lg">
      <div className="flex items-center gap-3 md:gap-5 justify-between">
        {navigationLinks.map((link, idx) => (
          <a
            key={link.label}
            href={link.path}
            className={cn(
              "text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-2 p-2",
              idx === 0 && "pr-2 border-r border-white",
              pathname === link.path
                ? " bg-gray-700 rounded-full"
                : "border-transparent"
            )}
          >
            {link.label !== "Home" && (
              <span className="hidden sm:inline">{link.label}</span>
            )}
            <link.icon size={16} />
          </a>
        ))}
        {/* Logo/Name */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
