"use client";

import { MotionSection, fadeIn } from "@/components/ui/Motion";

export function TrustStrip() {
  return (
    <MotionSection variant={fadeIn}>
      <div className="w-full border-y border-hz-border bg-hz-card/30 py-6 overflow-hidden whitespace-nowrap">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 gap-y-4 md:gap-y-0 font-mono text-[11px] uppercase tracking-[0.2em] text-hz-muted px-6">
          <span>4+ Years Commercial Delivery</span>
          <span className="hidden md:inline text-hz-teal/40">/</span>
          <span>25+ Production Projects</span>
          <span className="hidden md:inline text-hz-teal/40">/</span>
          <span>Flexible Hours · Your Timezone</span>
          <span className="hidden md:inline text-hz-teal/40">/</span>
          <span>Senior-Led Architecture</span>
          <span className="hidden md:inline text-hz-teal/40">/</span>
          <span>NDA-Ready</span>
        </div>
      </div>
    </MotionSection>
  );
}
