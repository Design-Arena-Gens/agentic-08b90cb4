"use client";

import { useMemo, useState } from "react";
import { AllocationChart } from "@/components/allocation-chart";
import { EtfIdeas } from "@/components/etf-ideas";
import { InsightGrid } from "@/components/insight-grid";
import { MetricsPanel } from "@/components/metrics-panel";
import { ProfileForm } from "@/components/profile-form";
import { ScenarioTable } from "@/components/scenario-table";
import {
  InvestorProfile,
  buildInvestmentPlan,
  defaultProfile,
  formatCurrency,
} from "@/lib/planner";

export default function Home() {
  const [profile, setProfile] = useState<InvestorProfile>(defaultProfile);
  const plan = useMemo(() => buildInvestmentPlan(profile), [profile]);

  const handleProfileChange = <K extends keyof InvestorProfile>(
    key: K,
    value: InvestorProfile[K],
  ) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.08),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.06),_transparent_60%)]" />
      </div>

      <header className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-16 sm:px-10">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.4em] text-emerald-300">
            Atlas · Investment Agent
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">
            Model allocations, risk, and next steps in one command cockpit.
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            Atlas converts your profile into an actionable allocation blueprint,
            blending capital market assumptions with behavioural guardrails.
            Adjust inputs and the plan recalibrates instantly.
          </p>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-24 sm:px-10">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,24rem),1fr] xl:grid-cols-[minmax(0,26rem),1fr]">
          <ProfileForm profile={profile} onProfileChange={handleProfileChange} />

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/50">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-emerald-200">
                  Plan summary
                </span>
                <span className="text-sm text-slate-400">
                  {plan.summary}
                </span>
              </div>
              <MetricsPanel plan={plan} />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <SummaryPill
                  label="Initial capital"
                  value={formatCurrency(profile.initialInvestment)}
                />
                <SummaryPill
                  label="Monthly funding"
                  value={formatCurrency(profile.monthlyContribution)}
                />
                <SummaryPill label="Horizon" value={`${profile.horizon} yrs`} />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/50">
              <h2 className="text-base font-semibold text-slate-100">
                Strategic mix
              </h2>
              <p className="mb-4 text-sm text-slate-400">
                Weightings adapt to horizon, liquidity, and risk posture. Rotate
                sliders to observe instant shifts.
              </p>
              <AllocationChart allocation={plan.allocation} />
            </div>
          </div>
        </section>

        <section className="mt-10 space-y-8">
          <ScenarioTable scenarios={plan.scenarios} />
          <InsightGrid
            insights={plan.insights}
            actionChecklist={plan.actionChecklist}
          />
          <EtfIdeas ideas={plan.etfIdeas} />
        </section>
      </main>

      <footer className="relative border-t border-slate-800/70 bg-slate-900/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>
            Atlas surfaces educational insights. Consult a licensed advisor
            before implementing any allocation.
          </span>
          <span>Data sources: synthetic capital market assumptions (2024).</span>
        </div>
      </footer>
    </div>
  );
}

interface SummaryPillProps {
  label: string;
  value: string;
}

function SummaryPill({ label, value }: SummaryPillProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-base font-semibold text-slate-100">{value}</p>
    </div>
  );
}
