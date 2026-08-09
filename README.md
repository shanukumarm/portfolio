# Personal Portfolio Web Application

A modern, high-performance web application built with React, TypeScript, Vite, and Tailwind CSS designed to showcase platform engineering experience, cloud architecture projects, technical expertise, and career accomplishments.

---

## 🚀 Features & Architecture

The application is structured as a single-page reactive web application with smooth-scrolling section navigation, responsive component layouts, interactive modals, high-resolution architecture diagrams with fullscreen lightbox zoom, and static asset downloads.

### Core UI Sections & Components (`src/app/components/`)

- **Hero (`hero-section.tsx`)**: High-impact landing area featuring key stats, dynamic role badges, primary call-to-action scroll triggers, floating 3D profile badge, and resume PDF download handling.
- **About (`about-section.tsx`)**: Highlights engineering philosophy across automation, reliability at scale, and developer productivity alongside high-level background metrics.
- **Experience (`experience-section.tsx`)**: Interactive, vertical timeline component rendering career positions, promotion milestones, and detailed achievement lists in a 5-4-3 bullet pointer structure.
- **Projects (`projects-section.tsx`)**: Responsive project card grid featuring technical tags, high-resolution architecture diagrams, interactive specification modal deep-dives, and Esc-key fullscreen image lightbox viewer.
- **Technical Skills (`skills-section.tsx`)**: Categorized matrix highlighting skills across Infrastructure & IaC, Containers & Orchestration, Developer Platforms & CI/CD, Security & Governance, Observability, and AI Platforms.
- **Certifications (`certifications-section.tsx`)**: 3-top + 2-centered card grid displaying industry credentials (CKA, CKAD, Terraform, AWS) ordered by role relevance and prestige.
- **Education (`education-section.tsx`)**: Vertical timeline showcasing postgraduate (IIT Madras NIRF #1) and undergraduate degree details with specialized coursework categorization.
- **Contact (`contact-section.tsx`)**: Interactive contact section with 1-click email copy button, social links (LinkedIn, GitHub), location details, and a high-visibility CTA card.

---

## 🛠 Tech Stack & Tools

- **Framework**: React 18 (TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Iconography**: Lucide React + Custom SVG primitives (`src/app/components/ui/icons.tsx`)
- **UI Primitives**: Custom Radix-inspired Shadcn UI primitives (`Card`, `Badge`, `Button`)

---

## 📁 Repository Directory Structure

```
portfolio/
├── public/                     # Static assets served directly
├── src/
│   ├── app/
│   │   ├── App.tsx             # Main application container & page layout
│   │   ├── components/         # Section UI components
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── certifications-section.tsx
│   │   │   ├── education-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── ui/             # Reusable UI components (Button, Badge, Card, Icons)
│   │   │   │   └── icons.tsx   # Custom SVG icon components (GithubIcon, LinkedinIcon)
│   │   │   └── figma/          # Image fallback helpers
│   │   └── styles/             # Global CSS & Tailwind imports
│   ├── assets/                 # Profile images, diagrams, and PDF documents
│   │   ├── images/
│   │   └── resume/
│   ├── main.tsx                # React DOM entry point
│   └── vite-env.d.ts           # TypeScript environment declarations
├── guidelines/                 # Code & design system guidelines
│   └── Guidelines.md
├── index.html                  # HTML entry shell & meta tags
├── package.json                # Project dependencies & build scripts
├── postcss.config.mjs          # PostCSS configuration
├── vite.config.ts              # Vite bundle configuration
├── ATTRIBUTIONS.md             # Third-party component attributions
└── README.md                   # Repository technical documentation
```

---

## ⚙️ Development & Build Commands

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### Setup & Execution

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server (with HMR)
npm run dev

# 3. Compile production-ready bundle
npm run build

# 4. Preview the production build locally
npm run preview
```