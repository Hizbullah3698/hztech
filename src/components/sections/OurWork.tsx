"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MotionSection, MotionStagger, MotionItem, fadeUp, scaleIn } from "@/components/ui/Motion";

const caseStudies = [
  {
    tag: "Automation · Gulf Region",
    title: "Automated Data Extraction System for a Regional Classifieds Platform",
    description: "Replaced 40+ hrs/week of manual data collection with automated Python pipelines handling 25K+ structured listings daily.",
    tech: ["Python", "Playwright", "SQLite", "REST API"],
    metrics: [
      { value: "25K+", label: "Listings extracted" },
      { value: "14d", label: "Delivery time" },
    ],
    image: "/images/data-automation.jpg",
    href: "/case-studies",
  },
  {
    tag: "Mobile · Gulf Region",
    title: "Cross-Platform Delivery Tracking App for a Doha Logistics Firm",
    description: "Built a Flutter fleet tracking app with real-time driver updates, customer notifications, and route optimization.",
    tech: ["Flutter", "Firebase", "Google Maps API"],
    metrics: [
      { value: "2 Stores", label: "Launched on iOS & Android" },
      { value: "6wks", label: "From kickoff to launch" },
    ],
    image: "/images/fleet-tracking.jpg",
    href: "/case-studies",
  },
];

export function OurWork() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-7xl mx-auto border-t border-hz-border/40">
      {/* Header */}
      <MotionSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-hz-teal text-[10px] font-bold tracking-[0.3em] font-mono uppercase mb-3 block">
            Proven Results
          </span>
          <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-hz-text">Our Work</h2>
        </div>
        <Link
          href="/case-studies"
          className="text-hz-teal text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all group self-start"
        >
          View All Cases <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </MotionSection>

      <MotionStagger className="grid lg:grid-cols-2 gap-5">
        {caseStudies.map((cs, idx) => (
          <MotionItem key={idx}>
            <Link href={cs.href} className="block group h-full">
              <div className="h-full border border-hz-border rounded-xl overflow-hidden bg-hz-card/30 hover:border-hz-teal/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(10,191,188,0.07)] hover:-translate-y-1 flex flex-col">
                {/* Image */}
                <div className="relative h-36 sm:h-44 overflow-hidden flex-shrink-0">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-55 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hz-card via-hz-card/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[9px] text-hz-teal uppercase tracking-widest border border-hz-teal/30 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {cs.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="font-sora text-base font-bold text-hz-text mb-2 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">
                    {cs.description}
                  </p>

                  {/* Metrics row */}
                  <div className="flex gap-4 mb-4 pb-4 border-b border-hz-border/40">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-base font-bold text-hz-teal leading-none">{m.value}</p>
                        <p className="text-[10px] text-hz-muted mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack — visible */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.tech.map((t) => (
                      <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-sm border border-hz-teal/20 bg-hz-teal/[0.04] text-hz-teal/80 tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-hz-teal text-xs font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Case details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}
