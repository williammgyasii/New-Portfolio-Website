import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

/**
 * Effects configuration for UI visuals.
 */
export type EffectsConfig = {
  mask: {
    cursor: boolean;
    x: number;
    y: number;
    radius: number;
  };
  gradient: {
    display: boolean;
    opacity: number;
    x: number;
    y: number;
    width: number;
    height: number;
    tilt: number;
    colorStart: string;
    colorEnd: string;
  };
  dots: {
    display: boolean;
    opacity: number;
    size: string;
    color: string;
  };
  grid: {
    display: boolean;
    opacity: number;
    color: string;
    width: string;
    height: string;
  };
  lines: {
    display: boolean;
    opacity: number;
    color: string;
    size: string;
    thickness: number;
    angle: number;
  };
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

export const baseURL = "https://williammgyasii.com";

export const socialLinks: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: <FaLinkedin className="w-5 h-5 text-sky-600" />,
  },
  {
    name: "Email",
    href: "mailto:youremail@example.com",
    icon: <HiOutlineMail className="w-5 h-5 text-red-500" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: <FaTwitter className="w-5 h-5 text-sky-400" />,
  },
];
