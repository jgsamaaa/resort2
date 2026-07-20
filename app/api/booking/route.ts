import { rooms } from "@/lib/data";

type BookingRequest = {
  room?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: string;
  children?: string;
  name?: string;
  email?: string;
  phone?: string;
  requests?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: BookingRequest;

  try {
    data = (await request.json()) as BookingRequest;
  } catch {
    return Response.json({ error: "Invalid booking request." }, { status: 400 });
  }

  const validRoom = rooms.some((room) => room.slug === data.room);
  const arrival = data.checkIn ? Date.parse(data.checkIn) : Number.NaN;
  const departure = data.checkOut ? Date.parse(data.checkOut) : Number.NaN;

  if (
    !validRoom ||
    !Number.isFinite(arrival) ||
    !Number.isFinite(departure) ||
    departure <= arrival ||
    !data.name?.trim() ||
    !data.email ||
    !emailPattern.test(data.email)
  ) {
    return Response.json(
      { error: "Please check your room, dates, name, and email." },
      { status: 400 }
    );
  }

  const reference = `DC-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  return Response.json({ ok: true, reference }, { status: 201 });
}
