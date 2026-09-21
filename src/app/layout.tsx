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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "https://mustafizur-09.github.io")
  ),
  title: "Md. Mustafizur Rahman | Software Engineer & ML Researcher",
  description: "Portfolio of Md. Mustafizur Rahman - Full-Stack, AI & Leadership",
  icons: {
    icon: [
      { url: "/images/profile.png?v=2" },
      { url: "/icon.png?v=2" },
    ],
    shortcut: "/images/profile.png?v=2",
    apple: "/apple-icon.png?v=2",
  },
  openGraph: {
    title: "Md. Mustafizur Rahman | Software Engineer & ML Researcher",
    description: "Portfolio of Md. Mustafizur Rahman - Full-Stack, AI & Leadership",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/images/profile.png?v=2" />
        <link rel="shortcut icon" href="/images/profile.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=2" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
