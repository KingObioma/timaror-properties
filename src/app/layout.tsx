import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timaror Properties — Verified Land Investment in Port Harcourt",
  description:
    "Secure verified land in Port Harcourt's fastest-growing locations. CAC registered, flexible payment plans, trusted by 500+ investors. Book an inspection today.",
  openGraph: {
    title: "Timaror Properties — Verified Land Investment in Port Harcourt",
    description:
      "Secure verified land in Port Harcourt's fastest-growing locations. Flexible payment plans available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full king`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
