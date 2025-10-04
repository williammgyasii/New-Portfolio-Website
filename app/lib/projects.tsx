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
    category: "fullstack",
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

    outcomes: `Successfully delivered a functional MVP that provided 
    church members with a private and reliable platform to access sermons online, built trust and increased confidence from leadership by demonstrating that sensitive content could be shared without risk of leaks, improved overall engagement by offering an easy-to-use interface with clear role-based access, and established a strong, scalable foundation designed to support future enhancements such as mobile applications, real-time live streaming, and AI-powered engagement insights.`,

    images: ["/images/project1-1.png", "/images/project1-2.png"],
    link: "https://example.com/project-one",
  },
  {
    id: 2,
    slug: "ecommerce-platform",
    name: "E-Commerce Platform",
    subline: "Modern Online Shopping Experience",
    category: "web",
    technologies: [
      { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-6 h-6 text-green-500" />,
      },
      {
        name: "MongoDB",
        icon: <SiPostgresql className="w-6 h-6 text-sky-700" />,
      },
      {
        name: "Stripe",
        icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
      },
    ],
    keyFeatures: [
      {
        title: "User Authentication",
        description: "Secure login and registration system with JWT tokens",
      },
      {
        title: "Payment Processing",
        description:
          "Integrated Stripe payment gateway for secure transactions",
      },
      {
        title: "Inventory Management",
        description: "Real-time stock tracking and product management",
      },
      {
        title: "Admin Dashboard",
        description: "Comprehensive admin panel for order and user management",
      },
    ],
    description:
      "A full-stack e-commerce platform built with modern technologies, featuring secure payments, real-time inventory management, and an intuitive user interface.",
    challengesAndLearning: {
      challenges: [
        "Implementing secure payment processing with Stripe",
        "Optimizing database queries for large product catalogs",
        "Creating responsive design for all device types",
      ],
      learning: [
        "Mastered payment gateway integration and security best practices",
        "Learned advanced database optimization techniques",
        "Improved skills in responsive design and user experience",
      ],
    },
    outcomes:
      "Successfully launched an e-commerce platform that processed over $100K in transactions within the first month, with 99.9% uptime and positive user feedback.",
    images: ["/images/e-commerce-website-layout.png"],
    link: "https://example.com/ecommerce",
  },
  {
    id: 3,
    slug: "mobile-banking-app",
    name: "Mobile Banking App",
    subline: "Secure Financial Management",
    category: "mobile",
    technologies: [
      {
        name: "React Native",
        icon: <FaReact className="w-6 h-6 text-sky-400" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
      },
      {
        name: "Firebase",
        icon: <SiAwsamplify className="w-6 h-6 text-yellow-400" />,
      },
      { name: "Biometric Auth", icon: <SiNextdotjs className="w-6 h-6" /> },
    ],
    keyFeatures: [
      {
        title: "Biometric Authentication",
        description: "Face ID and Touch ID integration for secure access",
      },
      {
        title: "Real-time Transactions",
        description: "Instant money transfers and payment processing",
      },
      {
        title: "Budget Tracking",
        description: "Comprehensive financial analytics and spending insights",
      },
      {
        title: "Offline Support",
        description: "Core features available without internet connection",
      },
    ],
    description:
      "A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial tracking capabilities.",
    challengesAndLearning: {
      challenges: [
        "Implementing secure biometric authentication",
        "Ensuring data privacy and regulatory compliance",
        "Creating smooth offline functionality",
      ],
      learning: [
        "Mastered mobile security best practices and biometric integration",
        "Learned about financial regulations and compliance requirements",
        "Improved skills in offline-first mobile development",
      ],
    },
    outcomes:
      "Delivered a secure banking app with zero security incidents, 4.8/5 user rating, and 50% reduction in customer support tickets.",
    images: ["/images/mobile-app-interface.png"],
    link: "https://example.com/banking-app",
  },
];
