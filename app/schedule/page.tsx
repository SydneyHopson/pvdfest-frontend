"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const scheduleData = [
  {
    day: "Friday, September 6",
    events: [
      { time: "5:00 PM", title: "Festival Opening Ceremony", location: "Kennedy Plaza" },
      { time: "5:30 PM", title: "Live DJ Set", location: "Burnside Park" },
      { time: "6:00 PM", title: "FirstWorks Spectacle Show", location: "Main Stage" },
      { time: "6:45 PM", title: "Live Art Performance", location: "City Hall Stage" },
      { time: "7:30 PM", title: "Salsa Night with Lulada Club", location: "City Hall Stage" },
      { time: "8:00 PM", title: "Electronic Beats Showcase", location: "Dance Tent" },
    ],
  },
  {
    day: "Saturday, September 7",
    events: [
      { time: "12:00 PM", title: "Cultural Heritage Festivals Begin", location: "Snow Street" },
      { time: "1:00 PM", title: "Community Parade", location: "Main Street" },
      { time: "2:30 PM", title: "FirstWorks Spectacle Show", location: "Main Stage" },
      { time: "3:00 PM", title: "Live Dance Battles", location: "Burnside Park" },
      { time: "4:30 PM", title: "Afrika Nyaga Drum & Dance Festival", location: "City Hall Stage" },
      { time: "5:30 PM", title: "Local Band Showcase", location: "Indie Stage" },
      { time: "7:30 PM", title: "Festival Closing Show", location: "Main Stage" },
      { time: "8:00 PM", title: "Silent Disco Party", location: "Glow Tent" },
    ],
  },
  {
    day: "Sunday, September 8 (Rain Date)",
    events: [
      { time: "12:00 PM", title: "Sunday Jazz Brunch", location: "Waterplace Park" },
      { time: "1:30 PM", title: "Street Art & Live Murals", location: "Downtown Alleyways" },
      { time: "3:00 PM", title: "Global Dance Fusion Showcase", location: "Main Stage" },
      { time: "4:00 PM", title: "Final FirstWorks Spectacle Performance", location: "Kennedy Plaza" },
      { time: "5:30 PM", title: "Community Drum Circle", location: "Burnside Park" },
      { time: "7:00 PM", title: "Festival Wrap Party & Fireworks", location: "Waterplace Park" },
    ],
  },
];

export default function SchedulePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#2563EB] to-[#FF4500] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* 🔹 Page Header (With More Margin for Navbar) */}
        <h1 className="text-5xl font-bold uppercase text-center mb-16 font-[var(--font-primary)] mt-16">
          Festival Schedule
        </h1>

        {/* 🔹 Timeline Wrapper */}
        <div className="relative border-l-4 border-white pl-6 space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              
              {/* 🔹 Day Header with Motion */}
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-8 text-yellow-200"
              >
                {day.day}
              </motion.h2>

              {day.events.map((event, eventIndex) => (
                <motion.div
                  key={eventIndex}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: eventIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-8 flex items-start gap-6 group"
                >
                  {/* 🔹 Time & Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 bg-white text-blue-600 font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg transition-all duration-300 group-hover:bg-yellow-400"
                  >
                    <FaClock className="text-blue-600 group-hover:text-black transition-all duration-300" /> {event.time}
                  </motion.div>

                  {/* 🔹 Event Details (Hover Effect) */}
                  <motion.div
                    className="bg-white text-black p-5 rounded-lg shadow-md w-full transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white"
                  >
                    <h3 className="text-xl font-bold transition-all duration-300 group-hover:text-yellow-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-2 mt-2 group-hover:text-gray-200 transition-all duration-300">
                      <FaMapMarkerAlt className="text-blue-600 group-hover:text-yellow-300 transition-all duration-300" /> {event.location}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Floating "Back to Top" Button (Appears on Scroll) */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-lg"
        >
          ↑ Back to Top
        </motion.button>
      )}

      {/* 🔹 Fix Space Before Footer */}
      <div className="mt-16"></div>
    </section>
  );
}
