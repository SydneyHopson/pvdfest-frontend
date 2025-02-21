"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/NavBar";

const hardcodedEvents = [
  {
    title: "Live Concert: Headline Performance",
    date: "Friday, June 15, 2025",
    location: "Downtown Main Stage",
    image: "/image/events/event1.webp",
  },
  {
    title: "Art Exhibit: Street Murals & Live Painting",
    date: "Saturday, June 16, 2025",
    location: "Providence Art District",
    image: "/image/events/event2.webp",
  },
  {
    title: "Food & Wine Festival",
    date: "Sunday, June 17, 2025",
    location: "PVDFest Food Village",
    image: "/image/events/event3.webp",
  },
  {
    title: "Dance Battles & Cyphers",
    date: "Monday, June 18, 2025",
    location: "Burnside Park",
    image: "/image/events/event4.webp",
  },
  {
    title: "Indie Music & Open Mic Night",
    date: "Tuesday, June 19, 2025",
    location: "Kennedy Plaza",
    image: "/image/events/event5.webp",
  },
  {
    title: "Salsa Night with Live Orchestra",
    date: "Wednesday, June 20, 2025",
    location: "City Hall Stage",
    image: "/image/events/event6.webp",
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const USE_API = process.env.NEXT_PUBLIC_USE_API === "true";

    if (USE_API) {
      fetch("https://yourapi.com/events") // Replace with real API endpoint
        .then((res) => res.json())
        .then((data) => setEvents(data))
        .catch((err) => {
          console.error("Error fetching events:", err);
          setEvents(hardcodedEvents); // Fallback to hardcoded data if API fails
        });
    } else {
      setEvents(hardcodedEvents);
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#2563EB] to-[#FF4500] text-white min-h-screen">
      <Navbar />

      {/* 🔹 Added More Margin to Push Content Below Navbar */}
      <section className="text-center mt-24 pt-20 pb-8">
        <h1 className="text-5xl font-bold uppercase font-[var(--font-primary)]">Upcoming Events</h1>
        <p className="text-lg text-gray-300 mt-2">Stay in the loop with the biggest moments of PVDFest 2025!</p>
      </section>

      {/* 🔹 Events Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            {/* 🔹 Event Image */}
            <div className="relative w-full h-64">
              <Image
                src={event.image}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 group-hover:opacity-80"
              />
            </div>

            {/* 🔹 Event Info */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/50 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-sm">{event.date} | {event.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Footer Space Fix */}
      <div className="mt-24"></div>
    </div>
  );
}
