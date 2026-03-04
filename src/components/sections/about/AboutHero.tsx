import React from 'react';

export function AboutHero() {
    return (
        <section className="pt-32 pb-16 lg:pb-20 border-b border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-hz-teal/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <span className="font-mono inline-block text-hz-teal font-bold tracking-[0.2em] text-xs uppercase mb-6">
                    ABOUT HZ TECH
                </span>
                <h1 className="font-sora text-4xl md:text-5xl font-extrabold max-w-4xl text-hz-text leading-[1.1] mb-8">
                    Built for Enterprise.<br />
                    <span className="text-hz-teal relative inline-block">
                        Based in Islamabad.
                        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                            <path d="M2 8c50-6 100-6 150 0s100 6 146 0" stroke="#0ABFBC" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                        </svg>
                    </span>
                </h1>
                <p className="max-w-xl text-xl text-slate-400 leading-relaxed">
                    A senior-led engineering studio delivering production-grade software to technology companies across Europe, Middle East, Asia, and the Americas.
                </p>
            </div>
        </section>
    );
}
