import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Handshake Account Support | Profile & Opportunity Assistance",
  description: "Independent professional Handshake support for students and graduates who want help improving their profile, organizing opportunities, and preparing applications.",
  openGraph: {
    title: "Handshake Account Support | Profile & Opportunity Assistance",
    description: "Independent professional Handshake support for students and graduates who want help improving their profile, organizing opportunities, and preparing applications.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
