import { AboutHero } from "@/components/sections/about/AboutHero";
import { FounderSection } from "@/components/sections/about/FounderSection";
import { PhilosophyCards } from "@/components/sections/about/PhilosophyCards";
import { TimezoneSection } from "@/components/sections/about/TimezoneSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | HZ Tech Engineering Studio",
    description: "Senior-led engineering studio delivering production-grade software to technology companies worldwide.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <FounderSection />
            <PhilosophyCards />
            <TimezoneSection />

            <section className="py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-hz-teal/5"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-extrabold text-hz-text mb-8 leading-tight">
                        Want to work with a team that treats your project like their own?
                    </h2>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center bg-hz-teal text-hz-primary px-8 py-4 rounded-sm font-bold transition-all active:scale-[0.98] overflow-hidden text-lg"
                    >
                        <span className="relative z-10">Start a Project</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </Link>
                </div>
            </section>
        </>
    );
}
