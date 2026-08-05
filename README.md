# Personal Portfolio Web Application

A modern, high-performance web application built with React, TypeScript, Vite, and Tailwind CSS designed to showcase platform engineering experience, cloud architecture projects, technical expertise, and career accomplishments.

---

## 🚀 Features & Architecture

The application is structured as a single-page reactive web application with smooth-scrolling section navigation, responsive component layouts, interactive modals, and static asset downloads.

### Core UI Sections & Components (`src/app/components/`)

- **Hero (`hero-section.tsx`)**: High-impact landing area featuring key stats, dynamic role badges, primary call-to-action scroll triggers, and resume PDF download handling.
- **About (`about-section.tsx`)**: Highlights engineering philosophy across automation, reliability at scale, and developer productivity alongside high-level background metrics.
- **Experience (`experience-section.tsx`)**: Interactive, vertical timeline component rendering career positions, promotion milestones, and detailed achievement lists.
- **Projects (`projects-section.tsx`)**: Responsive project card grid featuring technical tags, GitHub links, and an interactive modal viewer for architecture deep-dives and technical highlights.
- **Technical Skills (`skills-section.tsx`)**: Categorized matrix highlighting skills across Infrastructure & IaC, Containers & Orchestration, Developer Platforms & CI/CD, Security & Governance, Observability, and AI Platforms.
- **Certifications (`certifications-section.tsx`)**: Grid displaying industry certifications (CKA, CKAD, Terraform, AWS) with verified badges.
- **Education (`education-section.tsx`)**: Vertical timeline showcasing postgraduate and undergraduate degree details.
- **Achievements (`achievements-section.tsx`)**: Visual cards highlighting awards and recognition.
- **Contact (`contact-section.tsx`)**: Interactive contact section with direct email triggers, social links (LinkedIn, GitHub), and location details.

---

## 🛠 Tech Stack & Tools

- **Framework**: React 18 (TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Iconography**: Lucide React
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
│   │   │   ├── achievements-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── ui/             # Reusable atomic UI components (Button, Badge, Card)
│   │   │   └── figma/          # Image fallback helpers
│   │   └── styles/             # Global CSS & Tailwind imports
│   ├── assets/                 # Profile images and PDF documents
│   │   ├── images/
│   │   └── resume/
│   ├── main.tsx                # React DOM entry point
│   └── vite-env.d.ts           # TypeScript environment declarations
├── guidelines/                 # Code & design system guidelines
├── index.html                  # HTML entry shell & meta tags
├── package.json                # Project dependencies & build scripts
├── postcss.config.mjs          # PostCSS configuration
├── vite.config.ts              # Vite bundle configuration
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