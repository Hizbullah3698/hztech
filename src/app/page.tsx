import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { OurWork } from "@/components/sections/OurWork";
import { PilotOffer } from "@/components/sections/PilotOffer";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { BuiltWith } from "@/components/sections/BuiltWith";
import { FinalCta } from "@/components/sections/FinalCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HZ Tech | Senior-Led Software Engineering for Ambitious Tech Teams",
  description: "We build production-grade web, mobile, and automation systems for ambitious software companies worldwide. NDA-ready, timezone-flexible.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsSection />
      <TrustedBy />
      <ServicesPreview />
      <OurWork />
      <PilotOffer />
      <HowWeWork />
      <BuiltWith />
      <FinalCta />
    </div>
  );
}
