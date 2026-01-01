import { WorkExperience, ExperienceFilter } from "@/types/work.types";
import { Briefcase, Building, Clock, LucideIcon } from "lucide-react";

/**
 * Work experiences data
 */
export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Intuitive Analytica",
    duration: "May 2025 – Present",
    location: "Maryland, United States",
    type: "full-time",
    companySize: "10-20 employees",
    industry: "CRM & Call Center Solutions",
    startDate: "2025-05-01",
    current: true,
    description:
      "Leading the development of an in-house Call CRM platform (similar to Chase CRM), enabling seamless lead tracking, call logging, and agent workflow management.",
    responsibilities: [
      "Built a scalable, responsive frontend using Next.js and Tailwind CSS, improving agent productivity and user experience across multiple devices",
      "Designed and implemented real-time backend services with Node.js and tRPC, optimizing communication between client interfaces and internal systems",
      "Collaborated cross-functionally with product, design, QA, and data teams to ship secure, scalable features supporting high-volume call center operations",
      "Architected database schemas and API endpoints for efficient lead management and call tracking",
      "Implemented real-time notifications and status updates for agent workflow optimization",
    ],
    achievements: [
      "Improved agent productivity by streamlining CRM workflows and reducing manual data entry",
      "Successfully delivered core CRM features ahead of schedule",
      "Established coding standards and best practices for the development team",
      "Reduced page load times by 40% through performance optimizations",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "tRPC",
      "Tailwind CSS",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Penny-Pilot",
    duration: "Jun 2024 – Feb 2025",
    location: "Maryland, United States",
    type: "full-time",
    companySize: "10-20 employees",
    industry: "FinTech & Personal Finance",
    startDate: "2024-06-01",
    endDate: "2025-02-28",
    current: false,
    description:
      "Designed and developed an intelligent budgeting tool that helps individuals and groups track income, expenses, and tax obligations while leveraging AI-powered financial insights.",
    responsibilities: [
      "Implemented a multi-step onboarding process with Next.js and Zustand, streamlining user data collection and improving new user engagement by 35%",
      "Integrated interactive financial charts and real-time analytics using Recharts and D3.js, providing users with visual insights into spending trends and savings goals",
      "Ensured accessibility and mobile responsiveness, resulting in a 15% increase in user retention and positive feedback from beta testers",
      "Built RESTful APIs for budget calculations, expense categorization, and financial reporting",
      "Implemented secure authentication and data encryption for sensitive financial information",
    ],
    achievements: [
      "Improved new user engagement by 35% through streamlined onboarding",
      "Increased user retention by 15% with enhanced mobile experience",
      "Received positive feedback from beta testers on intuitive UI/UX design",
      "Successfully integrated AI-powered financial insights and recommendations",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "PostgreSQL",
      "Zustand",
      "Recharts",
      "D3.js",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Asquii LLC",
    duration: "Oct 2021 – Aug 2023",
    location: "Accra, Ghana",
    type: "full-time",
    companySize: "20-50 employees",
    industry: "EdTech & School Management",
    startDate: "2021-10-01",
    endDate: "2023-08-31",
    current: false,
    description:
      "Led the development of SchoolDesk, a comprehensive school management system utilized by over 200 schools, enhancing administrative efficiency and communication within educational institutions.",
    responsibilities: [
      "Collaborated with cross-functional teams to design and deploy new features, resulting in a 40% increase in user engagement and a 25% decrease in support tickets due to improved usability",
      "Conducted training sessions for school administrators and staff, leading to a 70% adoption rate of new system features within the first month of release",
      "Built reusable component libraries to accelerate development across multiple product features",
      "Implemented responsive designs ensuring consistent experience across desktop and mobile devices",
      "Worked closely with backend team to integrate RESTful APIs and real-time data synchronization",
    ],
    achievements: [
      "Increased user engagement by 40% through UI/UX improvements",
      "Reduced support tickets by 25% due to improved usability",
      "Achieved 70% adoption rate of new features within first month",
      "Successfully scaled the platform to serve 200+ schools",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Firebase",
      "Node.js",
      "JavaScript",
      "CSS3",
      "REST APIs",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    company: "Winks Initiative",
    duration: "Jan 2020 – Aug 2021",
    location: "Accra, Ghana",
    type: "full-time",
    companySize: "10-20 employees",
    industry: "HealthTech & Blood Donation",
    startDate: "2020-01-01",
    endDate: "2021-08-31",
    current: false,
    description:
      "Developed the frontend of a blood donation app, ensuring an intuitive and responsive user interface that resulted in a 15% increase in user sign-ups after launch.",
    responsibilities: [
      "Collaborated with backend developers to integrate real-time data updates (e.g., donation status, availability), enhancing the app's functionality and user experience",
      "Implemented dynamic features with React-Native and Redux to ensure cross-device compatibility and improve mobile experience, achieving a 98% mobile responsiveness rate across major devices",
      "Optimized the frontend code for performance, reducing page load times by 20% to provide a smoother user experience",
      "Designed and implemented push notification system for donation reminders and urgent blood requests",
      "Built user profile management and donation history tracking features",
    ],
    achievements: [
      "Increased user sign-ups by 15% after app launch",
      "Achieved 98% mobile responsiveness rate across major devices",
      "Reduced page load times by 20% through optimization",
      "Successfully launched app with positive user feedback",
    ],
    technologies: [
      "React-Native",
      "Redux",
      "Reanimated",
      "JavaScript",
      "CSS",
      "GitHub",
      "Agile",
    ],
  },
];

/**
 * Experience type filters with icons
 */
export const experienceFilters: (ExperienceFilter & { icon: LucideIcon })[] = [
  { id: "all", label: "All Experience", icon: Briefcase },
  { id: "full-time", label: "Full Time", icon: Building },
  { id: "contract", label: "Contract", icon: Clock },
];
