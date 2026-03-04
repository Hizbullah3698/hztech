import { MessageCircle, Mail, Zap, Lock, ArrowRight } from 'lucide-react';

export function ContactInfo() {
    return (
        <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
                <a
                    href="https://wa.me/923000943975"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full bg-hz-teal text-hz-primary flex items-center justify-center gap-3 py-4 rounded-sm font-bold text-lg transition-all active:scale-[0.98] overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Message on WhatsApp
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
                <div className="flex items-center gap-4 p-1">
                    <Mail className="text-hz-teal w-6 h-6" />
                    <a
                        href="mailto:hizbullahwazir.dev@gmail.com"
                        className="text-lg font-medium text-hz-text hover:text-hz-teal transition-colors"
                    >
                        hizbullahwazir.dev@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-3 bg-hz-teal/10 border border-hz-teal/20 px-4 py-3 rounded-sm w-fit">
                    <Zap className="text-hz-teal w-4 h-4" />
                    <span className="font-mono text-hz-teal text-xs font-bold uppercase tracking-wider">
                        Response within 4 hours · Global business hours
                    </span>
                </div>
                <p className="text-hz-muted text-sm flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    NDA signed before any technical discussion
                </p>
            </div>

            <div className="h-px bg-hz-border w-full"></div>

            <div className="space-y-8">
                <h3 className="font-sora text-xl font-bold tracking-tight text-hz-text">
                    What happens next?
                </h3>
                <div className="space-y-8 relative before:content-[''] before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-hz-border">
                    <div className="flex gap-6 relative">
                        <div className="flex-none w-8 h-8 rounded-full bg-hz-primary border-2 border-hz-teal text-hz-teal flex items-center justify-center text-sm font-bold z-10 font-mono">
                            1
                        </div>
                        <div>
                            <h4 className="font-sora font-bold text-hz-text mb-1">
                                We review your project brief
                            </h4>
                            <p className="text-hz-muted text-sm leading-relaxed">
                                Our team analyzes your requirements the same day.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6 relative">
                        <div className="flex-none w-8 h-8 rounded-full bg-hz-primary border-2 border-hz-teal text-hz-teal flex items-center justify-center text-sm font-bold z-10 font-mono">
                            2
                        </div>
                        <div>
                            <h4 className="font-sora font-bold text-hz-text mb-1">
                                We respond with initial thoughts
                            </h4>
                            <p className="text-hz-muted text-sm leading-relaxed">
                                Expect questions or feasibility insights within 4 hours.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6 relative">
                        <div className="flex-none w-8 h-8 rounded-full bg-hz-primary border-2 border-hz-teal text-hz-teal flex items-center justify-center text-sm font-bold z-10 font-mono">
                            3
                        </div>
                        <div>
                            <h4 className="font-sora font-bold text-hz-text mb-1">
                                Schedule a technical call
                            </h4>
                            <p className="text-hz-muted text-sm leading-relaxed">
                                A 15-minute alignment call at your absolute convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
