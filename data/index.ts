import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";

export const skills = [
  { name: "JavaScript", icon: Code, level: 95 },
  { name: "TypeScript", icon: Code, level: 90 },
  { name: "LangChain", icon: Code, level: 75 },
  { name: "RAG", icon: Code, level: 75 },
  { name: "LangGraph", icon: Code, level: 75 },
  { name: "OpenAI /Open Source LLM", icon: Code, level: 80 },
  { name: "Prompt / Context Engineering", icon: Code, level: 80 },
  { name: "React", icon: Code, level: 95 },
  { name: "Next.js", icon: Globe, level: 90 },
  { name: "Node.js", icon: Server, level: 85 },
  { name: "NestJs", icon: Server, level: 85 },

  { name: "PostgreSQL", icon: Database, level: 85 },
  { name: "MongoDB", icon: Database, level: 80 },
  { name: "AWS", icon: Server, level: 75 },
];

export const projects = [
  {
    title: "PWC Perspective",
    description:
      "PwC's primary platform for accessing curated accounting, business, and industry insights, offering real-time updates, expert analysis, standards, and thought leadership content directly on your device",
    tech: ["Next.js", "Node.js", "TypeScript", "React-Native"],
    live: "https://viewpoint.pwc.com/",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Insta SDR",
    description:
      "An intelligent system that act as an AI Sales Representative",
    tech: ["Python", "FastAPI", "OpenAI API", "Next.js", "WebSocket", "LangChain", "RAG"],
    github: "https://github.com",
    live: "https://instasdr.ai",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "RLS Sciences",
    description:
      "Next Generation medical tool that handles patients data with efficiency while providing reliability",
    tech: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://rlsciences.com/",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Housiko",
    description:
      "A Real estate platform for buyers / sellers where they can list their properties and interact",
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Lambda", "Open AI"],
    live: "https://housiko.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Smartworks",
    description:
      "India’s Largest Managed Office Platform. Fully Managed Offices for GCCs, Large Corporations and High-Growth Companies",
    tech: ["Next.js", "Node.js", "my sql", "Chart.js"],
    github: "https://github.com",
    live: "https://www.smartworksoffice.com/",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  }
];

export const experience = [
  {
    title: "Senior Full Stack Developer / Team Lead",
    company: "Talentelgia Technologies",
    period: "2023 - Present",
    location: "Mohali, India",
    description:
      "Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Gave interviews to clients and close deals in collaboration with Sales team",
      "Handled all client communication",
      "Worked and delivered multiple projects",
      "Led team of 6 developers",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "TechBit Solutions",
    period: "2022 - 2023",
    location: "Mohali, India",
    description:
      "Worked on a project of big brand - PWC Perspective. Collaborated with client in calls and meetings.",
    achievements: [
      "Worked on PWC Perspective",
      "Reduced bug reports by 50%",
    ],
  },
  {
    title: "MERN Developer",
    company: "NextPage IT Solutions",
    period: "2020-2022",
    location: "Mohali, India",
    description:
      "Specialized in React development and responsive web design. Created reusable component libraries and optimized web performance.",
    achievements: [
      "Created component library used across 10+ projects",
      "Improved page load times by 35%",
      "Mentored 3 junior developers",
    ],
  },

  {
    title: "Web Development",
    company: "Stellen Infotech",
    period: "2019-2020",
    location: "Mohali, India",
    description:
      "Assisted in development of client websites and internal tools. Gained experience in HTML, CSS, and JavaScript.",
    achievements: [
      "Contributed to 2+ client projects",
      "Learned modern web development practices",
      "Participated in code reviews and team meetings",
    ],
  },
];
