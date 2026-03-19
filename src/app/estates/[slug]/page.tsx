import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { estates, WHATSAPP_LINK, PHONE_NUMBERS } from "@/lib/data";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return estates.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const estate = estates.find((e) => e.slug === slug);
  if (!estate) return {};
  return {
    title: `${estate.name} — ${estate.price} | Timaror Properties`,
    description: estate.description,
  };
}

export default async function EstatePage({ params }: Props) {
  const { slug } = await params;
  const estate = estates.find((e) => e.slug === slug);
  if (!estate) notFound();

  const whatsappEstate = `https://wa.me/2349114728397?text=${encodeURIComponent(
    `Hello, I am interested in ${estate.name} (${estate.location}). Please send me more details.`
  )}`;

  return (
    <div className="pt-20">
      {/* ============ HERO ============ */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-end">
        <Image
          src={estate.images[0]}
          alt={estate.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Link
            href="/#estates"
            className="inline-block text-white/70 text-sm mb-4 hover:text-white"
          >
            ← Back to Estates
          </Link>
          <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            Now Selling
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {estate.name}
          </h1>
          <p className="text-lg text-gray-300 mt-2">{estate.location}</p>
        </div>
      </section>

      {/* ============ QUICK STATS BAR ============ */}
      <section className="bg-light border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                Price per Plot
              </div>
              <div className="text-2xl font-bold text-primary mt-1">
                {estate.price}
              </div>
              <div className="text-xs text-muted">{estate.priceNote}</div>
            </div>
            <div>
              <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                Title
              </div>
              <div className="text-sm font-bold text-foreground mt-1">
                {estate.title}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                Payment Plan
              </div>
              <div className="text-sm font-bold text-foreground mt-1">
                {estate.paymentPlan.duration}
              </div>
              <div className="text-xs text-muted">installment plan</div>
            </div>
            <div>
              <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                Status
              </div>
              <div className="text-sm font-bold text-primary mt-1">
                ● Actively Selling
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ============ MAIN CONTENT ============ */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                About This Estate
              </h2>
              <p className="text-muted leading-relaxed">{estate.description}</p>
            </div>

            {/* Gallery */}
            {estate.images.length > 1 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Estate Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {estate.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative h-64 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${estate.name} - Image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Why This Location
              </h2>
              <div className="space-y-3">
                {estate.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-muted">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Plan */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Payment Plan
              </h2>
              <div className="bg-light rounded-2xl p-8 border border-border">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                      Initial Deposit
                    </div>
                    <div className="text-lg font-bold text-foreground mt-1">
                      {estate.paymentPlan.initial}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                      Balance
                    </div>
                    <div className="text-lg font-bold text-foreground mt-1">
                      {estate.paymentPlan.spread}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                      Duration
                    </div>
                    <div className="text-lg font-bold text-foreground mt-1">
                      {estate.paymentPlan.duration}
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-primary font-medium">
                    💡 Outright payment attracts a discount. Contact us to learn
                    more.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Location
              </h2>
              <div className="h-72 rounded-2xl bg-gray-100 border border-border flex items-center justify-center">
                <div className="text-center text-muted">
                  <svg
                    className="w-12 h-12 mx-auto mb-3 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm font-medium">{estate.location}</p>
                  <p className="text-xs mt-1">
                    Interactive map available during inspection
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============ SIDEBAR ============ */}
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                <div className="text-sm text-muted mb-1">Price per plot</div>
                <div className="text-3xl font-bold text-primary">
                  {estate.price}
                </div>
                <div className="text-sm text-muted">{estate.priceNote}</div>

                <div className="mt-6 space-y-3">
                  <a
                    href={whatsappEstate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-[#25D366] text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-[#1da851] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBERS[0].replace(/\s/g, "")}`}
                    className="w-full block text-center bg-primary text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
                  >
                    Call to Book Inspection
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-primary">✓</span> Verified title
                    documents
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-primary">✓</span> Free guided
                    inspection
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-primary">✓</span> Flexible payment
                    plan
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-primary">✓</span> Instant allocation
                    after payment
                  </div>
                </div>
              </div>

              {/* Urgency Box */}
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                <div className="text-sm font-bold text-accent mb-2">
                  Limited Plots Available
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Plots in this estate are selling fast. Prices are subject to
                  increase without prior notice as development milestones are
                  reached. Secure your plot today to lock in the current price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ OTHER ESTATES ============ */}
      <section className="py-16 bg-light border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Explore Other Estates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {estates
              .filter((e) => e.slug !== estate.slug)
              .slice(0, 3)
              .map((e) => (
                <Link
                  key={e.slug}
                  href={`/estates/${e.slug}`}
                  className="group rounded-xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={e.images[0]}
                      alt={e.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground">{e.name}</h3>
                    <p className="text-sm text-muted">{e.location}</p>
                    <div className="mt-2 text-lg font-bold text-primary">
                      {e.price}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
