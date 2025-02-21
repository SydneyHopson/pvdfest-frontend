"use client";
import { useState } from "react";
import { motion } from "framer-motion";


const faqs = [
  {
    question: "What are the hours of the festival?",
    answer: "Friday, September 6: 5:00 PM - 9:00 PM\nSaturday, September 7: 12:00 PM - 8:00 PM\nSunday, September 8 is held as a rain date.",
  },
  {
    question: "What time does everything start on Saturday? When is the best time to arrive?",
    answer: "Everything starts on Saturday at 12:00 PM. The best time to visit PVDFest is anytime!",
  },
  {
    question: "I want a full experience at the festival. What’s the best way for me to do that?",
    answer: `- Check out multiple stages featuring local and international acts.\n- Create something incredible at a Maker Space.\n- Visit the Food Truck Village for local & global cuisine.\n- Shop outdoors with hundreds of Artisan Vendors.\n- Discover art around every corner.\n- Bring a picnic blanket and enjoy Burnside Park.\n- Explore surrounding restaurants and bars in Providence!`,
  },
  {
    question: "I’m hungry. I’m thirsty. Will there be food at the festival?",
    answer: "Yes! Providence is a foodie destination. Some of the city’s top food trucks and restaurants will be on-site offering a variety of amazing cuisine.",
  },
  {
    question: "Can I buy beer or wine anywhere?",
    answer: "Many bars and restaurants along the festival footprint offer alcoholic beverages that may be consumed at the establishments selling them.",
  },
  {
    question: "How do I apply to become a vendor?",
    answer: "Applications to vend at PVDFest closed on May 31st. We hope to see you on September 6th and 7th Downtown! Check the PVDFest website between March and May next year to apply.",
  },
  {
    question: "How do I apply to perform?",
    answer: "This year, PVDFest local stages will be curated by active members of the arts community. Applications to perform at PVDFest closed on May 31st. Applicants will be notified by the end of June regarding next steps.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-gradient-to-r from-indigo-700 to-indigo-500 shadow-lg text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg">Frequently Asked Questions ❓</h1>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-12 px-6 space-y-6">
        {faqs.map((faq, index) => (
          <motion.div key={index} className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center font-semibold transition-all ${
                openIndex === index ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg">{faq.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="px-6 py-4 bg-white text-gray-800"
              >
                <p className="whitespace-pre-line">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
