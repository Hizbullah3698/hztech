import Link from "next/link";

export function PilotHero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,191,188,0.08),transparent_50%)]"></div>
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-col gap-6">
                        <span className="font-mono inline-block text-hz-teal font-bold tracking-[0.2em] text-xs uppercase">
                            Pilot Program v1.0
                        </span>
                        <h1 className="font-sora text-4xl md:text-5xl font-extrabold leading-[1.1] text-hz-text">
                            2-Week Paid <br />
                            <span className="text-hz-teal relative inline-block">
                                Discovery Sprint
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                    <path d="M2 8c50-6 100-6 150 0s100 6 146 0" stroke="#0ABFBC" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                                </svg>
                            </span>
                        </h1>
                        <p className="max-w-xl text-xl text-slate-400 leading-relaxed mb-4">
                            The lowest-risk way to evaluate HZ Tech as your long-term technology
                            partner. A high-velocity engagement designed to de-risk your
                            roadmap.
                        </p>
                        <div className="flex items-center gap-4 py-2 mb-4">
                            <span className="font-mono text-xl font-bold text-hz-text bg-hz-teal/10 px-4 py-2 border border-hz-teal/20 rounded-sm">
                                $1,400 <span className="text-hz-teal text-sm font-normal tracking-[0.1em] uppercase ml-2">Fixed Scope</span>
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mb-2">
                            <Link
                                href="/contact"
                                className="group relative bg-hz-teal text-hz-primary px-8 py-4 rounded-sm font-bold transition-all active:scale-[0.98] overflow-hidden text-center text-sm uppercase tracking-widest"
                            >
                                <span className="relative z-10">Secure Your Sprint Slot</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-transparent border border-white/15 text-hz-text hover:border-hz-teal/50 hover:bg-hz-teal/5 px-8 py-4 rounded-sm font-bold transition-all duration-300 text-center text-sm uppercase tracking-widest"
                            >
                                Book a Call First
                            </Link>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-hz-border bg-hz-primary shadow-2xl">
                        <div className="absolute top-0 flex w-full items-center gap-1.5 border-b border-hz-border bg-white/5 px-4 py-2">
                            <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                            <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                            <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                            <div className="ml-4 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                                discovery_environment.sh
                            </div>
                        </div>
                        <div className="flex h-full flex-col justify-center p-8 mt-4">
                            <div className="space-y-4 font-mono text-sm text-hz-muted">
                                <p>
                                    <span className="text-hz-teal">&gt;</span> INITIALIZING_SPRINT_CORE
                                </p>
                                <p>
                                    <span className="text-hz-teal">&gt;</span> DEPLOYING:{" "}
                                    <span className="text-hz-text">ARCHITECTURE_DOC</span>
                                </p>
                                <p>
                                    <span className="text-hz-teal">&gt;</span> DEPLOYING:{" "}
                                    <span className="text-hz-text">UI_PROTOTYPE_v1</span>
                                </p>
                                <p>
                                    <span className="text-hz-teal">&gt;</span> STATUS:{" "}
                                    <span className="text-green-400 italic">READY_FOR_ENGAGEMENT</span>
                                </p>
                                <div className="h-32 w-full rounded-sm border border-hz-teal/20 bg-hz-teal/5 p-4 flex items-end">
                                    <div className="flex w-full items-end gap-1">
                                        <div className="h-8 w-full bg-hz-teal/20"></div>
                                        <div className="h-12 w-full bg-hz-teal/30"></div>
                                        <div className="h-20 w-full bg-hz-teal/40"></div>
                                        <div className="h-16 w-full bg-hz-teal/50"></div>
                                        <div className="h-24 w-full bg-hz-teal/60"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
