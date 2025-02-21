"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUserFriends, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

const paradeVideos = [
  "/video/parade/parade1.mp4",
  "/video/parade/parade2.mp4",
  "/video/parade/parade3.mp4",
];

const grandMarshals = [
  {
    name: "Anjel Newman",
    bio: "A Black American artist, creative director, and educator specializing in using design principles to transform organizations with a focus on empathy, storytelling, and social justice. She is Co-Executive and Youth Program Director at AS220, teaches art and social justice, and is a member of the PPSD School Board.",
  },
  {
    name: "Chachi Carvalho",
    bio: "A talented emcee, songwriter, poet, and entrepreneur who has performed for and captivated many PVDFest audiences over the years. He is the owner of We Own The Masters LLC. and co-owner of Beatbox Digital Recording Studio in Pawtucket.",
  },
  {
    name: "Rodney Davis",
    bio: "A leading community champion and LGBTQ+ activist who has served for more than twenty years as co-chair and president of Rhode Island Pride. He has supported numerous organizations that promote social justice and community advancement.",
  },
];

const participants = [
  "Extraordinary Rendition Band with Grand Marshals",
  "Chachi Carvalho, Anjel Newman, Rodney Davis",
  "Lt. Governor Sabina Matos, Mayor Brett Smiley, ACT Director Joe Wilson Jr.",
  "RAMP",
  "The Boston Globe",
  "King EeSy",
  "Eunice Belly Dance",
  "Big Brothers Big Sisters",
  "RI Kung Fu & Lion Dance Club",
  "Rip GALIANO",
  "Rios de Agua Viva",
  "Christian Miss",
  "Sirr Jones",
  "Amy the Mime",
  "Coyote Brass Band",
  "LBM Heavy",
  "Society Art Collective",
  "Selena Mars",
  "The Providence Drum Troupe",
];

export default function ParadePage() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % paradeVideos.length);
    }, 5500); // ⏳ 5.5 sec per video
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 pt-24 pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden shadow-lg">
        <video
          key={currentVideo}
          src={paradeVideos[currentVideo]}
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg">PVDFest 2025 Parade 🎭🎷</h1>
        </div>
      </div>

      {/* Parade Details */}
      <div className="max-w-4xl mx-auto mt-12 px-6 space-y-12">
        <motion.div className="flex gap-4 p-6 rounded-lg shadow-lg bg-blue-500 text-white" whileHover={{ scale: 1.02 }}>
          <FaClock className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Parade Start Time</h2>
            <p className="mt-2">The **PVDFest 2025 Parade** begins at **3:00 PM**.</p>
          </div>
        </motion.div>

        <motion.div className="flex gap-4 p-6 rounded-lg shadow-lg bg-green-500 text-white" whileHover={{ scale: 1.02 }}>
          <FaMapMarkerAlt className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Parade Route</h2>
            <p className="mt-2">
              The parade will start at **Washington Street at Empire Street** and end at **City Hall Main Stage**.
            </p>
          </div>
        </motion.div>

        {/* Grand Marshals */}
        <div className="p-6 bg-yellow-500 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaUserFriends className="text-white" /> Grand Marshals
          </h2>
          <div className="mt-4 space-y-4">
            {grandMarshals.map((marshal, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} className="p-4 bg-yellow-600 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{marshal.name}</h3>
                <p className="mt-2">{marshal.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Parade Participants */}
        <div className="p-6 bg-purple-500 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-semibold">Parade Participants</h2>
          <p className="mt-2 text-sm">(Subject to Change)</p>
          <ul className="mt-4 list-disc pl-6">
            {participants.map((participant, index) => (
              <motion.li key={index} whileHover={{ scale: 1.02 }} className="mb-2">
                {participant}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <motion.div className="flex gap-4 p-6 rounded-lg shadow-lg bg-gray-800 text-white" whileHover={{ scale: 1.02 }}>
          <FaEnvelope className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Want to Join the Parade?</h2>
            <p className="mt-2">
              This is a **people-powered parade**—no motorized vehicles or bicycles allowed.  
              All forms of **wheelchairs are welcome**.  
              Contact <Link href="mailto:rnoon@providenceri.gov" className="underline">Rebecca Noon</Link> for more details.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
