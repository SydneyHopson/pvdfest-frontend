import { notFound } from "next/navigation";
import Image from "next/image";

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface EventProps {
  params: { id: string };
}

// ✅ Server Component (fetch outside component)
export async function getEventData(id: string): Promise<Event | null> {
  try {
    const response = await fetch("http://localhost:3000/api/events", { cache: "no-store" });
    const events: Event[] = await response.json();
    return events.find((event) => event.id.toString() === id) || null;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return null;
  }
}

// ✅ Convert Component to Server Component
export default async function EventDetailPage({ params }: EventProps) {
  const event = await getEventData(params.id);

  if (!event) return notFound();

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold">{event.title}</h1>
      <p className="text-gray-600 mt-2">Date: {event.date}</p>
      <div className="relative w-full max-w-3xl h-96 my-6">
        <Image
          src={event.image}
          alt={event.title}
          fill // ✅ Fix: Uses Next.js `fill` prop for responsive images
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <p className="text-lg">More details about {event.title} coming soon...</p>
    </div>
  );
}
