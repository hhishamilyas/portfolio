# Hisham Ilyas — Portfolio Landing Page

A responsive, original Next.js (App Router) landing page inspired by the broad visual language of the linked Wolfpixel Dribbble portfolio design. This is not a pixel-for-pixel reproduction or an export of the source artwork.

## Get started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Stack

- Next.js App Router
- React + TypeScript
- Plain CSS (no CSS framework required)
- lucide-react icons

## Before publishing

1. Configure the approved public contact and CV links below.
2. Swap illustrative project graphics with your own approved project images and links to detailed case studies.
3. Verify the descriptions and add real, substantiated performance figures.
4. Update your availability statement and geographic positioning as needed.
5. Consider adding dedicated `/work/[slug]`, `/about`, and `/contact` pages next.

## Notes

All interactions are local: responsive navigation, service accordions, anchor scrolling, and email links. No backend or form service is included. Google Fonts requires connectivity; system fonts are used as fallback.

## Contact links

Set these public values in `.env.local` for local development and in your hosting environment before building. Each link is displayed only when its value is set.

- `NEXT_PUBLIC_CONTACT_EMAIL` — approved public email address.
- `NEXT_PUBLIC_LINKEDIN_URL` — approved profile URL.
- `NEXT_PUBLIC_CV_URL` — path to an approved PDF, such as `/hisham-ilyas-cv.pdf` for a file placed in `public/`.

Keep the PDF on the same site so the browser can honor the download link.

## Work pages

The Work index is at `/work`. Each project has its own folder in `app/work/<slug>/`:

- `page.tsx` contains the project page or full case study.
- `project.ts` contains the card details shared by the homepage and Work index.
- `public/images/work/<slug>/` contains the project cover and supporting images.

Add new project metadata to `app/work/projects.ts` to include it in both grids.
