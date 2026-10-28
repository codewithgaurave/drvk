import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Dr. Vikram Singh Chauhan",
    default: "Dr. Vikram Singh Chauhan | Multi-Sector Founder · Corporate Trainer · Business Coach",
  },
  description:
    "Official digital profile of Dr. Vikram Singh Chauhan — Multi-Sector Founder, Corporate Trainer, and Business Coach. Founder & leader across AIIMES, NOBSE, Arya Pharma, Vexter Technologies, MetaSynexa Global, and Indian Excellence Council (IEC).",
  keywords: [
    "Dr. Vikram Singh Chauhan",
    "Multi-Sector Founder",
    "Corporate Trainer",
    "Business Coach",
    "AIIMES",
    "NOBSE",
    "Arya Pharma",
    "Vexter Technologies",
    "MetaSynexa Global",
    "Indian Excellence Council",
    "Institution Builder",
  ],
  authors: [{ name: "Dr. Vikram Singh Chauhan" }],
  openGraph: {
    type: "profile",
    locale: "en_IN",
    siteName: "Dr. Vikram Singh Chauhan",
    title: "Dr. Vikram Singh Chauhan | Multi-Sector Founder · Corporate Trainer · Business Coach",
    description:
      "Visionary entrepreneur, institution builder, and executive leader with over 15 years of experience across education, healthcare, technology, and business development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Vikram Singh Chauhan | Multi-Sector Founder · Corporate Trainer · Business Coach",
    description: "Multi-Sector Founder · Corporate Trainer · Business Coach",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="antialiased">
      <body className="page-wrapper">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
