"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send } from "lucide-react";
import { offers, stays } from "@/lib/amara-data";

export default function BookingInquiryForm() {
  const query = useSearchParams();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; const input = new FormData(form);
    if (!input.get("firstName") || !input.get("lastName") || !input.get("email") || !input.get("phone") || !input.get("checkIn") || !input.get("checkOut")) { setError("Please complete your name, contact details and both travel dates."); return; }
    if (!input.get("consent")) { setError("Please confirm that we may contact you about this stay."); return; }
    const start = String(input.get("checkIn")); const end = String(input.get("checkOut"));
    if (start && end && new Date(end) <= new Date(start)) { setError("Check-out must be after check-in."); return; }
    setError(""); setSent(true); form.reset(); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (sent) return <div className="border border-moss/25 bg-soft-white p-8 text-center sm:p-12"><CheckCircle2 className="mx-auto h-12 w-12 text-moss" /><h2 className="mt-5 font-display text-4xl">Your stay begins here.</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-pine-black/60">Thank you. An Amara Ridge host will respond within one business day with availability and a considered itinerary.</p><button onClick={() => setSent(false)} className="mt-7 border-b border-pine-black pb-1 text-[10px] font-bold uppercase tracking-[.17em]">Send another inquiry</button></div>;
  const inputClass = "mt-2 w-full border border-pine-black/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-clay";
  const labelClass = "text-[9px] font-bold uppercase tracking-[.18em] text-clay";
  return <form onSubmit={submit} noValidate className="bg-soft-white p-6 shadow-[0_30px_80px_rgba(16,23,19,.08)] sm:p-10"><div className="grid gap-5 sm:grid-cols-2"><label className={labelClass}>First name<input name="firstName" required className={inputClass} autoComplete="given-name" /></label><label className={labelClass}>Last name<input name="lastName" required className={inputClass} autoComplete="family-name" /></label><label className={labelClass}>Email<input name="email" required type="email" className={inputClass} autoComplete="email" /></label><label className={labelClass}>Phone<input name="phone" required type="tel" className={inputClass} autoComplete="tel" /></label><label className={labelClass}>Check in<input name="checkIn" required type="date" defaultValue={query.get("checkIn") ?? ""} className={inputClass} /></label><label className={labelClass}>Check out<input name="checkOut" required type="date" defaultValue={query.get("checkOut") ?? ""} className={inputClass} /></label><label className={labelClass}>Guests<select name="guests" defaultValue={query.get("guests") ?? "2"} className={inputClass}>{[1,2,3,4,5,6].map((value) => <option key={value}>{value}</option>)}</select></label><label className={labelClass}>Preferred stay<select name="stay" defaultValue={query.get("stay") ?? ""} className={inputClass}><option value="">Let your host recommend</option>{stays.map((stay) => <option key={stay.slug} value={stay.slug}>{stay.name}</option>)}</select></label><label className={`${labelClass} sm:col-span-2`}>Package interest<select name="offer" defaultValue={query.get("offer") ?? ""} className={inputClass}><option value="">No package selected</option>{offers.map((offer) => <option key={offer.slug} value={offer.slug}>{offer.name}</option>)}</select></label><label className={`${labelClass} sm:col-span-2`}>Special requests<textarea name="message" rows={5} className={inputClass} placeholder="A celebration, dietary preferences, the pace you prefer…" /></label></div><label className="mt-5 flex items-start gap-3 text-xs leading-5 text-pine-black/60"><input name="consent" type="checkbox" className="mt-1 accent-moss" />I agree that Amara Ridge may contact me about this inquiry. This is a request, not a confirmed reservation.</label>{error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}<button className="mt-7 flex w-full items-center justify-center gap-3 bg-ember px-6 py-4 text-[10px] font-bold uppercase tracking-[.17em] hover:bg-pine-black hover:text-white">Send stay request <Send className="h-4 w-4" /></button></form>;
}
