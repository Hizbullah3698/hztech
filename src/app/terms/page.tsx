import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | HZ Tech",
    description: "HZ Tech terms of service — engagement terms, IP ownership, and liability.",
};

export default function TermsPage() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <span className="text-hz-teal text-xs font-bold tracking-[0.3em] font-mono uppercase mb-6 block">
                    Legal
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold font-sora tracking-tight text-hz-text mb-4">
                    Terms of Service
                </h1>
                <p className="text-hz-muted text-sm font-mono mb-16">Last updated: March 2025</p>

                <div className="prose prose-invert prose-sm max-w-none space-y-10 text-slate-300 leading-relaxed">
                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">1. Engagement Terms</h2>
                        <p>All engagements with HZ Tech begin with a written agreement or Statement of Work (SOW) outlining the project scope, timeline, deliverables, and payment terms. Work commences only after mutual acceptance of the SOW.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">2. Discovery Sprint</h2>
                        <p>Our 2-Week Discovery Sprint is a paid engagement at a fixed price. It includes requirements documentation, a clickable prototype, a technical roadmap, and complete code handover. The sprint is designed to de-risk full-scale development.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">3. Intellectual Property</h2>
                        <p>Upon full payment of all invoices:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>All custom source code, documentation, and deliverables become <strong className="text-hz-text">your exclusive property</strong>.</li>
                            <li>HZ Tech retains no proprietary license over delivered work.</li>
                            <li>Pre-existing libraries, frameworks, and open-source dependencies retain their original licenses.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">4. Confidentiality & NDA</h2>
                        <p>HZ Tech is prepared to sign a mutual Non-Disclosure Agreement (NDA) before any technical discussions. All project details, proprietary business information, and source code are treated as confidential by default.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">5. Payment Terms</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Discovery Sprint: 100% due before commencement.</li>
                            <li>Full-scale projects: Milestone-based billing as defined in the SOW.</li>
                            <li>Invoices are payable within 7 business days unless otherwise agreed.</li>
                            <li>Accepted payment methods include bank transfer and digital payment platforms.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">6. Warranty & Support</h2>
                        <p>All deliverables include a <strong className="text-hz-text">6-month bug-fix warranty</strong> from the date of final delivery. This covers defects in the delivered code that prevent it from functioning as specified in the SOW. Feature additions and scope changes are not covered under warranty.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">7. Limitation of Liability</h2>
                        <p>HZ Tech&apos;s total liability for any claim arising from services shall not exceed the total fees paid by the client for the specific engagement giving rise to the claim. HZ Tech is not liable for indirect, incidental, or consequential damages.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">8. Termination</h2>
                        <p>Either party may terminate an engagement with 14 days&apos; written notice. Upon termination, the client will receive all work completed up to the termination date, and payment will be due for work performed.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">9. Governing Law</h2>
                        <p>These terms shall be governed by the laws of Pakistan. Any disputes shall be resolved through mutual negotiation before escalation to formal proceedings.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">10. Contact</h2>
                        <p>For questions about these terms, contact:</p>
                        <p className="mt-3 font-medium text-hz-text">
                            HZ Tech<br />
                            Islamabad, Pakistan<br />
                            <a href="mailto:hizbullahwazir.dev@gmail.com" className="text-hz-teal hover:underline">hizbullahwazir.dev@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
