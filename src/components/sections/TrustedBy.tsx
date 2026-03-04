"use client";

import { MotionSection, blurIn } from "@/components/ui/Motion";
import { CreditCard, Globe, Truck, Building2, ShoppingCart, Cpu } from 'lucide-react';

const clients = [
    {
        label: "A Kuwait-Based FinTech",
        region: "Kuwait · FinTech",
        icon: <CreditCard className="w-4 h-4 text-hz-teal" />,
    },
    {
        label: "A Gulf Logistics Firm",
        region: "Gulf Region · Logistics",
        icon: <Truck className="w-4 h-4 text-hz-teal" />,
    },
    {
        label: "A Dubai PropTech Startup",
        region: "UAE · PropTech",
        icon: <Building2 className="w-4 h-4 text-hz-teal" />,
    },
    {
        label: "A Doha E-Commerce Platform",
        region: "Qatar · E-Commerce",
        icon: <ShoppingCart className="w-4 h-4 text-hz-teal" />,
    },
    {
        label: "A SaaS Infrastructure Company",
        region: "Gulf · SaaS",
        icon: <Cpu className="w-4 h-4 text-hz-teal" />,
    },
    {
        label: "A European Software Company",
        region: "Europe · Software",
        icon: <Globe className="w-4 h-4 text-hz-teal" />,
    },
];

export function TrustedBy() {
    return (
        <section className="py-10 border-b border-hz-border bg-hz-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">
                <MotionSection variant={blurIn}>
                    <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-hz-muted mb-8">
                        Trusted by teams across the Gulf & beyond
                    </p>
                </MotionSection>

                {/* Client cards: static grid — no scroll animation glitch */}
                <MotionSection variant={blurIn} delay={0.1}>
                    <div className="relative">
                        {/* Fade edges for depth */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-hz-primary to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-hz-primary to-transparent z-10 pointer-events-none" />

                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll-x gap-4 pr-4">
                                {[...clients, ...clients].map((client, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2.5 shrink-0 px-4 py-2.5 rounded-md border border-hz-border/60 bg-hz-card/20 hover:border-hz-teal/30 hover:bg-hz-teal/[0.03] transition-all duration-300 group cursor-default"
                                    >
                                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-hz-teal/10 flex items-center justify-center group-hover:bg-hz-teal/15 transition-colors">
                                            {client.icon}
                                        </div>
                                        <div>
                                            <p className="font-medium text-[11px] text-hz-text/80 whitespace-nowrap leading-tight">
                                                {client.label}
                                            </p>
                                            <p className="font-mono text-[9px] text-hz-muted/60 uppercase tracking-wider whitespace-nowrap">
                                                {client.region}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </MotionSection>

                <MotionSection variant={blurIn} delay={0.2}>
                    <p className="text-center text-[10px] text-slate-600 mt-6 font-mono tracking-wider">
                        Client names provided upon request · All references available under NDA
                    </p>
                </MotionSection>
            </div>
        </section>
    );
}
