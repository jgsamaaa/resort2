"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Users,
  BedDouble,
  CheckCircle2,
  PartyPopper,
} from "lucide-react";
import { rooms, site } from "@/lib/data";

const inputClass =
  "w-full border-2 border-ocean-950 bg-sand-50 px-4 py-3 text-sm font-semibold text-ocean-950 placeholder:text-ocean-950/30 focus:bg-ocean-50 focus:outline-none";

const labelClass =
  "mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-ocean-500";

export default function BookingForm() {
  const params = useSearchParams();
  const preselected = params.get("room") ?? "";
  const validSlug = rooms.some((r) => r.slug === preselected)
    ? preselected
    : "";

  const requestedAdults = params.get("adults") ?? "2";
  const [form, setForm] = useState({
    room: validSlug,
    checkIn: params.get("checkIn") ?? "",
    checkOut: params.get("checkOut") ?? "",
    adults: ["1", "2", "3", "4", "5", "6"].includes(requestedAdults)
      ? requestedAdults
      : "2",
    children: "0",
    name: "",
    email: "",
    phone: "",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const selectedRoom = rooms.find((r) => r.slug === form.room);

  const nights = useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 0;
    const diff =
      (new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) /
      86_400_000;
    return diff > 0 ? Math.round(diff) : 0;
  }, [form.checkIn, form.checkOut]);

  const total = selectedRoom && nights > 0 ? selectedRoom.pricePHP * nights : 0;

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { reference?: string; error?: string };
      if (!response.ok || !result.reference) {
        throw new Error(result.error || "We could not send your request.");
      }
      setReference(result.reference);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-5 lg:px-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl border-2 border-ocean-950 bg-[#dfff55] p-8 text-center sticker-shadow lg:p-14"
          >
            <PartyPopper className="mx-auto h-14 w-14 text-gold-500" strokeWidth={1.5} />
            <h2 className="mt-6 font-display text-3xl text-ocean-950">
              Salamat, {form.name.split(" ")[0] || "friend"}!
            </h2>
            <p className="mt-4 leading-relaxed text-ocean-900/70">
              Your booking request has been received. Our reservations team
              will confirm availability and send payment details to{" "}
              <span className="font-medium text-ocean-950">{form.email}</span>{" "}
              within 24 hours.
            </p>
            <div className="mt-8 rounded-2xl bg-sand-100 p-6 text-left text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-ocean-900/50">
                Request reference
              </p>
              <p className="mt-1 font-mono text-lg text-ocean-950">{reference}</p>
              <div className="mt-4 space-y-1.5 text-ocean-900/75">
                {selectedRoom && (
                  <p>
                    <BedDouble className="mr-2 inline h-4 w-4 text-gold-500" />
                    {selectedRoom.name}
                  </p>
                )}
                <p>
                  <CalendarDays className="mr-2 inline h-4 w-4 text-gold-500" />
                  {form.checkIn} → {form.checkOut} ({nights}{" "}
                  {nights === 1 ? "night" : "nights"})
                </p>
                <p>
                  <Users className="mr-2 inline h-4 w-4 text-gold-500" />
                  {form.adults} adult(s), {form.children} child(ren)
                </p>
                {total > 0 && (
                  <p className="pt-2 font-medium text-ocean-950">
                    Estimated total: ₱{total.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
            <p className="mt-6 text-xs text-ocean-900/50">
              No payment has been taken. Questions? Call us at {site.phone}.
            </p>
            <Link
              href="/"
              className="mt-8 inline-block rounded-full bg-ocean-900 px-8 py-3.5 text-sm uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-ocean-800"
            >
              Back to Home
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-10 lg:grid-cols-3"
          >
            <form
              onSubmit={handleSubmit}
              className="border-2 border-ocean-950 bg-white p-6 sticker-shadow lg:col-span-2 lg:p-10"
            >
              <h2 className="font-display text-2xl text-ocean-950">
                Your stay
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="room" className={labelClass}>
                    Room or Villa
                  </label>
                  <select
                    id="room"
                    required
                    value={form.room}
                    onChange={update("room")}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select your accommodation…
                    </option>
                    {rooms.map((r) => (
                      <option key={r.slug} value={r.slug}>
                        {r.name} — ₱{r.pricePHP.toLocaleString()}/night
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="checkIn" className={labelClass}>
                    Check-in
                  </label>
                  <input
                    id="checkIn"
                    type="date"
                    required
                    min={today}
                    value={form.checkIn}
                    onChange={update("checkIn")}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className={labelClass}>
                    Check-out
                  </label>
                  <input
                    id="checkOut"
                    type="date"
                    required
                    min={form.checkIn || today}
                    value={form.checkOut}
                    onChange={update("checkOut")}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="adults" className={labelClass}>
                    Adults
                  </label>
                  <select
                    id="adults"
                    value={form.adults}
                    onChange={update("adults")}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="children" className={labelClass}>
                    Children
                  </label>
                  <select
                    id="children"
                    value={form.children}
                    onChange={update("children")}
                    className={inputClass}
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <h2 className="mt-10 font-display text-2xl text-ocean-950">
                Your details
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Juan dela Cruz"
                    value={form.name}
                    onChange={update("name")}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={update("email")}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className={labelClass}>
                    Phone / WhatsApp{" "}
                    <span className="normal-case text-ocean-900/40">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+63 9xx xxx xxxx"
                    value={form.phone}
                    onChange={update("phone")}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="requests" className={labelClass}>
                    Special requests
                  </label>
                  <textarea
                    id="requests"
                    rows={4}
                    placeholder="Celebrating something? Dietary needs? Early arrival? Tell us — we love requests."
                    value={form.requests}
                    onChange={update("requests")}
                    className={inputClass}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full border-2 border-ocean-950 bg-gold-500 px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-ocean-950 sticker-shadow-sm transition-colors hover:bg-[#dfff55] disabled:cursor-wait disabled:opacity-65"
              >
                {submitting ? "Sending request…" : "Request Booking"}
              </button>
              {error && (
                <p role="alert" className="mt-4 text-center text-sm text-red-700">
                  {error}
                </p>
              )}
              <p className="mt-4 text-center text-xs text-ocean-900/50">
                No payment now — we confirm availability first, always within
                24 hours.
              </p>
            </form>

            {/* Summary sidebar */}
            <aside className="h-fit border-2 border-ocean-950 bg-ocean-500 p-8 text-sand-100 sticker-shadow lg:sticky lg:top-32">
              <h3 className="font-display text-xl text-gold-300">
                Stay summary
              </h3>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-sand-50/10 pb-3">
                  <span className="text-sand-200/70">Accommodation</span>
                  <span className="text-right font-medium">
                    {selectedRoom ? selectedRoom.name : "—"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand-50/10 pb-3">
                  <span className="text-sand-200/70">Nights</span>
                  <span className="font-medium">{nights || "—"}</span>
                </div>
                <div className="flex justify-between border-b border-sand-50/10 pb-3">
                  <span className="text-sand-200/70">Guests</span>
                  <span className="font-medium">
                    {form.adults} adult(s), {form.children} child(ren)
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-sand-200/70">Estimated total</span>
                  <span className="font-display text-2xl text-gold-300">
                    {total > 0 ? `₱${total.toLocaleString()}` : "—"}
                  </span>
                </div>
              </div>
              <ul className="mt-8 space-y-3 text-xs text-sand-200/75">
                {[
                  "Best-rate guarantee for direct bookings",
                  "Free cancellation up to 7 days before arrival",
                  "Free airport transfers on 3+ night stays",
                  "Breakfast always included",
                ].map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    {perk}
                  </li>
                ))}
              </ul>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
