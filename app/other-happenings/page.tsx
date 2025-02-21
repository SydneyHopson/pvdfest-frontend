"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMusic, FaHandshake, FaLightbulb } from "react-icons/fa";

export default function OtherHappeningsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-700 to-purple-500 shadow-lg text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg">Other Happenings at PVDFest 2025 🎭🎉</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto mt-12 px-6 space-y-12">
        {/* Sabor Latino */}
        <motion.div 
          className="flex gap-4 p-6 rounded-lg shadow-lg bg-red-500 text-white"
          whileHover={{ scale: 1.02 }}
        >
          <FaMusic className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Sabor Latino</h2>
            <p className="mt-2">
              📍 **Biltmore Park, 10 Kennedy Plaza**  
              📅 **Thursday, September 4, 2025**  
              Kick off your **PVDFest 2025 weekend** with a vibrant evening of **music, dance, art, and community** at Biltmore Park!  
              <br />🎶 **Performances & Activities:**  
              - **Flamenco Rhode Island** & **Bachata lessons**  
              - Open dance session with **Cultura Dance Arts**  
              - **Jesús Andujar y Su Grupo Sazón** (Live Salsa Music)  
              - Screening of **RI Philharmonic performances** & Disney’s *Encanto*  
              - Family arts activities, food trucks, & Moniker Brewery’s **beer garden**  
            </p>
          </div>
        </motion.div>

        {/* Diversity Business Exhibit */}
        <motion.div 
          className="flex gap-4 p-6 rounded-lg shadow-lg bg-blue-500 text-white"
          whileHover={{ scale: 1.02 }}
        >
          <FaHandshake className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Diversity Business Exhibit</h2>
            <p className="mt-2">
              📍 **RI Convention Center**  
              📅 **Friday, September 5, 2025 (9:00 AM - 5:00 PM) & Saturday, September 6, 2025 (10:00 AM - 2:00 PM)**  
              Explore a **showcase of diverse talents and innovations** from various industries, including technology, healthcare, and entrepreneurship.  
              <br />✨ **What to Expect:**  
              - **Networking opportunities** with industry leaders  
              - **Workshops & panels** on business growth and inclusivity  
              - **Vibrant marketplace** featuring cultural and innovative products  
              - **FREE to attend!**  
              <Link href="#" className="underline">Register online to attend, exhibit, or volunteer</Link>.
            </p>
          </div>
        </motion.div>

        {/* Maker Faire */}
        <motion.div 
          className="flex gap-4 p-6 rounded-lg shadow-lg bg-yellow-500 text-white"
          whileHover={{ scale: 1.02 }}
        >
          <FaLightbulb className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Maker Faire</h2>
            <p className="mt-2">
              📍 **195 District Park**  
              📅 **Saturday, September 6, 2025 (12:30 PM - 5:30 PM)**  
              The **Providence Maker Faire** is back for 2025! Join **inventors, artists, designers, and fabricators** as they showcase their most creative projects.  
              <br />🔧 **Featured at Maker Faire:**  
              - Live demonstrations & hands-on exhibits  
              - Robotics, 3D printing, & interactive technology  
              - Creative arts and DIY projects  
              - Opportunities to **meet makers & innovators**  
              Learn more:  
              <Link href="https://providence.makerfaire.com/" target="_blank" className="underline">Visit the Maker Faire website</Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
