import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceList } from "@/components/sections/services/ServiceList";
import { ServicesCta } from "@/components/sections/services/ServicesCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | HZ Tech Engineering Studio",
    description: "Engineering solutions built for enterprise scale. Custom web apps, APIs, automation, and mobile applications.",
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServiceList />
            <ServicesCta />
        </>
    );
}
