"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaFacebook, FaTwitter, FaInstagram, FaSpotify, FaApple } from "react-icons/fa";

// ✅ Mock Artist Data (Single Instance)
const allArtists = [
    {
      id: 1,
      name: "Leonardo Vance",
      description: "An award-winning painter known for immersive street art.",
      images: [
        "/image/artists/artist1.webp",
        "/image/artists/artist1-2.webp",
        "/image/artists/artist1-3.webp",
      ],
      video: null,
      date: "SAT FEB 22",
      location: "Providence, RI",
      category: "Artwork",
      genre: "Visual Art",
      performances: [],
      socialLinks: { instagram: "https://instagram.com/leonardovance" },
      relatedArtists: [ 3, 4],
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
      relatedArtists: [1, 3],
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
      relatedArtists: [1, , 6],
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
      relatedArtists: [3, , 7],
    },
    {
      id: 5,
      name: "Celeste Muralist",
      description: "A muralist transforming cityscapes into breathtaking artworks.",
      images: [
        "/image/artists/artist5.webp",
        "/image/artists/artist5-2.webp",
      ],
      video: null,
      date: "WED FEB 26",
      location: "Providence, RI",
      category: "Artwork",
      genre: "Street Murals",
      performances: [],
      socialLinks: { instagram: "https://instagram.com/celestemuralist" },
      relatedArtists: [1, 4 ],
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
      relatedArtists: [3, , 7],
    },
    {
      id: 7,
      name: "Eclipse Dance Crew",
      description: "A high-energy dance crew known for their innovative choreography.",
      images: ["/image/artists/artist7.webp"],
      video: "/video/artists/artist7.mp4",
      date: "FRI FEB 28",
      location: "Providence, RI",
      category: "Dance",
      genre: "Hip-Hop / Freestyle",
      performances: ["Freestyle Battle", "Choreo Showcase"],
      socialLinks: { instagram: "https://instagram.com/eclipsecrew" },
      relatedArtists: [6, 8, 9],
    },
    {
      id: 8,
      name: "Neon Beats",
      description: "An underground DJ collective bringing new energy to techno music.",
      images: ["/image/artists/artist8.webp"],
      video: "/video/artists/artist8.mp4",
      date: "SAT MAR 1",
      location: "Providence, RI",
      category: "Music",
      genre: "Techno / Experimental",
      performances: ["Warehouse Session", "Neon Rave"],
      socialLinks: { spotify: "https://open.spotify.com/artist/neonbeats" },
      relatedArtists: [4, 7, 10],
    },
    {
      id: 9,
      name: "Ava Sculptor",
      description: "A visionary sculptor pushing the boundaries of form and material.",
      images: ["/image/artists/artist9.webp"],
      video: null,
      date: "SUN MAR 2",
      location: "Providence, RI",
      category: "Artwork",
      genre: "Sculpture",
      performances: [],
      socialLinks: { instagram: "https://instagram.com/avasculptor" },
      relatedArtists: [5, 8, 10],
    },
    {
      id: 10,
      name: "Mosaic Harmony",
      description: "A vocal group blending gospel, soul, and R&B.",
      images: ["/image/artists/artist10.webp"],
      video: "/video/artists/artist10.mp4",
      date: "MON MAR 3",
      location: "Providence, RI",
      category: "Music",
      genre: "Gospel / Soul",
      performances: ["Uplifted", "Harmony Unleashed"],
      socialLinks: { spotify: "https://open.spotify.com/artist/mosaicharmony" },
      relatedArtists: [8,  11],
    },
    {
      id: 11,
      name: "Flare Motion",
      description: "A contemporary dancer specializing in acrobatics and fluid movement.",
      images: ["/image/artists/artist11.webp"],
      video: "/video/artists/artist11.mp4",
      date: "TUE MAR 4",
      location: "Providence, RI",
      category: "Dance",
      genre: "Acrobatic Dance",
      performances: ["Gravity Defied", "Aerial Flow"],
      socialLinks: { instagram: "https://instagram.com/flaremotion" },
      relatedArtists: [10, 12],
    },
    {
      id: 12,
      name: "Pixel Graffiti",
      description: "A digital artist blending urban and futuristic aesthetics.",
      images: ["/image/artists/artist12.webp"],
      video: null,
      date: "WED MAR 5",
      location: "Providence, RI",
      category: "Artwork",
      genre: "Digital Art",
      performances: [],
      socialLinks: { instagram: "https://instagram.com/pixelgraffiti" },
      relatedArtists: [11,  14],
    },
    {
      id: 13,
      name: "Retro Funk Band",
      description: "A live band bringing back classic funk with a modern twist.",
      images: ["/image/artists/artist13.webp"],
      video: "/video/artists/artist13.mp4",
      date: "THU MAR 6",
      location: "Providence, RI",
      category: "Music",
      genre: "Funk / Jazz",
      performances: ["Funky Groove", "Old School Revival"],
      socialLinks: { spotify: "https://open.spotify.com/artist/retrofunkband" },
      relatedArtists: [14, 15],
    },
    {
      id: 14,
      name: "Illusion Motion",
      description: "A dance duo incorporating visual effects and illusions into choreography.",
      images: ["/image/artists/artist14.webp"],
      video: "/video/artists/artist14.mp4",
      date: "FRI MAR 7",
      location: "Providence, RI",
      category: "Dance",
      genre: "Illusion Dance",
      performances: ["Lights & Shadows", "Echoes of Motion"],
      socialLinks: { instagram: "https://instagram.com/illusionmotion" },
      relatedArtists: [13, 15],
    },
  ];
  

export default function ArtistDetailPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState<any>(null);

  useEffect(() => {
    const foundArtist = allArtists.find((a) => a.id === parseInt(id as string));
    setArtist(foundArtist || null);
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
      {/* 🔹 Hero Section (Video or Image) */}
      <div className="relative w-full h-[450px] md:h-[600px] bg-black">
        {artist.video ? (
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={artist.video} type="video/mp4" />
          </video>
        ) : (
          <Image src={artist.images[0]} alt={artist.name} layout="fill" objectFit="cover" />
        )}

        {/* 🔹 Overlay & Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold uppercase">{artist.name}</h1>
          <p className="text-lg text-gray-300 mt-2">{artist.genre} • {artist.category}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* 🔹 Back Button */}
        <Link href="/artists" className="text-gray-400 hover:text-white text-sm uppercase mb-6 inline-block">
          ← Back to Artists
        </Link>

        {/* 🔹 Gallery Section */}
{artist.images.length > 1 && (
  <div className="mt-8">
    <h2 className="text-2xl font-bold uppercase mb-4">Gallery</h2>
    <Carousel 
      autoPlay 
      infiniteLoop 
      showThumbs={false} 
      showStatus={false} 
      className="overflow-hidden"
    >
      {artist.images.map((img: string, index: number) => (
        <div key={index} className="relative w-full h-[300px] border border-gray-500">
          <Image 
            src={img} 
            alt={`Gallery ${index}`} 
            width={800} 
            height={450} 
            unoptimized 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  </div>
)}


        {/* 🔹 Artist Bio */}
        <h2 className="mt-10 text-2xl font-bold uppercase">Bio</h2>
        <p className="mt-4 text-lg text-gray-300">{artist.description}</p>

        {/* 🔹 Performances / Artworks */}
        {artist.performances.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold uppercase mb-4">{artist.category === "Artwork" ? "Artworks" : "Popular Performances"}</h2>
            <ul className="space-y-2">
              {artist.performances.map((track: string, index: number) => (
                <li key={index} className="bg-gray-800 px-4 py-2 rounded-md">{track}</li>
              ))}
            </ul>
          </div>
        )}
        {/* 🔹 Related Artists Section */}
{artist.relatedArtists.length > 0 && (
  <div className="mt-10">
    <h2 className="text-2xl font-bold uppercase mb-4">Related Artists</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {artist.relatedArtists.map((relatedId) => {
        const relatedArtist = allArtists.find((a) => a.id === relatedId);
        if (!relatedArtist) return null; // ✅ Skip if artist is undefined

        return (
          <motion.div
            key={relatedArtist.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative group cursor-pointer overflow-hidden border border-gray-500 bg-[#1c1c1c] shadow-lg w-[140px] h-[170px] sm:w-[160px] sm:h-[190px] md:w-[180px] md:h-[210px]"
          >
            <Link href={`/artists/${relatedArtist.id}`} className="block w-full h-full">
              <div className="relative w-full h-[50%] bg-black">
                <Image
                  src={relatedArtist.images[0]}
                  alt={relatedArtist.name}
                  width={500}
                  height={500}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[2px] bg-gray-500"></div>
              <div className="p-2 bg-[#1c1c1c] flex flex-col justify-center h-[50%]">
                <h3 className="text-xs font-bold">{relatedArtist.name}</h3>
                <p className="text-gray-400 text-xs mt-1 truncate">{relatedArtist.genre}</p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  </div>
)}

        

        {/* 🔹 Social Media Links */}
        <div className="mt-10 flex justify-center space-x-6 text-3xl">
          {artist.socialLinks.facebook && (
            <a href={artist.socialLinks.facebook} target="_blank" className="text-blue-500 hover:text-blue-400">
              <FaFacebook />
            </a>
          )}
          {artist.socialLinks.twitter && (
            <a href={artist.socialLinks.twitter} target="_blank" className="text-blue-400 hover:text-blue-300">
              <FaTwitter />
            </a>
          )}
          {artist.socialLinks.instagram && (
            <a href={artist.socialLinks.instagram} target="_blank" className="text-pink-500 hover:text-pink-400">
              <FaInstagram />
            </a>
          )}
          {artist.socialLinks.spotify && (
            <a href={artist.socialLinks.spotify} target="_blank" className="text-green-500 hover:text-green-400">
              <FaSpotify />
            </a>
          )}
          {artist.socialLinks.appleMusic && (
            <a href={artist.socialLinks.appleMusic} target="_blank" className="text-gray-400 hover:text-gray-300">
              <FaApple />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
