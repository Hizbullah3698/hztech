import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | HZ Tech Engineering Studio",
    description: "Let's talk about your project. NDA available before any technical discussion.",
};

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
            {/* Hero Section */}
            <div className="mb-16 lg:mb-20 relative text-center flex flex-col items-center">
                <div className="absolute top-0 left-1/2 w-96 h-96 bg-hz-teal/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase mb-6 block">
                        Get In Touch
                    </span>
                    <h1 className="font-sora text-4xl lg:text-5xl font-extrabold text-hz-text leading-[1.1] mb-8">
                        Let's Talk About{" "}
                        <span className="text-hz-teal relative inline-block">
                            Your Project
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                <path d="M2 6c40-5 80-5 100 0s60 4 96 0" stroke="#0ABFBC" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg lg:text-xl max-w-2xl leading-relaxed">
                        NDA available before any technical discussion. Response within 4 hours during business hours.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
}
