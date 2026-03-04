import { notFound } from "next/navigation";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = services.find((s) => s.slug === resolvedParams.slug);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | HZ Tech Engineering Studio`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = services.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="flex flex-col min-h-screen bg-hz-primary">
            {/* Service Hero */}
            <section className="relative pt-32 pb-20 border-b border-hz-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-hz-teal/[0.03] to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="inline-flex items-center gap-3 bg-hz-teal/10 border border-hz-teal/20 px-4 py-2 rounded-sm mb-8">
                        <Icon className="w-5 h-5 text-hz-teal" />
                        <span className="font-mono text-hz-teal text-sm font-bold uppercase tracking-widest">
                            Core Service
                        </span>
                    </div>

                    <h1 className="font-sora text-4xl md:text-5xl lg:text-5xl font-extrabold text-hz-text leading-[1.1] mb-6 max-w-4xl">
                        {service.title}
                    </h1>

                    <p className="text-xl text-hz-muted mb-10 max-w-2xl leading-relaxed">
                        {service.heroSubline || service.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="group relative bg-hz-teal text-hz-primary px-8 py-4 rounded-sm text-sm font-bold transition-all overflow-hidden inline-flex items-center gap-3 justify-center hover:shadow-[0_0_20px_rgba(10,191,188,0.25)]"
                        >
                            <span className="relative z-10">Start a Project</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Problem / Solution Grid */}
            <section className="py-24 border-b border-hz-border bg-[#0b0c10]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-sora font-bold">The Problem</h2>
                        <div className="p-8 rounded-lg bg-red-900/10 border border-red-500/20">
                            <p className="text-lg text-red-200/80 leading-relaxed">
                                {service.problem}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-sora font-bold">Our Solution</h2>
                        <div className="p-8 rounded-lg bg-hz-teal/10 border border-hz-teal/20">
                            <p className="text-lg text-hz-teal/90 leading-relaxed font-medium">
                                {service.solution}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology & Tech Stack */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-sora font-bold mb-10">Delivery Methodology</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-hz-teal/10 p-3 rounded-md h-fit">
                                    <CheckCircle2 className="w-6 h-6 text-hz-teal" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Guaranteed Outcome</h3>
                                    <p className="text-hz-muted">{service.outcome}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-hz-teal/10 p-3 rounded-md h-fit">
                                    <CheckCircle2 className="w-6 h-6 text-hz-teal" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Timeline Expectations</h3>
                                    <p className="text-hz-muted">Delivery typically in {service.timeline}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-hz-teal/10 p-3 rounded-md h-fit">
                                    <CheckCircle2 className="w-6 h-6 text-hz-teal" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Project Governance</h3>
                                    <p className="text-hz-muted">{service.governance}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-hz-card/30 border border-hz-border rounded-xl p-10">
                        <h3 className="text-2xl font-sora font-bold mb-8">Technical Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag) => (
                                <span key={tag} className="px-4 py-2 rounded-sm bg-hz-primary border border-white/5 font-mono text-sm tracking-widest text-hz-teal">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="pt-12 pb-24">
                <FinalCta />
            </div>
        </div>
    );
}
