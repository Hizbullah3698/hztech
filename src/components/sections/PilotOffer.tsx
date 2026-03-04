"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { MotionSection, MotionStagger, MotionItem, fadeLeft, fadeRight, scaleIn } from "@/components/ui/Motion";

const deliverables = [
  { title: "Requirements & Architecture Doc", desc: "Detailed technical spec with system design" },
  { title: "Clickable Prototype", desc: "Interactive UI/UX prototype for validation" },
  { title: "Full Tech Roadmap & Cost Estimate", desc: "Clear timeline with milestone pricing" },
  { title: "Complete Code Handover", desc: "Full source code with documentation" },
];

export function PilotOffer() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <MotionSection variant={scaleIn}>
        <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-hz-teal via-hz-teal/20 to-hz-teal/5 overflow-hidden group">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hz-teal/10 to-transparent -translate-x-full animate-shimmer" />

          <div className="bg-hz-primary p-8 md:p-16 rounded-[11px] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-hz-teal/[0.03] rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14">
              <MotionSection variant={fadeLeft} className="max-w-xl">
                <div className="inline-flex items-center gap-2 font-mono text-hz-teal text-xs uppercase tracking-[0.3em] mb-6">
                  <Sparkles className="w-4 h-4" />
                  Start with Zero Risk
                </div>
                <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-hz-text mb-6 leading-tight">
                  2-Week Paid<br />
                  <span className="text-hz-teal">Discovery Sprint</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  We validate your technical assumptions and build a roadmap before you commit to full-scale development.
                </p>

                <Link
                  href="/pilot"
                  className="inline-flex bg-hz-teal text-hz-primary px-8 py-4 rounded-sm font-bold transition-all items-center gap-3 group/btn relative overflow-hidden hover:shadow-[0_0_30px_rgba(10,191,188,0.3)]"
                >
                  <span className="relative z-10">Secure Your Sprint Slot</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </Link>
              </MotionSection>

              <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-md">
                {deliverables.map((item, i) => (
                  <MotionItem key={i}>
                    <div className="p-5 border border-hz-teal/15 bg-hz-teal/[0.03] rounded-lg hover:border-hz-teal/30 hover:bg-hz-teal/[0.06] transition-all duration-300 group/card">
                      <CheckCircle2 className="text-hz-teal w-6 h-6 mb-3 group-hover/card:scale-110 transition-transform" />
                      <p className="text-sm font-bold text-hz-text mb-1.5">{item.title}</p>
                      <p className="text-xs text-hz-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </MotionItem>
                ))}
              </MotionStagger>
            </div>
          </div>
        </div>
      </MotionSection>
    </section>
  );
}
