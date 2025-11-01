"use client";

import { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import type { Allocation } from "@/lib/planner";

ChartJS.register(ArcElement, Tooltip, Legend);

interface AllocationChartProps {
  allocation: Allocation;
}

const COLORS = ["#10b981", "#38bdf8", "#fbbf24", "#a855f7"];

export function AllocationChart({ allocation }: AllocationChartProps) {
  const data = useMemo(() => {
    const labels = ["Equities", "Bonds", "Cash", "Alternatives"];
    const values = [
      allocation.equities,
      allocation.bonds,
      allocation.cash,
      allocation.alternatives,
    ];

    return {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: COLORS,
          borderColor: "#0f172a",
          borderWidth: 2,
          hoverOffset: 10,
        },
      ],
    };
  }, [allocation]);

  const options = useMemo(
    () => ({
      responsive: true,
      cutout: "62%",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label(context: { label: string; parsed: number }) {
              return `${context.label}: ${context.parsed.toFixed(1)}%`;
            },
          },
          backgroundColor: "#0f172a",
          borderColor: "#22d3ee",
          borderWidth: 1,
        },
      },
    }),
    [],
  );

  return (
    <div className="relative flex h-64 w-full flex-col items-center justify-center">
      <Doughnut data={data} options={options} />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-semibold text-emerald-300">
          {allocation.equities.toFixed(0)}%
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Equity Tilt
        </span>
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-3 text-xs text-slate-300 sm:grid-cols-4">
        {["Equities", "Bonds", "Cash", "Alternatives"].map((label, index) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-xl border border-slate-800/70 bg-slate-900/40 px-3 py-2"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span className="whitespace-nowrap">
              {label} ·{" "}
              {[
                allocation.equities,
                allocation.bonds,
                allocation.cash,
                allocation.alternatives,
              ][index].toFixed(1)}
              %
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
