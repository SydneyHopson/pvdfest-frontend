"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaHandshake, FaBuilding, FaUserFriends } from "react-icons/fa";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg">Sponsors & Friends ✨</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto mt-12 px-6 space-y-12 text-center">
        {/* Coming Soon Message */}
        <motion.div 
          className="p-6 rounded-lg shadow-lg bg-gray-800 text-white text-center"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-semibold">Coming Soon!</h2>
          <p className="mt-3 text-lg">
            We are finalizing our **Sponsors & Friends** list for **PVDFest 2025**.  
            Stay tuned for more details!  
          </p>
        </motion.div>

        {/* Sponsor Interest Form */}
        <motion.div 
          className="p-6 rounded-lg shadow-lg bg-yellow-500 text-white text-center"
          whileHover={{ scale: 1.02 }}
        >
          <FaHandshake className="text-4xl mx-auto" />
          <h2 className="text-2xl font-semibold mt-2">Interested in Sponsoring PVDFest?</h2>
          <p className="mt-2">Fill out our interest form to learn more about sponsorship opportunities.</p>
          <Link href="#" className="mt-4 inline-block bg-white text-yellow-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
            Fill Out the Sponsorship Form
          </Link>
        </motion.div>

        {/* Placeholder for Sponsor Logos */}
        <motion.div 
          className="p-6 rounded-lg shadow-lg bg-blue-500 text-white text-center"
          whileHover={{ scale: 1.02 }}
        >
          <FaBuilding className="text-4xl mx-auto" />
          <h2 className="text-2xl font-semibold mt-2">Sponsors</h2>
          <p className="mt-2">Sponsor logos will be displayed here soon!</p>
        </motion.div>

        {/* Placeholder for Friends of PVDFest */}
        <motion.div 
          className="p-6 rounded-lg shadow-lg bg-purple-500 text-white text-center"
          whileHover={{ scale: 1.02 }}
        >
          <FaUserFriends className="text-4xl mx-auto" />
          <h2 className="text-2xl font-semibold mt-2">Friends of PVDFest</h2>
          <p className="mt-2">A special thank you to all the **Friends of PVDFest**—your names will be listed here soon!</p>
        </motion.div>

        {/* Social Media Links */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900">Follow PVDFest for Updates</h2>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="#" target="_blank" className="text-blue-600 text-3xl hover:text-blue-800 transition">
              <FaFacebook />
            </Link>
            <Link href="#" target="_blank" className="text-pink-600 text-3xl hover:text-pink-800 transition">
              <FaInstagram />
            </Link>
            <Link href="#" target="_blank" className="text-black text-3xl hover:text-gray-700 transition">
              <FaXTwitter />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-gray-600 text-sm mt-6">
          <p>©2025 City of Providence, Rhode Island</p>
        </div>
      </div>
    </div>
  );
}
