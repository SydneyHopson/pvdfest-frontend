"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const foodTrucks = [
  { 
    name: "Angkor Boba Tea House", 
    friday: true, saturday: true, sunday: true, 
    category: "Drinks", 
    image: "/image/food-trucks/AngkorBobaTeaHouse.webp",
    menu: [
      { item: "Classic Boba Milk Tea", price: "$4.50" },
      { item: "Taro Boba Tea", price: "$5.00" },
      { item: "Matcha Green Tea Latte", price: "$5.50" }
    ]
  },
  { 
    name: "Atomic Ice Cream", 
    friday: false, saturday: true, sunday: true, 
    category: "Dessert", 
    image: "/image/food-trucks/cultro.webp",
    menu: [
      { item: "Nitrogen Vanilla Ice Cream", price: "$6.00" },
      { item: "Chocolate Blast Cone", price: "$6.50" },
      { item: "Strawberry Swirl Sundae", price: "$7.00" }
    ]
  },
  { 
    name: "Cultro", 
    friday: true, saturday: true, sunday: true, 
    category: "Latin", 
    image: "/image/food-trucks/cultro.webp",
    menu: [
      { item: "Carne Asada Tacos", price: "$8.00" },
      { item: "Empanadas (Chicken or Beef)", price: "$6.50" },
      { item: "Mango & Lime Fresh Juice", price: "$4.00" }
    ]
  },
  { 
    name: "The Burrito Bowl", 
    friday: true, saturday: true, sunday: true, 
    category: "Mexican", 
    image: "/image/food-trucks/theburritobowl.webp",
    menu: [
      { item: "Chicken Burrito Bowl", price: "$9.50" },
      { item: "Steak Burrito Bowl", price: "$10.50" },
      { item: "Loaded Nachos", price: "$7.50" }
    ]
  }
];

const heroVideos = [
  "/video/food-trucks/truck1.mp4",
  "/video/food-trucks/truck3.mp4",
  "/video/food-trucks/truck4.mp4",
];

export default function FoodTruckVillage() {
  const [selectedDay, setSelectedDay] = useState<"friday" | "saturday" | "sunday">("friday");
  const [viewState, setViewState] = useState(foodTrucks.map(() => "image")); 
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 5500); // 5.5 seconds per video

    return () => clearInterval(videoInterval);
  }, []);

  const toggleView = (index: number) => {
    setViewState((prevState) =>
      prevState.map((state, i) => (i === index ? (state === "image" ? "menu" : "image") : state))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-300 pb-32">
      {/* Hero Section with Seamless Videos */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden mt-28">
        {heroVideos.map((video, index) => (
          <motion.video
            key={video}
            src={video}
            autoPlay
            loop
            muted
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              currentVideo === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-6xl font-bold text-white z-10 text-center drop-shadow-lg">
          Food Truck Village 🍔🌮🍦
        </h1>
      </div>

      {/* Day Selection */}
      <div className="flex justify-center gap-4 mt-8">
        {["friday", "saturday", "sunday"].map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day as "friday" | "saturday" | "sunday")}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition ${
              selectedDay === day ? "bg-red-600 text-white shadow-lg" : "bg-white text-gray-900 hover:bg-gray-200"
            }`}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </button>
        ))}
      </div>

      {/* Food Truck Grid */}
      <div className="max-w-5xl mx-auto mt-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {foodTrucks
          .filter((truck) => truck[selectedDay])
          .map((truck, index) => (
            <div key={truck.name} className="bg-white rounded-lg shadow-lg overflow-hidden relative p-6 flex flex-col items-center hover:scale-105 transition">
              <div className="w-full h-[300px] flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  {viewState[index] === "image" ? (
                    <motion.div
                      key={`image-${truck.name}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-full h-full flex items-center justify-center"
                    >
                      <Image
                        src={truck.image}
                        alt={truck.name}
                        width={400}
                        height={250}
                        className="w-full object-cover rounded-lg"
                        unoptimized
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`menu-${truck.name}`}
                      className="absolute w-full h-full flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">Menu 🍽️</h2>
                      {truck.menu.map((item) => (
                        <div key={item.item} className="flex justify-between text-lg text-gray-700 border-b py-2 w-full px-6">
                          <span>{item.item}</span>
                          <span className="font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Truck Name & Category */}
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold text-gray-900">{truck.name}</h2>
                <span className="mt-1 px-3 py-1 text-sm font-semibold rounded-full bg-gray-300 text-gray-800">
                  {truck.category}
                </span>
              </div>

              {/* Manual Toggle */}
              <button
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-500 transition"
                onClick={() => toggleView(index)}
              >
                {viewState[index] === "image" ? "📜 Menu" : "📷 Truck"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
