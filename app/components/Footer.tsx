import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-blue-600 to-pink-500 text-white py-10 ">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔹 Logos Section */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          <Image
            src="/image/footer logos/act-logo2024.png"
            alt="Dept. of Art, Culture & Tourism"
            width={150}
            height={50}
            unoptimized
          />
          <Image
            src="/image/footer logos/firstworks2024.png"
            alt="First Works"
            width={150}
            height={50}
            unoptimized
          />
          <Image
            src="/image/footer logos/providence-city-seal-2024.png"
            alt="City of Providence"
            width={100}
            height={100}
            unoptimized
          />
          <Image
            src="/image/footer logos/city-council.png"
            alt="Providence City Council"
            width={120}
            height={50}
            unoptimized
          />
        </div>

        {/* 🔹 Social Media Links */}
        <div className="flex justify-center space-x-6 text-3xl mb-6">
          <Link href="https://instagram.com/pvdfest" target="_blank" className="hover:text-gray-300">
            <FaInstagram />
          </Link>
          <Link href="https://facebook.com/pvdfest" target="_blank" className="hover:text-gray-300">
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com/pvdfest" target="_blank" className="hover:text-gray-300">
            <FaTwitter />
          </Link>
        </div>

        {/* 🔹 Copyright Section */}
        <p className="text-center text-sm text-gray-200">
          ©2025 City of Providence, Rhode Island
        </p>
      </div>
    </footer>
  );
}
