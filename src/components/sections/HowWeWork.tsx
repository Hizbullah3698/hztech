"use client";

import Link from "next/link";
import { ArrowRight, RefreshCw } from "lucide-react";
import { MotionSection, MotionStagger, MotionItem } from "@/components/ui/Motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Requirements gathering, stakeholder interviews, and technical audit of existing systems.",
  },
  {
    number: "02",
    title: "Architecture",
    desc: "Full system architecture, stack selection, DB schema, API contracts, and security model.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    desc: "1-week sprints with daily standups aligned to Gulf timezone. Working demo every sprint.",
  },
  {
    number: "04",
    title: "Handover & SLA",
    desc: "Full documentation, knowledge transfer, and 6-month post-launch warranty included.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-7xl mx-auto border-t border-hz-border/40">
      <MotionSection className="mb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-hz-teal text-[10px] font-bold tracking-[0.3em] font-mono uppercase">
                Our Process
              </span>
              {/* Agile badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-hz-teal/30 bg-hz-teal/5">
                <RefreshCw className="w-2.5 h-2.5 text-hz-teal" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-hz-teal font-bold">
                  Agile
                </span>
              </span>
            </div>
            <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-hz-text">How We Work</h2>
          </div>
          <Link
            href="/process"
            className="text-hz-teal text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all group self-start md:mt-1"
          >
            See Full Process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </MotionSection>

      <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hz-border/30 rounded-xl overflow-hidden border border-hz-border/30">
        {steps.map((step, i) => (
          <MotionItem key={i}>
            <div className="relative p-6 bg-hz-primary hover:bg-hz-card/40 transition-colors duration-300 group h-full">
              {/* Step number — subtle background watermark */}
              <div className="font-mono text-5xl font-extrabold text-hz-teal/[0.06] absolute top-4 right-4 leading-none select-none group-hover:text-hz-teal/[0.1] transition-colors duration-300">
                {step.number}
              </div>
              {/* Teal dot indicator */}
              <div className="w-2 h-2 rounded-full bg-hz-teal/40 group-hover:bg-hz-teal group-hover:shadow-[0_0_8px_rgba(10,191,188,0.5)] transition-all duration-300 mb-4" />
              <h4 className="text-hz-text font-bold mb-2 text-base font-sora">{step.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}
