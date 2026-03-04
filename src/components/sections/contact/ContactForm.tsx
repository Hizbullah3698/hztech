"use client";

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from '@/app/actions/contact';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);

        const formData = new FormData(e.currentTarget);
        const result = await submitContactForm(formData);

        setIsSubmitting(false);
        if (result.success) {
            setIsSubmitted(true);
            e.currentTarget.reset(); // clear form
        } else {
            setErrorMessage(result.error || "Failed to submit form.");
        }
    };

    if (isSubmitted) {
        return (
            <div className="lg:col-span-7 h-full flex items-center justify-center">
                <div className="bg-hz-card border border-hz-teal/30 p-12 rounded-xl text-center shadow-lg shadow-hz-teal/5">
                    <div className="w-16 h-16 bg-hz-teal/10 rounded-full flex items-center justify-center text-hz-teal mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="font-sora text-2xl font-bold text-hz-text mb-4">Message Received</h3>
                    <p className="text-hz-muted mb-8 leading-relaxed max-w-sm mx-auto">
                        Thank you for reaching out. Our engineering team will review your project brief and get back to you within 4 hours.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-hz-teal text-sm font-bold uppercase tracking-wider hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="lg:col-span-7">
            <div className="bg-hz-card border border-hz-border p-8 lg:p-10 rounded-xl shadow-2xl shadow-black/40">
                {errorMessage && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-sm text-red-400 text-sm font-medium">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="font-mono text-xs font-bold uppercase tracking-widest text-hz-muted ml-1">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                className="w-full bg-hz-primary border border-hz-border rounded-sm px-4 py-3 text-hz-text focus:border-hz-teal focus:ring-1 focus:ring-hz-teal outline-none transition-all placeholder:text-gray-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="companyName" className="font-mono text-xs font-bold uppercase tracking-widest text-hz-muted ml-1">
                                Company Name
                            </label>
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                required
                                className="w-full bg-hz-primary border border-hz-border rounded-sm px-4 py-3 text-hz-text focus:border-hz-teal focus:ring-1 focus:ring-hz-teal outline-none transition-all placeholder:text-gray-600"
                                placeholder="Acme Corp"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="role" className="font-mono text-xs font-bold uppercase tracking-widest text-hz-muted ml-1">
                                Your Role
                            </label>
                            <select id="role" name="role" className="w-full bg-hz-primary border border-hz-border rounded-sm px-4 py-3 text-hz-text focus:border-hz-teal focus:ring-1 focus:ring-hz-teal outline-none transition-all appearance-none cursor-pointer">
                                <option value="CTO">CTO</option>
                                <option value="Founder">Founder</option>
                                <option value="Technical Director">Technical Director</option>
                                <option value="Procurement">Procurement</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="projectType" className="font-mono text-xs font-bold uppercase tracking-widest text-hz-muted ml-1">
                                Project Type
                            </label>
                            <select id="projectType" name="projectType" className="w-full bg-hz-primary border border-hz-border rounded-sm px-4 py-3 text-hz-text focus:border-hz-teal focus:ring-1 focus:ring-hz-teal outline-none transition-all appearance-none cursor-pointer">
                                <option value="Web Application">Web Application</option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="API & Backend">API & Backend</option>
                                <option value="Automation">Automation</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="budget" className="font-mono text-xs font-bold uppercase tracking-widest text-hz-muted ml-1">
                            Budget Range
                        </label>
                        <select id="budget" name="budget" className="w-full bg-hz-primary border border-hz-border rounded-sm px-4 py-3 text-hz-text focus:border-hz-teal focus:ring-1 focus:ring-hz-teal outline-none transition-all appearance-none cursor-pointer">
                            <option value="Under $5K">Under $5K</option>
                            <option value="$5K–$15K">$5K–$15K</option>
                            <option value="$15K–$50K">$15K–$50K</option>
                            <option value="$50K+">$50K+</option>
                            <option value="Not sure yet">Not sure yet</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="projectBrief" className="font-mono text-xs font-bold uppercase tracking-widest text-hz-muted ml-1">
                            Project Brief
                        </label>
                        <textarea
                            id="projectBrief"
                            name="projectBrief"
                            required
                            rows={4}
                            className="w-full bg-hz-primary border border-hz-border rounded-sm px-4 py-3 text-hz-text focus:border-hz-teal focus:ring-1 focus:ring-hz-teal outline-none transition-all resize-none placeholder:text-gray-600"
                            placeholder="Tell us about your project in 2–3 sentences"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full bg-hz-teal text-hz-primary py-4 rounded-sm font-bold flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98] overflow-hidden text-lg"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {!isSubmitting && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        )}
                    </button>
                    <p className="text-center text-hz-muted text-xs">
                        We treat all project details as confidential by default.
                    </p>
                </form>
            </div>
        </div>
    );
}
