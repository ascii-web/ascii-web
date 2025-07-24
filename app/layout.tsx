import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/firebase-auth";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { NavigationHeader } from "@/components/navigation-header";
import { Footer } from "@/components/footer";
import { AIAssistantWidget } from "@/components/ai-assistant-widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ascii-web.com"),
  title: {
    default: "ASCII Web - AI-Powered ASCII Art Generator",
    template: "%s | ASCII Web",
  },
  description:
    "Create stunning ASCII art with AI-powered tools. Transform images into ASCII art, share with the community, and explore an extensive gallery of ASCII artwork.",
  keywords: [
    "ASCII art",
    "AI art generator",
    "text art",
    "ASCII generator",
    "ASCII converter",
    "AI-powered art",
    "digital art",
    "ASCII community",
  ],
  authors: [{ name: "ASCII Web Team" }],
  creator: "ASCII Web",
  publisher: "ASCII Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ascii-web.com",
    title: "ASCII Web - AI-Powered ASCII Art Generator",
    description:
      "Create stunning ASCII art with AI-powered tools. Transform images into ASCII art, share with the community, and explore an extensive gallery of ASCII artwork.",
    siteName: "ASCII Web",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASCII Web - Transform your images into ASCII art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCII Web - AI-Powered ASCII Art Generator",
    description:
      "Create stunning ASCII art with AI-powered tools. Transform images into ASCII art, share with the community.",
    images: ["/og-image.jpg"],
    creator: "@asciiweb", // Replace with your actual Twitter handle
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
  verification: {
    // google: "your-google-site-verification", // Add your verification code
    // Add other verification codes as needed
  },
};

import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <CookieConsentBanner />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
