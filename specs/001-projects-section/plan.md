# Implementation Plan: Projects Section

**Branch**: `001-projects-section` | **Date**: 2026-03-26 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-projects-section/spec.md`

## Summary

Build a high-fidelity Projects section for a portfolio website that displays 4-6 featured projects in a responsive grid with smooth Framer Motion animations. The section must achieve 92% visual similarity to Brittany Chiang's portfolio reference, with card hover effects (lift, image scale, accent glow) and staggered entrance animations. All components must be standalone, data-driven from `data/projects.ts`, and comply with strict TypeScript and 50-line component limits.

## Technical Context

**Language/Version**: TypeScript 5.x (with Next.js 15)
**Primary Dependencies**: Next.js 15 (App Router), React 18+, Tailwind CSS v3.4+, Framer Motion 11+, Lucide React
**Storage**: N/A (static portfolio site, no database)
**Testing**: Jest + React Testing Library (Next.js default)
**Target Platform**: Web (modern browsers: Chrome, Firefox, Safari, Edge), deployed on Vercel
**Project Type**: Web application (frontend only, single-page portfolio)
**Performance Goals**: <1s initial load, <2s image load, 400ms animation duration, 60fps animations, <200ms interaction response
**Constraints**: 50-line component limit, TypeScript strict mode, no `any` types, Framer Motion only for animations, 92% visual fidelity to reference
**Scale/Scope**: Single-page portfolio with 6 sections, 4-6 featured projects, mobile-first responsive design (320px-2560px)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: Component Independence ✅
- **Requirement**: Projects section and ProjectCard must be standalone components
- **Compliance**: Projects.tsx and ProjectCard.tsx will be independent, communicating only via typed props
- **Verification**: No direct imports between unrelated components, integration only in app/page.tsx

### Principle II: Data Separation ✅
- **Requirement**: All project data in `data/` folder with TypeScript interfaces
- **Compliance**: data/projects.ts will contain all project content, imported into components
- **Verification**: No hard-coded strings in UI components, all data externalized

### Principle III: Animation Standards ✅
- **Requirement**: Framer Motion exclusively for all animations
- **Compliance**: All hover, entrance, and interaction animations use Framer Motion primitives
- **Verification**: No CSS animations, transitions, or other animation libraries

### Principle IV: Type Safety (NON-NEGOTIABLE) ✅
- **Requirement**: Strict TypeScript, no `any` types, all props typed
- **Compliance**: tsconfig.json strict mode enabled, Project and ProjectCardProps interfaces defined
- **Verification**: Zero TypeScript errors, all props have explicit interfaces

### Principle V: Code Quality Constraints ✅
- **Requirement**: PascalCase naming, 50-line limit, consistent Tailwind design system
- **Compliance**: ProjectCard.tsx and Projects.tsx follow naming conventions, extract helpers if needed
- **Verification**: Line count check, design tokens consistent (zinc palette, #64ffda accent)

### Principle VI: Performance & Optimization ✅
- **Requirement**: Next.js Image component, optimized assets, secure external links
- **Compliance**: All project images use next/image with proper sizing, links have security attributes
- **Verification**: Lighthouse performance score >90, images in public/projects/ optimized

### Principle VII: Visual Fidelity ✅
- **Requirement**: 92% visual match to Brittany Chiang's portfolio
- **Compliance**: Exact spacing, colors, typography, and animation timing from reference
- **Verification**: Side-by-side visual comparison, animation timing matches (400ms, y: -14px)

**Gate Status**: ✅ PASSED - All principles satisfied, no violations to justify

## Project Structure

### Documentation (this feature)

```text
specs/001-projects-section/
├── plan.md              # This file
├── research.md          # Phase 0 output (best practices)
├── data-model.md        # Phase 1 output (Project interface)
├── quickstart.md        # Phase 1 output (setup guide)
└── checklists/
    └── requirements.md  # Spec validation checklist
```

### Source Code (repository root)

```text
app/
├── layout.tsx           # Root layout with fonts and metadata
├── page.tsx             # Main page (integrates Projects section)
└── globals.css          # Tailwind base styles + custom design tokens

components/
├── Projects.tsx         # Projects section container (header + grid + archive button)
└── ProjectCard.tsx      # Individual project card with animations

data/
└── projects.ts          # Project data array with TypeScript interface

types/
└── index.ts             # Shared TypeScript interfaces (Project, ProjectCardProps)

public/
└── projects/            # Optimized project images (16:9 aspect ratio)
    ├── project-1.png
    ├── project-2.png
    └── ...

tailwind.config.ts       # Custom accent color (#64ffda) and design tokens
tsconfig.json            # Strict mode enabled
package.json             # Dependencies (Next.js 15, Framer Motion, Lucide React)
```

**Structure Decision**: Next.js 15 App Router structure selected. This is a frontend-only web application with no backend API. Components are organized in a flat `/components` directory for simplicity (only 2 components for this feature). Data is separated into `/data` folder per constitution. Types are centralized in `/types` for reusability across components.

## Complexity Tracking

> No violations detected. All constitution principles are satisfied without exceptions.
