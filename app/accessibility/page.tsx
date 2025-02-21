"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineHearing, MdOutlineDirectionsCar } from "react-icons/md";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 pt-20 pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] flex items-center justify-center bg-gradient-to-r from-green-700 to-green-500 shadow-lg">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">Accessibility at PVDFest 2025 ♿</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto mt-12 px-6 space-y-12">
        {/* ADA Parking */}
        <motion.div 
          className="flex gap-4 p-6 rounded-lg shadow-lg bg-blue-500 text-white"
          whileHover={{ scale: 1.02 }}
        >
          <MdOutlineDirectionsCar className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">ADA Parking</h2>
            <p className="mt-2">
              PVDFest offers designated **ADA drop-off and pick-up areas**, as well as accessible parking options for patrons with disabilities.  
              ADA parking is primarily located on **Exchange Terrace** and **Weybosset Street**.  
              <Link href="/festival-map" className="underline">Check the festival map for more information.</Link>
            </p>
          </div>
        </motion.div>

        {/* ADA Info Tent & Wheelchair Rental */}
        <motion.div 
          className="flex gap-4 p-6 rounded-lg shadow-lg bg-yellow-500 text-white"
          whileHover={{ scale: 1.02 }}
        >
          <FaWheelchair className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">ADA Info Tent & Wheelchair Rental</h2>
            <p className="mt-2">
              The **PVDFest ADA Info Tent** is operated by **R.A.M.P. (Real Access Motivates Progress)**, a disability advocacy organization, in partnership with PVDFest.  
              The tent is located **near the intersection of Dorrance & Washington Streets**, in front of the **Rink**.  
              <br />📍 **Services available:**  
              - Wheelchair rentals  
              - Info about accessible restrooms  
              - Staffed by R.A.M.P. personnel for assistance  
              <br />
              Learn more about R.A.M.P. here:  
              <Link href="https://www.rampisinclusion.org/ramp-s-impact" target="_blank" className="underline">Visit the R.A.M.P. website</Link>.
            </p>
          </div>
        </motion.div>

        {/* Sensory Signage */}
        <motion.div 
          className="flex gap-4 p-6 rounded-lg shadow-lg bg-purple-500 text-white"
          whileHover={{ scale: 1.02 }}
        >
          <MdOutlineHearing className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Sensory Signage & Information</h2>
            <p className="mt-2">
              The **PVDFest Map** provides details on **sensory impact areas** throughout the festival:  
              - 🔴 **Red** = High sensory impact (loud, bright, intense)  
              - 🟡 **Yellow** = Moderate sensory impact  
              - 🟢 **Green** = Minimal sensory impact  
              Use the **festival’s digital map** to locate sensory indicators and look out for signage throughout the festival footprint.  
              <Link href="/festival-map" className="underline">Check out the PVDFest Map</Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
