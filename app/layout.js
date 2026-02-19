import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ringm = localFont({
  src: "./font/RINGM___.ttf",
  variable: "--font-ringm",
  display: "swap",
});

export const metadata = {
  title: "HACKFEST: INNOV8 TMRW | CESA x VIT Mumbai",
  description: "Join HACKFEST: INNOV8 TMRW - A premier hackathon hosted by CESA at VIT Mumbai. Build beyond infinity with cutting-edge innovation. Feb 10-14, 2026.",
  keywords: ["hackathon", "CESA", "VIT Mumbai", "innovation", "technology", "coding competition"],
  authors: [{ name: "CESA - VIT Mumbai" }],
  openGraph: {
    title: "HACKFEST: INNOV8 TMRW | CESA x VIT Mumbai",
    description: "Build beyond infinity at VIT Mumbai's premier hackathon. Feb 10-14, 2026.",
    type: "website",
  },
  verification: {
    google: "71iYLBPMi1-_Qqmdmi7Z-PdtVGLhVyAiTFsHC810R9k",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-57C56JJ7T8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-57C56JJ7T8');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} ${geistMono.variable} ${ringm.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
