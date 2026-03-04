import React from 'react';

export function AboutHero() {
    return (
        <section className="pt-8 sm:pt-12 md:pt-20 lg:pt-24 pb-12 lg:pb-20 border-b border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-hz-teal/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <span className="font-mono inline-block text-hz-teal font-bold tracking-[0.2em] text-xs uppercase mb-4">
                    ABOUT HZ TECH
                </span>
                <h1 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-4xl text-hz-text leading-[1.1] mb-5">
                    Built for Enterprise.<br />
                    <span className="text-hz-teal">
                        Based in Islamabad.
                    </span>
                </h1>
                <p className="max-w-xl text-base md:text-lg text-slate-400 leading-relaxed">
                    A senior-led engineering studio delivering production-grade software to technology companies across the Gulf, US, and Europe.
                </p>
            </div>
        </section>
    );
}
