"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdOutlineGavel } from "react-icons/md";
import { GiTheater } from "react-icons/gi";

const newsArticles = [
  {
    date: "February 10, 2025",
    title: "PVDFest 2025 Dates Announced!",
    summary: "The City of Providence has officially announced that PVDFest 2025 will take place from September 5-7, transforming downtown into a vibrant hub of music, art, and culture.",
    slug: "pvdfest-2025-dates-announced",
  },
  {
    date: "March 3, 2025",
    title: "PVDFest 2025 Expands to Include More Interactive Art Installations",
    summary: "This year’s festival will feature interactive art installations from world-renowned artists, giving attendees a chance to engage with unique and immersive experiences.",
    slug: "pvdfest-2025-interactive-art",
  },
  {
    date: "March 24, 2025",
    title: "Headliners Announced for PVDFest Main Stage",
    summary: "PVDFest 2025 will showcase an incredible lineup of performers, including national and local artists across multiple genres. Full schedule coming soon!",
    slug: "pvdfest-2025-main-stage-lineup",
  },
  {
    date: "April 15, 2025",
    title: "New Food Vendors Announced for PVDFest Food Truck Village",
    summary: "This year’s Food Truck Village will feature over 30 vendors offering a diverse selection of culinary delights, including international cuisines, vegan options, and festival favorites.",
    slug: "pvdfest-2025-food-trucks",
  },
  {
    date: "May 1, 2025",
    title: "PVDFest 2025 to Feature a Parade of Lights",
    summary: "For the first time ever, PVDFest will host a nighttime Parade of Lights, featuring illuminated floats, performances, and special guests.",
    slug: "pvdfest-2025-parade-of-lights",
  },
  {
    date: "June 20, 2025",
    title: "Public Art to Take Center Stage at PVDFest",
    summary: "Artists from across the country will bring large-scale murals and installations to life throughout the city, making PVDFest 2025 the most visually exciting yet.",
    slug: "pvdfest-2025-public-art",
  },
  {
    date: "July 8, 2025",
    title: "PVDFest 2025 to Celebrate Local Talent with Expanded Artist Market",
    summary: "The PVDFest Artist Market will be bigger than ever, featuring local makers, crafters, and designers selling their unique creations.",
    slug: "pvdfest-2025-artist-market",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-blue-600">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">PVDFest News 📰</h1>
      </div>

      {/* Press Kit Link */}
      <div className="max-w-4xl mx-auto mt-10 px-6 text-center">
        <Link
          href="/image/presskit/PVDFest-MediaKit-2024Final-1-1.pdf"
          target="_blank"
          className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-500 transition w-fit mx-auto"
        >
          <MdOutlinePictureAsPdf className="text-2xl mr-2" /> View the PVDFest 2025 Press Kit (PDF)
        </Link>
      </div>

      {/* News Articles */}
      <div className="max-w-6xl mx-auto mt-20 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <p className="text-gray-500 text-sm">{article.date}</p>
            <h2 className="text-xl font-bold mt-2 text-gray-900">{article.title}</h2>
            <p className="text-gray-700 mt-3">{article.summary}</p>
            <Link href={`/news/${article.slug}`} className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer with Icons */}
      <div className="max-w-6xl mx-auto mt-16 px-6 pb-12 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">PVDFest is Presented By</h3>
        <div className="flex gap-8 flex-wrap justify-center text-blue-600 text-4xl">
          <FaCity title="City of Providence" />
          <TbBuildingSkyscraper title="Department of Art, Culture & Tourism" />
          <MdOutlineGavel title="Providence City Council" />
          <GiTheater title="FirstWorks" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-blue-600 text-3xl">
          <Link href="https://instagram.com/pvdfest" target="_blank">
            <FaInstagram title="Instagram" />
          </Link>
          <Link href="https://facebook.com/pvdfest" target="_blank">
            <FaFacebookF title="Facebook" />
          </Link>
          <Link href="https://x.com/pvdfest" target="_blank">
            <FaXTwitter title="X (Twitter)" />
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-6">©2025 City of Providence, Rhode Island</p>
      </div>
    </div>
  );
}
