"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, CalendarDays, Users } from "lucide-react";
import { stays } from "@/lib/amara-data";

export default function BookingBar({ floating = false }: { floating?: boolean }) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [stay, setStay] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    const query = new URLSearchParams({ checkIn, checkOut, guests, stay });
    router.push(`/booking?${query.toString()}`);
  }

  const field = "w-full bg-transparent text-sm text-pine-black outline-none";
  return (
    <form onSubmit={submit} className={`${floating ? "relative z-10 -mt-12 shadow-2xl" : ""} mx-auto grid max-w-[90rem] bg-soft-white md:grid-cols-[1fr_1fr_.8fr_1fr_auto]`} aria-label="Quick booking search">
      <label className="border-b border-pine-black/10 px-5 py-4 md:border-b-0 md:border-r"><span className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em] text-clay"><CalendarDays className="h-3.5 w-3.5" />Check in</span><input className={field} type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} min={new Date().toISOString().split("T")[0]} required /></label>
      <label className="border-b border-pine-black/10 px-5 py-4 md:border-b-0 md:border-r"><span className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em] text-clay"><CalendarDays className="h-3.5 w-3.5" />Check out</span><input className={field} type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} min={checkIn || new Date().toISOString().split("T")[0]} required /></label>
      <label className="border-b border-pine-black/10 px-5 py-4 md:border-b-0 md:border-r"><span className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em] text-clay"><Users className="h-3.5 w-3.5" />Guests</span><select className={field} value={guests} onChange={(e) => setGuests(e.target.value)}>{[1,2,3,4,5,6].map((value) => <option key={value}>{value}</option>)}</select></label>
      <label className="px-5 py-4"><span className="mb-2 block text-[9px] font-bold uppercase tracking-[.18em] text-clay">Preferred stay</span><select className={field} value={stay} onChange={(e) => setStay(e.target.value)}><option value="">Any villa</option>{stays.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label>
      <button className="flex min-h-16 items-center justify-center gap-3 bg-ember px-7 text-[10px] font-bold uppercase tracking-[.17em] text-pine-black transition-colors hover:bg-pine-black hover:text-white">Check availability <ArrowUpRight className="h-4 w-4" /></button>
    </form>
  );
}
