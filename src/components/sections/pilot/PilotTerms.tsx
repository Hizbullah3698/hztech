import { CheckCircle2, Lock } from 'lucide-react';

export function PilotTerms() {
    const terms = [
        "Fixed price: $1,400 total (No hidden fees)",
        "Exit clause: No obligation to continue after sprint",
        "IP Ownership: You own 100% of all deliverables",
        "NDA: Signed before any data is shared",
        "Engagement Credit: $1,400 credited to long-term contract"
    ];

    return (
        <section className="py-16 lg:py-20 border-y border-hz-border">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div>
                        <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-hz-text mb-8">
                            Transparent Terms
                        </h2>
                        <ul className="space-y-4">
                            {terms.map((term, index) => (
                                <li key={index} className="flex items-center gap-4 text-slate-300">
                                    <CheckCircle2 className="text-hz-teal w-6 h-6 shrink-0" />
                                    <span className="font-medium text-hz-text">{term}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-xl border border-hz-border bg-hz-card p-10 shadow-2xl flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                        <div className="w-16 h-16 bg-hz-primary border border-hz-border rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <Lock className="w-8 h-8 text-hz-teal" />
                        </div>
                        <p className="text-hz-muted text-lg leading-relaxed max-w-md">
                            <strong className="text-hz-text block mb-2 font-sora">Confidentiality Assured</strong>
                            References from enterprise clients worldwide are available under NDA upon request. We protect your architecture and strategy before we write a single line of code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
