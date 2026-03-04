import { FileText } from 'lucide-react';

export function ProcessGovernance() {
    return (
        <section className="py-16 lg:py-20 border-b border-white/5 bg-hz-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="border-l-4 border-hz-teal bg-hz-card border-r border-y border-white/5 rounded-r-md p-8 md:p-12 shadow-2xl shadow-black/40">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h4 className="text-hz-text text-xl font-sora font-bold mb-4 uppercase tracking-wider">
                                Governance & Compliance
                            </h4>
                            <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                IP ownership transfers on final payment · Full source code delivered via private GitHub repository · 6-month post-launch warranty · NDA signed before technical discussion
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="group relative bg-hz-teal/10 hover:bg-hz-teal border border-hz-teal text-hz-teal hover:text-hz-primary px-8 py-4 rounded-sm font-bold flex items-center gap-2 transition-all duration-300 shadow-[0_5px_15px_rgba(10,191,188,0.15)] active:scale-[0.98] overflow-hidden text-sm uppercase tracking-widest">
                                <span className="relative z-10 flex items-center gap-2">
                                    <FileText className="w-5 h-5" />
                                    Governance PDF
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
