"use client";

import { MotionSection, MotionStagger, MotionItem, blurIn } from "@/components/ui/Motion";
import {
    Database, Server, Cpu, Cloud, Layers, TerminalSquare,
    Box, Component, Smartphone, Code2, GitBranch, Shield
} from 'lucide-react';

const categories = [
    {
        label: "Frontend",
        color: "from-blue-500/10 to-transparent",
        border: "border-blue-500/20",
        dot: "bg-blue-400",
        items: [
            { name: "Next.js", icon: <Layers className="w-4 h-4" /> },
            { name: "React", icon: <Component className="w-4 h-4" /> },
            { name: "TypeScript", icon: <TerminalSquare className="w-4 h-4" /> },
            { name: "Tailwind CSS", icon: <Code2 className="w-4 h-4" /> },
        ],
    },
    {
        label: "Backend",
        color: "from-hz-teal/10 to-transparent",
        border: "border-hz-teal/20",
        dot: "bg-hz-teal",
        items: [
            { name: "Node.js", icon: <Server className="w-4 h-4" /> },
            { name: "NestJS", icon: <Code2 className="w-4 h-4" /> },
            { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
            { name: "REST / GraphQL", icon: <GitBranch className="w-4 h-4" /> },
        ],
    },
    {
        label: "Mobile",
        color: "from-purple-500/10 to-transparent",
        border: "border-purple-500/20",
        dot: "bg-purple-400",
        items: [
            { name: "Flutter", icon: <Smartphone className="w-4 h-4" /> },
            { name: "React Native", icon: <Component className="w-4 h-4" /> },
            { name: "Firebase", icon: <Cpu className="w-4 h-4" /> },
            { name: "Push Notifications", icon: <Shield className="w-4 h-4" /> },
        ],
    },
    {
        label: "Infrastructure",
        color: "from-orange-500/10 to-transparent",
        border: "border-orange-500/20",
        dot: "bg-orange-400",
        items: [
            { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
            { name: "Docker", icon: <Box className="w-4 h-4" /> },
            { name: "Redis", icon: <Cpu className="w-4 h-4" /> },
            { name: "CI / CD Pipelines", icon: <GitBranch className="w-4 h-4" /> },
        ],
    },
];

export function BuiltWith() {
    return (
        <section className="py-14 px-6 max-w-7xl mx-auto border-t border-hz-border/40">
            {/* Header */}
            <MotionSection variant={blurIn}>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div>
                        <span className="text-hz-teal text-[10px] font-bold tracking-[0.3em] font-mono uppercase mb-3 block">
                            Our Arsenal
                        </span>
                        <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-hz-text">
                            Built With Enterprise-Grade Stack
                        </h2>
                    </div>
                    {/* Agile badge */}
                    <div className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2 rounded-lg border border-hz-teal/25 bg-hz-teal/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-hz-teal animate-pulse" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-hz-teal font-bold whitespace-nowrap">
                            Agile · 1-Week Sprints
                        </span>
                    </div>
                </div>
            </MotionSection>

            {/* Category cards grid */}
            <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((cat, ci) => (
                    <MotionItem key={ci}>
                        <div className={`relative rounded-xl border ${cat.border} bg-hz-card/20 overflow-hidden p-5 hover:bg-hz-card/40 transition-all duration-300 group h-full`}>
                            {/* Category gradient accent */}
                            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${cat.color}`} />
                            <div className={`absolute inset-0 bg-gradient-to-b ${cat.color} opacity-30 pointer-events-none`} />

                            <div className="relative">
                                {/* Category header */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
                                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-hz-muted/80 font-semibold">
                                        {cat.label}
                                    </p>
                                </div>

                                {/* Tech items */}
                                <div className="flex flex-col gap-1.5">
                                    {cat.items.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="flex items-center gap-2.5 rounded-md px-3 py-2 bg-white/[0.025] border border-white/[0.06] group-hover:border-white/10 transition-colors duration-200"
                                        >
                                            <span className="text-hz-muted/60 group-hover:text-hz-teal/70 transition-colors duration-200 flex-shrink-0">
                                                {tech.icon}
                                            </span>
                                            <span className="font-mono text-[11px] font-medium text-hz-text/75 tracking-wide">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </MotionItem>
                ))}
            </MotionStagger>

            {/* Bottom note */}
            <MotionSection variant={blurIn} delay={0.3}>
                <p className="text-center font-mono text-[10px] text-hz-muted/50 uppercase tracking-widest mt-8">
                    Stack selected per project · No lock-in · Full code ownership on handover
                </p>
            </MotionSection>
        </section>
    );
}
