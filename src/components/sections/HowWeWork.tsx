"use client";

import Link from "next/link";
import { MotionSection, MotionStagger, MotionItem, fadeUp } from "@/components/ui/Motion";

export function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "Defining project goals, technical constraints, and user needs through intense workshops.",
    },
    {
      number: "02",
      title: "Architecture",
      desc: "Designing scalable, secure backend systems and intuitive frontend patterns.",
    },
    {
      number: "03",
      title: "Build & Iterate",
      desc: "Rapid agile development cycles with senior lead oversight on every commit.",
    },
    {
      number: "04",
      title: "Handover & Support",
      desc: "Documentation, knowledge transfer, and 24/7 post-launch monitoring support.",
    },
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <MotionSection className="text-center mb-14">
        <span className="text-hz-teal text-xs font-bold tracking-[0.3em] font-mono uppercase mb-4 block">
          Our Process
        </span>
        <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-hz-text mb-6">How We Work</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-hz-teal to-hz-teal/30 mx-auto rounded-full" />
      </MotionSection>

      <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <MotionItem key={i} className="relative group">
            <div className="relative p-6 rounded-lg border border-transparent hover:border-hz-border hover:bg-hz-card/20 transition-all duration-500">
              {/* Large background number */}
              <div className="font-mono text-4xl font-extrabold text-hz-teal/[0.05] absolute top-4 right-5 group-hover:text-hz-teal/[0.08] transition-colors duration-500">
                {step.number}
              </div>
              {/* Teal accent dot */}
              <div className="w-3 h-3 rounded-full bg-hz-teal/30 group-hover:bg-hz-teal group-hover:shadow-[0_0_12px_rgba(10,191,188,0.4)] transition-all duration-500 mb-6" />
              <h4 className="text-hz-text font-bold mb-4 text-xl font-sora">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>

            {/* Connecting line between steps */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-hz-border to-transparent" />
            )}
          </MotionItem>
        ))}
      </MotionStagger>

      <MotionSection className="text-center mt-16">
        <Link
          href="/process"
          className="text-hz-teal text-sm font-bold hover:underline underline-offset-4 transition-all"
        >
          See Full Process →
        </Link>
      </MotionSection>
    </section>
  );
}
