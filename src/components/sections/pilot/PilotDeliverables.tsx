import { FileText, MousePointerClick, Map, Code } from 'lucide-react';

export function PilotDeliverables() {
    const deliverables = [
        {
            icon: <FileText className="w-8 h-8 text-hz-teal" />,
            title: "Requirements & Architecture",
            description: "Detailed system specifications, tech stack validation, and infrastructure diagrams."
        },
        {
            icon: <MousePointerClick className="w-8 h-8 text-hz-teal" />,
            title: "Clickable Prototype",
            description: "Interactive UI/UX mockup to visualize core user journeys and finalize design direction."
        },
        {
            icon: <Map className="w-8 h-8 text-hz-teal" />,
            title: "Full Tech Roadmap",
            description: "Strategic phase-by-phase scaling plan with estimated timelines and cost projections."
        },
        {
            icon: <Code className="w-8 h-8 text-hz-teal" />,
            title: "Code Handover",
            description: "All proof-of-concept code, configuration files, and documentation delivered via GitHub."
        }
    ];

    return (
        <section className="py-16 lg:py-20 border-b border-hz-border" id="deliverables">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex flex-col gap-4 text-center items-center">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase">
                        Deliverables
                    </span>
                    <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-hz-text">
                        Concrete Assets in{" "}
                        <span className="text-hz-teal relative inline-block">
                            14 Days
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                <path d="M2 6c40-5 80-5 100 0s60 4 96 0" stroke="#0ABFBC" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                            </svg>
                        </span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {deliverables.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col gap-4 rounded-sm border border-hz-border bg-hz-card p-8 hover:border-hz-teal/50 transition-colors shadow-lg shadow-black/20"
                        >
                            <div className="mb-2">
                                {item.icon}
                            </div>
                            <h3 className="font-sora text-lg font-bold text-hz-text">
                                {item.title}
                            </h3>
                            <p className="text-sm text-hz-muted leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
