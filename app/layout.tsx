import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

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
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
