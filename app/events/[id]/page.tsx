import { notFound } from "next/navigation";
import Image from "next/image"; // ✅ Import Next.js Image

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface EventProps {
  params: { id: string };
}

export default function EventDetailPage({ params }: EventProps) {
  // ✅ Ensure params.id is a valid string before fetching data
  if (!params?.id) {
    return notFound();
  }

  // Fetch event data (Using Static Data for now)
  const events: Event[] = [
    { id: 1, title: "Music Night", date: "2025-09-10", image: "/image/event1.webp" },
    { id: 2, title: "Art Exhibition", date: "2025-09-11", image: "/image/event2.webp" },
  ];

  const event = events.find((e) => e.id.toString() === params.id);

  if (!event) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold">{event.title}</h1>
      <p className="text-gray-600 mt-2">Date: {event.date}</p>
      <div className="relative w-full max-w-3xl h-96 my-6">
        <Image 
          src={event.image} 
          alt={event.title} 
          layout="fill" // ✅ Makes image responsive
          objectFit="cover" // ✅ Prevents distortion
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg">More details about {event.title} coming soon...</p>
    </div>
  );
}
