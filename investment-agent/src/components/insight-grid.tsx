"use client";

interface InsightGridProps {
  insights: string[];
  actionChecklist: string[];
}

export function InsightGrid({ insights, actionChecklist }: InsightGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40">
        <header className="mb-4">
          <h3 className="text-base font-semibold text-slate-100">
            Key signals
          </h3>
          <p className="text-xs text-slate-400">
            Anchor behaviour during volatile markets.
          </p>
        </header>
        <ul className="space-y-3 text-sm text-slate-300">
          {insights.map((insight) => (
            <li key={insight} className="flex gap-3">
              <span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-400/70" />
              <span>{insight}</span>
            </li>
          ))}
          {insights.length === 0 ? (
            <li className="text-slate-400">Adjust inputs to surface insights.</li>
          ) : null}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40">
        <header className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-100">
              90-day agenda
            </h3>
            <p className="text-xs text-slate-400">
              Sequence tasks to operationalise the strategy.
            </p>
          </div>
          <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-300">
            Action
          </span>
        </header>
        <ol className="space-y-3 text-sm text-slate-300">
          {actionChecklist.map((action, idx) => (
            <li key={action} className="flex items-start gap-3">
              <span className="mt-0.5 rounded-full bg-slate-800 px-2 py-1 text-[11px] font-semibold text-slate-200">
                {idx + 1}
              </span>
              <span>{action}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
