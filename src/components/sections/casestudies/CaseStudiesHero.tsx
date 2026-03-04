export function CaseStudiesHero() {
    return (
        <section className="pt-32 pb-16 lg:pb-24 border-b border-white/5 bg-hz-primary text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-hz-teal/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <span className="font-mono inline-block text-hz-teal font-bold tracking-[0.2em] text-xs mb-6 uppercase">
                    Our Work
                </span>
                <h1 className="text-4xl lg:text-5xl font-sora font-extrabold text-hz-text leading-[1.1] mb-8">
                    Engineering Proof,<br />
                    <span className="text-hz-teal relative inline-block">
                        Not Just Promises
                        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                            <path d="M2 8c50-6 100-6 150 0s100 6 146 0" stroke="#0ABFBC" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                        </svg>
                    </span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    Real projects. Real outcomes. Additional references available under NDA for qualified enterprise partners.
                </p>
            </div>
        </section>
    );
}
