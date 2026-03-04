export function ProcessHero() {
    return (
        <section className="relative pt-8 sm:pt-12 lg:pt-20 pb-10 lg:pb-16 overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-72 h-72 bg-hz-teal/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    <span className="font-mono inline-block text-hz-teal font-bold tracking-[0.2em] text-xs mb-4 uppercase">
                        How We Work
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold text-hz-text leading-[1.1] mb-5">
                        A Process Built for{" "}
                        <span className="text-hz-teal">Enterprise Confidence</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
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
