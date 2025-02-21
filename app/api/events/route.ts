import { NextResponse } from "next/server";

export async function GET() {
  // Dummy event data for now; will replace with real database connection later
  const events = [
    { id: 1, title: "Live Concert", date: "June 15, 2025", image: "/event1.jpg" },
    { id: 2, title: "Art Exhibit", date: "June 16, 2025", image: "/event2.jpg" },
    { id: 3, title: "Food Festival", date: "June 17, 2025", image: "/event3.jpg" },
  ];

  return NextResponse.json(events);
}
