## Atlas · Investment Strategy Agent

Atlas transforms investor inputs into a diversified allocation, scenario analysis, ETF playbook, and 90-day execution agenda. Everything runs client-side with a deterministic modelling engine in `src/lib/planner.ts`.

### Stack

- Next.js 16 (App Router, React 19)
- Tailwind CSS v4
- Chart.js + react-chartjs-2 for allocation visualisation
- TypeScript throughout

### Running Locally

```bash
npm install
npm run dev
```

The app is served at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run lint
npm run build
```

### Key Files

- `src/app/page.tsx` — main layout, orchestration, summary pills
- `src/components/` — UI modules for inputs, metrics, scenarios, ETF ideas
- `src/lib/planner.ts` — risk scoring, allocation generation, scenario modelling, formatting helpers

### Disclaimer

Atlas surfaces educational insights only. It is **not** tailored investment advice. Validate any strategy with a licensed fiduciary before implementation.
