import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiOpenai,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiMongodb,
  SiStripe,
  SiVercel,
  SiRedis,
  SiDocker,
  SiAmazons3,
} from "react-icons/si";

export const Projects = [
  {
    id: 1,
    slug: "forgecms",
    name: "ForgeCMS",
    subline: "AI-Assisted Content Management System",
    category: "fullstack",
    status: "in-progress",
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
      { name: "OpenAI", icon: <SiOpenai className="w-6 h-6" /> },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-6 h-6 text-sky-700" />,
      },
      { name: "Prisma", icon: <SiPrisma className="w-6 h-6" /> },
      { name: "Redis", icon: <SiRedis className="w-6 h-6 text-red-500" /> },
    ],
    keyFeatures: [
      {
        title: "AI-Powered Writing",
        description:
          "Leverage AI for outlining, rewriting, summarizing, and structuring your content from idea to publish.",
      },
      {
        title: "Content Management",
        description:
          "Manage articles, pages, and case studies with an intuitive editor and organizational tools.",
      },
      {
        title: "Draft to Publish Workflow",
        description:
          "Seamless workflow that guides users from initial idea through drafts to final publication.",
      },
      {
        title: "Long-form Support",
        description:
          "Built specifically for long-form and structured content with proper formatting and organization.",
      },
    ],
    description:
      "ForgeCMS is an AI-assisted content management system that helps people create, structure, refine, and publish content. It transforms ideas into publishable content with AI-powered outlining, rewriting, and summarization.",

    // Extended project details
    problemStatement: {
      title: "The Content Creation Bottleneck",
      description:
        "Content creators spend 60% of their time on structure and formatting instead of actual writing. Traditional CMS platforms focus on publishing but ignore the ideation and drafting phases where creators need the most help.",
      painPoints: [
        "Writer's block and blank page syndrome",
        "Time-consuming content structuring and outlining",
        "Inconsistent tone and style across content pieces",
        "Difficulty repurposing content for different formats",
        "No intelligent assistance during the creative process",
      ],
    },

    solutionApproach: {
      title: "AI-Native Content Creation",
      description:
        "ForgeCMS embeds AI assistance at every stage of the content lifecycle, from initial brainstorming to final publication, making the CMS an active collaborator rather than a passive storage system.",
      principles: [
        {
          title: "Contextual AI",
          description:
            "AI suggestions that understand your content history, brand voice, and audience preferences.",
        },
        {
          title: "Non-Intrusive Assistance",
          description:
            "AI helps when needed but never interrupts the creative flow or takes over the writing process.",
        },
        {
          title: "Progressive Enhancement",
          description:
            "Start with a simple idea and progressively build it into a complete, polished piece.",
        },
      ],
    },

    architecture: {
      title: "System Architecture",
      description:
        "Built on a modern, scalable architecture designed for real-time AI interactions and seamless content management.",
      layers: [
        {
          name: "Presentation Layer",
          tech: "Next.js 14 + React Server Components",
          description:
            "Server-side rendering for SEO, client components for interactive editing experience.",
        },
        {
          name: "AI Processing Layer",
          tech: "OpenAI GPT-4 + Custom Prompts",
          description:
            "Streaming responses, context management, and intelligent caching for fast AI interactions.",
        },
        {
          name: "Data Layer",
          tech: "PostgreSQL + Prisma ORM",
          description:
            "Relational data model for complex content relationships and version history.",
        },
        {
          name: "Caching Layer",
          tech: "Redis",
          description:
            "Session management, AI response caching, and real-time collaboration state.",
        },
      ],
    },

    targetAudience: {
      primary: [
        {
          segment: "Content Marketers",
          need: "Scale content production without sacrificing quality",
        },
        {
          segment: "Technical Writers",
          need: "Structure complex documentation efficiently",
        },
        {
          segment: "Bloggers & Creators",
          need: "Overcome writer's block and publish consistently",
        },
      ],
      secondary: [
        {
          segment: "Marketing Agencies",
          need: "Manage multiple client content workflows",
        },
        {
          segment: "Startups",
          need: "Build content presence with limited resources",
        },
      ],
    },

    developmentPhases: [
      {
        phase: "Discovery & Research",
        duration: "2 weeks",
        status: "completed",
        description:
          "User interviews, competitor analysis, and feature prioritization.",
      },
      {
        phase: "Core CMS Development",
        duration: "6 weeks",
        status: "completed",
        description: "Basic content management, editor, and authentication.",
      },
      {
        phase: "AI Integration",
        duration: "4 weeks",
        status: "in-progress",
        description:
          "OpenAI integration, prompt engineering, and streaming responses.",
      },
      {
        phase: "Advanced Features",
        duration: "4 weeks",
        status: "planned",
        description: "Collaboration, versioning, and publishing workflows.",
      },
      {
        phase: "Beta Launch",
        duration: "2 weeks",
        status: "planned",
        description: "Private beta with select users, feedback collection.",
      },
    ],

    metrics: {
      title: "Success Metrics",
      kpis: [
        {
          metric: "Time to First Draft",
          target: "50% reduction",
          description: "Measure time from idea to complete first draft",
        },
        {
          metric: "Content Quality Score",
          target: "85%+ readability",
          description: "Automated readability and engagement scoring",
        },
        {
          metric: "User Retention",
          target: "70% monthly active",
          description: "Users who return and publish regularly",
        },
        {
          metric: "AI Acceptance Rate",
          target: "60%+",
          description: "Percentage of AI suggestions accepted by users",
        },
      ],
    },

    futureRoadmap: [
      {
        feature: "Team Collaboration",
        timeline: "Q4 2025",
        description:
          "Real-time collaborative editing with role-based permissions.",
      },
      {
        feature: "Multi-channel Publishing",
        timeline: "Q1 2026",
        description: "One-click publish to Medium, Dev.to, LinkedIn, and more.",
      },
      {
        feature: "Content Analytics",
        timeline: "Q2 2026",
        description:
          "Track content performance and get AI-powered optimization suggestions.",
      },
      {
        feature: "Custom AI Training",
        timeline: "Q3 2026",
        description: "Train AI on your brand voice and style guidelines.",
      },
    ],

    designDecisions: [
      {
        decision: "Block-based Editor over WYSIWYG",
        reasoning:
          "Block-based editors provide better structure for AI to understand and manipulate content, while offering more flexibility for complex layouts.",
      },
      {
        decision: "Streaming AI Responses",
        reasoning:
          "Streaming provides immediate feedback and reduces perceived latency, keeping users engaged during AI generation.",
      },
      {
        decision: "PostgreSQL over NoSQL",
        reasoning:
          "Content relationships (categories, tags, versions) benefit from relational queries, and JSONB provides flexibility when needed.",
      },
    ],

    securityConsiderations: [
      {
        area: "Authentication",
        implementation: "NextAuth.js with OAuth providers and optional 2FA",
      },
      {
        area: "Data Encryption",
        implementation: "AES-256 encryption at rest, TLS 1.3 in transit",
      },
      {
        area: "API Security",
        implementation: "Rate limiting, API key rotation, request signing",
      },
      {
        area: "Content Privacy",
        implementation:
          "User content never used for AI training, GDPR compliant",
      },
    ],

    integrations: [
      {
        name: "OpenAI",
        purpose: "AI content generation and analysis",
        status: "integrated",
      },
      {
        name: "Cloudinary",
        purpose: "Image optimization and management",
        status: "integrated",
      },
      {
        name: "Vercel",
        purpose: "Hosting and edge functions",
        status: "integrated",
      },
      { name: "Resend", purpose: "Transactional emails", status: "planned" },
      { name: "Stripe", purpose: "Subscription billing", status: "planned" },
    ],

    challengesAndLearning: {
      challenges: [
        "Integrating AI seamlessly into the content creation workflow without disrupting user focus.",
        "Building a flexible content structure that works for various content types.",
        "Optimizing AI response times for real-time writing assistance.",
        "Managing token limits while maintaining context across long documents.",
      ],
      learning: [
        "Mastered OpenAI API integration and prompt engineering for content generation.",
        "Developed expertise in building rich text editors with collaborative features.",
        "Learned to balance AI automation with user control for optimal content quality.",
        "Implemented efficient streaming patterns for real-time AI responses.",
      ],
    },
    outcomes:
      "Building a powerful CMS that streamlines content creation, reducing time from idea to publication by leveraging AI at every step of the writing process.",
    images: ["/images/forgecms-1.png", "/images/forgecms-2.png"],
    link: "https://www.forgecms.io/",
  },
  {
    id: 2,
    slug: "flavorfuse",
    name: "Flavor Fuse",
    subline: "AI Decision Assistant for Food",
    category: "fullstack",
    status: "in-progress",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
      { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
      },
      { name: "OpenAI", icon: <SiOpenai className="w-6 h-6" /> },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-6 h-6 text-green-500" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-6 h-6 text-green-600" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
      },
    ],
    keyFeatures: [
      {
        title: "Smart Recommendations",
        description:
          "Get personalized meal, recipe, and grocery recommendations based on your constraints and preferences.",
      },
      {
        title: "Budget-Aware Suggestions",
        description:
          "Recommendations that respect your budget while maximizing nutrition and taste.",
      },
      {
        title: "Time-Conscious Meals",
        description:
          "Quick meal options when you're short on time, elaborate recipes when you have the luxury.",
      },
      {
        title: "Lifestyle Integration",
        description:
          "Considers dietary restrictions, health goals, and lifestyle factors in every recommendation.",
      },
    ],
    description:
      "Flavor Fuse is an AI decision assistant for food that helps users decide what to eat and what to buy based on real-life constraints like budget, time, preferences, and lifestyle. It reduces daily decision fatigue around food.",

    problemStatement: {
      title: "Decision Fatigue Around Food",
      description:
        "The average person makes 200+ food-related decisions daily. This cognitive load leads to poor choices, wasted food, and unnecessary stress. Existing meal planning apps are too rigid and don't adapt to real-life constraints.",
      painPoints: [
        "Daily 'what should I eat?' mental drain",
        "Recipes that don't match available ingredients",
        "Budget overruns from impulse grocery shopping",
        "Difficulty balancing nutrition with convenience",
        "Meal plans that don't account for real-life variability",
      ],
    },

    solutionApproach: {
      title: "Conversational Food Intelligence",
      description:
        "Flavor Fuse uses conversational AI to understand your current context (time, budget, mood, ingredients) and provides actionable food decisions, not just recipes.",
      principles: [
        {
          title: "Context-First Recommendations",
          description:
            "Every suggestion considers your current constraints: time, budget, energy, and what's in your fridge.",
        },
        {
          title: "Decision, Not Just Information",
          description:
            "Instead of showing 50 recipes, we give you THE answer for right now.",
        },
        {
          title: "Learn and Adapt",
          description:
            "The system learns your preferences over time, getting better with each interaction.",
        },
      ],
    },

    architecture: {
      title: "System Architecture",
      description:
        "Event-driven architecture optimized for conversational AI and real-time personalization.",
      layers: [
        {
          name: "Conversational Interface",
          tech: "Next.js + Streaming UI",
          description:
            "Chat-like interface with real-time AI responses and quick action buttons.",
        },
        {
          name: "Recommendation Engine",
          tech: "OpenAI + Custom ML",
          description:
            "Multi-constraint optimization combining AI reasoning with preference learning.",
        },
        {
          name: "User Profile Store",
          tech: "MongoDB",
          description:
            "Flexible schema for evolving user preferences, dietary needs, and interaction history.",
        },
        {
          name: "Recipe & Nutrition API",
          tech: "Custom Aggregation",
          description:
            "Unified access to recipe databases and nutritional information.",
        },
      ],
    },

    targetAudience: {
      primary: [
        {
          segment: "Busy Professionals",
          need: "Quick decisions without meal planning overhead",
        },
        {
          segment: "Health-Conscious Individuals",
          need: "Balance nutrition with real-world constraints",
        },
        {
          segment: "Budget-Minded Families",
          need: "Maximize nutrition while minimizing food waste",
        },
      ],
      secondary: [
        {
          segment: "Fitness Enthusiasts",
          need: "Meal suggestions aligned with training goals",
        },
        {
          segment: "People with Dietary Restrictions",
          need: "Safe, compliant meal options quickly",
        },
      ],
    },

    developmentPhases: [
      {
        phase: "Concept Validation",
        duration: "2 weeks",
        status: "completed",
        description: "User research, problem validation, and MVP scoping.",
      },
      {
        phase: "Core AI Engine",
        duration: "4 weeks",
        status: "completed",
        description:
          "Recommendation logic, constraint handling, and prompt engineering.",
      },
      {
        phase: "User Interface",
        duration: "3 weeks",
        status: "in-progress",
        description:
          "Conversational UI, recipe display, and grocery list features.",
      },
      {
        phase: "Personalization",
        duration: "3 weeks",
        status: "planned",
        description:
          "Preference learning, history tracking, and adaptive suggestions.",
      },
      {
        phase: "Grocery Integration",
        duration: "2 weeks",
        status: "planned",
        description: "Price comparison and one-click grocery ordering.",
      },
    ],

    metrics: {
      title: "Success Metrics",
      kpis: [
        {
          metric: "Decision Time",
          target: "< 30 seconds",
          description: "Time from opening app to having a food decision",
        },
        {
          metric: "Suggestion Acceptance",
          target: "75%+",
          description: "Users who follow through with the recommendation",
        },
        {
          metric: "Weekly Active Users",
          target: "5+ sessions/week",
          description: "Users making it a daily habit",
        },
        {
          metric: "Food Waste Reduction",
          target: "30% less",
          description: "Self-reported reduction in thrown-away food",
        },
      ],
    },

    futureRoadmap: [
      {
        feature: "Pantry Tracking",
        timeline: "Q4 2025",
        description:
          "OCR receipt scanning to automatically track what you have.",
      },
      {
        feature: "Grocery Delivery Integration",
        timeline: "Q1 2026",
        description: "One-tap ordering from Instacart, Amazon Fresh, etc.",
      },
      {
        feature: "Family Accounts",
        timeline: "Q2 2026",
        description: "Manage preferences for multiple household members.",
      },
      {
        feature: "Smart Appliance Integration",
        timeline: "Q3 2026",
        description: "Connect with smart fridges and meal prep devices.",
      },
    ],

    designDecisions: [
      {
        decision: "Chat-Based UI over Traditional App",
        reasoning:
          "Conversation is the most natural way to express complex, multi-constraint requests like 'something quick, healthy, under $10, using the chicken I have'.",
      },
      {
        decision: "Single Recommendation over Multiple Options",
        reasoning:
          "Showing one best option reduces decision fatigue. Users can always ask for alternatives.",
      },
      {
        decision: "MongoDB over SQL",
        reasoning:
          "User preference data is highly variable and evolving; document structure provides flexibility for iterating on data models.",
      },
    ],

    securityConsiderations: [
      {
        area: "Dietary Data Privacy",
        implementation:
          "Health information encrypted and never shared with third parties",
      },
      {
        area: "Authentication",
        implementation: "Magic link authentication for frictionless access",
      },
      {
        area: "Data Portability",
        implementation: "Full data export in standard formats (JSON, CSV)",
      },
      {
        area: "Anonymized Analytics",
        implementation: "Usage patterns analyzed without PII",
      },
    ],

    integrations: [
      {
        name: "OpenAI",
        purpose: "Conversational AI and reasoning",
        status: "integrated",
      },
      {
        name: "Spoonacular API",
        purpose: "Recipe database and nutrition data",
        status: "integrated",
      },
      { name: "Instacart", purpose: "Grocery ordering", status: "planned" },
      {
        name: "Apple Health",
        purpose: "Fitness and nutrition sync",
        status: "planned",
      },
    ],

    challengesAndLearning: {
      challenges: [
        "Creating an AI that understands complex dietary preferences and restrictions.",
        "Building a recommendation engine that balances multiple constraints effectively.",
        "Designing an interface that makes food decisions quick and stress-free.",
        "Handling the variability of ingredient availability and pricing.",
      ],
      learning: [
        "Developed advanced prompt engineering for multi-constraint decision making.",
        "Learned to build conversational AI interfaces that feel natural and helpful.",
        "Gained expertise in nutrition data integration and meal planning algorithms.",
        "Mastered building personalization systems that improve with usage.",
      ],
    },
    outcomes:
      "Creating an app that eliminates the daily 'what should I eat?' struggle, helping users make better food decisions without the mental overhead.",
    images: ["/images/flavorfuse-1.png", "/images/flavorfuse-2.png"],
    link: "#",
  },
  {
    id: 3,
    slug: "matterflow",
    name: "MatterFlow",
    subline: "Practice Management for Law Firms",
    category: "fullstack",
    status: "in-progress",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
      { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-6 h-6 text-sky-700" />,
      },
      { name: "Prisma", icon: <SiPrisma className="w-6 h-6" /> },
      {
        name: "Stripe",
        icon: <SiStripe className="w-6 h-6 text-purple-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
      },
      { name: "Docker", icon: <SiDocker className="w-6 h-6 text-blue-400" /> },
    ],
    keyFeatures: [
      {
        title: "Client Intake & Conflicts",
        description:
          "Streamlined client onboarding with built-in conflict of interest checking.",
      },
      {
        title: "Matter & Task Tracking",
        description:
          "Comprehensive case management with task assignments, deadlines, and progress tracking.",
      },
      {
        title: "Billing & Time Capture",
        description:
          "Effortless time tracking and billing with engagement letter generation.",
      },
      {
        title: "Trust/IOLTA Safeguards",
        description:
          "Built-in compliance features to protect trust accounts and meet regulatory requirements.",
      },
    ],
    description:
      "MatterFlow is a practice management platform for small law firms that simplifies how work moves from client intake → engagement → billing, while protecting trust accounts and ensuring compliance.",

    problemStatement: {
      title: "Small Firms, Big Compliance Burden",
      description:
        "Small law firms (1-10 attorneys) handle the same compliance requirements as large firms but lack the infrastructure. 73% of malpractice claims stem from administrative errors, not legal mistakes.",
      painPoints: [
        "Manual conflict checking leads to costly errors",
        "Trust account violations from poor tracking",
        "Missed deadlines due to scattered task management",
        "Hours lost to administrative overhead",
        "Expensive enterprise software designed for large firms",
      ],
    },

    solutionApproach: {
      title: "Compliance-First, Simplicity-Second",
      description:
        "MatterFlow builds compliance guardrails directly into the workflow, making it harder to make mistakes while keeping the interface simple enough for non-technical users.",
      principles: [
        {
          title: "Guardrails, Not Obstacles",
          description:
            "Compliance checks run automatically in the background, only surfacing when action is needed.",
        },
        {
          title: "Workflow Mirroring",
          description:
            "The software matches how small firms actually work, not how enterprise consultants think they should.",
        },
        {
          title: "Audit-Ready Always",
          description:
            "Every action is logged, every dollar is tracked, ready for bar association review at any time.",
        },
      ],
    },

    architecture: {
      title: "System Architecture",
      description:
        "Enterprise-grade security and reliability in a package designed for small firm economics.",
      layers: [
        {
          name: "Application Layer",
          tech: "Next.js + React",
          description:
            "Role-based dashboards for attorneys, paralegals, and office managers.",
        },
        {
          name: "Business Logic",
          tech: "Node.js + TypeScript",
          description:
            "Domain-driven design with separate bounded contexts for matters, billing, and compliance.",
        },
        {
          name: "Data Layer",
          tech: "PostgreSQL + Row-Level Security",
          description:
            "Multi-tenant architecture with strict data isolation and encryption.",
        },
        {
          name: "Audit & Compliance",
          tech: "Event Sourcing",
          description:
            "Immutable audit log of all actions for regulatory compliance.",
        },
      ],
    },

    targetAudience: {
      primary: [
        {
          segment: "Solo Practitioners",
          need: "All-in-one solution without enterprise complexity",
        },
        {
          segment: "Small Firms (2-10)",
          need: "Collaboration without expensive per-seat pricing",
        },
        {
          segment: "Virtual/Remote Firms",
          need: "Cloud-native practice management",
        },
      ],
      secondary: [
        {
          segment: "Legal Aid Organizations",
          need: "Affordable compliance for high-volume, low-margin work",
        },
        { segment: "New Firm Founders", need: "Start compliant from day one" },
      ],
    },

    developmentPhases: [
      {
        phase: "Domain Research",
        duration: "4 weeks",
        status: "completed",
        description:
          "Interviews with attorneys, bar association requirements research.",
      },
      {
        phase: "Core Platform",
        duration: "8 weeks",
        status: "completed",
        description: "Authentication, matter management, and basic billing.",
      },
      {
        phase: "Trust Accounting",
        duration: "4 weeks",
        status: "in-progress",
        description:
          "IOLTA compliance, three-way reconciliation, and audit trails.",
      },
      {
        phase: "Document Management",
        duration: "3 weeks",
        status: "planned",
        description: "Secure storage, templates, and e-signatures.",
      },
      {
        phase: "Client Portal",
        duration: "3 weeks",
        status: "planned",
        description: "Secure client communication and document sharing.",
      },
    ],

    metrics: {
      title: "Success Metrics",
      kpis: [
        {
          metric: "Compliance Score",
          target: "100%",
          description: "Automated compliance checks passing at all times",
        },
        {
          metric: "Administrative Time",
          target: "40% reduction",
          description: "Time spent on non-billable admin tasks",
        },
        {
          metric: "Trust Account Accuracy",
          target: "99.99%",
          description: "Zero discrepancies in trust accounting",
        },
        {
          metric: "Billable Capture Rate",
          target: "95%+",
          description: "Time entries captured vs. work performed",
        },
      ],
    },

    futureRoadmap: [
      {
        feature: "AI Document Review",
        timeline: "Q4 2025",
        description: "AI-assisted contract review and deadline extraction.",
      },
      {
        feature: "Court E-Filing Integration",
        timeline: "Q1 2026",
        description: "Direct integration with state court filing systems.",
      },
      {
        feature: "Client Portal",
        timeline: "Q1 2026",
        description: "Secure communication and document sharing with clients.",
      },
      {
        feature: "Advanced Analytics",
        timeline: "Q2 2026",
        description:
          "Profitability analysis, realization rates, and practice insights.",
      },
    ],

    designDecisions: [
      {
        decision: "Event Sourcing for Audit Trail",
        reasoning:
          "Legal compliance requires knowing not just the current state but the complete history of every action. Event sourcing provides an immutable, queryable audit log.",
      },
      {
        decision: "Multi-tenant with Row-Level Security",
        reasoning:
          "Firm data must be strictly isolated. PostgreSQL RLS provides database-level enforcement, not just application-level checks.",
      },
      {
        decision: "Conflict Check as First-Class Feature",
        reasoning:
          "Conflict checking is often an afterthought in legal software. We built it into the core data model from day one.",
      },
    ],

    securityConsiderations: [
      {
        area: "Data Encryption",
        implementation:
          "AES-256 at rest, TLS 1.3 in transit, encrypted backups",
      },
      {
        area: "Access Control",
        implementation:
          "Role-based permissions with matter-level access restrictions",
      },
      {
        area: "Audit Logging",
        implementation: "Immutable logs of all data access and modifications",
      },
      {
        area: "Compliance",
        implementation: "SOC 2 Type II certification in progress",
      },
    ],

    integrations: [
      {
        name: "Stripe",
        purpose: "Payment processing and invoicing",
        status: "integrated",
      },
      {
        name: "Plaid",
        purpose: "Bank account connection for trust accounting",
        status: "integrated",
      },
      {
        name: "DocuSign",
        purpose: "E-signatures for engagement letters",
        status: "planned",
      },
      {
        name: "Clio",
        purpose: "Data migration from existing systems",
        status: "planned",
      },
      { name: "QuickBooks", purpose: "General ledger sync", status: "planned" },
    ],

    challengesAndLearning: {
      challenges: [
        "Understanding complex legal industry workflows and compliance requirements.",
        "Building trust account management with proper safeguards and audit trails.",
        "Creating an intuitive interface for users who may not be tech-savvy.",
        "Navigating different state bar association requirements.",
      ],
      learning: [
        "Gained deep understanding of legal practice management and IOLTA compliance.",
        "Mastered building secure financial tracking systems with proper audit trails.",
        "Learned to design workflows that map to real-world professional processes.",
        "Developed expertise in event sourcing and immutable audit logs.",
      ],
    },
    outcomes:
      "Building a streamlined practice management solution that helps small law firms run efficient, compliant operations without the complexity of enterprise software.",
    images: ["/images/matterflow-1.png", "/images/matterflow-2.png"],
    link: "#",
  },
  {
    id: 4,
    slug: "eventura",
    name: "Eventura",
    subline: "Culture-First Wedding & Event Platform",
    category: "fullstack",
    status: "in-progress",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
      { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-6 h-6 text-sky-700" />,
      },
      { name: "Vercel", icon: <SiVercel className="w-6 h-6" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
      },
      {
        name: "Stripe",
        icon: <SiStripe className="w-6 h-6 text-purple-500" />,
      },
      {
        name: "AWS S3",
        icon: <SiAmazons3 className="w-6 h-6 text-orange-500" />,
      },
    ],
    keyFeatures: [
      {
        title: "Cultural Vendor Discovery",
        description:
          "Find vendors by culture - Nigerian DJs, Ghanaian caterers, Indian photographers, and more.",
      },
      {
        title: "Diaspora-Focused",
        description:
          "Purpose-built for diaspora communities planning culturally specific celebrations.",
      },
      {
        title: "Trusted Directory",
        description:
          "Curated, vetted vendors who understand and respect cultural traditions.",
      },
      {
        title: "Event Planning Tools",
        description:
          "Comprehensive planning tools tailored for multi-cultural wedding ceremonies.",
      },
    ],
    description:
      "Eventura is a culture-first wedding and event management platform that helps people find vendors based on cultural preferences. Starting with weddings, it serves diaspora communities planning culturally specific celebrations.",

    problemStatement: {
      title: "Cultural Celebrations Deserve Cultural Vendors",
      description:
        "Diaspora communities spend $50B+ annually on weddings that honor their heritage, yet mainstream platforms don't understand cultural nuances. Finding a vendor who knows the difference between jollof rice and jambalaya shouldn't require word-of-mouth.",
      painPoints: [
        "Mainstream platforms don't categorize by culture",
        "Finding culturally-aware vendors requires extensive networking",
        "No way to verify a vendor's cultural experience",
        "Planning multi-cultural ceremonies requires multiple disconnected tools",
        "Cultural traditions often lost or compromised due to vendor inexperience",
      ],
    },

    solutionApproach: {
      title: "Culture as a First-Class Filter",
      description:
        "Eventura treats cultural background as a primary search criterion, not an afterthought, ensuring diaspora couples find vendors who truly understand their celebrations.",
      principles: [
        {
          title: "Cultural Authenticity",
          description:
            "Vendors are categorized and verified based on their cultural expertise and community reputation.",
        },
        {
          title: "Community-Driven Trust",
          description:
            "Reviews from community members carry more weight than anonymous ratings.",
        },
        {
          title: "Celebration Templates",
          description:
            "Pre-built planning templates for specific cultural wedding formats (Nigerian traditional, Indian sangeet, etc.).",
        },
      ],
    },

    architecture: {
      title: "System Architecture",
      description:
        "Marketplace architecture optimized for discovery, trust, and multi-cultural content management.",
      layers: [
        {
          name: "Discovery Engine",
          tech: "Algolia + PostgreSQL",
          description:
            "Cultural taxonomy, location-aware search, and personalized recommendations.",
        },
        {
          name: "Vendor Portal",
          tech: "Next.js + Server Actions",
          description:
            "Vendor onboarding, portfolio management, and booking calendar.",
        },
        {
          name: "Trust System",
          tech: "Custom + Stripe Connect",
          description:
            "Verification badges, review weighting, and secure payments.",
        },
        {
          name: "Media Management",
          tech: "AWS S3 + CloudFront",
          description:
            "High-quality portfolio images and video hosting with CDN delivery.",
        },
      ],
    },

    targetAudience: {
      primary: [
        {
          segment: "African Diaspora (US/UK)",
          need: "Vendors who understand African wedding traditions",
        },
        {
          segment: "South Asian Diaspora",
          need: "Multi-day ceremony planning with cultural expertise",
        },
        {
          segment: "Caribbean Communities",
          need: "Vendors for culturally rich celebrations",
        },
      ],
      secondary: [
        {
          segment: "Multi-Cultural Couples",
          need: "Blend two cultures in one celebration",
        },
        {
          segment: "Event Planners",
          need: "Source culturally-specific vendors for clients",
        },
      ],
    },

    developmentPhases: [
      {
        phase: "Market Research",
        duration: "3 weeks",
        status: "completed",
        description:
          "Diaspora wedding market analysis and cultural taxonomy design.",
      },
      {
        phase: "Vendor Platform",
        duration: "6 weeks",
        status: "completed",
        description: "Vendor onboarding, profiles, and portfolio management.",
      },
      {
        phase: "Discovery & Search",
        duration: "4 weeks",
        status: "in-progress",
        description:
          "Cultural search filters, location-based results, and recommendations.",
      },
      {
        phase: "Booking System",
        duration: "3 weeks",
        status: "planned",
        description: "Inquiry management, quotes, and secure booking flow.",
      },
      {
        phase: "Planning Tools",
        duration: "4 weeks",
        status: "planned",
        description: "Checklists, timelines, and cultural ceremony templates.",
      },
    ],

    metrics: {
      title: "Success Metrics",
      kpis: [
        {
          metric: "Vendor Coverage",
          target: "50+ cultures",
          description: "Cultural categories with active vendor listings",
        },
        {
          metric: "Search Success Rate",
          target: "85%+",
          description: "Searches that result in vendor contact",
        },
        {
          metric: "Booking Conversion",
          target: "25%+",
          description: "Inquiries that convert to bookings",
        },
        {
          metric: "Vendor NPS",
          target: "70+",
          description: "Vendor satisfaction with the platform",
        },
      ],
    },

    futureRoadmap: [
      {
        feature: "Vendor Verification Program",
        timeline: "Q4 2025",
        description: "Community-driven verification of cultural expertise.",
      },
      {
        feature: "Planning Dashboard",
        timeline: "Q1 2026",
        description:
          "Comprehensive wedding planning with cultural ceremony support.",
      },
      {
        feature: "Vendor Mobile App",
        timeline: "Q2 2026",
        description: "On-the-go booking management for vendors.",
      },
      {
        feature: "Expansion to Other Events",
        timeline: "Q3 2026",
        description:
          "Baby naming ceremonies, milestone birthdays, cultural festivals.",
      },
    ],

    designDecisions: [
      {
        decision: "Cultural Taxonomy over Free-Text Tags",
        reasoning:
          "A structured cultural hierarchy ensures consistent categorization and enables meaningful cultural filtering that free-text tags cannot provide.",
      },
      {
        decision: "Community Verification over Self-Claimed",
        reasoning:
          "Cultural expertise must be validated by community members, not just claimed by vendors, to maintain trust and authenticity.",
      },
      {
        decision: "Stripe Connect for Payments",
        reasoning:
          "Secure vendor payouts with proper tax handling for a marketplace with vendors across multiple countries.",
      },
    ],

    securityConsiderations: [
      {
        area: "Vendor Verification",
        implementation:
          "Identity verification and business registration checks",
      },
      {
        area: "Payment Security",
        implementation: "Stripe Connect with escrow for booking deposits",
      },
      {
        area: "Content Moderation",
        implementation: "AI + human review for portfolio content",
      },
      {
        area: "Privacy",
        implementation: "Couple information hidden until booking confirmed",
      },
    ],

    integrations: [
      {
        name: "Stripe Connect",
        purpose: "Marketplace payments and vendor payouts",
        status: "integrated",
      },
      {
        name: "Algolia",
        purpose: "Fast, relevant vendor search",
        status: "integrated",
      },
      {
        name: "Calendly",
        purpose: "Vendor availability sync",
        status: "planned",
      },
      {
        name: "Google Calendar",
        purpose: "Planning timeline integration",
        status: "planned",
      },
      {
        name: "Pinterest",
        purpose: "Inspiration board imports",
        status: "planned",
      },
    ],

    challengesAndLearning: {
      challenges: [
        "Building a vendor categorization system that accurately represents diverse cultures.",
        "Creating trust and verification systems for a marketplace platform.",
        "Designing for users from many different cultural backgrounds and expectations.",
        "Balancing cultural specificity with broad market appeal.",
      ],
      learning: [
        "Developed expertise in marketplace platform architecture and vendor management.",
        "Learned about the unique needs of diaspora communities planning cultural events.",
        "Gained skills in building inclusive, culturally-aware user experiences.",
        "Mastered two-sided marketplace dynamics and trust systems.",
      ],
    },
    outcomes:
      "Creating the go-to platform for finding culturally aligned vendors, making it easier for diaspora communities to celebrate their heritage through authentic, culturally-rich events.",
    images: ["/images/eventura-1.png", "/images/eventura-2.png"],
    link: "#",
  },
];
