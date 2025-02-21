"use client";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export default function Hero() {
  // ✅ Default media for the demo (NO API)
  const mediaItems = [
    "/image/Hero.webp",
    "/image/FestivalCrowd.webp",
    "/video/fallBack-video.mp4",
    "/video/FestivalHighlights.mp4",
  ];

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-white text-center">
      {/* 🔹 Fullscreen Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          className="w-full h-full"
        >
          {mediaItems.map((src, index) => (
            <div key={index} className="relative w-full h-[80vh]">
              {src.endsWith(".mp4") ? (
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                  <source src={src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                  unoptimized
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>

      {/* 🔹 Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* 🔹 Hero Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-7xl uppercase font-bold">PVDFest 2025</h1>
        <p className="mt-4 text-2xl max-w-2xl mx-auto leading-relaxed">
          The Ultimate Festival Experience - Live Music, Art, Food, and More!
        </p>
        <Link 
          href="/events"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition"
        >
          View Events
        </Link>
      </div>
    </section>
  );
}
