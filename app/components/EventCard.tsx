import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={image} width={400} height={250} alt={title} className="w-full h-52 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{date}</p>
        <Link href="/events" className="text-blue-500 hover:underline">
  View Events
</Link>
      </div>
    </div>
  );
};

export default EventCard;
