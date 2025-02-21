import Image from "next/image";

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
        <a href="/events" className="text-blue-500 mt-2 inline-block">Learn More →</a>
      </div>
    </div>
  );
};

export default EventCard;
