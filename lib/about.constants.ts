import { TimelineEntry, SectionNavItem } from "@/types/about.types";

/**
 * Timeline entries for work experience
 */
export const timelineEntries: TimelineEntry[] = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Intuitive Analytica",
    duration: "May 2025 – Present",
    country: "Maryland, United States",
    countryFlag: "🇺🇸",
    description:
      "Leading the development of an in-house Call CRM platform, enabling seamless lead tracking, call logging, and agent workflow management.",
    responsibilities: [
      "Built a scalable, responsive frontend using Next.js and Tailwind CSS, improving agent productivity and user experience across multiple devices",
      "Designed and implemented real-time backend services with Node.js and tRPC, optimizing communication between client interfaces and internal systems",
      "Collaborated cross-functionally with product, design, QA, and data teams to ship secure, scalable features supporting high-volume call center operations",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Penny-Pilot",
    duration: "Jun 2024 – Feb 2025",
    country: "Maryland, United States",
    countryFlag: "🇺🇸",
    description:
      "Designed and developed an intelligent budgeting tool that helps individuals and groups track income, expenses, and tax obligations while leveraging AI-powered financial insights.",
    responsibilities: [
      "Implemented a multi-step onboarding process with Next.js and Zustand, streamlining user data collection and improving new user engagement by 35%",
      "Integrated interactive financial charts and real-time analytics using Recharts and D3.js, providing users with visual insights into spending trends and savings goals",
      "Ensured accessibility and mobile responsiveness, resulting in a 15% increase in user retention and positive feedback from beta testers",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Asquii LLC",
    duration: "Oct 2021 – Aug 2023",
    country: "Accra, Ghana",
    countryFlag: "🇬🇭",
    description:
      "Led the development of SchoolDesk, a comprehensive school management system utilized by over 200 schools, enhancing administrative efficiency and communication within educational institutions.",
    responsibilities: [
      "Collaborated with cross-functional teams to design and deploy new features, resulting in a 40% increase in user engagement and a 25% decrease in support tickets due to improved usability",
      "Conducted training sessions for school administrators and staff, leading to a 70% adoption rate of new system features within the first month of release",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    company: "Winks Initiative",
    duration: "Jan 2020 – Aug 2021",
    country: "Accra, Ghana",
    countryFlag: "🇬🇭",
    description:
      "Developed the frontend of a blood donation app, ensuring an intuitive and responsive user interface that resulted in a 15% increase in user sign-ups after launch.",
    responsibilities: [
      "Collaborated with backend developers to integrate real-time data updates (e.g., donation status, availability), enhancing the app's functionality and user experience",
      "Implemented dynamic features with React-Native and Redux to ensure cross-device compatibility and improve mobile experience, achieving a 98% mobile responsiveness rate across major devices",
      "Optimized the frontend code for performance, reducing page load times by 20% to provide a smoother user experience",
    ],
  },
];

/**
 * Section navigation items for sidebar
 */
export const sectionNavItems: SectionNavItem[] = [
  { label: "Introduction", id: "#introduction" },
  { label: "Work Experience", id: "#experience" },
  { label: "Skills", id: "#skills" },
  { label: "Education", id: "#education" },
  { label: "Contact", id: "#contact" },
];

/**
 * Profile information
 */
export const profileInfo = {
  name: "William Kwabena Gyasi",
  title: "Full Stack Developer",
  bio: `Full-Stack Developer with 5+ years of experience delivering scalable web 
        applications using JavaScript/TypeScript, React.js, Node.js, and AWS. Adept 
        at end-to-end software development, from database design to user-facing 
        interfaces. Proven ability to leverage a wide range of technologies to 
        deliver robust solutions that improve user experience and drive business growth.`,
  calendarLink: "https://cal.com/",
};

