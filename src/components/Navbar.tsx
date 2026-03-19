"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/logo-dark.png"
              alt="Timaror Properties"
              width={180}
              height={48}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#estates"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Estates
            </Link>
            <Link
              href="/#why-us"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Book Inspection
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/#estates"
              onClick={() => setOpen(false)}
              className="block text-sm font-medium py-2"
            >
              Estates
            </Link>
            <Link
              href="/#why-us"
              onClick={() => setOpen(false)}
              className="block text-sm font-medium py-2"
            >
              Why Us
            </Link>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block text-sm font-medium py-2"
            >
              Contact
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
            >
              Book Inspection
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
