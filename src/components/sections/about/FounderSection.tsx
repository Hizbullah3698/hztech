import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export function FounderSection() {
    return (
        <section className="py-10 sm:py-14 lg:py-20 border-b border-white/5 bg-hz-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-hz-teal/10 rounded-full blur-2xl group-hover:bg-hz-teal/20 transition-all duration-500"></div>
                            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-hz-teal/30 p-2">
                                <div className="w-full h-full rounded-full relative overflow-hidden border border-hz-teal/20 bg-hz-card flex items-center justify-center">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Hizbullah Wazir - CEO & Co-Founder"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-extrabold text-hz-text mb-1">Hizbullah Wazir</h2>
                        <p className="text-hz-teal font-mono text-xs font-bold tracking-[0.1em] uppercase mb-6">CEO & Co-Founder, HZ Tech</p>
                        <div className="space-y-4 text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
                            <p>Software engineer with 4+ years of commercial delivery experience. Specializing in enterprise web platforms, mobile applications, and automation systems for technology companies worldwide.</p>
                            <p>Founded HZ Tech to bring senior-led, structured engineering to clients who need a reliable long-term partner — not just a vendor.</p>
                        </div>
                        <div className="mt-8">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 text-hz-text px-8 py-4 rounded-sm hover:border-hz-teal/50 hover:bg-hz-teal/5 transition-all duration-300 font-bold shadow-[0_0_15px_rgba(10,191,188,0.1)]">
                                <Linkedin className="w-5 h-5 text-hz-teal" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
