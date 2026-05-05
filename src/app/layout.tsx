import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SocialProofToast } from "@/components/SocialProofToast";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ExitIntentModal } from "@/components/ExitIntentModal";

export const metadata: Metadata = {
  title: "Expert Reports | Independent Forensic Psychological Assessments for Irish Courts",
  description: "Coordination of independent forensic psychological assessments for criminal, family, and civil courts in Ireland. 21-day turnaround. Designed to support Criminal Legal Aid sanction applications. PSI registered clinicians.",
  keywords: "forensic psychology, court reports, psychological assessment, Ireland, solicitors, family law, criminal court, medico-legal, expert witness, Legal Aid",
  authors: [{ name: "Expert Reports" }],
  openGraph: {
    title: "Expert Reports | Court-Ready Forensic Psychological Reports for Solicitors",
    description: "Independent forensic psychological assessments for Irish courts. 21-day turnaround. Legal Aid & private clients catered for. Standard formats judges expect.",
    url: "https://expertreports.ie",
    siteName: "Expert Reports",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Reports | Court-Ready Forensic Reports for Solicitors",
    description: "Independent forensic psychological assessments for Irish courts. 21-day turnaround. Legal Aid & private clients catered for.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b2b57",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col safe-area-bottom">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        
        {/* CRO Elements */}
        <StickyMobileCTA />
        <FloatingCTA />
        <SocialProofToast />
        <ExitIntentModal />
      </body>
    </html>
  );
}
