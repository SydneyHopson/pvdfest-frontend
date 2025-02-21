import { notFound } from "next/navigation";
import Image from "next/image"; // ✅ Import Next.js Image

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface PageProps {
  params: { id: string };
}

export default function EventDetailPage({ params }: PageProps) {
  if (!params || !params.id) {
    return notFound();
  }

  // ✅ Use Static Data for Now
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
          fill // ✅ Makes image responsive
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <p className="text-lg">More details about {event.title} coming soon...</p>
    </div>
  );
}
