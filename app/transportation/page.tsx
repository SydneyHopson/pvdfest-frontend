"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBicycle, FaCar, FaParking, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineDirectionsCar, MdOutlineDirectionsBike } from "react-icons/md";
import { IoMdTrain } from "react-icons/io";

const streetClosures = [
  {
    day: "Thursday, September 4, 2025",
    closures: [
      "Exchange St between Washington St and Fulton St - One lane closed at 5AM. Both lanes closed from 5AM on Friday, September 5, until Sunday, September 7, at 10PM.",
      "East Approach closed from Thursday, 5AM, until Sunday at 11PM.",
    ],
  },
  {
    day: "Friday, September 5, 2025",
    closures: [
      "No Parking from 5AM: Weybosset St to Fulton St, Washington St from Exchange to Dorrance St, Fulton St from Eddy St to Exchange St.",
      "Street Closures from 5AM: Dorrance St from Fulton St to Washington St, Washington St from Dorrance St to Exchange St.",
    ],
  },
  {
    day: "Saturday, September 6, 2025",
    closures: [
      "No Parking from 5AM: Green St from Empire St to Washington St, Fountain St from Empire St to Dorrance St.",
      "Street Closures from 5AM: Orange St from Westminster St to Weybosset St, Washington St from Empire St to Exchange St.",
    ],
  },
  {
    day: "Sunday, September 7, 2025 (Rain Date)",
    closures: [
      "If the rain date is utilized, the same street closures from Saturday will apply.",
    ],
  },
];

export default function TransportationInfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-20 pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg"> 🚗 Transportation Info 🚇</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto mt-12 px-6 space-y-12">
        {/* Sections */}
        {[
          { icon: <MdOutlineDirectionsBike />, title: "Biking", color: "bg-green-500", description: "We encourage attendees to bike to the festival! Bike racks are available downtown. Use GPS address: 1 Kennedy Plaza, Providence.", link: "https://www.spin.app/", linkText: "More Info" },
          { icon: <MdOutlineDirectionsCar />, title: "Driving & Carpooling", color: "bg-yellow-500", description: "PVDFest takes place in downtown Providence, around Kennedy Plaza. Plan ahead for traffic and street closures. Use GPS address: 1 Kennedy Plaza, Providence." },
          { icon: <FaParking />, title: "Recommended Parking", color: "bg-purple-500", description: "The Providence Place Mall Garage offers parking throughout the festival. Additional paid parking is available at downtown lots and garages." },
          { icon: <FaCar />, title: "Ride Share Apps", color: "bg-red-500", description: "Use the following drop-off/pick-up addresses: 75 Fountain St, Providence, RI 02903 or 150 Empire St, Providence, RI 02903." },
          { icon: <IoMdTrain />, title: "Bus", color: "bg-blue-500", description: "RIPTA services downtown Providence. Find fare details on RIPTA’s website. Plan your trip using RIPTA’s Trip Planner.", link: "https://www.ripta.com/fares/", linkText: "RIPTA’s Website" },
          { icon: <FaBicycle />, title: "Spin (Bike & Scooter Rentals)", color: "bg-teal-500", description: "PVDFest is partnering with Spin! Use promo code PVDFEST2025 for discounts. Report issues using Community Mode.", link: "https://www.bird.co/blog/community-mode/", linkText: "Community Mode" },
        ].map((item, index) => (
          <div key={index} className={`flex gap-4 p-6 rounded-lg shadow-lg text-white ${item.color}`}>
            <motion.div whileHover={{ scale: 1.2 }} className="text-4xl">{item.icon}</motion.div>
            <div>
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-2">{item.description} {item.link && <Link href={item.link} target="_blank" className="underline">{item.linkText}</Link>}</p>
            </div>
          </div>
        ))}

        {/* Street Closures */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FaMapMarkedAlt className="text-blue-600" /> Street Closures & No-Parking Zones
          </h2>
          <div className="mt-4">
            {streetClosures.map((section, index) => (
              <div key={index} className="mb-4 border border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-100">
                <button
                  className="w-full text-left px-6 py-4 bg-gray-200 hover:bg-gray-300 flex justify-between items-center font-semibold text-gray-900"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg">{section.day}</span>
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 py-4 text-gray-900 bg-white"
                  >
                    <ul className="list-disc pl-5">
                      {section.closures.map((closure, i) => (
                        <li key={i} className="mb-2">{closure}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
