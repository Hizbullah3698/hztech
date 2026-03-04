import { ArrowRight } from 'lucide-react';

export function PilotTimeline() {
    return (
        <section className="py-16 lg:py-20 bg-hz-primary" id="timeline">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mb-12 flex flex-col items-center gap-4 text-center">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase">
                        Timeline
                    </span>
                    <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-hz-text">
                        The 14-Day Velocity
                    </h2>
                </div>
                <div className="relative flex flex-col gap-12 before:absolute before:left-8 before:top-2 before:h-full before:w-px before:bg-hz-border lg:flex-row lg:gap-0 lg:before:left-0 lg:before:top-1/2 lg:before:h-px lg:before:w-full">
                    {/* Week 1 */}
                    <div className="relative flex-1 px-12 lg:px-0 lg:pt-12">
                        <div className="absolute left-6 top-1.5 h-4 w-4 rounded-full border-4 border-hz-primary bg-hz-teal lg:-top-2 lg:left-1/2 lg:-ml-2 shadow-[0_0_10px_rgba(10,191,188,0.5)]"></div>
                        <div className="flex flex-col gap-2 lg:items-center lg:text-center">
                            <span className="font-mono text-[10px] font-bold tracking-widest text-hz-teal uppercase">
                                Week 01
                            </span>
                            <h3 className="font-sora text-xl font-bold text-hz-text">
                                Discovery & Architecture
                            </h3>
                            <p className="text-sm text-hz-muted">
                                Alignment workshops, user flow mapping, and core technology selection.
                            </p>
                        </div>
                    </div>
                    {/* Transition */}
                    <div className="hidden lg:flex flex-[0.5] items-center justify-center pt-12">
                        <ArrowRight className="text-hz-border w-6 h-6" />
                    </div>
                    {/* Week 2 */}
                    <div className="relative flex-1 px-12 lg:px-0 lg:pt-12">
                        <div className="absolute left-6 top-1.5 h-4 w-4 rounded-full border-4 border-hz-primary bg-hz-teal lg:-top-2 lg:left-1/2 lg:-ml-2 shadow-[0_0_10px_rgba(10,191,188,0.5)]"></div>
                        <div className="flex flex-col gap-2 lg:items-center lg:text-center">
                            <span className="font-mono text-[10px] font-bold tracking-widest text-hz-teal uppercase">
                                Week 02
                            </span>
                            <h3 className="font-sora text-xl font-bold text-hz-text">
                                Build & Handover
                            </h3>
                            <p className="text-sm text-hz-muted">
                                High-fidelity prototyping, technical audit, and final roadmap presentation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
