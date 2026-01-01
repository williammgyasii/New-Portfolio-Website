import { LucideIcon, Code2, Palette, Server, Smartphone } from "lucide-react";

/**
 * Stats displayed on the home page
 */
export interface Stat {
  number: string;
  label: string;
}

export const stats: Stat[] = [
  { number: "5+", label: "Years Experience" },
  { number: "20+", label: "Projects Delivered" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "∞", label: "Coffee Consumed" },
];

/**
 * Services/Skills highlights
 */
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript with pixel-perfect UI",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, APIs, databases, and cloud infrastructure",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, modern interfaces with great user experience",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native apps for iOS and Android",
    color: "from-green-500 to-emerald-500",
  },
];

/**
 * Hero section content
 */
export const heroContent = {
  badge: "Available for work",
  headline: {
    line1: "I build",
    line2: "digital experiences",
    line3: "that matter.",
  },
  description:
    "Full-stack developer crafting scalable web applications with React, Next.js, and Node.js. 5+ years turning complex ideas into elegant solutions.",
  cta: {
    primary: "View My Work",
    secondary: "About Me",
  },
};

/**
 * CTA section content
 */
export const ctaContent = {
  title: "Let's build something amazing together",
  description: "Have a project in mind? I'd love to hear about it.",
  buttonText: "Get in Touch",
  email: "williammgyasii@gmail.com",
};

/**
 * Placeholder images for projects (using picsum for now)
 */
export const projectImages = {
  shepherdstream: "https://picsum.photos/seed/shepherd/800/600",
  ecommerce: "https://picsum.photos/seed/ecommerce/800/600",
  banking: "https://picsum.photos/seed/banking/800/600",
  default: "https://picsum.photos/seed/project/800/600",
};

