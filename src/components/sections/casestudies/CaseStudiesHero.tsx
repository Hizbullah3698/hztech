export function CaseStudiesHero() {
    return (
        <section className="pt-8 sm:pt-12 lg:pt-20 pb-10 lg:pb-16 border-b border-white/5 bg-hz-primary text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-72 h-72 bg-hz-teal/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
                <span className="font-mono inline-block text-hz-teal font-bold tracking-[0.2em] text-xs mb-4 uppercase">
                    Our Work
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold text-hz-text leading-[1.1] mb-5">
                    Engineering Proof,<br />
                    <span className="text-hz-teal">Not Just Promises</span>
                </h1>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    Real projects. Real outcomes. Additional references available under NDA for qualified enterprise partners.
                </p>
            </div>
        </section>
    );
}
