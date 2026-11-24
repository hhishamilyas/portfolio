# AGENTS.md

## Portfolio updates

For changes the owner requests in this repository, work on a branch from `main` and verify the change. Open a pull request into `main` and merge it in the same task without waiting for a separate merge request. Use the verified pull request head when merging. Confirm that the merge landed on `main` and report any deployment status GitHub exposes.

Follow the owner's instructions for the current task if they ask to keep a change as a draft, defer the merge, or use a different branch. Respect required checks and branch protection. This applies to pull requests for the owner's requested changes, not unrelated pull requests.

## Animation system

Use Motion for React through the `motion` package for new React animation work. The root `MotionProvider` loads DOM animation features lazily. Use `motion/react-m` for motion elements and `motion/react` for hooks. Reuse `app/_components/motion/Reveal.tsx` for fade and slide entrances, section reveals, and headings. Use its `staggerIndex` for ordered text or card groups and `trigger="mount" effect="fade"` for a light route entrance on a page heading when useful. Reuse the interaction classes in `app/_components/motion/interactions.css` for buttons and linked project cards. Add shared timing or easing to `tokens.ts` rather than adding an animation package or inventing new values for each page.

Keep the visual tone minimal and editorial. Use opacity and transforms, a 14 px rise, short stagger delays, and entrance durations around 0.4–0.8 seconds. Keep hover motion brief and limited to devices with a fine pointer. Preserve natural scrolling, focus, responsive layout, and readable content during transitions. Prefer one-time reveals and use animation only where it helps communicate hierarchy, movement, or feedback.

Respect `prefers-reduced-motion` for Motion and CSS effects. Render essential content visible in the server HTML and in browsers with JavaScript disabled. Avoid animating layout dimensions, adding continuous effects by default, or overriding normal scrolling to trigger a reveal. Check desktop, mobile, reduced motion, and the production build before submitting animation changes.
