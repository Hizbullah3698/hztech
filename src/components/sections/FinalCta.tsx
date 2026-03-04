"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { MotionSection, blurIn } from "@/components/ui/Motion";

export function FinalCta() {
  return (
    <section className="px-4 sm:px-6 pb-12 sm:pb-16 pt-4 max-w-7xl mx-auto">
      <MotionSection variant={blurIn}>
        <div className="py-10 sm:py-14 px-5 sm:px-10 bg-gradient-to-br from-[#0f1118] via-hz-primary to-[#0f1118] border border-hz-border text-center relative overflow-hidden rounded-xl">
          {/* Glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-hz-teal/[0.06] rounded-full -translate-y-1/2 translate-x-1/3 blur-[90px] animate-pulse-slow pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-hz-teal/[0.04] rounded-full translate-y-1/2 -translate-x-1/3 blur-[70px] animate-pulse-slow pointer-events-none" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(10,191,188,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,191,188,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10">
            <span className="font-mono text-hz-teal text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Let&apos;s Build Together
            </span>
            <h2 className="font-sora text-2xl md:text-3xl lg:text-4xl font-extrabold text-hz-text mb-4 leading-tight">
              Ready to Build Something{" "}
              <span className="text-hz-teal relative">
                Serious?
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6c40-5 80-5 100 0s60 4 96 0" stroke="#0ABFBC" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </h2>
            <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              NDA available before any technical discussion. Response within 4 hours during Gulf business hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="group relative bg-hz-teal text-hz-primary px-7 py-3.5 rounded-sm font-bold transition-all text-sm overflow-hidden inline-flex items-center gap-2.5 justify-center hover:shadow-[0_0_30px_rgba(10,191,188,0.35)] uppercase tracking-widest"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <a
                href="https://wa.me/923000943975"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-hz-teal/20 text-hz-text px-7 py-3.5 rounded-sm font-bold transition-all text-sm flex items-center justify-center gap-2.5 uppercase tracking-widest"
              >
                <MessageCircle className="w-4 h-4 text-hz-teal" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </MotionSection>
    </section>
  );
}
