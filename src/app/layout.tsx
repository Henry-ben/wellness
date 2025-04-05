import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Load Manrope from Google Fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "TIFÉ WELLNESS AND SPA | Best Spa in Lagos",
  description: "Experience luxury wellness at Lagos' premier spa. Professional massages, facials, pedicure, manicure, waxing & beauty treatments. Book your relaxation journey today.",
  keywords: "spa in Lagos, wellness center, massage, facial, pedicure, manicure, waxing, beauty treatments, Nigerian spa, luxury spa",
  authors: [{ name: "TIFÉ WELLNESS AND SPA" }],
  creator: "TIFÉ WELLNESS AND SPA",
  publisher: "TIFÉ WELLNESS AND SPA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.tifewellness.com",
    siteName: "TIFÉ WELLNESS AND SPA",
    title: "TIFÉ WELLNESS AND SPA | Luxury Wellness Center in Lagos",
    description: "Experience luxury wellness at Lagos' premier spa. Professional massages, facials, pedicure, manicure, waxing & beauty treatments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TIFÉ WELLNESS AND SPA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TIFÉ WELLNESS AND SPA | Luxury Wellness Center in Lagos",
    description: "Experience luxury wellness at Lagos' premier spa. Professional massages, facials, pedicure, manicure, waxing & beauty treatments.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body 
      className={`${manrope.variable} antialiased`}
      suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
