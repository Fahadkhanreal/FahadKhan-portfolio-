export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    title: "Full-Stack Developer",
    company: "Personal Projects",
    period: "2026 - Present",
    description: "Working on modern full-stack web applications using Next.js, Node.js, PostgreSQL, and Prisma ORM with a focus on scalable architecture, clean UI, and production-ready features.",
    achievements: [
      "Built and deployed an AI Gym Management System with admin dashboard, authentication, bookings, and role-based access",
      "Developed a full-stack E-Commerce platform with product management, cart functionality, and order handling",
      "Integrated Cloudinary for image uploads and optimized media handling",
      "Designed and built REST APIs for seamless frontend-backend communication",
      "Deployed applications using Vercel (frontend) and Render (backend)",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Cloudinary"],
  },
  {
    title: "Frontend Developer",
    company: "Personal Projects",
    period: "2024 - 2025",
    description: "Focused on building responsive and interactive user interfaces while strengthening frontend development skills.",
    achievements: [
      "Developed multiple responsive landing pages and UI components",
      "Built a Gym Landing Page with WhatsApp integration for direct client communication",
      "Created reusable React components using Tailwind CSS",
      "Improved UI responsiveness and cross-device compatibility",
      "Practiced modern design principles and frontend optimization",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Learning & Practice Journey",
    company: "Self-Learning",
    period: "2022 - 2023",
    description: "Started learning web development by building small projects and understanding core development fundamentals.",
    achievements: [
      "Created beginner-level projects to strengthen JavaScript fundamentals",
      "Learned Git, GitHub, and basic frontend development workflow",
      "Practiced responsive design and UI structuring",
      "Explored modern web development tools and technologies",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Git & GitHub"],
  },
];
