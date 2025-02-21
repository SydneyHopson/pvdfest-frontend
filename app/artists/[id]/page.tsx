"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// ✅ Define Artist Type
interface Artist {
  id: number;
  name: string;
  description: string;
  images: string[];
  video: string | null;
  date: string;
  location: string;
  category: string;
  genre: string;
  performances: string[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    spotify?: string;
    appleMusic?: string;
  };
  relatedArtists: number[];
}

// ✅ Fixed Artist Data
const allArtists: Artist[] = [
  {
    id: 1,
    name: "Leonardo Vance",
    description: "An award-winning painter known for immersive street art.",
    images: ["/image/artists/artist1.webp", "/image/artists/artist1-2.webp"],
    video: null,
    date: "SAT FEB 22",
    location: "Providence, RI",
    category: "Artwork",
    genre: "Visual Art",
    performances: [],
    socialLinks: { instagram: "https://instagram.com/leonardovance" },
    relatedArtists: [3, 4], // ✅ Fixed
  },
  {
    id: 2,
    name: "Nova Rhythms",
    description: "A world-renowned dancer blending modern and classical styles.",
    images: ["/image/artists/artist2.webp"],
    video: "/video/artists/artist2.mp4",
    date: "SUN FEB 23",
    location: "Providence, RI",
    category: "Dance",
    genre: "Contemporary Dance",
    performances: ["Live Performance 1", "Stage Act"],
    socialLinks: { instagram: "https://instagram.com/novarhythms" },
    relatedArtists: [1, 3], // ✅ Fixed
  },
  {
    id: 3,
    name: "Aria Strings",
    description: "A violinist with mesmerizing performances and deep emotional expression.",
    images: ["/image/artists/artist3.webp"],
    video: "/video/artists/artist3.mp4",
    date: "MON FEB 24",
    location: "Providence, RI",
    category: "Music",
    genre: "Classical Violin",
    performances: ["Symphony No. 9", "Violin Rhapsody"],
    socialLinks: { spotify: "https://open.spotify.com/artist/aria-strings" },
    relatedArtists: [1, 6], // ✅ Fixed
  },
  {
    id: 4,
    name: "DJ SonicWave",
    description: "An energetic DJ mixing house, EDM, and hip-hop beats.",
    images: ["/image/artists/artist4.webp"],
    video: "/video/artists/artist4.mp4",
    date: "TUE FEB 25",
    location: "Providence, RI",
    category: "Music",
    genre: "Electronic / House",
    performances: ["Club Mix Vol. 1", "EDM Set 2025"],
    socialLinks: { spotify: "https://open.spotify.com/artist/djsonicwave" },
    relatedArtists: [3, 7], // ✅ Fixed
  },
  {
    id: 5,
    name: "Celeste Muralist",
    description: "A muralist transforming cityscapes into breathtaking artworks.",
    images: ["/image/artists/artist5.webp", "/image/artists/artist5-2.webp"],
    video: null,
    date: "WED FEB 26",
    location: "Providence, RI",
    category: "Artwork",
    genre: "Street Murals",
    performances: [],
    socialLinks: { instagram: "https://instagram.com/celestemuralist" },
    relatedArtists: [1, 4], // ✅ Fixed
  },
  {
    id: 6,
    name: "Serena Vox",
    description: "A powerful pop singer-songwriter with multiple chart-topping hits.",
    images: ["/image/artists/artist6.webp"],
    video: "/video/artists/artist6.mp4",
    date: "THU FEB 27",
    location: "Providence, RI",
    category: "Music",
    genre: "Pop",
    performances: ["Top Hit #1", "Acoustic Ballad"],
    socialLinks: { spotify: "https://open.spotify.com/artist/serenavox" },
    relatedArtists: [3, 7], // ✅ Fixed
  },
];

export default function ArtistDetailPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {
    const foundArtist = allArtists.find((a) => a.id === parseInt(id as string));
    if (foundArtist) {
      setArtist({
        ...foundArtist,
        relatedArtists: foundArtist.relatedArtists.filter((id) => id !== undefined), // ✅ Filter out undefined values
      });
    } else {
      setArtist(null);
    }
  }, [id]);

  if (!artist) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-2xl">
        Artist not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#121212] text-white">
      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[450px] md:h-[600px] bg-black">
        {artist.video ? (
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={artist.video} type="video/mp4" />
          </video>
        ) : (
          <Image src={artist.images[0]} alt={artist.name} layout="fill" objectFit="cover" />
        )}

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold uppercase">{artist.name}</h1>
          <p className="text-lg text-gray-300 mt-2">{artist.genre} • {artist.category}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <Link href="/artists" className="text-gray-400 hover:text-white text-sm uppercase mb-6 inline-block">
          ← Back to Artists
        </Link>

        {artist.images.length > 1 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold uppercase mb-4">Gallery</h2>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="overflow-hidden">
              {artist.images.map((img, index) => (
                <div key={index} className="relative w-full h-[300px] border border-gray-500">
                  <Image src={img} alt={`Gallery ${index}`} width={800} height={450} unoptimized className="w-full h-full object-cover" />
                </div>
              ))}
            </Carousel>
          </div>
        )}

        {artist.relatedArtists.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold uppercase mb-4">Related Artists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {artist.relatedArtists.map((relatedId) => {
                const relatedArtist = allArtists.find((a) => a.id === relatedId);
                if (!relatedArtist) return null;

                return (
                  <motion.div key={relatedArtist.id} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative group cursor-pointer overflow-hidden border border-gray-500 bg-[#1c1c1c] shadow-lg w-[160px] h-[190px]">
                    <Link href={`/artists/${relatedArtist.id}`} className="block w-full h-full">
                      <Image src={relatedArtist.images[0]} alt={relatedArtist.name} width={500} height={500} unoptimized className="w-full h-full object-cover" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
