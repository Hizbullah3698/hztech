export function FeaturedCaseStudy() {
    return (
        <section className="py-10 bg-hz-primary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm border-l-4 border-hz-teal border-y border-r border-hz-border bg-hz-card shadow-2xl">
                    {/* Abstract Data Flow Visualization side */}
                    <div className="relative min-h-[400px] border-b lg:border-b-0 lg:border-r border-hz-border bg-[#0D0D0D] p-12 flex flex-col items-center justify-center overflow-hidden">
                        <div
                            className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, #0ABFBC 1px, transparent 0)',
                                backgroundSize: '30px 30px'
                            }}
                        ></div>

                        <div className="relative z-10 w-full max-w-sm">
                            <div className="flex justify-between items-center mb-12">
                                <div className="h-1 bg-hz-teal/20 w-1/4 rounded"></div>
                                <div className="h-1.5 bg-hz-teal/50 w-2/4 rounded shadow-[0_0_10px_rgba(10,191,188,0.3)]"></div>
                                <div className="h-1 bg-hz-teal/20 w-1/4 rounded"></div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="h-12 border border-hz-teal/30 bg-hz-primary/80 rounded backdrop-blur-sm flex items-center px-4 shadow-[0_0_15px_rgba(10,191,188,0.1)]">
                                    <span className="w-2 h-2 rounded-full bg-hz-teal animate-pulse mr-3"></span>
                                    <div className="h-2 w-2/3 bg-hz-border rounded"></div>
                                </div>
                                <div className="h-12 border border-hz-border bg-hz-primary/50 rounded flex items-center px-4 opacity-50">
                                    <span className="w-2 h-2 rounded-full bg-hz-border mr-3"></span>
                                    <div className="h-2 w-1/2 bg-hz-border rounded"></div>
                                </div>
                                <div className="h-12 border border-hz-teal/30 bg-hz-primary/80 rounded backdrop-blur-sm flex items-center px-4 shadow-[0_0_15px_rgba(10,191,188,0.1)]">
                                    <span className="w-2 h-2 rounded-full bg-hz-teal animate-pulse mr-3"></span>
                                    <div className="h-2 w-3/4 bg-hz-border rounded"></div>
                                </div>
                            </div>

                            <div className="mt-12 w-full flex justify-center">
                                <div className="w-20 h-20 rounded-full border border-hz-teal/40 animate-[spin_10s_linear_infinite] border-t-transparent"></div>
                                <div className="absolute w-12 h-12 rounded-full border border-hz-teal/60 animate-[spin_6s_linear_infinite_reverse] border-b-transparent mt-4"></div>
                                <div className="absolute w-2 h-2 bg-hz-teal rounded-full mt-9 shadow-[0_0_15px_rgba(10,191,188,1)]"></div>
                            </div>
                        </div>
                        <p className="absolute bottom-6 font-mono text-xs text-hz-teal uppercase tracking-widest opacity-60">System Architecture V2.0</p>
                    </div>

                    {/* Text and Detail Side */}
                    <div className="p-10 md:p-14 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-[10px] font-bold tracking-widest text-hz-muted uppercase">AUTOMATION</span>
                            <span className="w-1 h-1 rounded-full bg-hz-border"></span>
                            <span className="font-mono text-[10px] font-bold tracking-widest text-hz-muted uppercase">KUWAIT</span>
                            <span className="w-1 h-1 rounded-full bg-hz-border"></span>
                            <span className="font-mono text-[10px] font-bold tracking-widest text-hz-muted uppercase">2024</span>
                        </div>

                        <h2 className="text-3xl font-sora font-bold text-hz-text mb-6">
                            Automated Data Extraction System for a Regional Classifieds Platform
                        </h2>

                        <p className="text-hz-muted leading-relaxed mb-8 font-inter">
                            Built a production-grade scraper extracting listings across multiple categories from a Kuwait classifieds platform. Data structured into a relational database where each seller becomes a unique user profile identified by phone number.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-12">
                            <span className="font-mono text-xs font-medium px-3 py-1 border border-hz-teal text-hz-teal rounded-sm bg-hz-teal/5">PYTHON</span>
                            <span className="font-mono text-xs font-medium px-3 py-1 border border-hz-teal text-hz-teal rounded-sm bg-hz-teal/5">PLAYWRIGHT</span>
                            <span className="font-mono text-xs font-medium px-3 py-1 border border-hz-teal text-hz-teal rounded-sm bg-hz-teal/5">SQLITE</span>
                            <span className="font-mono text-xs font-medium px-3 py-1 border border-hz-teal text-hz-teal rounded-sm bg-hz-teal/5">REST API</span>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-12 border-t border-b border-hz-border py-6">
                            <div>
                                <p className="text-3xl font-sora font-extrabold text-hz-teal mb-1">25k+</p>
                                <p className="font-mono text-[10px] text-hz-muted uppercase tracking-wider">LISTINGS EXTRACTED</p>
                            </div>
                            <div>
                                <p className="text-3xl font-sora font-extrabold text-hz-teal mb-1">100%</p>
                                <p className="font-mono text-[10px] text-hz-muted uppercase tracking-wider">DATA ACCURACY</p>
                            </div>
                            <div>
                                <p className="text-3xl font-sora font-extrabold text-hz-teal mb-1">14d</p>
                                <p className="font-mono text-[10px] text-hz-muted uppercase tracking-wider">DELIVERY TIME</p>
                            </div>
                        </div>

                        <button className="group relative bg-hz-teal text-hz-primary px-8 py-4 rounded-sm font-bold flex items-center justify-center transition-all active:scale-[0.98] overflow-hidden text-lg w-fit">
                            <span className="relative z-10 flex items-center gap-2">
                                Read Full Case Study
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
