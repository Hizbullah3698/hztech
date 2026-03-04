"use client";

import { useEffect, useState, useRef } from "react";
import { MotionSection, MotionStagger, MotionItem, blurIn } from "@/components/ui/Motion";

function useCountUp(target: number, duration: number = 1600) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const startTime = performance.now();
        function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
        }
        requestAnimationFrame(animate);
    }, [started, target, duration]);

    return { count, ref };
}

const stats = [
    {
        value: 4,
        suffix: "+",
        label: "Years Delivering",
        sublabel: "Commercial software",
        description: "Consistent commercial delivery since founding"
    },
    {
        value: 25,
        suffix: "+",
        label: "Projects Shipped",
        sublabel: "Production-grade",
        description: "From MVPs to enterprise-scale platforms"
    },
    {
        value: 99,
        suffix: "%",
        label: "Client Retention",
        sublabel: "Long-term partners",
        description: "Clients who return for follow-on engagements"
    },
    {
        value: 3,
        suffix: "+",
        label: "Timezone Windows",
        sublabel: "Gulf · Europe · Asia",
        description: "Aligned with Gulf, European & Asian business hours"
    },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
    const { count, ref } = useCountUp(stat.value);

    return (
        <div ref={ref} className="group relative flex flex-col items-center text-center px-4 py-6">
            {/* Subtle separator line on hover */}
            <div className="absolute inset-0 rounded-lg bg-hz-teal/0 group-hover:bg-hz-teal/[0.025] transition-colors duration-500" />

            <div className="relative">
                {/* Compact number — was text-5xl/6xl, now text-3xl/4xl */}
                <div className="font-sora font-extrabold text-3xl md:text-4xl tabular-nums tracking-tight leading-none mb-1 text-hz-text">
                    {count}
                    <span className="text-hz-teal">{stat.suffix}</span>
                </div>
                <p className="text-sm font-semibold text-hz-text/90 mb-0.5 mt-2">{stat.label}</p>
                <p className="text-[11px] font-mono uppercase tracking-widest text-hz-muted/70">{stat.sublabel}</p>
            </div>
        </div>
    );
}

export function StatsSection() {
    return (
        <section className="py-8 border-y border-hz-border bg-hz-card/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-hz-teal/[0.015] via-transparent to-hz-teal/[0.015] pointer-events-none" />
            <div className="max-w-5xl mx-auto px-6 relative">
                <MotionStagger className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-hz-border/40">
                    {stats.map((stat, idx) => (
                        <MotionItem key={idx}>
                            <StatCard stat={stat} />
                        </MotionItem>
                    ))}
                </MotionStagger>
            </div>
        </section>
    );
}
