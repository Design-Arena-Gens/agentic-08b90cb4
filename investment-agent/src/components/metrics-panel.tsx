"use client";

import type { InvestmentPlan } from "@/lib/planner";
import { formatPercent } from "@/lib/planner";

interface MetricsPanelProps {
  plan: InvestmentPlan;
}

const METRIC_CONFIG = [
  {
    label: "Risk score",
    format: (plan: InvestmentPlan) => `${plan.riskMetrics.score}/100`,
    caption: (plan: InvestmentPlan) =>
      plan.riskMetrics.label === "growth-oriented"
        ? "High-octane tilt"
        : plan.riskMetrics.label === "balanced"
          ? "Steady blend"
          : "Capital defense",
  },
  {
    label: "Exp. return",
    format: (plan: InvestmentPlan) => formatPercent(plan.riskMetrics.expectedReturn),
    caption: () => "Forward-looking (not guaranteed)",
  },
  {
    label: "Volatility",
    format: (plan: InvestmentPlan) => formatPercent(plan.riskMetrics.volatility),
    caption: () => "Annualized standard deviation",
  },
  {
    label: "Downside cushion",
    format: (plan: InvestmentPlan) => formatPercent(plan.riskMetrics.downside),
    caption: () => "Return hurdle to keep purchasing power",
  },
];

export function MetricsPanel({ plan }: MetricsPanelProps) {
  return (
    <section className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-5 text-sm shadow-lg shadow-slate-950/40 sm:grid-cols-4">
      {METRIC_CONFIG.map((metric) => (
        <div key={metric.label} className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
            {metric.label}
          </span>
          <span className="text-lg font-semibold text-slate-100">
            {metric.format(plan)}
          </span>
          <span className="text-[11px] text-slate-400">{metric.caption(plan)}</span>
        </div>
      ))}
    </section>
  );
}
