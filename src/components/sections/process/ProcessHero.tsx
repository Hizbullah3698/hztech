export function ProcessHero() {
    return (
        <section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-hz-teal/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    <span className="font-mono inline-block text-hz-teal font-bold tracking-[0.2em] text-xs mb-6 uppercase">
                        How We Work
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-sora font-extrabold text-hz-text leading-[1.1] mb-8">
                        A Process Built for{" "}
                        <span className="text-hz-teal relative inline-block">
                            Enterprise Confidence
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                <path d="M2 8c50-6 100-6 150 0s100 6 146 0" stroke="#0ABFBC" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                        Every engagement follows a structured delivery framework — no surprises, no scope creep, no ambiguity.
                    </p>
                </div>
            </div>
            {/* Decorative grid background */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #0ABFBC 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            ></div>
        </section>
    );
}
