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

export default async function EventDetailPage({ params }: EventProps) {
  const response = await fetch("http://localhost:3000/api/events", { cache: "no-store" });
  const events: Event[] = await response.json();

  const event = events.find((event) => event.id.toString() === params.id);

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
