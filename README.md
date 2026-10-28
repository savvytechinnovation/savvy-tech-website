# Savvy Tech Website

Temporary "Under Construction / Coming Soon" site for [Savvy Tech Innovation](https://savvytechinnovation.com).
The page is the same `UnderConstruction` component that lives in `savvy-tech-frontend`,
served here as a standalone site.

## Routes

- `/` - English
- `/es` - Spanish

## Stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS 3
- Framer Motion and Solar Icons
- Satoshi font via Fontshare

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
```

## Structure

- `src/app/` - root layout, metadata and the `/` and `/es` routes
- `src/components/UnderConstruction/` - the page component (EN/ES content inside)
- `src/constants/site.ts` - contact email and phone
- `public/` - logo, favicon and Open Graph preview
