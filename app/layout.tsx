import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fahad-khan-portfolio-h8ex6fsvw-fahadkhans-projects.vercel.app'),
  title: "Fahad Khan | Full-Stack Developer & AI Enthusiast",
  description: "Full-Stack Developer specializing in Next.js, React, TypeScript, and AI-powered applications. Building fast, scalable, and modern web applications with exceptional user experiences.",
  keywords: ["Fahad Khan", "Full-Stack Developer", "Next.js", "React", "TypeScript", "AI Developer", "Web Developer", "Portfolio"],
  authors: [{ name: "Fahad Khan" }],
  creator: "Fahad Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahad-khan-portfolio-h8ex6fsvw-fahadkhans-projects.vercel.app",
    title: "Fahad Khan | Full-Stack Developer & AI Enthusiast",
    description: "Full-Stack Developer specializing in Next.js, React, TypeScript, and AI-powered applications. Building fast, scalable, and modern web applications.",
    siteName: "Fahad Khan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fahad Khan - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Khan | Full-Stack Developer & AI Enthusiast",
    description: "Full-Stack Developer specializing in Next.js, React, TypeScript, and AI-powered applications.",
    images: ["/og-image.png"],
    creator: "@fahadkhan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
