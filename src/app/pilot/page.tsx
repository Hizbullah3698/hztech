import { PilotHero } from "@/components/sections/pilot/PilotHero";
import { PilotDeliverables } from "@/components/sections/pilot/PilotDeliverables";
import { PilotTimeline } from "@/components/sections/pilot/PilotTimeline";
import { PilotTerms } from "@/components/sections/pilot/PilotTerms";
import { PilotFaq } from "@/components/sections/pilot/PilotFaq";
import { PilotCta } from "@/components/sections/pilot/PilotCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pilot | HZ Tech Engineering Studio",
    description: "2-Week Paid Discovery Sprint to de-risk your roadmap and build a concrete foundation.",
};

export default function PilotPage() {
    return (
        <>
            <PilotHero />
            <PilotDeliverables />
            <PilotTimeline />
            <PilotTerms />
            <PilotFaq />
            <PilotCta />
        </>
    );
}
