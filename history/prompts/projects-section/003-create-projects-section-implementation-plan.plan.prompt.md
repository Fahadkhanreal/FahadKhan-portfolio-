---
id: 003
title: Create Projects Section Implementation Plan
stage: plan
date: 2026-03-26
surface: agent
model: claude-sonnet-4-6
feature: projects-section
branch: 001-projects-section
user: user
command: /sp.plan
labels: ["plan", "projects-section", "architecture", "design"]
links:
  spec: specs/001-projects-section/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-projects-section/plan.md
  - specs/001-projects-section/research.md
  - specs/001-projects-section/data-model.md
  - specs/001-projects-section/quickstart.md
  - CLAUDE.md
tests:
  - none
---

## Prompt

# Development Plan Prompt – Fahad Portfolio

You are an expert full-stack developer working strictly according to the project's **CONSTITUTION.md** and the approved **specs/01-projects-section.md**.

**Project Goal:**
Build a high-fidelity single-page portfolio website inspired by Brittany Chiang's portfolio using Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

**Instructions:**

Follow the constitution and the approved spec **exactly**. Do not deviate from the defined rules, tech stack, design requirements, animation behavior, or code quality standards.

### Step-by-Step Development Plan

Please create a detailed, phased development plan with the following structure:

### Phase 1: Project Setup & Foundation
- Create Next.js 15 app with TypeScript and Tailwind CSS
- Configure `tsconfig.json` with strict mode
- Set up `globals.css` with dark theme and accent color `#64ffda`
- Create folder structure as defined in constitution
- Set up `types/index.ts`
- Configure Tailwind with custom accent color and font

### Phase 2: Data Layer
- Create `data/projects.ts` with at least 5 realistic projects
- Define strong `Project` interface
- Add proper image paths, descriptions, tech stacks, live and GitHub links

### Phase 3: Core Components
1. Build `components/ProjectCard.tsx` exactly as per SPEC-001
   - Use Framer Motion for hover and stagger animations
   - Keep component under 50 lines
   - Perfect hover lift, image scale, and glow effects

2. Build `components/Projects.tsx`
   - Import data and map over ProjectCard
   - Add section header and "View Archive" button
   - Implement stagger animation on scroll

### Phase 4: Remaining Sections (in order)
- Navbar (sticky with smooth scroll)
- Hero section
- About section
- Experience section
- Contact section
- Footer

### Phase 5: Polish & Optimization
- Full responsive testing
- Animation refinement
- Performance optimization (Next.js Image, etc.)
- Accessibility improvements
- Final visual review against reference

### Output Format for Each Phase
For every phase or component, provide:
1. Complete file path
2. Full ready-to-copy code
3. Explanation of how it follows the constitution and spec
4. Any important notes

**Rules to Follow Strictly:**
- Never use `any` type
- Never exceed 50 lines per component/function
- All animations via Framer Motion only
- No hard-coded data in UI components
- Use exact accent color `#64ffda`
- Commit-style thinking: Think step by step before writing code
- If anything is unclear, ask one clarifying question only

Now, start with **Phase 1: Project Setup & Foundation**.

Provide the complete code and instructions for Phase 1 first.
After I approve, we will move to the next phase.

Begin.

## Response snapshot

Created comprehensive implementation plan for Projects Section feature on branch `001-projects-section`.

**Plan Summary:**
- Technical Context: Next.js 15 App Router, TypeScript 5.x strict mode, Tailwind CSS v3.4+, Framer Motion 11+, Lucide React
- Performance Goals: <1s load, <2s images, 400ms animations, 60fps, 320px-2560px responsive
- Constitution Check: All 7 principles validated and passed (Component Independence, Data Separation, Animation Standards, Type Safety, Code Quality, Performance, Visual Fidelity)

**Phase 0 - Research (research.md):**
- Next.js 15 App Router patterns with client components for animations
- Framer Motion declarative variants with viewport triggers
- Next.js Image optimization with responsive sizing and priority loading
- TypeScript strict interfaces with optional fields
- Tailwind custom accent color configuration
- Component size management strategies (50-line limit)
- Performance and accessibility considerations

**Phase 1 - Design (data-model.md, quickstart.md):**
- Data Model: Project interface with 7 fields (id, title, description, image, tech[], liveUrl?, githubUrl)
- ProjectCardProps interface for component props
- Data storage in data/projects.ts with 5 sample projects
- Image requirements: 1200x675px, <200KB, 16:9 aspect ratio
- Quickstart Guide: Complete step-by-step implementation from project init to deployment
- Includes full code for ProjectCard.tsx (49 lines) and Projects.tsx (47 lines)

**Agent Context Updated:**
- Added TypeScript 5.x, Next.js 15, Tailwind CSS, Framer Motion to CLAUDE.md
- Technology stack now documented for future reference

**Files Created:**
- `specs/001-projects-section/plan.md` - Implementation plan with technical context and constitution check
- `specs/001-projects-section/research.md` - Technology decisions and best practices
- `specs/001-projects-section/data-model.md` - Data structures and validation rules
- `specs/001-projects-section/quickstart.md` - Complete implementation guide with code

**Ready for Next Phase:** Implementation plan is complete. Ready for `/sp.tasks` command to generate actionable task list.

## Outcome

- ✅ Impact: Complete implementation plan created with research, data model, and quickstart guide
- 🧪 Tests: No tests required (planning document)
- 📁 Files: Created plan.md, research.md, data-model.md, quickstart.md, updated CLAUDE.md
- 🔁 Next prompts: Run `/sp.tasks` to generate task list, then begin implementation following quickstart guide
- 🧠 Reflection: Successfully translated specification into actionable implementation plan with detailed technical decisions, constitution compliance verification, and complete code examples ready for implementation

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Constitution Check - PASS (all 7 principles validated)
- Prompt variant (if applicable): Standard planning workflow with Phase 0 research and Phase 1 design
- Next experiment (smallest change to try): Proceed to task generation with `/sp.tasks` command
