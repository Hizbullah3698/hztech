import { Check, X } from 'lucide-react';

export function CaseStudyDetails() {
    return (
        <section className="py-12 bg-hz-primary border-t border-hz-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Column: Context & Problem */}
                    <div className="lg:col-span-5 space-y-16">
                        <div>
                            <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase mb-4">
                                Client Context
                            </h3>
                            <p className="text-xl font-sora font-semibold text-hz-text leading-snug">
                                Regional classifieds platform (Middle East) aiming to aggregate regional market data for competitive analysis.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase mb-6">
                                The Problem
                            </h3>
                            <p className="text-hz-muted leading-relaxed mb-6">
                                Manual data collection was slow, unstructured, and prone to human error. The platform featured complex anti-bot measures and dynamic content rendering that traditional scraping tools failed to handle.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-300 text-sm">Manual entry took 40+ hours per week.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-300 text-sm">High churn in data accuracy due to UI updates.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-300 text-sm">No unified database of seller histories.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase mb-6">
                                Timeline
                            </h3>
                            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-hz-border">
                                <div className="relative pl-10">
                                    <span className="absolute left-[8px] top-1.5 w-2 h-2 rounded-full bg-hz-primary border-2 border-hz-teal z-10 box-content"></span>
                                    <p className="font-mono text-xs font-bold text-hz-teal tracking-widest mb-1 uppercase">Discovery (Day 1-3)</p>
                                    <p className="text-sm text-hz-muted">Infrastructure analysis & anti-bot bypass strategy.</p>
                                </div>
                                <div className="relative pl-10">
                                    <span className="absolute left-[8px] top-1.5 w-2 h-2 rounded-full bg-hz-primary border-2 border-hz-teal z-10 box-content"></span>
                                    <p className="font-mono text-xs font-bold text-hz-teal tracking-widest mb-1 uppercase">Build (Day 4-10)</p>
                                    <p className="text-sm text-hz-muted">Development of Playwright engine and SQLite schema.</p>
                                </div>
                                <div className="relative pl-10">
                                    <span className="absolute left-[8px] top-1.5 w-2 h-2 rounded-full bg-hz-primary border-2 border-hz-teal z-10 box-content"></span>
                                    <p className="font-mono text-xs font-bold text-hz-teal tracking-widest mb-1 uppercase">Testing & Delivery (Day 11-14)</p>
                                    <p className="text-sm text-hz-muted">Data validation, API integration, and final handover.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Solution & Architecture */}
                    <div className="lg:col-span-7">
                        <div className="bg-hz-card border border-hz-border rounded-sm p-8 md:p-12 h-full flex flex-col shadow-lg shadow-black/20">

                            <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase mb-8">
                                Architecture Overview
                            </h3>

                            <div className="space-y-4 mb-16 flex-grow">
                                <div className="bg-hz-primary border border-hz-border p-4 rounded flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-hz-teal text-xl">terminal</span>
                                        <span className="font-mono text-sm font-bold text-hz-text tracking-widest">PLAYWRIGHT ENGINE</span>
                                    </div>
                                    <span className="material-symbols-outlined text-hz-muted group-hover:text-hz-teal transition-colors">arrow_forward</span>
                                </div>
                                <div className="bg-hz-primary border border-hz-border p-4 rounded flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-hz-teal text-xl">account_tree</span>
                                        <span className="font-mono text-sm font-bold text-hz-text tracking-widest">DATA PARSER</span>
                                    </div>
                                    <span className="material-symbols-outlined text-hz-muted group-hover:text-hz-teal transition-colors">arrow_forward</span>
                                </div>
                                <div className="bg-hz-primary border border-hz-border p-4 rounded flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-hz-teal text-xl">database</span>
                                        <span className="font-mono text-sm font-bold text-hz-text tracking-widest">SQLITE DATABASE</span>
                                    </div>
                                    <span className="material-symbols-outlined text-hz-muted group-hover:text-hz-teal transition-colors">arrow_forward</span>
                                </div>
                                <div className="bg-hz-teal/10 border border-hz-teal/30 p-4 rounded flex items-center gap-4 mt-6">
                                    <div className="w-6 h-6 rounded bg-hz-teal/20 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-hz-teal" />
                                    </div>
                                    <span className="font-mono text-xs font-bold text-hz-teal tracking-widest">STRUCTURED OUTPUT</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase mb-4">
                                    Outcome
                                </h3>
                                <p className="text-hz-muted text-sm leading-relaxed mb-8">
                                    The solution delivered 25,000+ verified listings. Seller profiles are now automatically generated from phone numbers, providing a historical view of listings per seller. Clean, structured data is provided via a local REST API.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 group relative border border-hz-border hover:bg-white/5 text-hz-text px-6 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all font-mono text-center active:scale-[0.98] overflow-hidden">
                                        <span className="relative z-10 w-full text-center">Download PDF</span>
                                    </button>
                                    <button className="flex-1 group relative bg-hz-teal text-hz-primary px-6 py-4 rounded-sm font-bold transition-all active:scale-[0.98] overflow-hidden text-xs uppercase tracking-widest text-center">
                                        <span className="relative z-10 w-full text-center">Discuss Project</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
