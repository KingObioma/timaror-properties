export interface Estate {
  slug: string;
  name: string;
  location: string;
  price: string;
  originalPrice: string;
  priceNote: string;
  promoGift: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
  paymentPlan: {
    initial: string;
    spread: string;
    duration: string;
  };
}

export const estates: Estate[] = [
  {
    slug: "berry-view-estates",
    name: "Berry View Estates",
    location: "Igwuruta-Ali, Port Harcourt",
    price: "₦1,800,000",
    originalPrice: "₦3,500,000",
    priceNote: "per plot (600sqm)",
    promoGift: "25kg Rice OR ₦30k Voucher",
    title: "Registered Survey & Deed of Assignment",
    description:
      "This is the one seasoned investors ask about first. Berry View sits in Igwuruta-Ali — minutes from Port Harcourt International Airport, right in the path of the city's most aggressive expansion. The land is 100% dry, the titles are airtight, and early buyers have already seen values climb sharply. If you want to own land where infrastructure is coming to meet you, not the other way around — this is it.",
    features: [
      "5 minutes from Port Harcourt International Airport — the growth epicentre",
      "Direct access to East-West Road & major expressways",
      "100% dry, build-ready land — no sand-filling, no flooding, no excuses",
      "Gated estate with internal road network already planned",
      "Surrounding area developing fast — value appreciation is not a question of if, but when",
    ],
    images: ["/estates/berry-view/1.jpg", "/estates/berry-view/2.jpg"],
    paymentPlan: {
      initial: "₦1,500,000 (deposit)",
      spread: "Balance spread across 6 months",
      duration: "6 months",
    },
  },
  {
    slug: "jacobs-court",
    name: "Jacob's Court",
    location: "Omagwa, Port Harcourt",
    price: "₦3,450,000",
    originalPrice: "₦2,500,000",
    priceNote: "per plot (600sqm)",
    promoGift: "50kg Rice OR ₦50k Voucher",
    title: "Registered Survey & Deed of Assignment",
    description:
      "Jacob's Court is our smartest entry point for first-time investors. Sitting along the booming Omagwa airport corridor, it gives you verified, fenced land at a price that won't stay this low for long. The documentation is clean. The terrain is dry and flat. And the area around it is developing so fast that today's price will look like a steal 12 months from now.",
    features: [
      "Prime airport corridor location — high traffic, high demand, high appreciation",
      "Minutes from Igwuruta and major commercial centres",
      "Bone-dry, flat terrain — zero sand-filling cost",
      "Fully perimeter-fenced with dedicated estate access road",
      "The most affordable entry into Port Harcourt's land market — perfect for your first plot",
    ],
    images: [
      "/estates/jacobs-court/1.jpg",
      "/estates/jacobs-court/2.jpg",
      "/estates/jacobs-court/3.jpg",
    ],
    paymentPlan: {
      initial: "₦1,000,000 (deposit)",
      spread: "Balance spread across 6 months",
      duration: "6 months",
    },
  },
  {
    slug: "morning-dew-estate",
    name: "Morning Dew Estate",
    location: "Isiokpo, Rivers State",
    price: "₦1,590,000",
    originalPrice: "₦1,800,000",
    priceNote: "per plot (600sqm)",
    promoGift: "10kg Rice OR ₦20k Voucher",
    title: "Registered Survey & Deed of Assignment",
    description:
      "At ₦1.59M per plot, Morning Dew is how smart investors get in early. Isiokpo is quiet now — but the expansion wave rolling out from Port Harcourt is already visible. Roads are improving. Communities are growing. And the investors who secure land here today are positioning themselves exactly where value is about to catch up. This is the kind of move you'll look back on with zero regret.",
    features: [
      "Serene, rapidly developing community with momentum building every quarter",
      "Connected to major arterial roads leading straight to PH city centre",
      "100% naturally dry land with built-in drainage — no extra costs",
      "Our most accessible price point — start building wealth from ₦800K deposit",
      "Ideal for long-term hold or future residential development",
    ],
    images: ["/estates/morning-dew/1.jpg"],
    paymentPlan: {
      initial: "₦800,000 (deposit)",
      spread: "Balance spread across 6 months",
      duration: "6 months",
    },
  },
  {
    slug: "timaror-gardens",
    name: "Timaror Gardens Estate",
    location: "Odagwa, Port Harcourt",
    price: "₦590,000",
    originalPrice: "₦3,000,000",
    priceNote: "per plot (600sqm)",
    promoGift: "5kg Rice OR ₦10k Voucher",
    title: "Registered Survey & Deed of Assignment",
    description:
      "This is the flagship. Timaror Gardens is our premium offering — built for investors who want more than just land, they want an asset backed by solid infrastructure, verified documentation, and a location that's already proving its value. Odagwa is growing fast, the access roads are motorable today, and the neighbourhood is filling in around the estate. This is confidence-level investing.",
    features: [
      "Our premium estate — the one we put our name on",
      "Motorable access road already in place, not promised",
      "Surrounded by established communities, schools, and active markets",
      "Every document verified and ready for independent legal review",
      "Consistent value appreciation backed by visible, on-ground development",
    ],
    images: ["/estates/timaror-gardens/1.jpg"],
    paymentPlan: {
      initial: "₦1,200,000 (deposit)",
      spread: "Balance spread across 6 months",
      duration: "6 months",
    },
  },
];

export const WHATSAPP_LINK =
  "https://wa.me/2349114728397?text=Hello%2C%20I%20am%20interested%20in%20your%20property";

export const PHONE_NUMBERS = ["0911 472 8397", "0807 865 7604"];
export const EMAIL = "timarorpropertiesph@gmail.com";
export const ADDRESS =
  "11, SARS Road, Beside NEPA Office, Off HappyBite Junction, Port Harcourt";

export const SOCIALS = {
  youtube: "https://youtube.com/@timarorpropertiesph",
  instagram: "https://www.instagram.com/timarorpropertiesphc",
  facebook: "https://www.facebook.com/share/1CUt4Jkgin/",
  twitter: "https://x.com/Timarorphc",
};

export const testimonials = [
  {
    name: "Engr. Chukwudi Amadi",
    role: "Land Investor, Lagos",
    image: "/testimonials/Bright.png",
    text: "I almost didn't do it — buying land in PH from Lagos felt risky. But Timaror sent every document upfront, arranged my inspection, and followed up until I was comfortable. That was 18 months ago. My Berry View plot is now worth 40% more than I paid. Best financial decision I've made.",
  },
  {
    name: "Mr. Evans Adekunle",
    role: "Diaspora Investor, UK",
    image: "/testimonials/Emmanuel.jpeg",
    text: "Living abroad, I've heard every land scam story there is. Timaror was different — video walkthroughs, verified documents, and they even connected me with other diaspora buyers so I could hear their experience. I now own two plots in Jacob's Court. Building starts next year.",
  },
  {
    name: "Mr. Emeka Nwosu",
    role: "First-time Buyer, Port Harcourt",
    image: "/testimonials/Wilson.png",
    text: "I'm a young professional — I didn't think I could afford land yet. The 6-month payment plan changed everything. I started with ₦800K, paid off my balance comfortably, and now I own a plot that's already appreciating. Timaror made me a landowner at 28.",
  },
];
