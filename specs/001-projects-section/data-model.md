# Data Model: Projects Section

**Feature**: Projects Section
**Date**: 2026-03-26
**Status**: Complete

## Overview

This document defines the data structures and interfaces for the Projects section. All data is static (no database) and stored in TypeScript files within the `data/` directory.

## Core Entities

### Project

Represents a portfolio project displayed in the Projects section.

**Interface Definition**:
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

**Field Specifications**:

| Field | Type | Required | Description | Validation Rules |
|-------|------|----------|-------------|------------------|
| `id` | number | Yes | Unique identifier for the project | Must be unique, positive integer, used for React keys and ordering |
| `title` | string | Yes | Project name displayed on card | 2-50 characters, no special formatting |
| `description` | string | Yes | Brief project description | 50-150 characters (2-3 lines when rendered), plain text |
| `image` | string | Yes | Path to project image | Must start with `/projects/`, reference file in public/projects/ directory |
| `tech` | string[] | Yes | Array of technology/tool names | 3-8 items recommended, short names (e.g., "React", "TypeScript") |
| `liveUrl` | string | No | URL to live demo/deployment | Must be valid HTTPS URL, opens in new tab |
| `githubUrl` | string | Yes | URL to GitHub repository | Must be valid HTTPS GitHub URL, opens in new tab |

**Example Data**:
```typescript
{
  id: 1,
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard.",
  image: "/projects/ecommerce-platform.png",
  tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
  liveUrl: "https://ecommerce-demo.vercel.app",
  githubUrl: "https://github.com/username/ecommerce-platform"
}
```

### ProjectCardProps

Props interface for the ProjectCard component.

**Interface Definition**:
```typescript
export interface ProjectCardProps {
  project: Project;
  index: number;
}
```

**Field Specifications**:

| Field | Type | Required | Description | Usage |
|-------|------|----------|-------------|-------|
| `project` | Project | Yes | Project data object | Contains all project information to display |
| `index` | number | Yes | Position in the projects array | Used for staggered animation delay (index * 0.1s) |

## Data Storage

### File Location
- **Path**: `data/projects.ts`
- **Export**: Named export `projects` as array of Project objects

### Data Structure
```typescript
// data/projects.ts
import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "Description here...",
    image: "/projects/project-1.png",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/user/project-1"
  },
  // ... more projects
];
```

### Data Requirements
- **Minimum**: 4 projects (for visual balance in 2-column grid)
- **Maximum**: 6 projects (featured projects only, per spec)
- **Ordering**: Projects are displayed in array order (id 1 first)

## Type Definitions Location

All TypeScript interfaces are centralized in `types/index.ts` for reusability:

```typescript
// types/index.ts
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

## Validation Rules

### At Build Time (TypeScript)
- All required fields must be present
- Field types must match interface definitions
- No `any` types allowed

### At Runtime (Component Level)
- Image paths must reference existing files in public/projects/
- URLs must be valid HTTPS URLs
- Tech array must not be empty
- Description length should be appropriate for 2-3 lines

## Data Relationships

```
projects: Project[]
    ↓
Projects.tsx (maps over array)
    ↓
ProjectCard.tsx (receives individual Project + index)
    ↓
Renders: Image, Title, Description, Tech Badges, Links
```

## Image Asset Requirements

### File Specifications
- **Location**: `public/projects/`
- **Naming**: Descriptive kebab-case (e.g., `ecommerce-platform.png`)
- **Format**: PNG or JPG
- **Dimensions**: 1200x675px (16:9 aspect ratio)
- **File Size**: <200KB (optimized)
- **Quality**: High resolution for retina displays

### Image Optimization Checklist
- [ ] Resize to 1200x675px
- [ ] Compress using TinyPNG or similar tool
- [ ] Verify file size <200KB
- [ ] Test display on retina screens
- [ ] Ensure consistent aspect ratio across all images

## Future Extensibility

### Potential Additional Fields
If requirements expand, consider adding:
- `featured: boolean` - Flag for featured projects
- `category: string` - Project category/type
- `date: string` - Project completion date
- `tags: string[]` - Additional metadata tags
- `testimonial?: string` - Client/user testimonial

### Backward Compatibility
- Optional fields (like `liveUrl`) allow gradual feature additions
- New fields should be optional to avoid breaking existing data
- Use TypeScript's `Partial<>` utility type for flexible updates

## Notes

- This is a static data model (no database, no API)
- Data is imported directly into components at build time
- Changes to data require rebuild/redeploy
- For dynamic projects, consider CMS integration in future iterations
