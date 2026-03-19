export interface Estate {
  slug: string;
  name: string;
  location: string;
  price: string;
  priceNote: string;
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
    price: "₦3,500,000",
    priceNote: "per plot (600sqm)",
    title: "Registered Survey & Deed of Assignment",
    description:
      "A fast-appreciating estate in the heart of Igwuruta-Ali — one of Port Harcourt's most rapidly developing corridors. Positioned near the international airport and major road networks, Berry View Estates offers investors a rare entry point into a high-growth zone before prices surge.",
    features: [
      "5 minutes from Port Harcourt International Airport",
      "Close to East-West Road & major expressways",
      "100% dry land — build-ready all year round",
      "Gated estate with planned road infrastructure",
      "Rapid area development with rising land values",
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
    price: "₦2,500,000",
    priceNote: "per plot (600sqm)",
    title: "Registered Survey & Deed of Assignment",
    description:
      "Strategically located in Omagwa — one of the fastest-developing areas along the airport corridor. Jacob's Court offers affordable land with verified documentation, making it the ideal choice for investors who want to enter the Port Harcourt market at the right time.",
    features: [
      "Along the airport corridor — high traffic & visibility",
      "Close to Igwuruta and major commercial hubs",
      "Dry, flat terrain — no sand-filling required",
      "Fully fenced with estate access road",
      "Affordable entry point with strong appreciation",
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
    price: "₦1,800,000",
    priceNote: "per plot (600sqm)",
    title: "Registered Survey & Deed of Assignment",
    description:
      "Nestled in the serene environment of Isiokpo, Morning Dew Estate offers the perfect blend of affordability and future growth. As development pushes outward from Port Harcourt, early investors in this estate stand to benefit from significant land value appreciation.",
    features: [
      "Peaceful, fast-developing community",
      "Connected to major roads leading to PH city center",
      "100% dry land with natural drainage",
      "Lowest entry price in our portfolio",
      "Ideal for long-term investment or residential development",
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
    price: "₦3,000,000",
    priceNote: "per plot (600sqm)",
    title: "Registered Survey & Deed of Assignment",
    description:
      "Our flagship estate — Timaror Gardens represents the premium standard in land investment. Located in Odagwa with excellent road access and a growing neighborhood, this estate is designed for investors who demand quality, security, and strong returns.",
    features: [
      "Premium estate with planned infrastructure",
      "Motorable access road already in place",
      "Close to established communities and markets",
      "Secure documentation with verified titles",
      "Strong track record of value appreciation",
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
    text: "I was skeptical about buying land in Port Harcourt from Lagos. Timaror Properties made the entire process seamless — from documentation to physical inspection. My plot in Berry View has already appreciated by 40% in 18 months.",
  },
  {
    name: "Mrs. Blessing Okafor",
    role: "Diaspora Investor, UK",
    text: "As a Nigerian in the diaspora, trust was everything for me. Timaror sent me video walkthroughs, verified documents, and even connected me with other buyers. I now own two plots in Jacob's Court and I'm planning to build next year.",
  },
  {
    name: "Mr. Emeka Nwosu",
    role: "First-time Buyer, Port Harcourt",
    text: "The flexible payment plan made it possible for me to own land as a young professional. The team was transparent and patient throughout. I highly recommend Timaror to anyone looking to invest in land.",
  },
];
