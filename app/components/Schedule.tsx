"use client";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

// ✅ Schedule Data
const scheduleData = [
  {
    day: "Friday, September 6",
    events: [
      { time: "5:00 PM", title: "Festival Opening Ceremony", location: "Kennedy Plaza" },
      { time: "5:30 PM", title: "Live DJ Set", location: "Burnside Park" },
      { time: "6:00 PM", title: "FirstWorks Spectacle Show", location: "Main Stage" },
      { time: "7:30 PM", title: "Salsa Night with Lulada Club", location: "City Hall Stage" },
    ],
  },
  {
    day: "Saturday, September 7",
    events: [
      { time: "12:00 PM", title: "Cultural Heritage Festivals Begin", location: "Snow Street" },
      { time: "2:30 PM", title: "FirstWorks Spectacle Show", location: "Main Stage" },
      { time: "4:30 PM", title: "Afrika Nyaga Drum & Dance Festival", location: "City Hall Stage" },
      { time: "7:30 PM", title: "Festival Closing Show", location: "Main Stage" },
    ],
  },
  {
    day: "Sunday, September 8",
    events: [
      { time: "12:00 PM", title: "Rain Date Activation", location: "Festival Grounds" },
      { time: "1:30 PM", title: "Community Art Showcase", location: "Kennedy Plaza" },
      { time: "3:00 PM", title: "Closing Ceremony", location: "Main Stage" },
    ],
  },
];

// ✅ Define Props
interface FestivalScheduleProps {
  showDay?: string; // ✅ Optional prop to filter by a specific day
}

// ✅ Component
export default function FestivalSchedule({ showDay }: FestivalScheduleProps) {
  // 🔹 Filter the schedule if showDay is provided
  const filteredSchedule = showDay
    ? scheduleData.filter((day) => day.day === showDay)
    : scheduleData;

  return (
    <section className="py-16 text-center bg-gray-900 text-white">
      <h2 className="text-4xl font-extrabold uppercase mb-6">Festival Schedule</h2>

      <div className="relative border-l-4 border-white pl-6 max-w-5xl mx-auto text-left">
        {filteredSchedule.map((day, dayIndex) => (
          <div key={dayIndex} className="mb-10">
            {/* 🔹 Day Header */}
            <h2 className="text-3xl font-bold mb-6">{day.day}</h2>

            {day.events.map((event, eventIndex) => (
              <motion.div
                key={eventIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: eventIndex * 0.1 }}
                className="mb-6 flex items-start gap-4 relative"
              >
                {/* 🔹 Time & Icon */}
                <div className="flex-shrink-0 bg-white text-blue-600 font-bold px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <FaClock /> {event.time}
                </div>

                {/* 🔹 Event Details */}
                <div className="bg-white text-black p-4 rounded-lg shadow-md w-full">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-2">
                    <FaMapMarkerAlt className="text-red-500" /> {event.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
