"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailCheck } from "lucide-react";

const inputClass =
  "w-full border-2 border-ocean-950 bg-sand-50 px-4 py-3 text-sm font-semibold text-ocean-950 placeholder:text-ocean-950/30 focus:bg-ocean-50 focus:outline-none";

const labelClass =
  "mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-ocean-500";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submitInquiry = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "Message not sent.");
      setSubmitted(true);
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
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex h-full flex-col items-center justify-center border-2 border-ocean-950 bg-[#dfff55] p-10 text-center sticker-shadow"
        >
          <MailCheck className="h-12 w-12 text-gold-500" strokeWidth={1.5} />
          <h3 className="mt-5 font-display text-2xl text-ocean-950">
            Message sent{name ? `, ${name.split(" ")[0]}` : ""}!
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ocean-900/70">
            Our team replies to every inquiry within a few hours during the
            day (GMT+8). Keep an eye on your inbox — and your spam folder,
            just in case.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-7 rounded-full border border-ocean-900/25 px-7 py-3 text-xs uppercase tracking-[0.2em] text-ocean-900 transition-all hover:border-ocean-900 hover:bg-ocean-900 hover:text-sand-50"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={submitInquiry}
          className="border-2 border-ocean-950 bg-white p-6 sticker-shadow lg:p-10"
        >
          <h2 className="font-display text-2xl text-ocean-950">
            Send an inquiry
          </h2>
          <p className="mt-2 text-sm text-ocean-900/60">
            Weddings, group trips, long stays, press — or just questions.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="iq-name" className={labelClass}>
                Full name
              </label>
              <input
                id="iq-name"
                name="name"
                type="text"
                required
                placeholder="Juan dela Cruz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="iq-email" className={labelClass}>
                Email
              </label>
              <input
                id="iq-email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="iq-subject" className={labelClass}>
                Subject
              </label>
              <select id="iq-subject" name="subject" className={inputClass} defaultValue="general">
                <option value="general">General question</option>
                <option value="booking">Booking & availability</option>
                <option value="event">Wedding / private event</option>
                <option value="group">Group or corporate stay</option>
                <option value="tours">Tours & transfers</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="iq-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="iq-message"
                name="message"
                rows={6}
                required
                placeholder="Tell us what you're dreaming up…"
                className={inputClass}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-7 w-full border-2 border-ocean-950 bg-gold-500 px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-ocean-950 sticker-shadow-sm transition-colors hover:bg-[#dfff55] disabled:cursor-wait disabled:opacity-65 sm:w-auto"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
          {error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
