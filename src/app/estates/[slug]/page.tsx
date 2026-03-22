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
    <div className="pt-18 sm:pt-22">
      {/* ============ HERO ============ */}
      <section className="relative h-[55vh] sm:h-[65vh] flex items-end">
        <Image
          src={estate.images[0]}
          alt={estate.name}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-14 w-full">
          <Link
            href="/#estates"
            className="inline-flex items-center gap-1.5 text-white/50 text-sm mb-6 hover:text-white/80 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            All Estates
          </Link>
          <div className="inline-block bg-accent backdrop-blur-sm border border-accent/50 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Easter Promo
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {estate.name}
          </h1>
          <p className="text-base sm:text-lg text-white/60 mt-3 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {estate.location}
          </p>
        </div>
      </section>

      {/* ============ QUICK STATS BAR ============ */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              {
                label: "Promo Price",
                value: estate.price,
                sub: estate.originalPrice ? `Was ${estate.originalPrice}` : estate.priceNote,
                highlight: true,
              },
              { label: "Land Title", value: estate.title, sub: null },
              {
                label: "Payment Plan",
                value: estate.paymentPlan.time,
                sub: "installment plan",
              },
              {
                label: "Status",
                value: "Actively Selling",
                sub: null,
                dot: true,
              },
            ].map((item) => (
              <div key={item.label} className="py-7 px-6 first:pl-0">
                <div className="text-[11px] text-muted uppercase tracking-[0.15em] font-semibold">
                  {item.label}
                </div>
                <div
                  className={`text-base sm:text-lg font-bold mt-1.5 flex items-center gap-2 ${
                    item.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.dot && (
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  )}
                  {item.value}
                </div>
                {item.sub && (
                  <div className="text-xs text-muted mt-0.5">{item.sub}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-16">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5 tracking-tight">
                About This Estate
              </h2>
              <p className="text-muted leading-[1.8] text-[15px]">
                {estate.description}
              </p>
            </div>

            {/* Gallery */}
            {estate.images.length > 1 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-5 tracking-tight">
                  Estate Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {estate.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative h-72 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${estate.name} - Image ${i + 1}`}
                        fill
                        className="object-cover hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5 tracking-tight">
                Why This Location
              </h2>
              <div className="space-y-4">
                {estate.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-[15px] text-muted leading-relaxed">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Plan */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5 tracking-tight">
                Payment Plan
              </h2>
              <div className="bg-surface-warm rounded-xl p-9 border border-border">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <div className="text-[11px] text-muted uppercase tracking-[0.15em] font-semibold">
                      Initial Deposit
                    </div>
                    <div className="text-lg font-bold text-foreground mt-2">
                      {estate.paymentPlan.initial}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-muted uppercase tracking-[0.15em] font-semibold">
                      Balance
                    </div>
                    <div className="text-lg font-bold text-foreground mt-2">
                      {estate.paymentPlan.spread}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-muted uppercase tracking-[0.15em] font-semibold">
                      Duration
                    </div>
                    <div className="text-lg font-bold text-foreground mt-2">
                      {estate.paymentPlan.duration}
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-accent-light/60 rounded-lg border border-accent/10">
                  <p className="text-sm text-accent font-medium">
                    Pay outright and get a special discount. Ask us about it —
                    serious investors always do.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5 tracking-tight">
                Location
              </h2>
              <div className="h-80 rounded-xl bg-surface border border-border flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-10 h-10 mx-auto mb-4 text-border"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm font-semibold text-foreground">
                    {estate.location}
                  </p>
                  <p className="text-xs text-muted mt-1.5">
                    Interactive map available during inspection
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============ SIDEBAR ============ */}
          <div>
            <div className="sticky top-28 space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-xl border border-border p-8 shadow-sm">
                <div className="text-[11px] text-muted uppercase tracking-[0.15em] font-semibold">
                  Easter Promo Price
                </div>
                {estate.originalPrice && (
                  <div className="text-base text-muted line-through mt-2">
                    {estate.originalPrice}
                  </div>
                )}
                <div className="text-3xl font-bold text-primary mt-1">
                  {estate.price}
                </div>
                <div className="text-sm text-muted mt-1">
                  {estate.priceNote}
                </div>
                {estate.promoGift && (
                  <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm font-semibold text-primary">
                      🎁 Gift: {estate.promoGift}
                    </p>
                  </div>
                )}

                <div className="mt-8 space-y-3">
                  <a
                    href={whatsappEstate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-whatsapp text-white py-3.5 rounded-md font-semibold text-sm hover:bg-whatsapp-dark transition-all duration-200 shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4.5 h-4.5 fill-current"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBERS[0].replace(/\s/g, "")}`}
                    className="w-full flex items-center justify-center bg-accent text-white py-3.5 rounded-md font-semibold text-sm hover:bg-accent-dark transition-all duration-200 shadow-sm"
                  >
                    Call to Book Inspection
                  </a>
                </div>

                <div className="mt-8 pt-7 border-t border-border space-y-3.5">
                  {[
                    "Titles verified & lawyer-ready",
                    "Free weekend inspection — we pick you up",
                    "6-month payment plan, zero interest",
                    "Instant allocation the day you complete payment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted"
                    >
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Urgency Box */}
              <div className="bg-accent-light/50 border border-accent/10 rounded-xl p-7">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-bold text-accent">
                      Plots Are Moving Fast
                    </div>
                    <p className="text-xs text-muted leading-relaxed mt-1.5">
                      Every development milestone triggers a price increase.
                      The price you see today is the lowest it will ever be.
                      Lock it in before the next phase begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ OTHER ESTATES ============ */}
      <section className="py-20 sm:py-24 bg-surface-warm border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-bold text-foreground mb-10 tracking-tight">
            Explore Other Estates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {estates
              .filter((e) => e.slug !== estate.slug)
              .slice(0, 3)
              .map((e) => (
                <Link
                  key={e.slug}
                  href={`/estates/${e.slug}`}
                  className="group rounded-xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={e.images[0]}
                      alt={e.name}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-foreground">{e.name}</h3>
                    <p className="text-sm text-muted mt-1">{e.location}</p>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">
                        {e.price}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        View Details
                      </span>
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
