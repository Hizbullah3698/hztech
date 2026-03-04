import Link from "next/link";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-hz-border bg-hz-primary py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="font-sora text-2xl font-extrabold text-hz-text mb-6">
              <span className="text-hz-teal">HZ</span> Tech
            </div>
            <p className="text-hz-muted text-sm leading-relaxed mb-8 max-w-xs">
              Senior-led software development partner for the world's most ambitious tech teams.
            </p>
            <div className="flex gap-4">
              <Link
                className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-hz-teal/20 transition-colors text-hz-muted hover:text-hz-teal"
                href="mailto:hizbullahwazir.dev@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </Link>
              <Link
                className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-hz-teal/20 transition-colors text-hz-muted hover:text-hz-teal"
                href="https://wa.me/923000943975"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
              <Link
                className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-hz-teal/20 transition-colors text-hz-muted hover:text-hz-teal"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-hz-muted mb-8">Navigation</h5>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li>
                <Link className="text-hz-muted hover:text-hz-teal transition-colors" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-hz-muted hover:text-hz-teal transition-colors" href="/case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link className="text-hz-muted hover:text-hz-teal transition-colors" href="/process">
                  Process
                </Link>
              </li>
              <li>
                <Link className="text-hz-muted hover:text-hz-teal transition-colors" href="/pilot">
                  Pilot Program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-hz-muted mb-8">Quick Links</h5>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li>
                <Link className="text-hz-muted hover:text-hz-teal transition-colors" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-hz-muted hover:text-hz-teal transition-colors" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-hz-muted hover:text-hz-teal transition-colors" href="/terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="text-hz-muted hover:text-hz-teal transition-colors" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-hz-muted mb-8">Get in Touch</h5>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-hz-muted uppercase font-mono">Direct Email</span>
                <a
                  className="text-hz-text hover:text-hz-teal transition-colors text-sm font-medium break-all"
                  href="mailto:hizbullahwazir.dev@gmail.com"
                >
                  hizbullahwazir.dev@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-hz-muted uppercase font-mono">WhatsApp</span>
                <a
                  className="text-hz-text hover:text-hz-teal transition-colors text-sm font-medium"
                  href="https://wa.me/923000943975"
                >
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-hz-border flex flex-col md:flex-row justify-between gap-6">
          <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">
            © 2025 HZ Tech. All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-600 text-[10px] font-mono uppercase tracking-widest">
            <span>Islamabad, Pakistan · Serving teams worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
