import type { Metadata } from "next";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Heading font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlphaBioCell | VIT",
  description: "The technical club that innovates at the intersection of biology and technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden`}>
        <Loader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
