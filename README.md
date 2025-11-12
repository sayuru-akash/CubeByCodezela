
  # CUBE. by CodeZela

![CUBE. Landing Page](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8)

A modern, responsive landing page showcasing **CUBE.** - a revolutionary human-sized personal sanctuary that redefines your space and transforms your reality. This project features cutting-edge web technologies, smooth animations, and a sleek dark-themed UI design.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Components](#components)
- [Best Practices](#best-practices)
- [Design System](#design-system)
- [Contributing](#contributing)
- [License & Attribution](#license--attribution)

## 🎯 Overview

This is a high-quality, production-ready landing page built from a Figma design. The original design is available at:
- **Figma Design**: [CUBE. by CodeZela](https://www.figma.com/design/n9MODHIW7UYebndYMLzVlg/CUBE.-by-CodeZela)

The project showcases a fictional product - a 2m x 2m x 2m human-sized cube featuring:
- Smart AI-powered climate control
- Advanced soundproofing and acoustic isolation
- 360° spatial audio system
- RGB ambient lighting
- Mobile app integration

## ✨ Features

### Landing Page Features
- **Hero Section** - Eye-catching animated 3D rotating cube with compelling call-to-action
- **Features Section** - Six key product features with icons and descriptions
- **Specifications** - Detailed technical specifications in an organized grid layout
- **Gallery** - Product showcase with smooth hover effects
- **Testimonials** - Customer reviews with star ratings
- **Pricing** - Three-tier pricing model (Essential, Premium, Enterprise)
- **CTA Section** - Email collection form for waitlist
- **Footer** - Company information, navigation, and social links

### Technical Features
- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **Smooth Animations** - Powered by Framer Motion for professional transitions
- **Dark Theme** - Modern dark UI with red accent colors
- **Scroll Animations** - Elements animate into view as users scroll
- **Sticky Navigation** - Fixed header with blur effect on scroll
- **Mobile Menu** - Hamburger menu for mobile navigation
- **Type Safety** - Full TypeScript implementation
- **Component Library** - Built with shadcn/ui components
- **Fast Performance** - Optimized with Vite for lightning-fast build times

## 🛠 Technology Stack

### Core Technologies
- **[React](https://react.dev/)** (v18.3.1) - UI library for building component-based interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** (v6.3.5) - Next-generation frontend build tool

### Styling & UI
- **[TailwindCSS](https://tailwindcss.com/)** (v4) - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library built with Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[class-variance-authority](https://cva.style/)** - Component variant management
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes without conflicts
- **[clsx](https://github.com/lukeed/clsx)** - Utility for constructing className strings

### Animation & Effects
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library

### Additional Features
- **[cmdk](https://cmdk.paco.me/)** - Command menu component
- **[embla-carousel-react](https://www.embla-carousel.com/)** - Carousel component
- **[react-day-picker](https://react-day-picker.js.org/)** - Date picker component
- **[recharts](https://recharts.org/)** - Charting library
- **[sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[vaul](https://vaul.emilkowal.ski/)** - Drawer component
- **[input-otp](https://input-otp.rodz.dev/)** - One-time password input
- **[react-hook-form](https://react-hook-form.com/)** - Form validation library
- **[react-resizable-panels](https://github.com/bvaughn/react-resizable-panels)** - Resizable panel layouts
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v20.x or higher recommended)
- **npm** (v9.x or higher) or **yarn** or **pnpm**
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sayuru-akash/CubeByCodezela.git
   cd CubeByCodezela
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn install
   ```
   
   Or using pnpm:
   ```bash
   pnpm install
   ```

## 💻 Development

### Start the Development Server

Run the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: Your local IP address will be shown in the terminal

The dev server features:
- ⚡ Lightning-fast Hot Module Replacement (HMR)
- 🔄 Automatic browser refresh on file changes
- 🚀 Optimized development experience with Vite

### Development Workflow

1. The server automatically opens your default browser
2. Make changes to files in the `src/` directory
3. See changes reflected instantly in the browser
4. Check the browser console and terminal for any errors

## 🏗 Building for Production

### Create Production Build

```bash
npm run build
```

This command:
1. Compiles TypeScript to JavaScript
2. Bundles all assets using Vite
3. Minifies and optimizes code
4. Outputs to the `build/` directory

### Build Output

- **Output Directory**: `build/`
- **Target**: ESNext for modern browsers
- **Optimizations**: Code splitting, tree shaking, minification

### Preview Production Build

After building, you can preview the production build locally:

```bash
npx vite preview
```

### Deployment

The `build/` directory contains static files ready to deploy to:
- **Vercel** - Recommended for Next.js-style deployments
- **Netlify** - Great for static site hosting
- **GitHub Pages** - Free hosting for public repositories
- **AWS S3 + CloudFront** - Scalable cloud hosting
- **Any static hosting service**

## 📁 Project Structure

```
CubeByCodezela/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (40+ components)
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (more UI components)
│   │   ├── figma/           # Figma-specific components
│   │   │   └── ImageWithFallback.tsx
│   │   ├── Hero.tsx         # Hero section with animated cube
│   │   ├── Navigation.tsx   # Sticky navigation bar
│   │   ├── Features.tsx     # Product features grid
│   │   ├── Specifications.tsx # Technical specs section
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   ├── Pricing.tsx      # Pricing tiers
│   │   ├── CTA.tsx          # Call-to-action with email form
│   │   └── Footer.tsx       # Footer with links
│   ├── styles/
│   │   └── globals.css      # Global styles and theme variables
│   ├── guidelines/
│   │   └── Guidelines.md    # Design system guidelines
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # TailwindCSS imports
│   └── Attributions.md      # Third-party licenses
├── index.html               # HTML entry point
├── package.json             # Project dependencies
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration (if present)
└── README.md                # This file
```

## 🧩 Components

### Main Sections

#### `Hero.tsx`
The landing page hero section featuring:
- Animated 3D rotating cube using CSS transforms
- Gradient backgrounds with radial effects
- Call-to-action buttons
- Scroll indicator with bounce animation

#### `Navigation.tsx`
Sticky navigation component with:
- Scroll-triggered background blur
- Mobile hamburger menu
- Smooth scroll to sections
- Logo and branding

#### `Features.tsx`
Product features showcase:
- 6 feature cards in responsive grid
- Icon-based visual elements from Lucide
- Hover scale animations
- Scroll-triggered entrance animations

#### `Specifications.tsx`
Technical specifications display:
- 12 detailed product specs
- Grid layout with hover effects
- Key statistics section
- Background grid pattern

#### `Gallery.tsx`
Image gallery component:
- 3 showcase images from Unsplash
- Hover zoom effects
- Overlay titles on hover
- Responsive aspect-ratio containers
- Fallback image handling

#### `Testimonials.tsx`
Customer testimonials section:
- 3 testimonial cards
- 5-star rating display
- Customer name and role
- Border hover effects

#### `Pricing.tsx`
Pricing tiers component:
- 3 pricing plans (Essential, Premium, Enterprise)
- Feature lists with checkmarks
- "Most Popular" badge for Premium tier
- Scale effect on featured plan
- CTA buttons

#### `CTA.tsx`
Call-to-action section:
- Email collection form
- Form validation
- Gradient background
- Early adopter discount badge

#### `Footer.tsx`
Site footer with:
- Company branding
- Multi-column navigation links
- Social media icons
- Copyright and legal links

### UI Components (`src/components/ui/`)

The project includes 40+ pre-built components from shadcn/ui:

**Feedback Components:**
- Alert, Alert Dialog, Toast (Sonner)

**Form Components:**
- Button, Input, Checkbox, Radio Group, Select, Slider, Switch, Textarea
- Calendar, Date Picker, Input OTP
- Form, Label

**Layout Components:**
- Card, Separator, Aspect Ratio, Resizable Panels
- Accordion, Collapsible, Tabs
- Sheet, Dialog

**Navigation Components:**
- Navigation Menu, Menubar, Breadcrumb
- Command, Context Menu, Dropdown Menu

**Display Components:**
- Avatar, Badge, Progress
- Carousel, Chart, Table
- Hover Card, Popover, Tooltip

## 🎨 Design System

### Color Palette

**Primary Colors:**
- Red: `#dc2626` (red-600) - Primary brand color
- Black: `#000000` - Main background
- White: `#ffffff` - Text color

**Neutral Shades:**
- Zinc-950: `oklch(.141 .005 285.823)` - Dark background
- Zinc-900: `oklch(.21 .006 285.885)` - Section backgrounds
- Zinc-800: `oklch(.274 .006 286.033)` - Card backgrounds
- Zinc-700: `oklch(.37 .013 285.805)` - Borders (hover)
- Zinc-500: `oklch(.552 .016 285.938)` - Muted text
- Zinc-400: `oklch(.705 .015 286.067)` - Secondary text
- Zinc-300: `oklch(.871 .006 286.286)` - Light text

### Typography

**Font Family:**
- Sans: `ui-sans-serif, system-ui, sans-serif` - System font stack

**Font Sizes:**
- 8xl: `6rem` - Hero headings
- 7xl: `4.5rem` - Large headings
- 6xl: `3.75rem` - Section headings
- 4xl: `2.25rem` - Sub-headings
- 2xl: `1.5rem` - Card titles
- xl: `1.25rem` - Body large
- base: `1rem` - Body text
- sm: `0.875rem` - Small text

**Font Weights:**
- Medium: `500` - Headings, labels
- Normal: `400` - Body text

### Spacing

Uses a 4px (0.25rem) base unit:
- Spacing scale: `1, 2, 3, 4, 6, 8, 12, 16, 20, 32, 64, 96...`
- Container max-widths: `xl, 2xl, 3xl, 4xl, 5xl, 7xl`

### Animation

**Transitions:**
- Duration: `0.15s` (default), `0.3s`, `0.5s`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Motion Variants:**
- Fade in: `opacity: 0 → 1`
- Slide up: `y: 20-30px → 0`
- Scale: `scale: 0.9-1.05`
- Rotate: Continuous 360° rotation

## 📝 Best Practices

### Code Organization

1. **Component Structure**
   - One component per file
   - Use named exports
   - Keep components focused and single-purpose

2. **TypeScript Usage**
   - Use interfaces for props
   - Avoid `any` type
   - Leverage type inference

3. **Styling Conventions**
   - Use Tailwind utility classes
   - Avoid inline styles
   - Use CSS custom properties for theming
   - Follow mobile-first responsive design

4. **State Management**
   - Use React hooks (useState, useEffect)
   - Keep state as local as possible
   - Lift state up when needed

### Performance Optimization

1. **Code Splitting**
   - Vite automatically handles code splitting
   - Dynamic imports for heavy components

2. **Image Optimization**
   - Use WebP format when possible
   - Implement lazy loading
   - Use appropriate image sizes

3. **Bundle Size**
   - Tree shaking enabled by default
   - Remove unused dependencies
   - Monitor bundle size with build analysis

### Accessibility

1. **Semantic HTML**
   - Use proper heading hierarchy (h1-h6)
   - Use semantic elements (nav, section, footer)

2. **ARIA Attributes**
   - Radix UI components include ARIA by default
   - Add aria-labels for icon buttons

3. **Keyboard Navigation**
   - All interactive elements are keyboard accessible
   - Focus states are visible

4. **Color Contrast**
   - Ensure WCAG AA compliance
   - Test with color contrast tools

### Security

1. **Form Validation**
   - Client-side validation with react-hook-form
   - Sanitize user inputs
   - Use HTTPS in production

2. **Dependencies**
   - Regular security audits with `npm audit`
   - Keep dependencies up to date

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the Repository**
   ```bash
   git fork https://github.com/sayuru-akash/CubeByCodezela.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
   
   Use conventional commit messages:
   - `Add:` New features
   - `Fix:` Bug fixes
   - `Update:` Changes to existing features
   - `Refactor:` Code refactoring
   - `Docs:` Documentation changes
   - `Style:` Code style changes

4. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Provide a clear description of changes
   - Link any related issues
   - Ensure all checks pass

### Code Style

- Follow existing code patterns
- Run linters before committing
- Write clear, descriptive comments
- Keep functions small and focused

## 📄 License & Attribution

### Components

This project includes components from [shadcn/ui](https://ui.shadcn.com/) used under the [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

### Images

This project includes photos from [Unsplash](https://unsplash.com) used under the [Unsplash License](https://unsplash.com/license).

### Project License

This project is available for personal and commercial use. Please provide attribution when using this code as a template.

---

**Built with ❤️ by CodeZela**

For questions, issues, or contributions, please visit the [GitHub repository](https://github.com/sayuru-akash/CubeByCodezela).
  