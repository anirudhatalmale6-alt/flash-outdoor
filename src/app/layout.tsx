import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flash Outdoor — Premium Synthetic Turf",
  description:
    "Australia's trusted source for premium synthetic turf and installation accessories. Shop artificial grass, turf nails, U-pins, joining tape, and silica sand. Free quotes available.",
  keywords:
    "synthetic turf, artificial grass, fake grass, turf installation, pet friendly turf, landscape turf, Flash Outdoor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white text-slate-800 antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#0f172a",
              color: "#fff",
              borderRadius: "0.75rem",
            },
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
