export function ServicesHero() {
    return (
        <section className="relative pt-16 pb-16 border-b border-hz-border bg-hz-primary">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <span className="text-hz-teal text-xs font-bold tracking-[0.3em] font-mono uppercase mb-6 block">
                    What We Build
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight leading-tight text-hz-text mb-8">
                    Engineering Solutions Built for{" "}
                    <span className="text-hz-teal relative inline-block">
                        Enterprise Scale
                        <svg
                            className="absolute -bottom-2 left-0 w-full"
                            viewBox="0 0 300 12"
                            fill="none"
                        >
                            <path
                                d="M2 8c50-6 100-6 150 0s100 6 146 0"
                                stroke="#0ABFBC"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity="0.4"
                            />
                        </svg>
                    </span>
                </h1>
                <p className="text-hz-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-inter">
                    Every service is outcome-focused, senior-led, and built for long-term maintainability.
                </p>
            </div>
        </section>
    );
}
