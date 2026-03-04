import { ArrowLeftRight } from 'lucide-react';

export function TimezoneSection() {
    return (
        <section className="py-16 lg:py-20 border-b border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-hz-card rounded-sm border border-white/5 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl shadow-black/40">
                    <div className="flex-1 text-center lg:text-left">
                        <span className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase mb-4 block">
                            SYNCHRONIZED OPERATIONS
                        </span>
                        <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-hz-text mb-6">
                            We work your hours.
                        </h2>
                        <p className="text-slate-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Daily standups, same-day responses, and zero communication gaps. Our workflow is fully integrated with your timezone — whether you’re in London, Dubai, or New York.
                        </p>
                    </div>
                    <div className="flex-shrink-0 flex gap-4 md:gap-8 items-center justify-center">
                        <div className="text-center group">
                            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-hz-border flex flex-col items-center justify-center bg-hz-primary relative mb-4 transition-all duration-500 group-hover:border-hz-teal/30">
                                <span className="font-sora text-2xl md:text-3xl font-bold text-hz-text">PKT</span>
                                <div className="absolute inset-2 border border-hz-border border-t-transparent rounded-full opacity-50 transition-all duration-500 group-hover:rotate-180"></div>
                            </div>
                            <span className="text-sm font-medium text-hz-muted">Islamabad</span>
                        </div>

                        <div className="text-hz-teal pb-8 animate-pulse">
                            <ArrowLeftRight className="w-6 h-6 md:w-8 md:h-8 opacity-60" />
                        </div>

                        <div className="text-center group">
                            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-hz-teal flex flex-col items-center justify-center bg-hz-primary relative mb-4 shadow-[0_0_25px_rgba(10,191,188,0.15)] group-hover:shadow-[0_0_35px_rgba(10,191,188,0.25)] transition-all duration-500">
                                <span className="font-sora text-2xl md:text-3xl font-bold text-hz-text">YOUR TZ</span>
                                <div className="absolute inset-2 border border-hz-teal/40 rounded-full transition-all duration-1000 group-hover:rotate-90"></div>
                            </div>
                            <span className="text-sm font-bold text-hz-text">Your City</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
