"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const newsArticles = [
  {
    slug: "pvdfest-2025-dates-announced",
    date: "February 10, 2025",
    title: "PVDFest 2025 Dates Announced!",
    content: "The City of Providence has officially announced that PVDFest 2025 will take place from September 5-7, transforming downtown into a vibrant hub of music, art, and culture. This year's festival promises to be bigger and better than ever, featuring live performances, food vendors, and community-driven experiences. Stay tuned for more details on the schedule and lineup!",
  },
  {
    slug: "pvdfest-2025-interactive-art",
    date: "March 3, 2025",
    title: "PVDFest 2025 Expands to Include More Interactive Art Installations",
    content: "This year’s festival will feature interactive art installations from world-renowned artists, giving attendees a chance to engage with unique and immersive experiences. These installations will be spread throughout the city, making PVDFest 2025 the most visually exciting edition yet!",
  },
  {
    slug: "pvdfest-2025-main-stage-lineup",
    date: "March 24, 2025",
    title: "Headliners Announced for PVDFest Main Stage",
    content: "PVDFest 2025 will showcase an incredible lineup of performers, including national and local artists across multiple genres. The main stage will feature high-energy acts, and there will be special performances across different parts of the festival.",
  },
  {
    slug: "pvdfest-2025-food-trucks",
    date: "April 15, 2025",
    title: "New Food Vendors Announced for PVDFest Food Truck Village",
    content: "This year’s Food Truck Village will feature over 30 vendors offering a diverse selection of culinary delights, including international cuisines, vegan options, and festival favorites. Come hungry and explore the best food Rhode Island has to offer!",
  },
  {
    slug: "pvdfest-2025-parade-of-lights",
    date: "May 1, 2025",
    title: "PVDFest 2025 to Feature a Parade of Lights",
    content: "For the first time ever, PVDFest will host a nighttime Parade of Lights, featuring illuminated floats, performances, and special guests. Expect a magical experience like never before!",
  },
  {
    slug: "pvdfest-2025-public-art",
    date: "June 20, 2025",
    title: "Public Art to Take Center Stage at PVDFest",
    content: "Artists from across the country will bring large-scale murals and installations to life throughout the city, making PVDFest 2025 the most visually stunning yet.",
  },
  {
    slug: "pvdfest-2025-artist-market",
    date: "July 8, 2025",
    title: "PVDFest 2025 to Celebrate Local Talent with Expanded Artist Market",
    content: "The PVDFest Artist Market will be bigger than ever, featuring local makers, crafters, and designers selling their unique creations. If you love handmade art, fashion, and accessories, you won’t want to miss this!",
  },
];

export default function NewsArticlePage() {
  const params = useParams();
  const { slug } = params;

  const article = newsArticles.find((news) => news.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-red-600">404 - Article Not Found</h1>
        <p className="text-gray-700 mt-4">Oops! The news article youre looking for doesnt exist.</p>
        <Link href="/news" className="mt-6 text-blue-600 hover:underline font-semibold">
          ← Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-900">{article.title}</h1>
      <p className="text-gray-600 text-sm mt-2">{article.date}</p>
      <p className="text-lg text-gray-800 mt-6">{article.content}</p>

      <Link href="/news" className="mt-10 inline-block text-blue-600 font-semibold hover:underline">
        ← Back to News
      </Link>
    </div>
  );
}
