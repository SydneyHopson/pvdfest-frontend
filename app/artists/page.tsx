"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// ✅ Artist Data (Hardcoded Until API is Ready)
const allArtists = [
  { id: 1, name: "Artist One", description: "An electrifying performer with a unique style.", image: "/image/artists/artist1.webp", video: "/video/artists/artist1.mp4", date: "SAT FEB 22", location: "Providence, RI", category: "Music" },
  { id: 2, name: "Artist Two", description: "An internationally renowned musician.", image: "/image/artists/artist2.webp", video: "/video/artists/artist2.mp4", date: "SUN FEB 23", location: "Providence, RI", category: "Music" },
  { id: 3, name: "Artist Three", description: "Master of contemporary street art.", image: "/image/artists/artist3.webp", video: "/video/artists/artist3.mp4", date: "MON FEB 24", location: "Providence, RI", category: "Artwork" },
  { id: 4, name: "Artist Four", description: "Captivating dance performer.", image: "/image/artists/artist4.webp", video: "/video/artists/artist4.mp4", date: "TUE FEB 25", location: "Providence, RI", category: "Dance" },
  { id: 5, name: "Artist Five", description: "A revolutionary artist shaping modern music.", image: "/image/artists/artist5.webp", video: "/video/artists/artist5.mp4", date: "WED FEB 26", location: "Providence, RI", category: "Music" },
  { id: 6, name: "Artist Six", description: "Transforming ordinary walls into stunning masterpieces.", image: "/image/artists/artist6.webp", video: "/video/artists/artist6.mp4", date: "THU FEB 27", location: "Providence, RI", category: "Artwork" },
  { id: 7, name: "Artist Seven", description: "A genre-blending musician with global recognition.", image: "/image/artists/artist7.webp", video: "/video/artists/artist7.mp4", date: "FRI FEB 28", location: "Providence, RI", category: "Music" },
{ id: 8, name: "Artist Eight", description: "Visionary street artist known for large-scale murals.", image: "/image/artists/artist8.webp", video: "/video/artists/artist8.mp4", date: "SAT MAR 1", location: "Providence, RI", category: "Artwork" },
{ id: 9, name: "Artist Nine", description: "Dynamic performer combining dance and storytelling.", image: "/image/artists/artist9.webp", video: "/video/artists/artist9.mp4", date: "SUN MAR 2", location: "Providence, RI", category: "Dance" },
{ id: 10, name: "Artist Ten", description: "A rising star in experimental electronic music.", image: "/image/artists/artist10.webp", video: "/video/artists/artist10.mp4", date: "MON MAR 3", location: "Providence, RI", category: "Music" },
{ id: 11, name: "Artist Eleven", description: "A contemporary painter pushing artistic boundaries.", image: "/image/artists/artist11.webp", video: "/video/artists/artist11.mp4", date: "TUE MAR 4", location: "Providence, RI", category: "Artwork" },
{ id: 12, name: "Artist Twelve", description: "A DJ who blends house, techno, and funk seamlessly.", image: "/image/artists/artist12.webp", video: "/video/artists/artist12.mp4", date: "WED MAR 5", location: "Providence, RI", category: "Music" },
{ id: 13, name: "Artist Thirteen", description: "A multidisciplinary performer bridging cultures.", image: "/image/artists/artist13.webp", video: "/video/artists/artist13.mp4", date: "THU MAR 6", location: "Providence, RI", category: "Dance" },
{ id: 14, name: "Artist Fourteen", description: "A surrealist painter exploring dreamlike themes.", image: "/image/artists/artist14.webp", video: "/video/artists/artist14.mp4", date: "FRI MAR 7", location: "Providence, RI", category: "Artwork" },
{ id: 15, name: "Artist Fifteen", description: "A hip-hop artist known for his lyrical depth.", image: "/image/artists/artist15.webp", video: "/video/artists/artist15.mp4", date: "SAT MAR 8", location: "Providence, RI", category: "Music" },
{ id: 16, name: "Artist Sixteen", description: "An avant-garde dance choreographer.", image: "/image/artists/artist16.webp", video: "/video/artists/artist16.mp4", date: "SUN MAR 9", location: "Providence, RI", category: "Dance" },

];

// ✅ Categories for Filtering
const categories = ["Top Picks", "Music", "Artwork", "Dance"];

export default function ArtistsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Top Picks");

  // ✅ Filter Artists Based on Selected Tab
  const filteredArtists =
    selectedCategory === "Top Picks" ? allArtists : allArtists.filter((artist) => artist.category === selectedCategory);

  return (
    <section className="min-h-screen bg-[#121212] text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 🔹 Page Title */}
        <h1 className="text-4xl font-bold uppercase text-white mb-6 text-center">Artists</h1>

        {/* 🔹 Category Tabs */}
        <div className="relative w-full overflow-x-auto">
          <div className="flex justify-center md:justify-center space-x-3 md:space-x-6 mb-4 px-2 md:px-0 whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm md:text-lg font-bold uppercase px-3 py-1 md:px-4 md:py-2 transition ${
                  selectedCategory === category ? "border-b-2 border-white text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 🔹 Divider Line */}
        <div className="w-full h-[2px] bg-gray-500 mb-6"></div>

        {/* 🔹 Artists Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6">
          {filteredArtists.slice(0, 8).map((artist) => (
            <motion.div
              key={artist.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group cursor-pointer overflow-hidden border border-gray-500 bg-[#1c1c1c] shadow-lg w-[170px] h-[210px] sm:w-[190px] sm:h-[230px] md:w-[210px] md:h-[250px]"
            >
              <Link href={`/artists/${artist.id}`} className="block w-full h-full">
                
                {/* 🔹 Top Half (Image / Video) */}
                <div className="relative w-full h-[50%] bg-black">
                  {artist.video ? (
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                      <source src={artist.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={500}
                      height={500}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* 🔹 Divider */}
                <div className="w-full h-[2px] bg-gray-500"></div>

                {/* 🔹 Bottom Half (Details) */}
                <div className="p-2 bg-[#1c1c1c] flex flex-col justify-center h-[50%]">
                  {/* 🔹 Smaller Date Box */}
                  <div className="inline-block px-1 py-[2px] text-xs font-bold uppercase border border-white text-white">
                    {artist.date}
                  </div>

                  {/* 🔹 Artist Name */}
                  <h3 className="mt-1 text-sm font-bold">{artist.name}</h3>

                  {/* 🔹 Description (Small & Truncated) */}
                  <p className="text-gray-400 text-xs mt-1 truncate">{artist.description}</p>

                  {/* 🔹 Location */}
                  <p className="text-gray-400 text-xs mt-1">{artist.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      {/* 🔹 Advertisement Section (Now Square) */}
<div className="w-full flex justify-center mt-8">
  <div className="w-[300px] h-[300px] bg-gray-800 flex items-center justify-center text-white text-lg font-bold">
    Advertisement / Featured Artist Section
  </div>
</div>
        {/* 🔹 Remaining Artists */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6 mt-8">
          {filteredArtists.slice(8).map((artist) => (
            <motion.div
              key={artist.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group cursor-pointer overflow-hidden border border-gray-500 bg-[#1c1c1c] shadow-lg w-[170px] h-[210px] sm:w-[190px] sm:h-[230px] md:w-[210px] md:h-[250px]"
            >
              <Link href={`/artists/${artist.id}`} className="block w-full h-full">
                <div className="relative w-full h-[50%] bg-black">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[2px] bg-gray-500"></div>
                <div className="p-2 bg-[#1c1c1c] flex flex-col justify-center h-[50%]">
                  <h3 className="mt-1 text-sm font-bold">{artist.name}</h3>
                  <p className="text-gray-400 text-xs mt-1 truncate">{artist.description}</p>
                  <p className="text-gray-400 text-xs mt-1">{artist.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
