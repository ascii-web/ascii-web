import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/firebase-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASCII Web - AI-Powered ASCII Art Generator",
  description:
    "Create stunning ASCII art with AI-powered tools and share with the community",
  generator: "v0.dev",
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
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
