import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function ServicesCta() {
    return (
        <section className="py-24 bg-hz-teal/5 relative overflow-hidden border-t border-hz-border">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 mb-8 bg-hz-teal/10 px-4 py-2 rounded-sm border border-hz-teal/20 shadow-[0_0_15px_rgba(10,191,188,0.1)]">
                    <Rocket className="w-4 h-4 text-hz-teal" />
                    <span className="text-hz-teal text-xs font-bold tracking-widest uppercase font-mono">
                        Start Smarter
                    </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold font-sora mb-10 leading-tight text-hz-text">
                    Not sure which service fits your project?
                </h2>

                <p className="text-hz-muted text-lg mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
                    Start with a 2-week Discovery Sprint and we'll map out your technical architecture, timeline, and budget together.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/pilot"
                        className="bg-hz-teal hover:bg-hz-teal/90 text-hz-primary px-8 py-4 rounded-sm text-sm font-black tracking-widest uppercase transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_5px_15px_rgba(10,191,188,0.2)] font-mono text-center w-full sm:w-auto"
                    >
                        Start Discovery Sprint
                    </Link>
                    <Link
                        href="/contact"
                        className="border border-hz-teal/40 hover:border-hz-teal text-hz-text px-8 py-4 rounded-sm text-sm font-black tracking-widest uppercase transition-all transform hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center font-mono hover:bg-hz-teal/5 text-center w-full sm:w-auto"
                    >
                        Speak to an Engineer
                    </Link>
                </div>
            </div>
        </section>
    );
}
