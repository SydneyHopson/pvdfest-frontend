"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ✅ Main Festival Info Page with Vibrant Color Scheme
export default function FestivalInfo() {
  return (
    <section className="min-h-screen text-white">
      {/* 🔹 Welcome Section with Gradient */}
      <div className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold uppercase font-[var(--font-primary)]">
            Welcome to PVDFest 2025
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            Experience Providence’s signature outdoor arts festival! Join us for two days of
            electrifying performances, art, culture, and community.
          </p>
          <p className="text-lg font-bold text-white mt-2">
            📅 September 6-7, 2024 | 📍 Downtown Providence | 🎟️ Free Admission
          </p>
        </div>
      </div>

     

      {/* 🔹 Featured Events */}
      <div className="bg-[#121212] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold uppercase text-center mb-8 text-pink-500">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 🔹 Event 1 */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="border border-gray-500 p-4 bg-[#1e1e1e] shadow-md hover:shadow-lg">
              <Image src="/image/events/event1.webp" alt="Event 1" width={400} height={250} className="w-full h-[250px] object-cover" />
              <h3 className="text-xl font-bold mt-4 text-blue-400">FirstWorks Spectacle</h3>
              <p className="text-gray-400 text-sm mt-2">Italy’s eVenti Verticali aerial dance performance.</p>
              <p className="text-sm mt-2">📍 Kennedy Plaza | 🕒 4:45 PM & 7:00 PM</p>
            </motion.div>

            {/* 🔹 Event 2 */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="border border-gray-500 p-4 bg-[#1e1e1e] shadow-md hover:shadow-lg">
              <Image src="/image/events/event2.webp" alt="Event 2" width={400} height={250} className="w-full h-[250px] object-cover" />
              <h3 className="text-xl font-bold mt-4 text-green-400">Spread Love Function</h3>
              <p className="text-gray-400 text-sm mt-2">Live music, DJs, and dancing in Burnside Park.</p>
              <p className="text-sm mt-2">📍 Burnside Park | 🕒 5:15 PM - 8:30 PM</p>
            </motion.div>

            {/* 🔹 Event 3 */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="border border-gray-500 p-4 bg-[#1e1e1e] shadow-md hover:shadow-lg">
              <Image src="/image/events/event3.webp" alt="Event 3" width={400} height={250} className="w-full h-[250px] object-cover" />
              <h3 className="text-xl font-bold mt-4 text-yellow-400">Salsa Night with Lulada Club</h3>
              <p className="text-gray-400 text-sm mt-2">NYC’s all-women salsa orchestra performing live.</p>
              <p className="text-sm mt-2">📍 City Hall Stage | 🕒 7:30 PM - 9:00 PM</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🔹 Cultural & Maker Spaces */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold uppercase text-center mb-8 text-blue-500">Cultural & Maker Spaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 🔹 Cultural Heritage Festivals */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="border border-gray-500 p-6 bg-[#1e1e1e] shadow-md hover:shadow-lg">
            <h3 className="text-2xl font-bold text-purple-400">Cultural Heritage Festivals</h3>
            <p className="text-gray-400 mt-2">Experience diverse cultural traditions, performances, and artisan markets.</p>
            <p className="text-sm mt-2">📍 Snow Street Parking Lot | 🕒 12:00 PM - 6:00 PM</p>
          </motion.div>

          {/* 🔹 Maker Spaces */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="border border-gray-500 p-6 bg-[#1e1e1e] shadow-md hover:shadow-lg">
            <h3 className="text-2xl font-bold text-orange-400">Maker Spaces</h3>
            <p className="text-gray-400 mt-2">Hands-on workshops showcasing the creative economy of Providence.</p>
            <p className="text-sm mt-2">📍 Mathewson Street | 🕒 12:00 PM - 6:00 PM</p>
          </motion.div>
        </div>
      </div>

     {/* 🔹 Call to Action with Distinct PVDFest Colors */}
<div className="bg-gradient-to-r from-orange-500 via-red-600 to-purple-800 text-white py-16 text-center">
  <h2 className="text-4xl font-bold uppercase">Join the Festival!</h2>
  <p className="mt-4 text-lg leading-relaxed">
    Be part of the most vibrant cultural experience in the <strong>City of Providence, Rhode Island</strong>.
  </p>
  <Link href="/schedule" className="mt-6 inline-block bg-white text-red-600 font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-200 transition">
    View Full Schedule
  </Link>
</div>

    </section>
  );
}
