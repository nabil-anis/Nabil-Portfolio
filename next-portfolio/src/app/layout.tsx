import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Next.js Font equivalent to Google Fonts link
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nabil Anis | Portfolio",
  description: "Official portfolio of Nabil Anis, showcasing AI projects, embedded systems, robotics, and academic research.",
  keywords: "Nabil Anis, Nabil Anis portfolio, AI student portfolio, computer science portfolio, robotics projects, embedded systems, Arduino projects, AI chatbot, hackathon projects Pakistan, academic projects, software engineering student",
  authors: [{ name: "Nabil Anis" }],
  openGraph: {
    type: "website",
    url: "https://www.nabilanis.com",
    title: "Nabil Anis | Portfolio",
    description: "Official portfolio of Nabil Anis, showcasing AI projects, embedded systems, robotics, and academic research.",
    images: ["/nblheadshot.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabil Anis | Portfolio",
    description: "Official portfolio of Nabil Anis, showcasing AI projects, embedded systems, robotics, and academic research.",
    images: ["/nblheadshot.png"],
  },
  other: {
    "google-site-verification": "sTHGcPTPruXvYO8Rv9kN2ulP9UhXYael-hwW2OI86ok"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
