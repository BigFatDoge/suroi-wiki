import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Suroi Autogenerated Wiki",
    template: "%s | Suroi Autogenerated Wiki"
  },
  description:
    "Unofficial wiki for Suroi.io. Autogenerated statistics and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-sans antialiased text-white box-border dark ${inter.className}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
