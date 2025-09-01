# Overview

This is a professional Spanish barbershop website for "The Fenix Barber Shop" located in Madrid. The application is built as a modern, responsive single-page website showcasing the barbershop's team, services, and contact information. It features a dark theme with golden accents, real team photos, service galleries with pricing, and integrated booking functionality through Google Forms.

The website includes sections for team member profiles (4 barbers with contact details and specialties), comprehensive service listings with pricing, Google Maps integration for location, and social media links. All content is in Spanish and optimized for SEO with proper meta tags and Open Graph integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

## Design System
- **Component Library**: shadcn/ui with Radix UI primitives for accessibility
- **Theme**: Dark theme with CSS variables for consistent color scheme (blacks/grays with golden accents)
- **Typography**: Inter font family for clean, readable text
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Icons**: Lucide React icons and Font Awesome integration

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **API Design**: RESTful API structure with /api prefix for all endpoints
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for database interactions
- **Schema**: Centralized schema definitions in shared directory for type consistency
- **Migrations**: Drizzle Kit for database schema migrations
- **Validation**: Zod schemas for runtime type validation and form validation

## Asset Management
- **Static Assets**: Vite asset handling with alias configuration for easy imports
- **Images**: Real barbershop photos stored in attached_assets directory
- **Optimization**: Vite's built-in asset optimization and bundling

## Development Experience
- **Build Tool**: Vite for fast development and optimized production builds
- **Type Checking**: TypeScript with strict configuration across client and server
- **Hot Reload**: Vite HMR for instant development feedback
- **Path Mapping**: Configured aliases for clean imports (@/, @shared/, @assets/)

## SEO and Accessibility
- **Meta Tags**: Comprehensive Spanish SEO meta tags and Open Graph tags
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Social Sharing**: Open Graph and Twitter Card meta tags for social media
- **Language**: Proper HTML lang attribute and Spanish content optimization

# External Dependencies

## Database Services
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Database URL**: Environment-based connection via DATABASE_URL

## Third-Party Integrations
- **Google Forms**: Online booking system integration (https://forms.gle/FENPCuGqra2w64VJ9)
- **Google Maps**: Embedded map for location display and directions
- **Instagram**: Social media links for each barber's Instagram profiles
- **Google Fonts**: Inter font family for typography

## Development Dependencies
- **Replit Integration**: Development banner and cartographer plugin for Replit environment
- **ESBuild**: Server-side bundling for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## UI Component Libraries
- **Radix UI**: Accessible component primitives for dialogs, dropdowns, navigation
- **Embla Carousel**: Carousel functionality for image galleries
- **Vaul**: Drawer component for mobile interfaces
- **CMDK**: Command palette functionality

## Utility Libraries
- **Class Variance Authority**: Type-safe component variants
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **date-fns**: Date manipulation and formatting
- **Lucide React**: Modern icon library