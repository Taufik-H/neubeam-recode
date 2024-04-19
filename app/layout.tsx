import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { Navbar, Footer } from "@/components/sections";
import "prismjs/themes/prism-tomorrow.css";
export const metadata: Metadata = {
  title: "NeuBeam",
  description: "Tailwindcss components free ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
