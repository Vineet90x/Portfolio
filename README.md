# Dev Portfolio

A dark, high-performance, brutalist-meets-modern portfolio template for full-stack developers. Built with a focus on speed, aesthetics, and user experience to help you land your next gig.

## Minimum Viable Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** `next-themes` (Dark/Light mode support with functional CSS variables)
- **Typography:** Syne (Headings) & JetBrains Mono (Body/Code)

## Features

- **Blazing Fast:** Built on Next.js App Router for optimal performance and SEO.
- **Premium Aesthetics:** Carefully curated dark theme with subtle gradients, glassmorphism, and micro-interactions.
- **Fully Responsive:** Beautifully crafted for mobile, tablet, and desktop viewports.
- **Animated Sections:** Smooth scroll, active section highlighting, immersive entry animations, and a dynamic hero background.
- **Centralized Data:** Easy to update — all your projects, experience, and tech stack are located in `src/data/`.

## Getting Started

1. **Clone the repository:**
   \`\`\`bash
   git clone <your-repo-url>
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   # or yarn / pnpm / bun
   \`\`\`

3. **Provide your data:**
   Edit the files in the `src/data/` directory:
   - `experience.ts`
   - `projects.ts`
   - `stack.ts`

4. **Update Personal Info:**
   - Modify the `src/app/layout.tsx` for your SEO metadata.
   - Update Social Links and Email in `src/components/sections/Contact.tsx`.
   - Update your brand mark in `src/components/nav/Navbar.tsx`.
   - Add your `resume.pdf` to the `public/` folder.

5. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing the Theme

Global CSS variables and the Tailwind configuration can be found and customized in `src/app/globals.css`. It uses the new `@theme` directive semantics for Tailwind v4.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

MIT
