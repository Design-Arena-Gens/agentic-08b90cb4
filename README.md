# Atlas Investment Agent

Interactive web application that turns an investor profile into an allocation blueprint, scenario analysis, and actionable playbook. Built with Next.js (App Router) and Tailwind CSS v4 so it can deploy cleanly to Vercel.

## Repository Layout

- `investment-agent/` — Next.js 16 application (TypeScript, Tailwind v4, React 19)
  - `src/app/page.tsx` — main Atlas interface
  - `src/lib/planner.ts` — portfolio modelling engine
  - `src/components/` — UI modules (profile form, allocation chart, ETF ideas, etc.)

## Quickstart

```bash
cd investment-agent
npm install
npm run dev
# open http://localhost:3000
```

Useful scripts:

- `npm run lint` — ESLint via Next.js config
- `npm run build` — Production build check
- `npm run start` — Launch compiled app

## Deployment

The app is ready for Vercel. After installing dependencies and running `npm run build`, deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-08b90cb4
```

## Legal Note

Atlas surfaces educational projections only. Engage a licensed fiduciary before implementing any investment recommendations.
