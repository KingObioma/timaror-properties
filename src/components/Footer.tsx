import Link from "next/link";
import Image from "next/image";
import {
  EMAIL,
  ADDRESS,
  PHONE_NUMBERS,
  SOCIALS,
  WHATSAPP_LINK,
  estates,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo/logo-white.png"
              alt="Timaror Properties"
              width={160}
              height={42}
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Verified land investment opportunities in Port Harcourt&apos;s
              fastest-growing locations. CAC registered. Trusted by 500+
              investors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Estates
            </h4>
            <ul className="space-y-2.5">
              {estates.map((estate) => (
                <li key={estate.slug}>
                  <Link
                    href={`/estates/${estate.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {estate.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>{ADDRESS}</li>
              {PHONE_NUMBERS.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {Object.entries(SOCIALS).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all text-xs font-semibold uppercase"
                  aria-label={name}
                >
                  {name.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Timaror Properties Development Ltd. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
