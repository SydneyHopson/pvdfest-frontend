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

// ✅ Metadata for search & social previews
export const metadata: Metadata = {
  title: "PVDFest 2025",
  description: "Experience the best festival with music, art, and food!",

  openGraph: {
    title: "PVDFest 2025",
    description: "Join us in the City of Providence, Rhode Island, for an unforgettable festival of music, art, and food!",
    url: "https://pvdfest.com", // Update this with your actual domain
    siteName: "PVDFest 2025",
    images: [
      {
        url: "https://pvdfest.com/app-image.png", // Change this to your actual image URL
        width: 1200,
        height: 630,
        alt: "PVDFest 2025 - Experience Music, Art, and Food!",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PVDFest 2025",
    description: "Experience the best festival with music, art, and food!",
    images: ["/image/NavBarlogo/PVD2024logo.png"], // Update this to your festival's social preview image
  },

  icons: {
    icon: "/favicon.ico", // Ensure this is in the `public` folder
  },
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
