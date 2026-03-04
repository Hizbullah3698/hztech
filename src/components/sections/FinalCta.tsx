"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection, scaleIn, blurIn } from "@/components/ui/Motion";

export function FinalCta() {
  return (
    <section className="px-6 pb-20">
      <MotionSection variant={scaleIn}>
        <div className="max-w-7xl mx-auto py-16 px-6 sm:py-24 sm:px-8 bg-gradient-to-br from-[#0f1118] via-hz-primary to-[#0f1118] border border-hz-border text-center relative overflow-hidden rounded-xl">
          {/* Animated gradient blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-hz-teal/[0.06] rounded-full -translate-y-1/2 translate-x-1/3 blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-hz-teal/[0.04] rounded-full translate-y-1/2 -translate-x-1/3 blur-[80px] animate-pulse-slow" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(10,191,188,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,191,188,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10">
            <MotionSection variant={blurIn}>
              <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-extrabold text-hz-text mb-6 leading-tight">
                Ready to Build Something{" "}
                <span className="text-hz-teal relative">
                  Serious?
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6c40-5 80-5 100 0s60 4 96 0" stroke="#0ABFBC" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                  </svg>
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto">
                Let&apos;s discuss your project and find the right engagement model for your team.
              </p>
            </MotionSection>

            <MotionSection delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link
                  href="/contact"
                  className="group relative bg-hz-teal text-hz-primary px-8 py-4 rounded-sm font-bold transition-all text-sm overflow-hidden inline-flex items-center gap-3 justify-center hover:shadow-[0_0_30px_rgba(10,191,188,0.3)]"
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-hz-text px-8 py-4 rounded-sm font-bold transition-all text-sm flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </MotionSection>
          </div>
        </div>
      </MotionSection>
    </section>
  );
}
