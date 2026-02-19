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
  metadataBase: new URL('https://hackfest-cesa.vercel.app'),
  title: {
    default: "HACKFEST: INNOV8 TMRW | CESA x VIT Mumbai",
    template: "%s | HACKFEST: INNOV8 TMRW"
  },
  description: "Join HACKFEST: INNOV8 TMRW - A premier hackathon hosted by CESA at VIT Mumbai. Build beyond infinity with cutting-edge innovation. Feb 10-14, 2026. Register now for exciting prizes, workshops, and networking opportunities!",
  keywords: [
    "hackathon", 
    "CESA", 
    "VIT Mumbai", 
    "innovation", 
    "technology", 
    "coding competition",
    "INNOV8 TMRW",
    "HACKFEST",
    "tech event",
    "programming competition",
    "student hackathon",
    "coding challenge",
    "tech innovation",
    "VIT hackathon",
    "Mumbai hackathon"
  ],
  authors: [{ name: "CESA - VIT Mumbai", url: "https://hackfest-cesa.vercel.app" }],
  creator: "CESA - VIT Mumbai",
  publisher: "CESA - VIT Mumbai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HACKFEST: INNOV8 TMRW | CESA x VIT Mumbai",
    description: "Build beyond infinity at VIT Mumbai's premier hackathon. Feb 10-14, 2026. Join us for 48 hours of innovation, coding, and creativity!",
    url: 'https://hackfest-cesa.vercel.app',
    siteName: 'HACKFEST: INNOV8 TMRW',
    images: [
      {
        url: '/ogimage.webp',
        width: 1200,
        height: 630,
        alt: 'HACKFEST: INNOV8 TMRW - Build Beyond Infinity',
        type: 'image/webp',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HACKFEST: INNOV8 TMRW | CESA x VIT Mumbai',
    description: 'Build beyond infinity at VIT Mumbai\'s premier hackathon. Feb 10-14, 2026. Register now!',
    images: ['/ogimage.webp'],
    creator: '@CESA_VIT',
    site: '@CESA_VIT',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "71iYLBPMi1-_Qqmdmi7Z-PdtVGLhVyAiTFsHC810R9k",
  },
  alternates: {
    canonical: 'https://hackfest-cesa.vercel.app',
  },
  category: 'technology',
  icons: {
    icon: '/LogoCesa 1.png',
    shortcut: '/LogoCesa 1.png',
    apple: '/LogoCesa 1.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/LogoCesa 1.png',
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'HACKFEST: INNOV8 TMRW',
    description: 'A premier hackathon hosted by CESA at VIT Mumbai. Build beyond infinity with cutting-edge innovation.',
    startDate: '2026-02-10',
    endDate: '2026-02-14',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'VIT Mumbai',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      }
    },
    image: [
      'https://hackfest-cesa.vercel.app/ogimage.webp'
    ],
    organizer: {
      '@type': 'Organization',
      name: 'CESA - VIT Mumbai',
      url: 'https://hackfest-cesa.vercel.app'
    },
    offers: {
      '@type': 'Offer',
      url: 'https://hackfest-cesa.vercel.app',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01'
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        
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
