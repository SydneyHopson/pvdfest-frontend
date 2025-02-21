import { notFound } from "next/navigation";
import Image from "next/image";

// ✅ Define params type as a Promise
type EventParams = Promise<{ id: string }>;

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}

// ✅ Await params inside the function
export default async function EventDetailPage({ params }: { params: EventParams }) {
  const { id } = await params; // ✅ Await params

  let event: Event | null = null;

  try {
    const response = await fetch("http://localhost:3000/api/events", { cache: "no-store" });
    const events: Event[] = await response.json();
    event = events.find((event) => event.id.toString() === id) || null;
  } catch (error) {
    console.error("Failed to fetch events:", error);
  }

  if (!event) return notFound();

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold">{event.title}</h1>
      <p className="text-gray-600 mt-2">Date: {event.date}</p>
      <div className="relative w-full max-w-3xl h-96 my-6">
        <Image
          src={event.image}
          alt={event.title}
          fill // ✅ Uses Next.js `fill` for responsive images
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <p className="text-lg">More details about {event.title} coming soon...</p>
    </div>
  );
}
