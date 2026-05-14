---
description: "Task list for Projects Section implementation"
---

# Tasks: Projects Section

**Input**: Design documents from `/specs/001-projects-section/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: No tests requested in specification - implementation tasks only

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Next.js 15 App Router**: `app/`, `components/`, `data/`, `types/`, `public/`
- All paths relative to repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Next.js 15 project with TypeScript and Tailwind CSS using create-next-app
- [x] T002 Install Framer Motion dependency (npm install framer-motion)
- [x] T003 [P] Install Lucide React for icons (npm install lucide-react)
- [x] T004 Configure TypeScript strict mode in tsconfig.json
- [x] T005 Configure Tailwind with custom accent color (#64ffda) in tailwind.config.ts
- [x] T006 Set up dark theme base styles in app/globals.css
- [x] T007 [P] Create folder structure (components/, data/, types/, public/projects/)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T008 [P] Create TypeScript interfaces (Project, ProjectCardProps) in types/index.ts
- [x] T009 Create project data array with 5 sample projects in data/projects.ts
- [x] T010 [P] Add 5 optimized project images (1200x675px, <200KB) to public/projects/
- [x] T011 Update app/layout.tsx with proper metadata and font configuration

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Featured Projects (Priority: P1) 🎯 MVP

**Goal**: Display 4-6 featured projects in a responsive grid with proper layout and content

**Independent Test**: Navigate to portfolio page, scroll to projects section, verify all project cards display with images, titles, descriptions, tech badges in responsive grid (1 column mobile, 2 columns desktop)

### Implementation for User Story 1

- [x] T012 [P] [US1] Create ProjectCard component structure in components/ProjectCard.tsx (display only, no animations)
- [x] T013 [P] [US1] Create Projects section component in components/Projects.tsx (header, grid layout, no animations)
- [x] T014 [US1] Add project image with Next.js Image component in components/ProjectCard.tsx
- [x] T015 [US1] Add project title, description, and tech badges in components/ProjectCard.tsx
- [x] T016 [US1] Implement responsive grid layout (1 col mobile, 2 col desktop) in components/Projects.tsx
- [x] T017 [US1] Add section header with overline and heading in components/Projects.tsx
- [x] T018 [US1] Integrate Projects section into app/page.tsx
- [x] T019 [US1] Verify responsive layout on mobile (320px) and desktop (1920px)
- [x] T020 [US1] Verify all 5 projects display correctly with proper spacing

**Checkpoint**: At this point, User Story 1 should be fully functional - visitors can view all featured projects in a responsive grid

---

## Phase 4: User Story 2 - Interact with Project Cards (Priority: P2)

**Goal**: Add smooth Framer Motion animations for hover effects and entrance animations

**Independent Test**: Hover over project cards and verify smooth lift effect (y: -14px, 400ms), image scale (1.07x), and staggered entrance animations when scrolling to section

### Implementation for User Story 2

- [x] T021 [US2] Add "use client" directive to components/ProjectCard.tsx
- [x] T022 [US2] Add "use client" directive to components/Projects.tsx
- [x] T023 [P] [US2] Implement card hover animation (y: -14px, shadow enhancement) in components/ProjectCard.tsx
- [x] T024 [P] [US2] Implement image scale animation (scale: 1.07) on hover in components/ProjectCard.tsx
- [x] T025 [US2] Add tap effect (scale: 0.98) for mobile in components/ProjectCard.tsx
- [x] T026 [US2] Implement staggered entrance animation variants in components/Projects.tsx
- [x] T027 [US2] Add whileInView trigger with viewport once:true in components/Projects.tsx
- [x] T028 [US2] Configure stagger delay (index * 0.1s) for each card in components/Projects.tsx
- [x] T029 [US2] Verify animations run at 60fps with no jank
- [x] T030 [US2] Verify animation timing matches spec (400ms duration, easeOut)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - visitors can view projects with smooth, engaging animations

---

## Phase 5: User Story 3 - Navigate to Project Details (Priority: P3)

**Goal**: Add external links to live demos and GitHub repositories with proper security attributes

**Independent Test**: Click "Live Demo" and "GitHub" buttons, verify they open in new tabs with proper security attributes, verify conditional display of Live Demo button

### Implementation for User Story 3

- [x] T031 [P] [US3] Import ExternalLink and Github icons from lucide-react in components/ProjectCard.tsx
- [x] T032 [US3] Add GitHub link button with icon in components/ProjectCard.tsx
- [x] T033 [US3] Add conditional Live Demo button (only if liveUrl exists) in components/ProjectCard.tsx
- [x] T034 [US3] Add target="_blank" and rel="noopener noreferrer" to all external links in components/ProjectCard.tsx
- [x] T035 [US3] Add hover effects (text-accent) to link buttons in components/ProjectCard.tsx
- [x] T036 [US3] Add "View Archive" button after grid in components/Projects.tsx
- [x] T037 [US3] Style "View Archive" button with outline and hover fill effect in components/Projects.tsx
- [x] T038 [US3] Verify all external links open in new tabs
- [x] T039 [US3] Verify Live Demo button only shows when liveUrl exists
- [x] T040 [US3] Verify link security attributes (noopener noreferrer)

**Checkpoint**: All user stories should now be independently functional - complete Projects section with display, animations, and navigation

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final quality checks

- [x] T041 [P] Optimize all project images (compress to <200KB, verify 16:9 aspect ratio)
- [x] T042 [P] Add priority loading to first 2 project images in components/ProjectCard.tsx
- [x] T043 Verify component line counts (ProjectCard.tsx <50 lines, Projects.tsx <50 lines)
- [x] T044 Test responsive design on all breakpoints (320px, 768px, 1024px, 1920px, 2560px)
- [x] T045 [P] Test keyboard navigation and verify focus states on all interactive elements
- [x] T046 [P] Verify color contrast meets WCAG standards (text-zinc-100 on bg-zinc-950)
- [ ] T047 Run Lighthouse performance audit (target: >90 performance score)
- [ ] T048 Verify visual fidelity against Brittany Chiang reference (target: 92% similarity)
- [ ] T049 Test on mobile devices (iOS Safari, Android Chrome)
- [x] T050 Verify no TypeScript errors with strict mode enabled
- [x] T051 Remove any console.log statements from components
- [ ] T052 Run quickstart.md validation checklist

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Depends on User Story 1 completion (adds animations to existing components)
- **User Story 3 (P3)**: Depends on User Story 1 completion (adds links to existing components)

**Note**: US2 and US3 both modify components created in US1, so US1 must complete first. However, US2 and US3 could theoretically run in parallel if carefully coordinated (US2 adds animations, US3 adds links).

### Within Each User Story

- **US1**: Components can be created in parallel (T012, T013), then integrated sequentially
- **US2**: Animation tasks can run in parallel (T023, T024) after client directives added
- **US3**: Icon import and button tasks can run in parallel (T031, T032, T033)

### Parallel Opportunities

- **Setup Phase**: T003 (Lucide) and T007 (folders) can run parallel with other setup tasks
- **Foundational Phase**: T008 (types), T010 (images), T011 (layout) can all run in parallel
- **US1**: T012 (ProjectCard) and T013 (Projects) can be created in parallel
- **US2**: T023 (card hover) and T024 (image scale) can be implemented in parallel
- **US3**: T031 (icons), T032 (GitHub), T033 (Live Demo) can be added in parallel
- **Polish Phase**: T041 (images), T042 (priority), T045 (keyboard), T046 (contrast) can run in parallel

---

## Parallel Example: User Story 1

```bash
# Create both components in parallel:
Task T012: "Create ProjectCard component structure in components/ProjectCard.tsx"
Task T013: "Create Projects section component in components/Projects.tsx"

# After both complete, integrate sequentially:
Task T018: "Integrate Projects section into app/page.tsx"
```

## Parallel Example: User Story 2

```bash
# Add animations in parallel after client directives:
Task T023: "Implement card hover animation in components/ProjectCard.tsx"
Task T024: "Implement image scale animation in components/ProjectCard.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T007)
2. Complete Phase 2: Foundational (T008-T011) - CRITICAL
3. Complete Phase 3: User Story 1 (T012-T020)
4. **STOP and VALIDATE**: Test User Story 1 independently
   - Verify all projects display in responsive grid
   - Test on mobile and desktop
   - Verify images load correctly
5. Deploy/demo if ready (functional MVP without animations)

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP - static display)
3. Add User Story 2 → Test independently → Deploy/Demo (enhanced with animations)
4. Add User Story 3 → Test independently → Deploy/Demo (complete with navigation)
5. Add Polish → Final production-ready version

### Sequential Strategy (Recommended)

Since US2 and US3 both modify US1 components:

1. Complete Setup (Phase 1)
2. Complete Foundational (Phase 2)
3. Complete US1 (Phase 3) - Base display
4. Complete US2 (Phase 4) - Add animations
5. Complete US3 (Phase 5) - Add links
6. Complete Polish (Phase 6) - Final quality

This avoids merge conflicts and ensures each story builds on the previous.

---

## Notes

- **[P] tasks**: Different files, no dependencies, can run in parallel
- **[Story] label**: Maps task to specific user story for traceability
- **Component line limits**: ProjectCard.tsx and Projects.tsx must stay under 50 lines (constitution requirement)
- **No tests**: Tests not requested in specification, focus on implementation
- **Sequential user stories**: US2 and US3 modify US1 components, so US1 must complete first
- **Commit strategy**: Commit after each phase completion for clean history
- **Validation checkpoints**: Stop after each user story to verify independent functionality
- **Constitution compliance**: All tasks must follow strict TypeScript, data separation, and animation standards

---

## Task Summary

- **Total Tasks**: 52 tasks
- **Setup Phase**: 7 tasks
- **Foundational Phase**: 4 tasks
- **User Story 1 (P1)**: 9 tasks
- **User Story 2 (P2)**: 10 tasks
- **User Story 3 (P3)**: 10 tasks
- **Polish Phase**: 12 tasks
- **Parallel Opportunities**: 15 tasks marked [P]
- **MVP Scope**: Phases 1-3 (20 tasks) deliver functional project display
