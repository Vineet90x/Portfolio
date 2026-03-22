# Dev Portfolio

A dark, high-performance, brutalist-meets-modern portfolio built for full-stack developers. Designed to make recruiters stop scrolling and start reaching out.

## Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** `next-themes` — Dark/Light mode with CSS variables
- **Typography:** Syne (Headings) + JetBrains Mono (Code/Body)

## Features

- **Snappy on every device** — mobile-first, tested at 375px, 768px, 1280px
- **Dark brutalist aesthetic** — high contrast, bold type, electric green accent, zero generic AI slop
- **Animated everything** — scroll-triggered reveals, hover micro-interactions, staggered entry animations
- **One-file data layer** — update your projects, stack, and experience from `src/data/` without touching components
- **SEO ready** — metadata configured in `layout.tsx`
- **Accessible** — `prefers-reduced-motion` support, keyboard navigable

## Sections

- Hero — punchy headline, animated background, dual CTAs
- About — value prop in 4 lines + stat row
- Tech Stack — scrolling marquee with grouped icons and tooltips
- Projects — card grid with live + GitHub links, tech badges
- Experience — vertical timeline with role, company, dates, achievements
- Contact — click-to-copy email + social links

## Getting Started

**1. Clone the repo**

```bash
git clone https://github.com/Vineet90x/Portfolio.git
cd Portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Add your data**

Edit the files in `src/data/`:

| File            | What to update                              |
| --------------- | ------------------------------------------- |
| `projects.ts`   | Project name, description, tech tags, links |
| `stack.ts`      | Tech icons, proficiency, category groups    |
| `experience.ts` | Company, role, dates, bullet achievements   |

**4. Update personal info**

- `src/app/layout.tsx` — SEO title, description, OG image
- `src/components/sections/Contact.tsx` — your email + social links
- `src/components/nav/Navbar.tsx` — your name/initials
- `public/resume.pdf` — drop your resume here

**5. Run dev server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

All colors, fonts, and spacing live in `src/app/globals.css` using Tailwind v4's `@theme` directive. Change the accent color in one place and it propagates everywhere.

```css
/* src/app/globals.css */
@theme {
  --color-accent: #00ff87; /* swap this */
}
```

## Deploy

Fastest path — push to GitHub, import on [Vercel](https://vercel.com/new), done. Zero config needed for Next.js.

## License

MIT — fork it, ship it, make it yours.
