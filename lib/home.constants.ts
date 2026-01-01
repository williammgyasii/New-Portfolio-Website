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
export const projectImages: Record<string, string> = {
  forgecms: "https://picsum.photos/seed/forgecms/800/600",
  flavorfuse: "https://picsum.photos/seed/flavorfuse/800/600",
  matterflow: "https://picsum.photos/seed/matterflow/800/600",
  eventura: "https://picsum.photos/seed/eventura/800/600",
  default: "https://picsum.photos/seed/project/800/600",
};

/**
 * Tech stack categories
 */
export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Redux" },
      { name: "Zustand" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "tRPC" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Prisma" },
      { name: "REST APIs" },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Cloud & Tools",
    items: [
      { name: "AWS" },
      { name: "Vercel" },
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Jest" },
      { name: "CI/CD" },
    ],
  },
];

/**
 * Brief work experience for homepage
 */
export interface WorkHighlight {
  role: string;
  company: string;
  period: string;
  highlight: string;
}

export const workHighlights: WorkHighlight[] = [
  {
    role: "Full-Stack Developer",
    company: "Intuitive Analytica",
    period: "2025 - Present",
    highlight: "Building an in-house Call CRM platform with Next.js and tRPC",
  },
  {
    role: "Full-Stack Developer",
    company: "Penny-Pilot",
    period: "2024 - 2025",
    highlight: "Developed AI-powered budgeting tool, improved engagement by 35%",
  },
  {
    role: "Frontend Developer",
    company: "Asquii LLC",
    period: "2021 - 2023",
    highlight: "Led SchoolDesk development used by 200+ schools",
  },
];

/**
 * Testimonials from clients
 */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "William delivered exceptional work on our platform. His attention to detail and ability to translate complex requirements into elegant solutions exceeded our expectations.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechStart Inc",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote: "Working with William was a game-changer for our project. He brought both technical expertise and creative problem-solving that helped us launch ahead of schedule.",
    author: "Michael Roberts",
    role: "Founder",
    company: "Digital Ventures",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    quote: "Highly skilled developer who understands both the technical and business side. William's contributions were instrumental in our product's success.",
    author: "Emily Zhang",
    role: "Product Manager",
    company: "CloudScale",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

/**
 * About section quick info
 */
export const aboutSnippet = {
  greeting: "Hi, I'm William 👋",
  bio: "A passionate full-stack developer based in Maryland, USA. I specialize in building web applications that are not only functional but also delightful to use. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.",
  highlights: [
    "5+ years of professional experience",
    "Worked with startups and enterprises",
    "Passionate about clean code & great UX",
    "Always learning, always building",
  ],
};

