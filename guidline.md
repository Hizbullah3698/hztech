Build a complete, production-ready multi-page website for HZ Tech — a boutique software development studio based in Islamabad, Pakistan targeting enterprise tech companies in Qatar, Kuwait, and UAE.

TECH STACK

Framework: Next.js 15 (App Router) + TypeScript
Styling: Tailwind CSS with custom design tokens (no default Tailwind colors)
Animations: Framer Motion — section reveals, button micro-interactions, card hover states only. No 3D, no heavy scroll effects.
Forms: Next.js Server Actions + Resend for email delivery
Lead Storage: Supabase (Postgres) — store every contact form submission
Hosting: Vercel
Analytics: Google Analytics 4 + Vercel Analytics
Images: next/image for all images, lazy loading on all heavy sections
Icons: Lucide React
Performance targets: Lighthouse 95+, under 1.5s load on 4G


DESIGN SYSTEM
Implement these as Tailwind custom tokens — do not use default Tailwind colors anywhere:
Background:     #0D0D0D (primary), #111827 (cards)
Accent:         #0ABFBC (teal — primary CTA, highlights, borders)
Text primary:   #FFFFFF
Text muted:     #8892A4
Border:         #1F2937
Success/check:  #0ABFBC
Typography:

Headings: Sora (Google Font) — bold, geometric
Body: Inter (Google Font) — clean, readable
Code/badges: JetBrains Mono (Google Font)

Global rules:

Dark theme on ALL pages — no light sections anywhere
Sticky navbar with frosted glass blur on scroll (backdrop-blur)
Subtle noise texture overlay on hero sections
Thin 1px borders using #1F2937 between sections
All CTA buttons: sharp corners (rounded-sm), filled teal for primary, outlined teal for secondary
Mobile-first responsive on all pages
Smooth scroll behavior
Page transition animations with Framer Motion


NAVBAR (global component)

Left: HZ TECH wordmark in Sora font, bold, white. Small teal geometric accent mark before or after the text.
Center: Navigation links — Services Case Studies Process Pilot About
Right: Button — Start a Project — filled teal, sharp corners
On scroll: sticky, bg-black/80 backdrop-blur-md frosted effect
Mobile: hamburger menu with slide-down drawer
Active page link highlighted in teal


FOOTER (global component)

Left: HZ Tech wordmark + tagline: "Senior-led software engineering for Gulf technology companies."
Center columns: Studio (Services, Process, Case Studies, Pilot, About) | Legal (Privacy Policy, Terms of Service)
Right: Contact — hizbullahwazir.dev@gmail.com | Connect on WhatsApp (+923000943975)
Social icons: LinkedIn + GitHub + WhatsApp only
Bottom bar: © 2025 HZ Tech · Islamabad, Pakistan · All rights reserved.
No Twitter. No fake locations. No invented emails.


PAGE 1: / (Home)
HERO SECTION

Background: dark #0D0D0D with subtle animated dot-matrix or geometric grid pattern (CSS only, no heavy libraries)
Small badge above headline: ● GULF TIMEZONE ALIGNED — teal dot, small caps, muted border
Headline (large, bold, Sora): Senior-Led Software Development for Gulf Tech Teams — the words Gulf Tech Teams in teal accent color
Subline: We build production-grade web, mobile, and automation systems for software companies in Qatar, Kuwait, and UAE.
Two CTA buttons side by side:

Primary (filled teal): Start 2-Week Discovery Sprint
Secondary (outlined teal): Book a 15-min Technical Call


Three micro-trust items below buttons (small, muted, separated by dots):
NDA-Ready in 24hrs · Gulf Timezone Aligned · Senior Engineers on Every Project
Framer Motion: staggered fade-up animation on headline → subline → buttons → trust items

TRUST STRIP

Full-width band, slightly lighter background #111827
4 metrics displayed prominently, large numbers:

4+ / Years Commercial Delivery
25+ / Production Projects
GST / Timezone Aligned
100% / Senior-Led Architecture


Monospace font for numbers, clean label below each

SERVICES PREVIEW — "What We Build"

Section heading: What We Build with teal underline accent
2x2 card grid on desktop, single column on mobile
Each card: dark #111827 background, teal icon (Lucide), service name bold, one-line outcome description, subtle right arrow, hover state lifts card with teal border
Services:

Enterprise Web Applications — Custom dashboards, SaaS platforms, and internal systems built for scale
Partner APIs & Backend Systems — Secure, versioned APIs built for fast partner integrations
Automation & Data Pipelines — Scrapers, workflow automation, and data extraction systems
Mobile Applications — Production-ready cross-platform apps for iOS and Android


Bottom: View All Services → teal text link

CASE STUDY TEASER — "Our Work"

Section heading: Our Work left-aligned, View All Cases → right-aligned
Single wide horizontal card, dark background, teal left border
Left: Label KUWAIT · AUTOMATION · 2024 in small caps muted text
Title: Automated Data Extraction System for a Gulf Classifieds Platform
Description: Built a production-grade scraper extracting 25+ listings across multiple categories. Data structured into a relational database where each seller becomes a unique user profile.
Stack badges (JetBrains Mono, teal outlined): Python Playwright SQLite REST API
Right: Simple dark abstract data-flow visualization (CSS/SVG — no real screenshots)
CTA: Case details → teal link

PILOT OFFER SECTION

Dark card with teal left border 4px
Small label above: START WITH ZERO RISK
Headline: 2-Week Paid Discovery Sprint
Subline: We validate your technical assumptions and build a roadmap before you commit to full-scale development.
2x2 deliverables grid, each with teal checkmark icon:

✅ Requirements & Architecture Doc
✅ Clickable Prototype
✅ Full Tech Roadmap & Cost Estimate
✅ Complete Code Handover


CTA button: Secure Your Sprint Slot → filled teal

PROCESS PREVIEW — "How We Work"

Section heading centered: How We Work with teal line divider
4 steps horizontal on desktop, vertical on mobile
Each step: large muted teal number (01-04), bold title, one-line description

01 Discovery — Defining project goals, technical constraints, and user needs
02 Architecture — Designing scalable, secure backend systems and intuitive frontend patterns
03 Build & Iterate — Rapid agile development cycles with senior-led oversight on every commit
04 Handover & Support — Documentation, knowledge transfer, and 24/7 post-launch monitoring support


Bottom: See Full Process → teal text link

FINAL CTA SECTION

Full-width dark section, subtle teal radial glow in background
Headline: Ready to Build Something + Serious? in teal
Two buttons: Start a Project (filled) + Contact Us (outlined)


PAGE 2: /services

Hero: label WHAT WE BUILD → Headline: Engineering Solutions Built for Enterprise Scale → Subline: Every service is outcome-focused, senior-led, and built for long-term maintainability.
4 service sections stacked vertically with thin dividers between them
Each service section layout:

Left column (30%): Service name (large, bold) + Ideal for: label + tech stack badges
Right columns (70%): 3-column grid — PROBLEM | SOLUTION | OUTCOME — each with small teal label and 2-line description
Bottom row: ⏱ TIMELINE: X weeks + ⚙ GOVERNANCE: details in small monospace muted text


Services with exact copy:
Enterprise Web Applications
Ideal for: SaaS companies, internal tool teams, marketplace builders
Problem: Legacy systems or slow delivery blocking growth
Solution: Custom React/Next.js platforms with scalable Node.js backends
Outcome: Production-ready web apps delivered in 4–8 weeks
Stack: React · Next.js · PostgreSQL · AWS · Tailwind
Timeline: 4–8 weeks | Governance: Weekly demos, version control, full code handover
Partner APIs & Backend Systems
Ideal for: Tech companies needing partner integrations or internal APIs
Problem: Brittle, undocumented APIs slowing partner onboarding
Solution: Versioned, secure REST/GraphQL APIs with full documentation
Outcome: Partners integrate in days, not months
Stack: Node.js · NestJS · GraphQL · MongoDB · Express
Timeline: 2–4 weeks | Governance: API docs delivered, SLA defined, IP transfer on payment
Automation & Data Pipelines
Ideal for: Companies with manual data processes or scraping needs
Problem: Manual data collection wasting engineering hours
Solution: Automated pipelines using Python and Playwright
Outcome: Structured, clean data delivered automatically on schedule
Stack: Python · Playwright · SQLite · ETL · REST API
Timeline: 1–3 weeks | Governance: Full source code handover, documented pipeline, monitoring setup
Mobile Applications
Ideal for: Companies launching consumer or enterprise mobile products
Problem: Separate iOS and Android codebases doubling cost
Solution: Cross-platform Flutter or React Native apps
Outcome: Single codebase, App Store + Play Store ready
Stack: Flutter · React Native · Firebase · Node.js · AWS
Timeline: 6–10 weeks | Governance: Weekly builds, TestFlight/Play Console delivery, full handover
Bottom CTA: Not sure which service fits your project? → Start Discovery Sprint + Speak to an Engineer


PAGE 3: /case-studies

Hero: DARK #0D0D0D background only — absolutely no green or teal gradient on hero background
Label: OUR WORK → Headline: Engineering Proof, + Not Just Promises (second line in teal) → Subline: Real projects. Real outcomes. Additional references available under NDA for qualified enterprise partners.
Featured case study card (large, dark #111827, teal left border):

Label: AUTOMATION · KUWAIT · 2024
Title: Automated Data Extraction System for a Gulf Classifieds Platform
Description: Built a production-grade scraper extracting listings across multiple categories from a Kuwait classifieds platform. Data structured into a relational database where each seller becomes a unique user profile identified by phone number.
Stack badges: Python Playwright SQLite REST API
3 metric boxes: 25k+ Listings Extracted | 100% Data Accuracy | 14d Delivery Time
CTA: Read Full Case Study filled teal button


Full case study detail section (expanded below, same page):

CLIENT CONTEXT: Kuwait-based classifieds platform (anonymized per NDA)
THE PROBLEM: 3 bullet points — Manual entry took 40+ hours per week | High churn in data accuracy due to UI updates | No unified database of seller histories
ARCHITECTURE OVERVIEW: Clean dark card showing flow diagram: Playwright Engine → Data Parser → SQLite Database → Structured Output — each as a dark row with teal arrow
TIMELINE: vertical timeline — Discovery (Day 1–3) → Build (Day 4–10) → Testing & Delivery (Day 11–14)
OUTCOME: The solution delivered 25,000+ verified listings. Seller profiles auto-generated from phone numbers. Clean structured data ready for import via REST API.
Two CTAs: Download PDF (outlined) + Discuss a Similar Project (filled teal)


Bottom section (dark, centered):

Lock icon (Lucide)
Headline: More case studies in progress
Subline: We are currently engaged with Gulf enterprise clients. Additional case studies and client references are available under NDA upon request.
CTA: Request References outlined teal button




PAGE 4: /process

Hero: HOW WE WORK label → Headline: A Process Built for Enterprise Confidence → Subline: Every engagement follows a structured delivery framework — no surprises, no scope creep, no ambiguity.
5 steps in alternating left-right vertical timeline layout. Large muted step numbers (01–05) in background:
01 · Discovery & Technical Audit
We begin every engagement with a structured discovery sprint. Requirements gathering, stakeholder interviews, technical audit of existing systems, and architecture planning. Output: a detailed technical specification document.
02 · Architecture Planning
Before a single line of code is written, we design the full system architecture. Stack selection, database schema, API contracts, and security model. This document becomes the contract for delivery.
03 · Sprint Delivery
Development happens in structured 1-week sprints with daily standups aligned to Gulf timezone (GST). Every sprint ends with a working demo. No black-box development.
04 · QA & Code Review
Every feature goes through automated testing and senior code review before delivery. We use Playwright for end-to-end testing. Code coverage and test reports delivered with every sprint.
05 · Documentation, Handover & SLA
Project close includes full technical documentation, deployment guides, and a knowledge transfer session. IP ownership transfers on final payment. 6-month warranty standard on all engagements.
Governance callout box (teal left border 4px, dark card):
GOVERNANCE & COMPLIANCE
IP ownership transfers on final payment · Full source code delivered via private GitHub repository · 6-month post-launch warranty · NDA signed before technical discussion
Button: Download Governance PDF (outlined teal, with download icon)
Bottom CTA: Ready to start a structured engagement? → Begin Discovery Sprint


PAGE 5: /pilot

Hero (split layout — left text, right terminal visual):

Small badge: PILOT PROGRAM V1.0
Headline: 2-Week Paid + Discovery Sprint (second line in teal)
Subline: The lowest-risk way to evaluate HZ Tech as your long-term technology partner. A high-velocity engagement designed to de-risk your roadmap.
Price: $1,400 Fixed Scope — large, prominent, white + muted label
Two CTAs: Secure Your Sprint Slot (filled teal) + Book a Call First (outlined)
Right side: Dark terminal card showing:
> INITIALIZING_SPRINT_CORE
> DEPLOYING: ARCHITECTURE_DOC
> DEPLOYING: UI_PROTOTYPE_v1
> STATUS: READY_FOR_ENGAGEMENT
With a simple bar chart visualization below in teal


Deliverables section:

Label: DELIVERABLES
Heading: Concrete Assets in 14 Days
4 cards in a row: Requirements & Architecture | Clickable Prototype | Full Tech Roadmap | Code Handover
Each card: teal icon top, bold title, 2-line description


Timeline section:

Heading: The 14-Day Velocity
Two columns connected by arrow: WEEK 01 Discovery & Architecture | WEEK 02 Build & Handover


Transparent Terms section:

Heading: Transparent Terms
5 bullet points with teal check icons:

Fixed price: $1,400 total (No hidden fees)
Exit clause: No obligation to continue after sprint
IP Ownership: You own 100% of all deliverables
NDA: Signed before any data is shared
Engagement Credit: $1,400 credited to long-term contract


RIGHT SIDE: DO NOT add any testimonial. Instead show a dark card with teal lock icon:
🔒 References from Gulf enterprise clients available under NDA upon request.


Sprint FAQ (accordion):

What happens after the two weeks?
How much time is required from my team?
Can we build a functional MVP in 2 weeks?


Final CTA section:

Heading: Ready to de-risk your project?
Subline: Start with a structured 2-week sprint. Full handover if you choose not to continue.
NO "limited slots" or "only 2 per month" language anywhere
Buttons: Secure Your Sprint Slot (filled) + Book a Call First (outlined)


NAVBAR on this page: No LOGIN button. Standard navbar matching all other pages.


PAGE 6: /about

Hero: ABOUT HZ TECH label → Headline: Built for Gulf Enterprise. + Based in Islamabad. (second line in teal) → Subline: A senior-led engineering studio delivering production-grade software to technology companies across Qatar, Kuwait, and UAE.
Founder section (left-right layout):

Left: Circular photo placeholder with teal border ring — next/image ready, src=/images/founder.jpg
Right:

Name: Hizbullah Wazir bold large
Title: CEO & Co-Founder, HZ Tech in teal
Bio: Software engineer with 4+ years of commercial delivery experience. Specializing in enterprise web platforms, mobile applications, and automation systems for Gulf technology companies. Founded HZ Tech to bring senior-led, structured engineering to clients who need a reliable long-term partner — not just a vendor.
LinkedIn button (outlined teal, Lucide LinkedIn icon)




3 philosophy cards (equal width):

Senior Engineers on Every Project — No juniors, no handoffs. The engineers you meet are the engineers who build your product.
Gulf Market Focus — We work exclusively with Gulf technology companies. We understand the market, the timezone, and the expectations.
Long-Term Partnership — We don't chase one-off projects. Every engagement is designed to evolve into a multi-year technology partnership.


Timezone section (dark card, full width):

Label: SYNCHRONIZED OPERATIONS
Headline: We work your hours.
Subline: Daily standups, same-day responses, and zero communication gaps. Our workflow is fully integrated with your timezone (GST/AST).
Right side: Two circles — PKT (Islamabad) ↔ GST (Doha / Kuwait) — teal active ring on GST


Bottom CTA: Want to work with a team that treats your project like their own? → Start a Project filled teal button
Footer: © 2025 HZ Tech Engineering Studio. All rights reserved. + Available for new engagements — Q1 2026


PAGE 7: /contact

Hero: GET IN TOUCH label → Headline: Let's Talk About Your Project → Subline: NDA available before any technical discussion. Response within 4 hours during Gulf business hours.
Two-column layout:
LEFT — Contact details:

WhatsApp button (filled teal, Lucide MessageCircle icon): Message on WhatsApp → links to https://wa.me/923000943975
Email: hizbullahwazir.dev@gmail.com with mail icon
Badge: ⚡ Response within 4 hours · GST business hours
Line: 🔒 NDA signed before any technical discussion
Divider
What happens next? — 3 numbered steps:

We review your project brief — Our team analyzes your requirements the same day.
We respond with initial thoughts — Expect questions or feasibility insights within 4 hours.
Schedule a technical call — A 15-minute alignment call at your absolute convenience.



RIGHT — Contact form (Next.js Server Action → Resend email + Supabase lead storage):

Full Name (text)
Company Name (text)
Your Role (select: CTO / Founder / Technical Director / Procurement / Other)
Project Type (select: Web Application / Mobile App / API & Backend / Automation / Other)
Budget Range (select: Under $5K / $5K–$15K / $15K–$50K / $50K+ / Not sure yet)
Project Brief (textarea placeholder: Tell us about your project in 2–3 sentences)
Submit button (full width, filled teal): Send Message →
Below: We treat all project details as confidential by default.
Success state: show confirmation message inline, do not redirect




CRITICAL RULES — READ BEFORE BUILDING

No fake testimonials anywhere — especially not on /pilot. Replace any generated testimonial with the NDA references card.
No LOGIN button on any page navbar.
No "limited slots" or "2 per month" scarcity language anywhere.
No green/teal gradient backgrounds on hero sections — dark #0D0D0D only.
No invented locations — always Islamabad, Pakistan.
No invented emails — always hizbullahwazir.dev@gmail.com.
No Twitter links — LinkedIn, GitHub, WhatsApp only.
Copyright year is 2025 across all pages.
All pages share the same navbar and footer components — no variations.
Mobile responsive on every single page — test all breakpoints.