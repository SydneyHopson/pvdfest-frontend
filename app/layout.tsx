import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Oswald, Russo_One, Archivo_Black } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

// ✅ Load festival fonts
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const oswald = Oswald({ weight: "700", subsets: ["latin"], variable: "--font-oswald" });
const russoOne = Russo_One({ weight: "400", subsets: ["latin"], variable: "--font-russo-one" });
const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-archivo-black" });

// ✅ Load system fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PVDFest 2025",
  description: "Experience the best festival with music, art, and food!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${oswald.variable} ${russoOne.variable} ${archivoBlack.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
