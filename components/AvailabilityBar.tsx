"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CalendarDays, Users } from "lucide-react";

const toLocalDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function AvailabilityBar() {
  const router = useRouter();
  const today = useMemo(() => toLocalDate(new Date()), []);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");

  const minCheckOut = useMemo(() => {
    if (!checkIn) return today;
    const next = new Date(`${checkIn}T12:00:00`);
    next.setDate(next.getDate() + 1);
    return toLocalDate(next);
  }, [checkIn, today]);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitted = new FormData(event.currentTarget);
    const params = new URLSearchParams();
    const submittedCheckIn = String(submitted.get("checkIn") ?? "");
    const submittedCheckOut = String(submitted.get("checkOut") ?? "");
    const submittedAdults = String(submitted.get("adults") ?? "2");
    if (submittedCheckIn) params.set("checkIn", submittedCheckIn);
    if (submittedCheckOut) params.set("checkOut", submittedCheckOut);
    params.set("adults", submittedAdults);
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <form
      onSubmit={submit}
      className="relative z-20 mx-auto grid w-[calc(100%-2rem)] max-w-6xl -translate-y-1/2 overflow-hidden rounded-[1.75rem] border border-white/70 bg-sand-50 shadow-[0_28px_70px_-28px_rgba(6,39,46,0.42)] md:grid-cols-[1fr_1fr_.7fr_auto]"
      aria-label="Check resort availability"
    >
      <label className="group flex items-center gap-4 border-b border-sand-200 px-6 py-5 md:border-b-0 md:border-r">
        <CalendarDays className="h-5 w-5 shrink-0 text-gold-600" strokeWidth={1.5} />
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-ocean-900/50">
            Arrival
          </span>
          <input
            type="date"
            name="checkIn"
            min={today}
            value={checkIn}
            onChange={(event) => {
              setCheckIn(event.target.value);
              if (checkOut && event.target.value >= checkOut) setCheckOut("");
            }}
            className="mt-1 w-full bg-transparent text-sm font-medium text-ocean-950 outline-none [color-scheme:light]"
            aria-label="Arrival date"
          />
        </span>
      </label>

      <label className="group flex items-center gap-4 border-b border-sand-200 px-6 py-5 md:border-b-0 md:border-r">
        <CalendarDays className="h-5 w-5 shrink-0 text-gold-600" strokeWidth={1.5} />
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-ocean-900/50">
            Departure
          </span>
          <input
            type="date"
            name="checkOut"
            min={minCheckOut}
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            className="mt-1 w-full bg-transparent text-sm font-medium text-ocean-950 outline-none [color-scheme:light]"
            aria-label="Departure date"
          />
        </span>
      </label>

      <label className="flex items-center gap-4 border-b border-sand-200 px-6 py-5 md:border-b-0 md:border-r">
        <Users className="h-5 w-5 shrink-0 text-gold-600" strokeWidth={1.5} />
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-ocean-900/50">
            Guests
          </span>
          <select
            name="adults"
            value={adults}
            onChange={(event) => setAdults(event.target.value)}
            className="mt-1 w-full appearance-none bg-transparent text-sm font-medium text-ocean-950 outline-none"
            aria-label="Number of adult guests"
          >
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? "adult" : "adults"}
              </option>
            ))}
          </select>
        </span>
      </label>

      <button
        type="submit"
        className="group flex min-h-20 items-center justify-center gap-3 bg-gold-500 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-950 transition-colors hover:bg-gold-400 md:min-h-0"
      >
        Check dates
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
