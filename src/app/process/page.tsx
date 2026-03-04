import { ProcessHero } from "@/components/sections/process/ProcessHero";
import { ProcessTimeline } from "@/components/sections/process/ProcessTimeline";
import { ProcessGovernance } from "@/components/sections/process/ProcessGovernance";
import { FinalCta } from "@/components/sections/FinalCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Process | HZ Tech Engineering Studio",
    description: "Every engagement follows a structured delivery framework. A process built for enterprise confidence.",
};

export default function ProcessPage() {
    return (
        <>
            <ProcessHero />
            <ProcessTimeline />
            <ProcessGovernance />
            <div className="pt-16 lg:pt-24 bg-hz-primary">
                <FinalCta />
            </div>
        </>
    );
}
