"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "FAQs", path: "/faqs" },
  { name: "Artists", path: "/artists" },
  { name: "Schedule", path: "/schedule" },
  { name: "Festival Map", path: "/festival-map" },
  { name: "Food Truck Village", path: "/food-truck-village" },
  { name: "News", path: "/news" },
  { name: "Sponsors & Friends", path: "/sponsors" },
  { name: "Transportation Info", path: "/transportation" },
  { name: "Accessibility", path: "/accessibility" },
  { name: "Parade", path: "/parade" },
  { name: "Other Happenings", path: "/other-happenings" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ Handle scroll direction to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50 && !isOpen) {
        setIsVisible(false); // Hide navbar when scrolling up (only if menu is closed)
      } else {
        setIsVisible(true); // Show navbar when scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]); // ✅ Recalculate when menu opens/closes

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isVisible || isOpen ? 0 : -100, opacity: isVisible || isOpen ? 1 : 0 }} // ✅ Navbar stays visible if menu is open
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-[999] px-6 py-3 transition-all duration-300 bg-black/80 backdrop-blur-md shadow-lg"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* 🔹 Slightly Smaller Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/NavBarlogo/PVD2024logo.png"
            alt="PVDFest 2024 Logo"
            width={85} // ✅ Smaller size
            height={30} // ✅ Maintains Proportions
            unoptimized
            className="cursor-pointer"
          />
        </Link>

        {/* 🔹 Hamburger Menu (Mobile) */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="text-white text-lg font-medium hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Mobile Menu (Animated) - Stays Visible */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md z-[1000]" // ✅ Menu stays visible
          >
            <ul className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.path}
                    className="text-white text-xl font-medium tracking-wider hover:text-blue-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
