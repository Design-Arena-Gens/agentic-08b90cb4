"use client";

import type { Scenario } from "@/lib/planner";
import { formatCurrency, formatPercent } from "@/lib/planner";

interface ScenarioTableProps {
  scenarios: Scenario[];
}

export function ScenarioTable({ scenarios }: ScenarioTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl shadow-slate-950/40">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-slate-900/80 text-xs uppercase tracking-[0.25em] text-slate-400">
          <tr>
            <th className="px-5 py-4 text-left font-semibold">Scenario</th>
            <th className="px-5 py-4 text-left font-semibold">Annualized</th>
            <th className="px-5 py-4 text-left font-semibold">Projected value</th>
            <th className="px-5 py-4 text-left font-semibold">Narrative</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((scenario, index) => (
            <tr
              key={scenario.label}
              className={index % 2 === 0 ? "bg-slate-950/50" : "bg-slate-950/20"}
            >
              <td className="px-5 py-4 text-slate-200">{scenario.label}</td>
              <td className="px-5 py-4 text-slate-100">
                {formatPercent(scenario.rate)}
              </td>
              <td className="px-5 py-4 text-emerald-300">
                {formatCurrency(scenario.projectedValue)}
              </td>
              <td className="px-5 py-4 text-slate-400">{scenario.narrative}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
