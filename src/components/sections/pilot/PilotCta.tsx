import Link from "next/link";

export function PilotCta() {
    return (
        <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-hz-teal/5"></div>
            <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
                <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-hz-text flex flex-col items-center gap-2 mb-6">
                    Ready to de-risk your project?
                    <svg className="w-64" viewBox="0 0 200 8" fill="none">
                        <path d="M2 6c40-5 80-5 100 0s60 4 96 0" stroke="#0ABFBC" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                    </svg>
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Start with a structured 2-week sprint. Full handover if you choose not to continue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="group relative bg-hz-teal text-hz-primary px-8 py-4 rounded-sm font-bold transition-all active:scale-[0.98] overflow-hidden text-lg"
                    >
                        <span className="relative z-10">Secure Your Sprint Slot</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-transparent border border-white/15 text-hz-text hover:border-hz-teal/50 hover:bg-hz-teal/5 px-8 py-4 rounded-sm font-bold transition-all duration-300 text-lg"
                    >
                        Book a Call First
                    </Link>
                </div>
            </div>
        </section>
    );
}
