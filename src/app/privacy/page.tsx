import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | HZ Tech",
    description: "HZ Tech privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <span className="text-hz-teal text-xs font-bold tracking-[0.3em] font-mono uppercase mb-6 block">
                    Legal
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold font-sora tracking-tight text-hz-text mb-4">
                    Privacy Policy
                </h1>
                <p className="text-hz-muted text-sm font-mono mb-16">Last updated: March 2025</p>

                <div className="prose prose-invert prose-sm max-w-none space-y-10 text-slate-300 leading-relaxed">
                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">1. Information We Collect</h2>
                        <p>When you submit our contact form or engage with our services, we may collect the following information:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Full name and company name</li>
                            <li>Email address</li>
                            <li>Job title / role</li>
                            <li>Project details and budget range</li>
                            <li>Any additional information you voluntarily provide</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Respond to your project inquiries</li>
                            <li>Prepare project proposals and estimates</li>
                            <li>Communicate about ongoing engagements</li>
                            <li>Improve our website and services</li>
                        </ul>
                        <p className="mt-3">We do <strong className="text-hz-text">not</strong> sell, rent, or trade your personal information to third parties.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">3. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your personal information. All form submissions are transmitted over encrypted connections (HTTPS). Project-related data is handled under NDA upon request.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">4. Third-Party Services</h2>
                        <p>We may use the following third-party services:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li><strong className="text-hz-text">Resend</strong> — for transactional email delivery</li>
                            <li><strong className="text-hz-text">Vercel</strong> — for website hosting and analytics</li>
                        </ul>
                        <p className="mt-3">These services have their own privacy policies governing data handling.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">5. Cookies</h2>
                        <p>This website uses only essential cookies required for basic functionality. We do not use tracking or advertising cookies.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Request access to your personal data</li>
                            <li>Request correction or deletion of your data</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:hizbullahwazir.dev@gmail.com" className="text-hz-teal hover:underline">hizbullahwazir.dev@gmail.com</a>.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-hz-text font-sora mb-4">7. Contact</h2>
                        <p>If you have any questions about this Privacy Policy, please contact:</p>
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
