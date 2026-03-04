import { Terminal, Globe, Handshake } from 'lucide-react';

export function PhilosophyCards() {
    const cards = [
        {
            icon: <Terminal className="w-6 h-6" />,
            title: "Senior Engineers on Every Project",
            description: "No juniors, no handoffs. The engineers you meet are the engineers who build your product."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Reach, Local Commitment",
            description: "We've delivered for enterprises across the Gulf, Europe, and Asia. We understand diverse markets, timezones, and expectations."
        },
        {
            icon: <Handshake className="w-6 h-6" />,
            title: "Long-Term Partnership",
            description: "We don't chase one-off projects. Every engagement is designed to evolve into a multi-year technology partnership."
        }
    ];

    return (
        <section className="py-16 lg:py-20 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="p-8 rounded-sm border border-hz-border bg-hz-card hover:border-hz-teal/30 transition-all duration-300 group shadow-lg shadow-black/20">
                            <div className="w-12 h-12 rounded bg-hz-teal/10 flex items-center justify-center text-hz-teal mb-6 group-hover:bg-hz-teal group-hover:text-hz-primary transition-all duration-300">
                                {card.icon}
                            </div>
                            <h3 className="font-sora text-xl font-bold text-hz-text mb-3">{card.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
