"use client";
import { FaMusic, FaPalette, FaUtensils } from "react-icons/fa";
import Hero from "./components/Hero";
import FeaturedArtists from "./components/FeaturedArtists";
import Information from "./components/Information";
import Schedule from "./components/Schedule";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 🔹 Hero Section */}
      <Hero />

      {/* 🔹 Festival Hours */}
      <div className="max-w-6xl mx-auto px-6 py-16 bg-[#1c1c1c]">
        <h2 className="text-4xl font-bold uppercase text-center mb-6 text-yellow-400">Festival Hours</h2>
        <div className="text-lg text-gray-300 text-center">
          <p>📅 Friday, September 6: <span className="font-bold text-white">5:00PM - 9:00PM</span></p>
          <p>📅 Saturday, September 7: <span className="font-bold text-white">12:00PM - 8:00PM</span></p>
          <p>🌧️ Rain Date: <span className="font-bold text-white">Sunday, September 8</span></p>
        </div>
      </div>

      {/* 🔹 Why Attend Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 text-center">
        <h2 className="text-4xl font-extrabold uppercase">Why Attend PVDFest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-gray-100 transition flex flex-col items-center">
            <FaMusic className="text-blue-600 text-8xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">Live Music</h3>
            <p className="text-gray-700 mt-2 text-lg">Experience world-class performances from the hottest artists.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-gray-100 transition flex flex-col items-center">
            <FaPalette className="text-purple-600 text-8xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">Art Exhibitions</h3>
            <p className="text-gray-700 mt-2 text-lg">Immerse yourself in breathtaking art displays and live street murals.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-gray-100 transition flex flex-col items-center">
            <FaUtensils className="text-red-500 text-8xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">Food & Drinks</h3>
            <p className="text-gray-700 mt-2 text-lg">Indulge in an array of delicious food trucks & craft beverages.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Featured Artists */}
      <FeaturedArtists />

      {/* 🔹 Festival Schedule (ONLY SHOWING ONE DAY) */}
      <Schedule showDay="Friday, September 6" />

      {/* 🔹 Festival Information */}
      <Information />
    </div>
  );
}
