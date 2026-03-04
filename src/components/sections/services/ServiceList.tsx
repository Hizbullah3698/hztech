import Link from 'next/link';
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export function ServiceList() {
    return (
        <section className="divide-y divide-hz-border bg-hz-primary">
            {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                    <Link href={`/services/${service.slug}`} key={idx} className="block py-8 sm:py-10 lg:py-12 hover:bg-hz-teal/[0.02] transition-colors group cursor-pointer relative">
                        <div className="absolute top-1/2 -translate-y-1/2 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 hidden lg:block">
                            <div className="bg-hz-teal/10 p-3 rounded-full border border-hz-teal/20">
                                <ArrowRight className="w-6 h-6 text-hz-teal" />
                            </div>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 lg:items-start lg:pr-16">

                                {/* Left Column (Icon, Title, Desc, Tags) */}
                                <div className="lg:w-1/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Icon className="text-hz-teal w-8 h-8 group-hover:-translate-y-1 transition-transform duration-300" />
                                        <h2 className="text-2xl font-bold font-sora text-hz-text group-hover:text-hz-teal transition-colors">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="text-hz-muted mb-6 leading-relaxed bg-hz-primary p-0">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-sm border border-hz-teal/30 text-hz-teal bg-hz-teal/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column (Problem, Solution, Outcome) */}
                                <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-hz-teal/80 uppercase tracking-widest font-mono">Problem</h4>
                                        <p className="text-sm leading-relaxed text-slate-300">
                                            {service.problem}
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-hz-teal/80 uppercase tracking-widest font-mono">Solution</h4>
                                        <p className="text-sm leading-relaxed text-slate-300">
                                            {service.solution}
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-hz-teal/80 uppercase tracking-widest font-mono">Outcome</h4>
                                        <p className="text-sm leading-relaxed text-slate-300 font-medium">
                                            {service.outcome}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom (Timeline, Governance) */}
                            <div className="mt-6 pt-5 border-t border-hz-border flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-[10px] uppercase tracking-[0.1em] font-bold text-slate-500 font-mono">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5 text-hz-muted flex-shrink-0" />
                                    <span>Timeline: {service.timeline}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-3.5 h-3.5 text-hz-muted flex-shrink-0" />
                                    <span>Governance: {service.governance}</span>
                                </div>
                                <div className="sm:ml-auto flex items-center gap-2 text-hz-teal group-hover:translate-x-1 transition-transform lg:hidden">
                                    View Details <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </section>
    );
}
