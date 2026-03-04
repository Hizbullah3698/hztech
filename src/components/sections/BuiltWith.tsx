"use client";

import { MotionSection, blurIn } from "@/components/ui/Motion";
import { Database, Server, Cpu, Cloud, Layers, TerminalSquare, Box, Component } from 'lucide-react';

const technologies = [
    { name: "Next.js", icon: <Layers className="w-5 h-5 text-hz-teal" /> },
    { name: "React", icon: <Component className="w-5 h-5 text-hz-teal" /> },
    { name: "TypeScript", icon: <TerminalSquare className="w-5 h-5 text-hz-teal" /> },
    { name: "Node.js", icon: <Server className="w-5 h-5 text-hz-teal" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-hz-teal" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5 text-hz-teal" /> },
    { name: "Docker", icon: <Box className="w-5 h-5 text-hz-teal" /> },
    { name: "Redis", icon: <Cpu className="w-5 h-5 text-hz-teal" /> },
];

export function BuiltWith() {
    return (
        <section className="py-10 border-t border-hz-border relative overflow-hidden bg-hz-primary">
            <div className="absolute inset-0 bg-gradient-to-r from-hz-primary via-hz-teal/[0.01] to-hz-primary pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative">
                <MotionSection variant={blurIn}>
                    <p className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-hz-muted mb-10">
                        Enterprise-Grade Tech Stack
                    </p>
                </MotionSection>

                {/* Scrolling strip */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hz-primary to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hz-primary to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden group">
                        <div className="flex animate-scroll-x gap-8 pr-8 group-hover:[animation-play-state:paused] transition-all">
                            {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 shrink-0 px-6 py-3 rounded-md border border-white/5 bg-white/[0.02] hover:border-hz-teal/20 hover:bg-hz-teal/[0.05] transition-all duration-300"
                                >
                                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                                        {tech.icon}
                                    </div>
                                    <span className="font-mono text-sm font-semibold text-hz-text opacity-90 tracking-wide whitespace-nowrap">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
