# Fahad Portfolio Constitution

<!--
Sync Impact Report:
- Version: 0.0.0 → 1.0.0 (Initial constitution)
- New constitution created from user requirements
- Principles: 7 core principles established (Component Independence, Data Separation, Animation Standards, Type Safety, Code Quality, Performance, Visual Fidelity)
- Templates reviewed:
  ✅ spec-template.md - Compatible (user story prioritization aligns with phased development)
  ✅ plan-template.md - Compatible (includes Constitution Check section)
  ✅ tasks-template.md - Compatible (phase-based organization matches development sequence)
- No template updates required - generic templates are flexible enough for portfolio-specific rules
- Follow-up: None
-->

## Core Principles

### I. Component Independence
Every major section (Navbar, Hero, About, Experience, Projects, Contact, Footer) MUST be developed as a standalone component first. Components may only communicate through clearly defined props and TypeScript interfaces. No direct internal imports between unrelated components are permitted. Modules MUST remain independent until explicitly integrated into `app/page.tsx`.

**Rationale**: Enforces modularity, testability, and prevents tight coupling that leads to maintenance issues.

### II. Data Separation
All static data MUST live in the `data/` folder and be imported into components. No hard-coded content is allowed inside UI components. Strong TypeScript interfaces MUST be defined for every data structure (`Project`, `ExperienceEntry`, etc.).

**Rationale**: Separates content from presentation, enables easy updates, and ensures type safety across the application.

### III. Animation Standards
All animations MUST be implemented exclusively with Framer Motion. No other animation libraries are permitted. Smooth scrolling between sections MUST use HTML `id` attributes and navigation links.

**Rationale**: Maintains consistency, reduces bundle size, and ensures predictable animation behavior across the application.

### IV. Type Safety (NON-NEGOTIABLE)
TypeScript strict mode MUST be enabled (`"strict": true` in tsconfig.json). All props MUST be strictly typed. The use of `any` is forbidden. Every public component and function MUST have proper TypeScript interfaces/types.

**Rationale**: Prevents runtime errors, improves developer experience, and ensures code reliability.

### V. Code Quality Constraints
- All component files MUST use PascalCase naming (e.g., `ProjectCard.tsx`, `Navbar.tsx`)
- No function or component may exceed 50 lines. Extract helper functions or sub-components when necessary.
- Tailwind classes MUST follow a consistent design system (same color palette, spacing scale, and typography rules everywhere)
- Remove all unnecessary `console.log` statements before final deployment

**Rationale**: Maintains readability, enforces single responsibility principle, and ensures consistent visual design.

### VI. Performance & Optimization
- Use Next.js `<Image>` component for all project screenshots with proper optimization and lazy loading
- All external links MUST use `target="_blank"` and `rel="noopener noreferrer"`
- Project images MUST be placed in the `public/projects/` folder and kept optimized

**Rationale**: Ensures fast load times, security best practices, and optimal user experience.

### VII. Visual Fidelity
Project cards and their hover effects MUST achieve close visual fidelity to the reference (Brittany Chiang's portfolio) using Framer Motion. Aim for at least 90% visual match with the reference portfolio, especially the Projects section.

**Rationale**: Delivers the promised high-fidelity design and meets user expectations for polish and professionalism.

## Technology Stack

**Framework**: Next.js 15 (App Router only – no Pages Router)
**Language**: TypeScript with strict mode enabled
**Styling**: Tailwind CSS (v3.4+)
**Animations**: Framer Motion only
**Icons**: Lucide React
**Deployment**: Vercel only

No other UI component libraries are permitted unless explicitly approved.

## Design System

**Theme**: Dark mode only
- Primary background: `bg-zinc-950` or `bg-black`
- Primary text: `text-zinc-100`
- Secondary text: `text-zinc-400`
- Accent color: `#64ffda` (teal/green – matching Brittany Chiang)

**Typography**: Clean sans-serif font (Inter or system-ui), headings with tight tracking

**Layout**:
- Maximum content width: `max-w-5xl` or `max-w-6xl`, centered
- Section vertical padding: `py-24` or `py-32`
- Fully responsive (mobile-first approach)

**Projects Section** (highest priority):
- Responsive grid (1 column on mobile, 2 columns on desktop)
- Each card MUST contain: project image (top), title, short description, tech stack badges, live demo link, and GitHub link
- Hover behavior: card lifts upward, image scales slightly, subtle accent glow on borders and tech badges

**Navigation**: Sticky navbar with backdrop blur, smooth scroll links, and a prominent Resume button

## Security & Best Practices

- All external links MUST use `target="_blank"` and `rel="noopener noreferrer"`
- No secrets, API keys, or sensitive data may be committed to the repository (use environment variables only when needed)
- Project images MUST be placed in the `public/projects/` folder and kept optimized

## Development Workflow

**Recommended development sequence** (do not deviate without approval):
1. Project setup, layout.tsx, globals.css, and types
2. Navbar + Hero section
3. Data files creation
4. ProjectCard + Projects section
5. About, Experience, and Contact sections
6. Animation polishing and full responsive testing

**Commit message format** (strictly enforced):
- `feat(section): description` – Example: `feat(projects): implement ProjectCard with Framer Motion hover effects`
- `style: update accent color in globals.css`
- `fix(navbar): improve mobile menu keyboard accessibility`

**Spec-Driven Development Rules**:
- This constitution is the single source of truth. Every generated spec, plan, and code MUST respect these rules.
- When any requirement is ambiguous, ask one clarifying question only before proceeding.
- For major decisions (architecture, design approach, animation strategy), propose 2–3 implementation options and wait for selection.
- If any code violates this constitution, flag the violation explicitly and suggest a refactor.

## Governance

This constitution supersedes all other practices and preferences. All development work MUST comply with the principles and constraints defined herein.

**Amendment Process**:
- Amendments require explicit user approval
- Version MUST be incremented according to semantic versioning
- All dependent templates and documentation MUST be updated to reflect changes

**Compliance**:
- All PRs and code reviews MUST verify compliance with this constitution
- Any deviation MUST be explicitly justified and approved
- Complexity MUST be justified against the principle of simplicity

**Version**: 1.0.0 | **Ratified**: 2026-03-26 | **Last Amended**: 2026-03-26
