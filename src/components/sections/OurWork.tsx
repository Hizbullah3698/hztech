"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MotionSection, MotionParallax, fadeLeft, fadeRight, scaleIn } from "@/components/ui/Motion";

export function OurWork() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <MotionSection className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
        <div>
          <span className="text-hz-teal text-xs font-bold tracking-[0.3em] font-mono uppercase mb-4 block">
            Proven Results
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-hz-text">Our Work</h2>
        </div>
        <Link
          href="/case-studies"
          className="text-hz-teal text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all group"
        >
          View All Cases <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </MotionSection>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Case Study 1 - Kuwait Automation */}
        <MotionSection variant={fadeLeft} className="group">
          <Link href="/case-studies" className="block h-full">
            <div className="relative h-full border border-hz-border rounded-lg overflow-hidden bg-hz-card/30 hover:border-hz-teal/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(10,191,188,0.06)] hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/data-automation.jpg"
                  alt="Data automation pipeline for Kuwait classifieds platform"
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hz-card via-hz-card/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] text-hz-teal uppercase tracking-widest border border-hz-teal/30 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    Enterprise · Automation
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-sora text-xl font-bold text-hz-text mb-3 leading-tight">
                  Automated Data Extraction System for a Regional Classifieds Platform
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Replaced manual data collection with automated Python pipelines handling 10K+ listings daily.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "Playwright", "SQLite"].map((tech) => (
                    <span key={tech} className="font-mono text-[10px] px-2.5 py-1 bg-hz-border/50 rounded-sm text-slate-400 hover:text-hz-teal hover:bg-hz-teal/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-hz-teal text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Case details <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </MotionSection>

        {/* Case Study 2 - Qatar Mobile */}
        <MotionSection variant={fadeRight} className="group">
          <Link href="/case-studies" className="block h-full">
            <div className="relative h-full border border-hz-border rounded-lg overflow-hidden bg-hz-card/30 hover:border-hz-teal/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(10,191,188,0.06)] hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/fleet-tracking.jpg"
                  alt="Cross-platform delivery tracking app for Qatar logistics"
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hz-card via-hz-card/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] text-hz-teal uppercase tracking-widest border border-hz-teal/30 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    Logistics · Mobile App
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-sora text-xl font-bold text-hz-text mb-3 leading-tight">
                  Cross-Platform Delivery Tracking App for a Doha Logistics Firm
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Built a Flutter-based fleet tracking app with real-time updates and driver management.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Flutter", "Firebase", "Maps API"].map((tech) => (
                    <span key={tech} className="font-mono text-[10px] px-2.5 py-1 bg-hz-border/50 rounded-sm text-slate-400 hover:text-hz-teal hover:bg-hz-teal/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-hz-teal text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Case details <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}
