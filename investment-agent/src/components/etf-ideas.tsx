"use client";

import type { ETFIdea } from "@/lib/planner";

interface EtfIdeasProps {
  ideas: ETFIdea[];
}

export function EtfIdeas({ ideas }: EtfIdeasProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40">
      <header className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-100">
            ETF playbook
          </h3>
          <p className="text-xs text-slate-400">
            Use as a research starting point; validate liquidity and fit.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-emerald-200">
          Draft
        </span>
      </header>

      <div className="grid gap-3">
        {ideas.map((idea) => (
          <div
            key={idea.symbol}
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 transition hover:border-emerald-400/60 hover:bg-slate-900/40"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-slate-100">
                {idea.symbol}
              </span>
              <span className="text-xs text-slate-400">{idea.name}</span>
              {idea.sustainable ? (
                <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                  ESG
                </span>
              ) : null}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span>{idea.category}</span>
              <span>Expense ratio · {idea.expenseRatio.toFixed(2)}%</span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{idea.rationale}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
