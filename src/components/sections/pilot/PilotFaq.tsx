import { ChevronDown } from 'lucide-react';

export function PilotFaq() {
    const faqs = [
        {
            question: "What happens after the two weeks?",
            answer: "You receive all deliverables. You can then choose to continue building with HZ Tech (with the sprint cost credited back), take the roadmap to an internal team, or hire another partner."
        },
        {
            question: "How much time is required from my team?",
            answer: "We typically need 2-4 hours total for discovery workshops in Week 1. Beyond that, we handle the heavy lifting and keep you updated via async channels."
        },
        {
            question: "Can we build a functional MVP in 2 weeks?",
            answer: "The Discovery Sprint is focused on architecture and prototyping. If the scope is narrow, we may include functional proof-of-concept code, but the goal is 'de-risking' rather than 'production-ready MVP'."
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-hz-primary" id="faq">
            <div className="mx-auto max-w-3xl px-6">
                <div className="mb-10 flex flex-col items-center gap-4 text-center">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase">
                        FAQ
                    </span>
                    <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-hz-text">
                        Sprint FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group rounded-sm border border-hz-border bg-hz-card p-6 transition-all duration-300 open:border-hz-teal/50 shadow-md"
                            {...(index === 0 ? { open: true } : {})}
                        >
                            <summary className="flex cursor-pointer items-center justify-between font-bold text-hz-text list-none outline-none font-sora select-none">
                                <span>{faq.question}</span>
                                <ChevronDown className="transition-transform duration-300 group-open:rotate-180 text-hz-teal w-5 h-5 shrink-0" />
                            </summary>
                            <p className="mt-4 text-sm text-hz-muted leading-relaxed">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
