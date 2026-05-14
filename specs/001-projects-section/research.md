# Research: Projects Section

**Feature**: Projects Section
**Date**: 2026-03-26
**Status**: Complete

## Overview

This document captures research findings and best practices for implementing the Projects section with high-fidelity animations and optimal performance.

## Technology Decisions

### Decision 1: Next.js 15 App Router Structure

**Chosen**: App Router with server components by default, client components only where needed

**Rationale**:
- App Router is the recommended approach for Next.js 15
- Server components provide better performance (smaller bundle size)
- Client components needed only for Framer Motion animations
- Enables automatic code splitting and optimized loading

**Alternatives Considered**:
- Pages Router: Deprecated in Next.js 15, not recommended for new projects
- Full client-side rendering: Poor SEO and initial load performance

**Implementation Pattern**:
```typescript
// Projects.tsx - Client component (needs Framer Motion)
'use client'
import { motion } from 'framer-motion'

// Data imports work in both server and client components
import { projects } from '@/data/projects'
```

### Decision 2: Framer Motion Animation Strategy

**Chosen**: Declarative animation variants with viewport triggers

**Rationale**:
- Variants provide cleaner code and better reusability
- `whileInView` with `viewport={{ once: true }}` prevents re-animation on scroll
- Stagger animations via `transition.staggerChildren` for entrance effects
- Hardware-accelerated transforms (translateY, scale) for 60fps performance

**Best Practices**:
- Use `motion.div` as wrapper for animated elements
- Separate hover animations from entrance animations
- Use `ease: "easeOut"` for natural deceleration
- Keep animation durations between 200-400ms for responsiveness

**Animation Specifications** (from reference):
```typescript
// Card hover effect
const cardHover = {
  y: -14,
  transition: { duration: 0.4, ease: "easeOut" }
}

// Image scale on hover
const imageHover = {
  scale: 1.07,
  transition: { duration: 0.4 }
}

// Staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

### Decision 3: Next.js Image Optimization

**Chosen**: next/image with responsive sizing and priority loading

**Rationale**:
- Automatic WebP/AVIF conversion for modern browsers
- Lazy loading by default (except priority images)
- Responsive srcset generation
- Built-in blur placeholder support

**Implementation Pattern**:
```typescript
<Image
  src="/projects/project-1.png"
  alt="Project title"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={index < 2} // First 2 cards load immediately
/>
```

**Image Requirements**:
- Format: PNG or JPG, optimized (use tinypng.com or similar)
- Dimensions: 1200x675px (16:9 aspect ratio)
- File size: <200KB per image
- Location: public/projects/ directory

### Decision 4: TypeScript Interface Design

**Chosen**: Strict interfaces with optional fields for flexibility

**Rationale**:
- `liveUrl` is optional (not all projects have live demos)
- `id` as number for simple ordering and keys
- `tech` as string array for flexibility in badge rendering
- All fields explicitly typed (no `any`)

**Project Interface**:
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
```

### Decision 5: Tailwind Design System Setup

**Chosen**: Extend Tailwind config with custom accent color and consistent spacing

**Rationale**:
- Custom color (#64ffda) needs to be in Tailwind config for use in arbitrary values
- Consistent spacing scale (py-24, py-32) already in Tailwind
- Zinc color palette matches dark theme requirements

**Tailwind Configuration**:
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        accent: '#64ffda',
      },
    },
  },
}
```

**Design Tokens**:
- Background: `bg-zinc-950` (section), `bg-zinc-900` (cards)
- Borders: `border-zinc-800`
- Text: `text-zinc-100` (primary), `text-zinc-400` (secondary)
- Accent: `text-accent` or `text-[#64ffda]`

### Decision 6: Component Size Management

**Chosen**: Extract helper components and utility functions to stay under 50 lines

**Rationale**:
- Constitution mandates 50-line limit per component
- ProjectCard has multiple concerns (image, content, buttons, animations)
- Extract TechBadge as separate component if needed
- Extract animation variants to constants

**Strategies**:
- Move animation variants outside component
- Create small sub-components (TechBadge, ProjectLinks)
- Use composition over large monolithic components

## Performance Considerations

### Image Loading Strategy
- First 2 cards: `priority={true}` for immediate loading
- Remaining cards: Lazy load as user scrolls
- Use `sizes` attribute for responsive images
- Optimize images before adding to public/ folder

### Animation Performance
- Use transform properties (translateY, scale) for GPU acceleration
- Avoid animating width, height, or layout properties
- Use `will-change: transform` sparingly (Framer Motion handles this)
- Test on mobile devices for 60fps consistency

### Bundle Size
- Framer Motion: ~30KB gzipped (acceptable for animation quality)
- Lucide React: Tree-shakeable, only import needed icons
- Next.js Image: No additional bundle cost (built-in)

## Accessibility Considerations

### Keyboard Navigation
- All interactive elements (cards, buttons) must be keyboard accessible
- Focus states must be visible (Tailwind focus-visible utilities)
- Tab order must be logical (top to bottom, left to right)

### Screen Readers
- Proper alt text for all images
- Semantic HTML (section, heading hierarchy)
- ARIA labels for icon-only buttons

### Motion Preferences
- Respect `prefers-reduced-motion` media query
- Framer Motion automatically reduces animations when user prefers reduced motion
- Test with reduced motion enabled

## Implementation Checklist

- [x] Research Next.js 15 App Router patterns
- [x] Document Framer Motion animation specifications
- [x] Define image optimization strategy
- [x] Design TypeScript interfaces
- [x] Plan Tailwind configuration
- [x] Identify component size management strategies
- [x] Document performance considerations
- [x] Document accessibility requirements

## Next Steps

Proceed to Phase 1: Create data-model.md with detailed Project interface documentation and quickstart.md with setup instructions.
