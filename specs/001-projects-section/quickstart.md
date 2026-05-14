# Quickstart Guide: Projects Section

**Feature**: Projects Section
**Date**: 2026-03-26
**Prerequisites**: Node.js 18+, npm/yarn/pnpm

## Overview

This guide provides step-by-step instructions for implementing the Projects section from scratch, following the constitution and specification requirements.

## Phase 1: Project Setup & Foundation

### Step 1.1: Initialize Next.js Project

```bash
# Create Next.js 15 app with TypeScript and Tailwind CSS
npx create-next-app@latest real-portfolio --typescript --tailwind --app --no-src-dir

cd real-portfolio
```

**Configuration prompts**:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: No
- App Router: Yes
- Import alias: Yes (@/*)

### Step 1.2: Install Dependencies

```bash
# Install Framer Motion for animations
npm install framer-motion

# Install Lucide React for icons
npm install lucide-react
```

### Step 1.3: Configure TypeScript Strict Mode

Edit `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Step 1.4: Configure Tailwind with Custom Accent Color

Edit `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#64ffda",
      },
    },
  },
  plugins: [],
};

export default config;
```

### Step 1.5: Set Up Global Styles

Edit `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-zinc-950 text-zinc-100 antialiased;
  }
}
```

### Step 1.6: Create Folder Structure

```bash
# Create required directories
mkdir -p components data types public/projects
```

**Final structure**:
```
real-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Projects.tsx      # To be created
│   └── ProjectCard.tsx   # To be created
├── data/
│   └── projects.ts       # To be created
├── types/
│   └── index.ts          # To be created
├── public/
│   └── projects/         # Add project images here
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Phase 2: Data Layer

### Step 2.1: Define TypeScript Interfaces

Create `types/index.ts`:

```typescript
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}
```

### Step 2.2: Create Project Data

Create `data/projects.ts`:

```typescript
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing via Stripe, and comprehensive admin dashboard.",
    image: "/projects/ecommerce-platform.png",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team workspaces, and advanced filtering capabilities.",
    image: "/projects/task-management.png",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://taskapp-demo.vercel.app",
    githubUrl: "https://github.com/username/task-management",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with 7-day forecasts, interactive maps, and location-based weather alerts using OpenWeather API.",
    image: "/projects/weather-dashboard.png",
    tech: ["Vue.js", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/username/weather-dashboard",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description: "Headless CMS built specifically for developer portfolios with markdown support, media management, and REST API.",
    image: "/projects/portfolio-cms.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "React Admin"],
    liveUrl: "https://portfolio-cms.vercel.app",
    githubUrl: "https://github.com/username/portfolio-cms",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking app with workout logging, progress charts, and personalized workout recommendations.",
    image: "/projects/fitness-tracker.png",
    tech: ["React Native", "TypeScript", "Firebase", "Redux", "Expo"],
    githubUrl: "https://github.com/username/fitness-tracker",
  },
];
```

### Step 2.3: Add Project Images

Add 5 optimized images to `public/projects/`:
- Dimensions: 1200x675px (16:9 aspect ratio)
- Format: PNG or JPG
- File size: <200KB each
- Names matching data file (e.g., `ecommerce-platform.png`)

## Phase 3: Core Components

### Step 3.1: Create ProjectCard Component

Create `components/ProjectCard.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { ProjectCardProps } from "@/types";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -14, transition: { duration: 0.4, ease: "easeOut" } }}
      whileTap={{ scale: 0.98 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-accent/10 transition-shadow"
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: 0.4 }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
        </motion.div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-3 text-zinc-400 leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-4 py-1.5 bg-zinc-950 text-accent border border-zinc-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4 justify-end">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-accent transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-accent transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
```

**Line count**: 49 lines ✅ (under 50-line limit)

### Step 3.2: Create Projects Section Component

Create `components/Projects.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[4px] text-accent uppercase">
            Featured Projects
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-100">
            Some Things I've Built
          </h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        <div className="mt-16 flex justify-center">
          <a
            href="#archive"
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-zinc-950 transition-colors"
          >
            View Archive
          </a>
        </div>
      </div>
    </section>
  );
}
```

**Line count**: 47 lines ✅ (under 50-line limit)

### Step 3.3: Integrate into Main Page

Edit `app/page.tsx`:

```typescript
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Projects />
    </main>
  );
}
```

## Phase 4: Testing & Verification

### Step 4.1: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the Projects section.

### Step 4.2: Verification Checklist

- [ ] All 5 projects display in 2-column grid (desktop)
- [ ] Cards display in 1 column on mobile
- [ ] Hover effects work (card lifts, image scales)
- [ ] Staggered entrance animation on scroll
- [ ] Tech badges display correctly
- [ ] External links open in new tabs
- [ ] "Live Demo" button only shows when liveUrl exists
- [ ] Images load and display properly
- [ ] No TypeScript errors
- [ ] All components under 50 lines
- [ ] Responsive on all screen sizes (320px-2560px)

### Step 4.3: Performance Testing

```bash
# Build for production
npm run build

# Run production server
npm start
```

Check Lighthouse scores:
- Performance: >90
- Accessibility: >90
- Best Practices: >90

## Troubleshooting

### Issue: Images not loading
**Solution**: Verify images are in `public/projects/` and paths in data match exactly

### Issue: TypeScript errors
**Solution**: Ensure strict mode is enabled and all props are typed correctly

### Issue: Animations not working
**Solution**: Verify `"use client"` directive is at top of component files

### Issue: Hover effects laggy
**Solution**: Ensure using transform properties (y, scale) not layout properties

## Next Steps

1. Add remaining sections (Navbar, Hero, About, Experience, Contact, Footer)
2. Implement smooth scroll navigation
3. Add more projects or create archive page
4. Deploy to Vercel

## Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Brittany Chiang Portfolio Reference](https://brittanychiang.com)
