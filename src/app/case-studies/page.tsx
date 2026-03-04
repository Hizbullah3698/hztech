import { CaseStudiesHero } from "@/components/sections/casestudies/CaseStudiesHero";
import { FeaturedCaseStudy } from "@/components/sections/casestudies/FeaturedCaseStudy";
import { CaseStudyDetails } from "@/components/sections/casestudies/CaseStudyDetails";
import { AdditionalCaseStudies } from "@/components/sections/casestudies/AdditionalCaseStudies";
import { MoreCaseStudies } from "@/components/sections/casestudies/MoreCaseStudies";
import { FinalCta } from "@/components/sections/FinalCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | HZ Tech Engineering Studio",
    description: "Real projects. Real outcomes. View our automated data extraction systems and enterprise-grade automation solutions.",
};

export default function CaseStudiesPage() {
    return (
        <>
            <CaseStudiesHero />
            <FeaturedCaseStudy />
            <CaseStudyDetails />
            <AdditionalCaseStudies />
            <MoreCaseStudies />
            <div className="pt-16 lg:pt-24 bg-hz-primary">
                <FinalCta />
            </div>
        </>
    );
}
