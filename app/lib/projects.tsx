import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAwsamplify,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const Projects = [
  {
    id: 1,
    slug: "shepherdstream",
    name: "SheperdStream",
    subline: "Private Sermon Streaming for Churches",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
      { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-6 h-6 text-green-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-6 h-6 text-sky-700" />,
      },
      {
        name: "AWS",
        icon: <SiAwsamplify className="w-6 h-6 text-yellow-400" />,
      },
    ],
    keyFeatures: [
      {
        title: "Private Sermon Streaming",
        description:
          "Deliver sermons and recordings in a secure, invite-only environment. Members can log in with pre-created accounts, ensuring that access is limited to your church community only.",
      },
      {
        title: "Role-Based Access",
        description:
          "Define clear roles such as superadmin, fellowship leader, cell leader, and member. Each role comes with tailored permissions to control who can upload, manage, or simply view content.",
      },
      {
        title: "Content Protection",
        description:
          "Safeguard your church’s media with multiple security layers. Personalized watermarks discourage screen recording and link sharing, while expiring video links prevent unauthorized access.",
      },
      {
        title: "Member Engagement Tracking",
        description:
          "Gain valuable insight into your community by tracking viewing patterns. See who watched a sermon, when they watched, and how long they stayed engaged to measure participation and impact.",
      },
      {
        title: "Simple Admin Dashboard",
        description:
          "Manage all video content from a central, easy-to-use dashboard. Upload new recordings, organize them by series or events, and keep everything structured for quick access by members.",
      },
    ],
    description: `Deliver sermons privately, safeguard your church’s content with
                watermarked streams, and track member engagement with detailed
                viewing insights — all in one secure portal.`,
    challengesAndLearning: {
      challenges: [
        "Ensuring seamless video playback while maintaining strong access restrictions.",
        "Balancing ease of use with robust content protection measures.",
        "Designing a scalable architecture that can grow with community needs.",
      ],
      learning: [
        "Learned how to integrate streaming APIs with authentication to keep playback smooth and secure.",
        "Discovered ways to apply watermarks and expiring links without hurting the user experience.",
        "Strengthened skills in cloud storage, CDN distribution, and modular design for scalability.",
      ],
    },

    images: ["/images/project1-1.png", "/images/project1-2.png"],
    link: "https://example.com/project-one",
  },
];

const keyFeatures = [
  {
    title: "Private Sermon Streaming",
    description:
      "Deliver sermons and recordings in a secure, invite-only environment. Members can log in with pre-created accounts, ensuring that access is limited to your church community only.",
  },
  {
    title: "Role-Based Access",
    description:
      "Define clear roles such as superadmin, fellowship leader, cell leader, and member. Each role comes with tailored permissions to control who can upload, manage, or simply view content.",
  },
  {
    title: "Content Protection",
    description:
      "Safeguard your church’s media with multiple security layers. Personalized watermarks discourage screen recording and link sharing, while expiring video links prevent unauthorized access.",
  },
  {
    title: "Member Engagement Tracking",
    description:
      "Gain valuable insight into your community by tracking viewing patterns. See who watched a sermon, when they watched, and how long they stayed engaged to measure participation and impact.",
  },
  {
    title: "Simple Admin Dashboard",
    description:
      "Manage all video content from a central, easy-to-use dashboard. Upload new recordings, organize them by series or events, and keep everything structured for quick access by members.",
  },
];
