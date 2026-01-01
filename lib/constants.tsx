import { ArrowUpRight } from "lucide-react";
import { JSX, ReactElement } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const baseURL = "https://williammgyasii.com";

export const socialLinks: {
  name: string;
  href: string;
  icon?: ReactElement;
}[] = [
  {
    name: "GitHub",
    href: "https://github.com/williammgyasii",
    icon: <FaGithub className="w-5 h-5 text-white" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/williammgyasii/",
    icon: <FaLinkedin className="w-5 h-5 text-white" />,
  },
  {
    name: "Email",
    href: "mailto:williammgyasii@gmail.com",
    icon: <HiOutlineMail className="w-5 h-5 text-white" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/williammgyasii",
    icon: <FaTwitter className="w-5 h-5 text-white" />,
  },
];
