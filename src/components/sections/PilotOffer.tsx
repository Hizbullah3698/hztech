"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, Clock } from "lucide-react";
import { MotionSection, MotionStagger, MotionItem, fadeLeft, fadeRight, blurIn } from "@/components/ui/Motion";

const deliverables = [
  { title: "Requirements & Architecture Doc", desc: "Full technical spec with system design" },
  { title: "Clickable Prototype", desc: "Interactive UI/UX for stakeholder validation" },
  { title: "Full Tech Roadmap", desc: "Clear milestones with cost breakdown" },
  { title: "Complete Code Handover", desc: "Full source code with documentation" },
];

export function PilotOffer() {
  return (
    <section className="py-14 px-6 max-w-7xl mx-auto border-t border-hz-border/40">
      <MotionSection variant={blurIn}>
        {/* Teal left-border card */}
        <div className="relative rounded-xl border border-hz-border bg-hz-card/40 overflow-hidden pl-[3px]">
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-hz-teal rounded-l-xl" />

          <div className="p-8 md:p-10 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-hz-teal/[0.025] rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-start gap-10">
              {/* Left: copy */}
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 font-mono text-hz-teal text-[10px] uppercase tracking-[0.3em] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-hz-teal animate-pulse" />
                  Start with Zero Risk
                </div>
                <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-hz-text mb-3 leading-tight">
                  2-Week Paid{" "}
                  <span className="text-hz-teal">Discovery Sprint</span>
                </h2>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-md">
                  We validate your technical assumptions and build a complete roadmap before you commit to full development.
                </p>

                {/* Price badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-2xl font-extrabold text-hz-text">$1,400</span>
                  <span className="text-xs text-hz-muted font-mono uppercase tracking-wider border border-hz-border rounded px-2 py-0.5">Fixed Scope</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/pilot"
                    className="inline-flex bg-hz-teal text-hz-primary px-6 py-3 rounded-sm font-bold transition-all items-center gap-2 group/btn relative overflow-hidden hover:shadow-[0_0_25px_rgba(10,191,188,0.3)] text-sm uppercase tracking-widest"
                  >
                    <span className="relative z-10">Secure Your Sprint Slot</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </Link>
                  <Link
                    href="/pilot"
                    className="inline-flex border border-hz-teal/40 text-hz-teal hover:bg-hz-teal/5 px-6 py-3 rounded-sm font-bold transition-all items-center gap-2 text-sm uppercase tracking-widest"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-4 mt-5">
                  <span className="flex items-center gap-1.5 text-[10px] text-hz-muted font-mono uppercase tracking-wider">
                    <Shield className="w-3 h-3 text-hz-teal" /> NDA before kickoff
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-hz-muted font-mono uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-hz-teal" /> Full IP ownership
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-hz-muted font-mono uppercase tracking-wider">
                    <Clock className="w-3 h-3 text-hz-teal" /> No obligation to continue
                  </span>
                </div>
              </div>

              {/* Right: deliverables */}
              <div className="w-full lg:w-80 flex-shrink-0">
                <p className="font-mono text-[10px] text-hz-muted uppercase tracking-[0.25em] mb-3">
                  What you get
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg border border-hz-teal/10 bg-hz-teal/[0.02] hover:border-hz-teal/25 hover:bg-hz-teal/[0.04] transition-all duration-300">
                      <CheckCircle2 className="text-hz-teal w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-hz-text leading-tight">{item.title}</p>
                        <p className="text-[10px] text-hz-muted mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>
    </section>
  );
}
