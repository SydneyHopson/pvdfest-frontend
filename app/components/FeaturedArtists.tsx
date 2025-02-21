"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Define API Response Type
type APIArtist = {
  id: number;
  title: { rendered: string };
  featured_media?: string;
  meta?: { video_url?: string };
};

// ✅ Define Artist Type
type Artist = {
  id: number;
  name: string;
  image: string;
  video?: string;
};

// ✅ Hardcoded fallback data
const fallbackArtists: Artist[] = [
  { id: 1, name: "Artist One", image: "/image/artists/artist1.webp", video: "/video/artists/artist1.mp4" },
  { id: 2, name: "Artist Two", image: "/image/artists/artist2.webp", video: "/video/artists/artist2.mp4" },
  { id: 3, name: "Artist Three", image: "/image/artists/artist3.webp", video: "/video/artists/artist3.mp4" },
  { id: 4, name: "Artist Four", image: "/image/artists/artist4.webp", video: "/video/artists/artist4.mp4" },
  { id: 5, name: "Artist Five", image: "/image/artists/artist5.webp", video: "/video/artists/artist5.mp4" },
  { id: 6, name: "Artist Six", image: "/image/artists/artist6.webp", video: "/video/artists/artist6.mp4" },
  
];

export default function FeaturedArtists() {
  const [artists, setArtists] = useState<Artist[]>(fallbackArtists); // ✅ Use Artists Type
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const response = await fetch("https://pvdfest.com/wp-json/wp/v2/artists");
        if (!response.ok) throw new Error("Failed to fetch artists");

        const data: APIArtist[] = await response.json(); // ✅ Properly typed array

        const apiArtists: Artist[] = data.map((artist) => ({
          id: artist.id,
          name: artist.title?.rendered || "Unknown Artist",
          image: artist.featured_media || "/image/artists/default.webp",
          video: artist.meta?.video_url || undefined,
        }));

        if (apiArtists.length > 0) {
          setArtists(apiArtists); // ✅ Now actually updates the state
        }
      } catch (error) {
        console.error("API fetch error:", error);
      }
    }

    fetchArtists();
  }, []);

  // 🔹 Scroll Functions
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -650, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 650, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 text-center bg-black text-white">
      {/* 🔹 Section Title */}
      <h2 className="text-5xl font-bold uppercase font-[var(--font-primary)] mb-6">Featured Artists</h2>

      {/* 🔹 Carousel Wrapper */}
      <div className="relative max-w-6xl mx-auto">
        {/* 🔹 Left Scroll Button */}
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full z-10 hover:bg-black transition">
          <FaChevronLeft className="text-white text-2xl" />
        </button>

        {/* 🔹 Scrollable Artist Cards */}
        <div ref={carouselRef} className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-4">
            {artists.map((artist) => (
              <div key={artist.id} className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-[250px] h-[250px] bg-[#1c1c1c] shadow-lg relative"
                >
                  <Link href={`/artists/${artist.id}`} className="block w-full h-full">
                    {/* ✅ Video or Image (FULL CARD) */}
                    <div className="relative w-full h-full overflow-hidden">
                      {artist.video ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source src={artist.video} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          width={250}
                          height={250}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      )}
                    </div>
                  </Link>
                </motion.div>

                {/* 🔹 Artist Name */}
                <h3 className="mt-3 text-sm font-bold">{artist.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Right Scroll Button */}
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full z-10 hover:bg-black transition">
          <FaChevronRight className="text-white text-2xl" />
        </button>
      </div>

      {/* 🔹 Explore All Button */}
      <div className="mt-6">
        <Link href="/artists" className="text-lg font-bold text-white hover:text-blue-400 transition flex items-center justify-center space-x-2">
          <span>Explore All</span>
          <span className="text-2xl">→</span>
        </Link>
      </div>
    </section>
  );
}
