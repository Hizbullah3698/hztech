"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Network, Settings, Smartphone, ArrowRight } from "lucide-react";
import { MotionSection, MotionStagger, MotionItem, fadeUp, scaleIn } from "@/components/ui/Motion";

const services = [
  {
    icon: Globe,
    title: "Enterprise Web Applications",
    description: "Custom dashboards, SaaS platforms, and internal systems engineered for scale.",
    tech: ["React", "Next.js", "PostgreSQL", "AWS"],
    image: "/images/dashboard-analytics.jpg",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Production-ready cross-platform apps for iOS and Android with native performance.",
    tech: ["Flutter", "React Native", "Firebase"],
    image: "/images/mobile-app-real.jpg",
  },
  {
    icon: Network,
    title: "Partner APIs & Backend",
    description: "Secure, versioned REST/GraphQL APIs built for fast partner integrations.",
    tech: ["Node.js", "NestJS", "GraphQL"],
    image: "/images/server-infrastructure.jpg",
  },
  {
    icon: Settings,
    title: "Automation & Data Pipelines",
    description: "Scrapers, workflow automation, and data extraction systems that scale.",
    tech: ["Python", "Playwright", "ETL"],
    image: "/images/data-automation.jpg",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <MotionSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <span className="text-hz-teal text-[10px] font-bold tracking-[0.3em] font-mono uppercase mb-3 block">
            What We Build
          </span>
          <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-hz-text">
            Engineering Solutions
          </h2>
        </div>
        <Link
          href="/services"
          className="text-hz-teal text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all self-start md:self-auto group"
        >
          View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </MotionSection>

      {/* Featured card: full-width */}
      <MotionSection variant={scaleIn} className="mb-5">
        <Link href="/services" className="block group">
          <div className="relative overflow-hidden rounded-xl border border-hz-border bg-hz-card/30 hover:border-hz-teal/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(10,191,188,0.08)]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <Globe className="text-hz-teal w-8 h-8 mb-4 group-hover:rotate-12 transition-transform duration-500" />
                <h3 className="text-xl md:text-2xl font-bold text-hz-text mb-3 font-sora">{services[0].title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{services[0].description}</p>
                {/* Tech stack — visible and prominent */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {services[0].tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-sm border border-hz-teal/25 bg-hz-teal/5 text-hz-teal tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-hz-teal text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="relative min-h-[180px] sm:min-h-[220px] lg:min-h-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-hz-teal/20 to-transparent z-10 pointer-events-none" />
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </Link>
      </MotionSection>

      {/* 3 smaller cards */}
      <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {services.slice(1).map((service, idx) => {
          const Icon = service.icon;
          return (
            <MotionItem key={idx}>
              <Link href="/services" className="block group h-full">
                <div className="relative overflow-hidden rounded-xl border border-hz-border bg-hz-card/30 hover:border-hz-teal/30 transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_30px_rgba(10,191,188,0.06)] hover:-translate-y-1">
                  <div className="relative h-36 overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hz-card z-10 pointer-events-none" />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <Icon className="text-hz-teal w-6 h-6 mb-3 group-hover:rotate-6 transition-transform duration-300" />
                    <h3 className="text-base font-bold text-hz-text mb-2 font-sora leading-snug">{service.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{service.description}</p>
                    {/* Tech stack badges — visible */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.tech.map((t) => (
                        <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-sm border border-hz-teal/20 bg-hz-teal/[0.04] text-hz-teal/80 tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
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
