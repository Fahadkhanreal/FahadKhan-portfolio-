---
id: 001
title: Create Fahad Portfolio Constitution
stage: constitution
date: 2026-03-26
surface: agent
model: claude-sonnet-4-6
feature: none
branch: master
user: user
command: /sp.constitution
labels: ["constitution", "setup", "governance", "portfolio"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

# Project Constitution – Fahad Portfolio

## Project Overview
Build a modern, minimal, high-fidelity single-page portfolio website strictly inspired by Brittany Chiang's portfolio[](https://brittanychiang.com).
The final product must feel clean, dark, smooth, and pixel-perfect with special focus on hover animations and project cards.

## Architecture Principles
- Every major section (Navbar, Hero, About, Experience, Projects, Contact, Footer) must be developed as a **standalone component** first.
- Components may only communicate through clearly defined props and TypeScript interfaces. No direct internal imports between unrelated components.
- All static data must live in the `data/` folder and be imported into components. No hard-coded content inside UI components.
- All animations must be implemented exclusively with Framer Motion.
- Smooth scrolling between sections must use HTML `id` attributes and navigation links.
- Modules must remain independent until explicitly integrated into `app/page.tsx`.

## Technology Constraints
- **Framework**: Next.js 15 (App Router only – no Pages Router)
- **Language**: TypeScript with strict mode enabled (`"strict": true` in tsconfig.json)
- **Styling**: Tailwind CSS (v3.4+)
- **Animations**: Framer Motion only
- **Icons**: Lucide React
- No other UI component libraries unless explicitly approved
- Deployment target: Vercel only

## Code Quality Standards
- All component files must use **PascalCase** naming (e.g., `ProjectCard.tsx`, `Navbar.tsx`)
- No function or component may exceed **50 lines**. Extract helper functions or sub-components when necessary.
- Every public component and function must have proper TypeScript interfaces/types.
- All props must be strictly typed. The use of `any` is forbidden.
- Tailwind classes must follow a consistent design system (same color palette, spacing scale, and typography rules everywhere).
- Project cards and their hover effects must achieve close visual fidelity to the reference using Framer Motion.
- Aim for at least **90% visual match** with the reference portfolio, especially the Projects section.

## Design & UI/UX Requirements
- **Theme**: Dark mode only
  - Primary background: `bg-zinc-950` or `bg-black`
  - Primary text: `text-zinc-100`
  - Secondary text: `text-zinc-400`
  - Accent color: `#64ffda` (teal/green – matching Brittany Chiang)
- **Typography**: Clean sans-serif font (Inter or system-ui), headings with tight tracking
- **Layout**:
  - Maximum content width: `max-w-5xl` or `max-w-6xl`, centered
  - Section vertical padding: `py-24` or `py-32`
  - Fully responsive (mobile-first approach)
- **Projects Section** (highest priority):
  - Responsive grid (1 column on mobile, 2 columns on desktop)
  - Each card must contain: project image (top), title, short description, tech stack badges, live demo link, and GitHub link
  - Hover behavior: card lifts upward, image scales slightly, subtle accent glow on borders and tech badges
- **Navigation**: Sticky navbar with backdrop blur, smooth scroll links, and a prominent Resume button
- **Performance**: Use Next.js `<Image>` component for all project screenshots with proper optimization and lazy loading

## Data Management
- All static data must be stored in the `data/` folder as TypeScript files (`projects.ts`, `experience.ts`, `personalInfo.ts`, `navLinks.ts`)
- Define strong TypeScript interfaces for every data structure (`Project`, `ExperienceEntry`, etc.)
- Components must only consume data from these files – never hard-code values

## Best Practices & Security
- All external links must use `target="_blank"` and `rel="noopener noreferrer"`
- Project images must be placed in the `public/projects/` folder and kept optimized
- No secrets, API keys, or sensitive data may be committed to the repository (use environment variables only when needed)
- Remove all unnecessary `console.log` statements before final deployment

## Workflow Rules (Strict Spec-Driven Development)
- This constitution is the single source of truth. Every generated spec, plan, and code must respect these rules.
- When any requirement is ambiguous, ask **one clarifying question** only before proceeding.
- For major decisions (architecture, design approach, animation strategy), propose **2–3 implementation options** and wait for selection.
- Use the following commit message format strictly:
  - `feat(section): description`
    Example: `feat(projects): implement ProjectCard with Framer Motion hover effects`
  - `style: update accent color in globals.css`
  - `fix(navbar): improve mobile menu keyboard accessibility`
- If any code violates this constitution, flag the violation explicitly and suggest a refactor.
- Recommended development sequence (do not deviate without approval):
  1. Project setup, layout.tsx, globals.css, and types
  2. Navbar + Hero section
  3. Data files creation
  4. ProjectCard + Projects section
  5. About, Experience, and Contact sections
  6. Animation polishing and full responsive testing

---

**This CONSTITUTION.md is now active.**
All future development instructions, specs, and code generation must strictly follow the rules defined above.

You may now start spec-driven development.
Tell me the first spec you want me to create (for example: "Create spec for Navbar component" or "Generate full setup spec including layout and globals.css").

## Response snapshot

Constitution created successfully at `.specify/memory/constitution.md` with version 1.0.0. The constitution establishes 7 core principles for the Fahad Portfolio project:

1. Component Independence - Standalone components with clear interfaces
2. Data Separation - All static data in `data/` folder with TypeScript interfaces
3. Animation Standards - Framer Motion exclusively
4. Type Safety - Strict TypeScript, no `any` types
5. Code Quality Constraints - PascalCase naming, 50-line limit, consistent design system
6. Performance & Optimization - Next.js Image optimization, security best practices
7. Visual Fidelity - 90% match with Brittany Chiang's portfolio reference

Technology stack: Next.js 15 (App Router), TypeScript (strict mode), Tailwind CSS v3.4+, Framer Motion, Lucide React, deployed on Vercel.

Design system defined: Dark mode only with zinc-950/black backgrounds, zinc-100/400 text, #64ffda accent color.

Development sequence established: Setup → Navbar/Hero → Data files → ProjectCard/Projects → About/Experience/Contact → Animation polish.

Template compatibility verified: spec-template.md, plan-template.md, and tasks-template.md are all compatible with the new constitution.

## Outcome

- ✅ Impact: Constitution v1.0.0 created and activated as single source of truth for all development
- 🧪 Tests: No tests required (governance document)
- 📁 Files: Created .specify/memory/constitution.md
- 🔁 Next prompts: User should specify first feature spec to create (e.g., "Create spec for project setup" or "Create spec for Navbar component")
- 🧠 Reflection: Constitution successfully maps user requirements to enforceable principles with clear technology constraints and development workflow

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A (constitution creation)
- Prompt variant (if applicable): Standard constitution creation workflow
- Next experiment (smallest change to try): Begin spec-driven development with first feature specification
