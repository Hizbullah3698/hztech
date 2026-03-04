export function ProcessTimeline() {
    const steps = [
        {
            num: "01",
            title: "Discovery & Technical Audit",
            description: "We begin every engagement with a structured discovery sprint. Requirements gathering, stakeholder interviews, technical audit of existing systems, and architecture planning. Output: a detailed technical specification document."
        },
        {
            num: "02",
            title: "Architecture Planning",
            description: "Before a single line of code is written, we design the full system architecture. Stack selection, database schema, API contracts, and security model. This document becomes the contract for delivery."
        },
        {
            num: "03",
            title: "Sprint Delivery",
            description: "Development happens in structured 1-week sprints with daily standups aligned to your timezone. Every sprint ends with a working demo. No black-box development."
        },
        {
            num: "04",
            title: "QA & Code Review",
            description: "Every feature goes through automated testing and senior code review before delivery. We use Playwright for end-to-end testing. Code coverage and test reports delivered with every sprint."
        },
        {
            num: "05",
            title: "Documentation, Handover & SLA",
            description: "Project close includes full technical documentation, deployment guides, and a knowledge transfer session. IP ownership transfers on final payment. 6-month warranty standard on all engagements."
        }
    ];

    return (
        <section className="bg-hz-primary py-16 lg:py-24 border-b border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,191,188,0.03),transparent_70%)] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative">
                    {/* Center Line for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-hz-border -translate-x-1/2"></div>
                    {/* Left Line for Mobile */}
                    <div className="lg:block lg:hidden absolute left-4 top-0 bottom-0 w-px bg-hz-border"></div>

                    <div className="space-y-16 lg:space-y-0 relative py-8">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0; // 0, 2, 4 = Left Side. 1, 3 = Right Side.

                            return (
                                <div key={index} className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:py-16 group`}>

                                    {/* Mobile Dot */}
                                    <div className="absolute left-[11.5px] top-6 lg:hidden w-3 h-3 rounded-full bg-hz-teal shadow-[0_0_10px_rgba(10,191,188,0.5)] z-10 transition-transform group-hover:scale-125"></div>

                                    {/* Content Half */}
                                    <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${isEven ? 'lg:pr-20 lg:text-right' : 'lg:pl-20 lg:text-left'}`}>
                                        <div className="text-5xl md:text-7xl font-sora font-extrabold text-hz-teal/10 mb-3 -mt-4 lg:mt-0 transition-colors group-hover:text-hz-teal/20">
                                            {step.num}
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-sora font-bold text-hz-text mb-5 group-hover:text-hz-teal transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-hz-muted text-lg leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Center Dot Desktop */}
                                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-hz-primary border-2 border-hz-teal shadow-[0_0_15px_rgba(10,191,188,0.3)] z-10 transition-transform duration-300 group-hover:scale-150 group-hover:bg-hz-teal/20"></div>

                                    {/* Empty Half (for balancing the flex row) */}
                                    <div className="hidden lg:block w-1/2"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
