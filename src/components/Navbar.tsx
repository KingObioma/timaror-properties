"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-border ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-18 sm:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo-dark.png"
              alt="Timaror Properties"
              width={200}
              height={52}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9">
            {[
              { label: "Estates", href: "/#estates" },
              { label: "Why Us", href: "/#why-us" },
              { label: "How It Works", href: "/#process" },
              { label: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium tracking-wide transition-colors uppercase text-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-7 py-2.5 rounded-md text-[13px] font-semibold tracking-wide hover:bg-accent-dark transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book Inspection
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-6 pt-2 space-y-1 border-t border-border-light bg-white rounded-b-xl shadow-lg -mx-6 px-6">
            {[
              { label: "Estates", href: "/#estates" },
              { label: "Why Us", href: "/#why-us" },
              { label: "How It Works", href: "/#process" },
              { label: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium py-3 text-muted hover:text-foreground tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 bg-accent text-white px-6 py-3.5 rounded-md text-sm font-semibold text-center tracking-wide"
            >
              Book Inspection
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
