"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { MotionSection, MotionStagger, MotionItem, fadeUp, blurIn } from "@/components/ui/Motion";

function useCountUp(target: number, duration: number = 2000) {
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
            { threshold: 0.5 }
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
            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        }

        requestAnimationFrame(animate);
    }, [started, target, duration]);

    return { count, ref };
}

const stats = [
    { value: 4, suffix: "+", label: "Years Delivering", sublabel: "Commercial software" },
    { value: 25, suffix: "+", label: "Projects Shipped", sublabel: "Production-grade" },
    { value: 99, suffix: "%", label: "Client Retention", sublabel: "Long-term partners" },
    { value: 3, suffix: "+", label: "Timezone Windows", sublabel: "Global coverage" },
];

function StatCard({ stat, idx }: { stat: typeof stats[0]; idx: number }) {
    const { count, ref } = useCountUp(stat.value);

    return (
        <div
            ref={ref}
            className="text-center group relative"
        >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-hz-teal/[0.03] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-4" />
            <div className="relative">
                <div className="text-5xl md:text-6xl font-sora font-extrabold text-hz-text mb-3 tabular-nums tracking-tight">
                    {count}
                    <span className="text-hz-teal">{stat.suffix}</span>
                </div>
                <p className="text-sm font-bold text-hz-text mb-1">{stat.label}</p>
                <p className="text-xs text-hz-muted font-mono uppercase tracking-wider">{stat.sublabel}</p>
            </div>
        </div>
    );
}

export function StatsSection() {
    return (
        <section className="py-12 border-y border-hz-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-hz-teal/[0.02] via-transparent to-hz-teal/[0.02]" />
            <div className="max-w-7xl mx-auto px-6 relative">
                <MotionStagger className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, idx) => (
                        <MotionItem key={idx}>
                            <StatCard stat={stat} idx={idx} />
                        </MotionItem>
                    ))}
                </MotionStagger>
            </div>
        </section>
    );
}
