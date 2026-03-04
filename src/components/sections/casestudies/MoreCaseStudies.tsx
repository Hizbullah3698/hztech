import { Lock } from 'lucide-react';
import Link from 'next/link';

export function MoreCaseStudies() {
    return (
        <section className="py-16 bg-[#0D0D0D] border-t border-hz-border text-center">
            <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-hz-teal/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(10,191,188,0.1)]">
                    <Lock className="w-8 h-8 text-hz-teal" />
                </div>

                <h2 className="text-3xl md:text-4xl font-sora font-bold text-hz-text mb-6">
                    More case studies in progress
                </h2>

                <p className="text-hz-muted text-lg leading-relaxed mb-10 font-inter">
                    We are currently engaged with enterprise clients across multiple regions. Additional case studies and client references are available under NDA upon request.
                </p>

                <Link
                    href="/contact"
                    className="group relative border border-hz-teal text-hz-teal hover:bg-hz-teal/10 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all font-mono shadow-[0_0_15px_rgba(10,191,188,0.1)] active:scale-[0.98] overflow-hidden"
                >
                    <span className="relative z-10">Request References</span>
                </Link>
            </div>
        </section>
    );
}
