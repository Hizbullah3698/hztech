"use client";

import { MotionSection, blurIn } from "@/components/ui/Motion";

import { CreditCard, Globe, Truck, Building2, ShoppingCart } from 'lucide-react';

const clients = [
    { label: "A Kuwait-based Fintech", icon: <CreditCard className="w-5 h-5 text-hz-teal" /> },
    { label: "A European SaaS Company", icon: <Globe className="w-5 h-5 text-hz-teal" /> },
    { label: "A Gulf Logistics Firm", icon: <Truck className="w-5 h-5 text-hz-teal" /> },
    { label: "A Dubai PropTech Startup", icon: <Building2 className="w-5 h-5 text-hz-teal" /> },
    { label: "A Doha E-Commerce Platform", icon: <ShoppingCart className="w-5 h-5 text-hz-teal" /> },
];

export function TrustedBy() {
    return (
        <section className="py-10 border-b border-hz-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-hz-primary via-hz-teal/[0.02] to-hz-primary pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative">
                <MotionSection variant={blurIn}>
                    <p className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-hz-muted mb-10">
                        Trusted by teams across the globe
                    </p>
                </MotionSection>

                {/* Scrolling strip */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hz-primary to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hz-primary to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden">
                        <div className="flex animate-scroll-x gap-12 pr-12">
                            {[...clients, ...clients].map((client, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 shrink-0 px-6 py-3.5 rounded-lg border border-hz-border/50 bg-hz-card/30 hover:border-hz-teal/30 hover:bg-hz-teal/[0.03] transition-all duration-500 group"
                                >
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {client.icon}
                                    </div>
                                    <span className="font-mono text-xs text-hz-muted group-hover:text-slate-300 tracking-wide whitespace-nowrap transition-colors duration-300">
                                        {client.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <MotionSection variant={blurIn} delay={0.2}>
                    <p className="text-center text-xs text-slate-600 mt-8 font-mono">
                        Client names anonymized under NDA · References available upon request
                    </p>
                </MotionSection>
            </div>
        </section>
    );
}
