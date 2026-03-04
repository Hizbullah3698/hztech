import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | HZ Tech Engineering Studio",
    description: "Let's talk about your project. NDA available before any technical discussion.",
};

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
            {/* Hero Section */}
            <div className="mb-10 lg:mb-16 relative text-center flex flex-col items-center">
                <div className="absolute top-0 left-1/2 w-72 h-72 bg-hz-teal/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-hz-teal uppercase mb-4 block">
                        Get In Touch
                    </span>
                    <h1 className="font-sora text-2xl sm:text-3xl lg:text-5xl font-extrabold text-hz-text leading-[1.1] mb-5">
                        Let's Talk About{" "}
                        <span className="text-hz-teal">Your Project</span>
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                        NDA available before any technical discussion. Response within 4 hours during business hours.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 relative z-10">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
}
