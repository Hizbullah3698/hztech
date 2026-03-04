import { Globe, Smartphone, Webhook } from 'lucide-react';

const additionalCases = [
    {
        icon: Globe,
        tag: "SaaS Platform",
        title: "Multi-Tenant Dashboard for a Dubai PropTech Startup",
        description: "Built a role-based analytics dashboard handling 50K+ monthly property listings with real-time data sync and automated reporting.",
        tech: ["Next.js", "Supabase", "Tailwind CSS"],
        outcome: "Reduced manual reporting time by 80%",
    },
    {
        icon: Smartphone,
        tag: "Logistics · Mobile App",
        title: "Cross-Platform Delivery Tracking App for a Doha Logistics Firm",
        description: "Developed a Flutter-based mobile app for real-time fleet tracking, driver assignment, and customer notifications across iOS and Android.",
        tech: ["Flutter", "Firebase", "Google Maps API"],
        outcome: "Launched on both stores in 8 weeks",
    },
    {
        icon: Webhook,
        tag: "E-Commerce · API Integration",
        title: "Payment Gateway Integration for a Kuwait E-Commerce Platform",
        description: "Architected a versioned REST API connecting multiple GCC payment providers with PCI-compliant tokenization and automated reconciliation.",
        tech: ["Node.js", "NestJS", "PostgreSQL"],
        outcome: "99.9% uptime since launch",
    },
];

export function AdditionalCaseStudies() {
    return (
        <section className="py-12 border-t border-hz-border bg-hz-primary">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-sora font-bold text-hz-text mb-4">Additional Projects</h2>
                <p className="text-hz-muted mb-12 max-w-2xl">
                    Select project summaries from our client portfolio. Full details available under NDA.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {additionalCases.map((cs, idx) => {
                        const Icon = cs.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-hz-card/50 border border-hz-border rounded-sm p-8 hover:border-hz-teal/50 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(10,191,188,0.05)] hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-hz-teal/0 to-transparent group-hover:via-hz-teal/50 transition-all duration-700"></div>

                                <div className="flex items-center gap-3 mb-6">
                                    <Icon className="w-6 h-6 text-hz-teal group-hover:scale-110 transition-transform duration-300" />
                                    <span className="font-mono text-[10px] text-hz-teal uppercase tracking-widest border border-hz-teal/30 bg-hz-teal/5 px-2 py-0.5 rounded-sm">
                                        {cs.tag}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-hz-text mb-3 font-sora leading-tight group-hover:text-hz-teal transition-colors duration-300">
                                    {cs.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {cs.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cs.tech.map((t) => (
                                        <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-sm border border-hz-border text-slate-400 bg-hz-primary">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-hz-border mt-auto">
                                    <p className="text-xs font-mono text-hz-teal font-bold uppercase tracking-wider flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-hz-teal animate-pulse"></span>
                                        {cs.outcome}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
