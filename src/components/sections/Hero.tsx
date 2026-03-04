"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, User } from "lucide-react";
import {
  MotionSection,
  MotionStagger,
  MotionItem,
  MotionFloat,
  fadeIn,
  fadeRight,
  blurIn,
} from "@/components/ui/Motion";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pb-12 overflow-hidden border-b border-white/5 bg-hz-primary">
      {/* Static dot grid — no scroll listener, no jank */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(10, 191, 188, 0.5) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hz-primary/60 to-hz-primary pointer-events-none z-0" />

      {/* Accent Glows — static, no animation to keep scroll smooth */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-hz-teal/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-hz-teal/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center py-6 sm:py-10">
        {/* Left: Copy */}
        <div>
          <MotionSection variant={blurIn} delay={0.1}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-hz-teal/30 rounded-full bg-hz-teal/5 mb-6 sm:mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hz-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hz-teal" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-hz-teal font-bold">
                Your Timezone. Our Commitment.
              </span>
            </div>
          </MotionSection>

          <MotionSection delay={0.2}>
            <h1 className="font-sora text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-extrabold leading-[1.1] mb-5 tracking-tight text-hz-text">
              Senior-Led Engineering for{" "}
              <span className="text-hz-teal">Ambitious Tech Teams</span>
            </h1>
          </MotionSection>

          <MotionSection delay={0.35}>
            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-lg leading-[1.7]">
              We build production-grade web, mobile, and automation systems for
              ambitious software companies worldwide.
            </p>
          </MotionSection>

          <MotionSection delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Link
                href="/pilot"
                className="group relative bg-hz-teal text-hz-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm font-bold transition-all active:scale-[0.98] overflow-hidden text-sm uppercase tracking-widest text-center"
              >
                <span className="relative z-10">Start 2-Week Discovery Sprint</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <a
                href="https://calendly.com/hizbullah3698/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white/15 text-hz-text hover:border-hz-teal/50 hover:bg-hz-teal/5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm font-bold transition-all duration-300 text-sm uppercase tracking-widest text-center"
              >
                Book a Technical Call
              </a>
            </div>
          </MotionSection>

          <MotionSection variant={fadeIn} delay={0.65}>
            <div className="flex flex-wrap gap-3 sm:gap-5 font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em]">
              {["NDA-Ready in 24hrs", "Gulf Timezone Aligned", "Senior Engineers Only"].map(
                (item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-hz-teal/60" />
                    {item}
                  </span>
                )
              )}
            </div>
          </MotionSection>
        </div>

        {/* Right: Real Workspace Image */}
        <MotionSection variant={fadeRight} delay={0.3} className="hidden lg:block">
          <MotionFloat>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-hz-teal/10 via-hz-teal/5 to-transparent rounded-2xl blur-2xl" />
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <Image
                  src="/images/hero-workspace.jpg"
                  alt="Professional software engineering workspace with code on multiple monitors"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
                {/* Glass overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-xl border border-white/10 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-hz-teal uppercase tracking-widest mb-1">
                      Live Project
                    </p>
                    <p className="text-sm font-bold text-hz-text">
                      Enterprise Analytics Dashboard
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-hz-teal animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-hz-teal/40" />
                    <span className="w-2 h-2 rounded-full bg-hz-teal/20" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-400 mt-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#12141d] bg-slate-800 flex items-center justify-center overflow-hidden">
                  <User className="w-4 h-4 text-slate-400" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#12141d] bg-slate-700 flex items-center justify-center overflow-hidden">
                  <User className="w-4 h-4 text-slate-300" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#12141d] bg-hz-teal flex items-center justify-center overflow-hidden">
                  <span className="text-[10px] font-bold text-[#12141d]">+50</span>
                </div>
              </div>
              <p>
                Trusted by CTOs and Founders<br />
                <span className="text-hz-teal text-xs">For mission-critical engineering</span>
              </p>
            </div>

            {/* Industry Verticals Strip */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-mono uppercase tracking-widest text-hz-muted/60 opacity-80 backdrop-blur-sm bg-white/5 px-6 py-2 rounded-full border border-white/5 w-fit mx-auto">
              <span>FinTech</span>
              <span className="text-hz-teal/30">•</span>
              <span>PropTech</span>
              <span className="text-hz-teal/30">•</span>
              <span>SaaS</span>
              <span className="text-hz-teal/30">•</span>
              <span>E-Commerce</span>
              <span className="text-hz-teal/30">•</span>
              <span>Logistics</span>
            </div>
          </MotionFloat>
        </MotionSection>
      </div>
    </section>
  );
}
