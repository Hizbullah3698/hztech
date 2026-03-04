"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Network, Settings, Smartphone, ArrowRight } from "lucide-react";
import { MotionSection, MotionStagger, MotionItem, fadeUp, scaleIn, fadeLeft, fadeRight } from "@/components/ui/Motion";

const services = [
  {
    icon: Globe,
    title: "Enterprise Web Applications",
    description: "Custom dashboards, SaaS platforms, and internal systems engineered for scale and reliability.",
    image: "/images/dashboard-analytics.jpg",
    gradient: "from-hz-teal/30 to-transparent",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Production-ready cross-platform apps for iOS and Android with native performance.",
    image: "/images/mobile-app-real.jpg",
    gradient: "from-blue-500/30 to-transparent",
  },
  {
    icon: Network,
    title: "Partner APIs & Backend",
    description: "Secure, versioned REST/GraphQL APIs built for fast partner integrations.",
    image: "/images/server-infrastructure.jpg",
    gradient: "from-purple-500/30 to-transparent",
  },
  {
    icon: Settings,
    title: "Automation & Data Pipelines",
    description: "Scrapers, workflow automation, and data extraction systems that scale without headcount.",
    image: "/images/data-automation.jpg",
    gradient: "from-emerald-500/30 to-transparent",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <MotionSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-hz-teal text-xs font-bold tracking-[0.3em] font-mono uppercase mb-4 block">
              What We Build
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-hz-text">
              Engineering Solutions
            </h2>
          </div>
          <Link
            href="/services"
            className="text-hz-teal text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all self-start md:self-auto group"
          >
            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </MotionSection>

      {/* First card: Full-width featured */}
      <MotionSection variant={scaleIn} className="mb-6">
        <Link href="/services" className="block group">
          <div className="relative overflow-hidden rounded-lg border border-hz-border bg-hz-card/30 hover:border-hz-teal/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(10,191,188,0.08)]">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <Globe className="text-hz-teal w-10 h-10 mb-6 group-hover:rotate-12 transition-transform duration-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-hz-text mb-4 font-sora">{services[0].title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">{services[0].description}</p>
                <span className="text-hz-teal text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="relative min-h-[250px] lg:min-h-0 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${services[0].gradient} z-10 pointer-events-none`} />
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  fill
                  className="object-cover object-center opacity-70 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </Link>
      </MotionSection>

      {/* Remaining 3 cards in a grid */}
      <MotionStagger className="grid md:grid-cols-3 gap-6">
        {services.slice(1).map((service, idx) => {
          const Icon = service.icon;
          return (
            <MotionItem key={idx}>
              <Link href="/services" className="block group h-full">
                <div className="relative overflow-hidden rounded-lg border border-hz-border bg-hz-card/30 hover:border-hz-teal/30 transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_30px_rgba(10,191,188,0.06)] hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} z-10 pointer-events-none`} />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <Icon className="text-hz-teal w-8 h-8 mb-5 group-hover:rotate-6 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-hz-text mb-3 font-sora">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">{service.description}</p>
                  </div>
                </div>
              </Link>
            </MotionItem>
          );
        })}
      </MotionStagger>
    </section>
  );
}
