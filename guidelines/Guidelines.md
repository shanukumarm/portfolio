# Portfolio Engineering & Design Guidelines

Guidelines for maintaining, updating, and scaling Shanu Kumar's portfolio website.

## 🎯 General Principles

1. **Production-Grade Data & Metrics**: All experience bullet points, project descriptions, skills, and metrics must accurately reflect Shanu's resume and active platform projects.
2. **Type Safety**: Maintain strict TypeScript interfaces across all components (`projects-section.tsx`, `experience-section.tsx`, `skills-section.tsx`). Avoid `any` types.
3. **Clean Architecture**: Keep UI components modular, responsive, and styled using Tailwind CSS and predefined design system primitives in `src/app/components/ui`.

## 🎨 Design System Guidelines

- **Typography**: Clear hierarchy using bold headers and subtle slate/gray body text.
- **Color Scheme**:
  - Primary Accent: Blue (`bg-blue-600`, `text-blue-600`)
  - Secondary Accents: Purple (`bg-purple-600`), Green (`bg-green-600`), Red/Orange for alerts & highlights.
- **Responsive Layout**: Ensure all sections adapt gracefully across mobile, tablet (`md:` grid breakpoints), and desktop (`lg:`, `xl:`) displays.
- **Interactivity**: Use subtle scale transitions (`hover:scale-105`), smooth scrolling, and accessible modal dialogs for project details.
