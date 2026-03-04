"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Methodology", href: "/process" },
  { label: "Pilot Program", href: "/pilot" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-50 flex flex-col">
      {/* Top Availability Banner */}
      <Link
        href="https://calendly.com/hizbullah3698/30min"
        target="_blank"
        className="bg-[#0b0c10] border-b border-hz-border/80 py-2.5 w-full flex items-center justify-center group overflow-hidden relative z-[60]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hz-teal/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <div className="flex items-center gap-3 text-xs sm:text-sm font-mono font-medium text-hz-muted group-hover:text-hz-text transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hz-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-hz-teal"></span>
          </span>
          <span>
            <strong className="text-hz-text font-bold">Priority Status:</strong> <span className="hidden sm:inline">Accepting 1 new Pilot Project for {new Date().toLocaleString('default', { month: 'long' })}</span>
            <span className="sm:hidden"> 1 New Slot Open</span>
          </span>
          <span className="hidden sm:inline-block ml-2 text-hz-teal font-bold group-hover:translate-x-1 transition-transform">
            → Book Strategy Call
          </span>
        </div>
      </Link>

      <nav className="border-b border-hz-border bg-hz-primary/80 backdrop-blur-md">
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-hz-teal to-hz-teal/50 transition-none z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setMobileOpen(false)}>
            <span className="font-sora text-2xl font-extrabold tracking-tighter text-hz-text">
              <span className="text-hz-teal">HZ</span> Tech
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${isActive
                    ? "text-hz-teal"
                    : "text-hz-muted hover:text-hz-text"
                    }`}
                  href={link.href}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-hz-teal rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-hz-teal hover:bg-hz-teal/90 text-hz-primary px-6 py-2.5 rounded-sm text-sm font-bold transition-all active:scale-95 hover:shadow-[0_0_20px_rgba(10,191,188,0.25)]"
            >
              Start a Project
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-hz-text hover:text-hz-teal transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:hidden border-t border-hz-border bg-hz-primary/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`py-3 px-4 font-medium transition-all rounded-sm text-lg border-b border-hz-border/50 last:border-0 ${isActive
                        ? "text-hz-teal bg-hz-teal/5"
                        : "text-hz-text hover:text-hz-teal hover:bg-hz-teal/5"
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 bg-hz-teal text-hz-primary py-4 rounded-sm font-bold text-center text-lg shadow-[0_5px_15px_rgba(10,191,188,0.2)]"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
