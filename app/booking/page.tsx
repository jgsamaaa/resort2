import type { Metadata } from "next";
import { Suspense } from "react";
import { heroImages } from "@/lib/data";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description:
    "Check availability and request your booking at Dalisay Cove, El Nido. No payment needed — we confirm within 24 hours.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        image={heroImages.booking}
        eyebrow="Reservations"
        title="Book your stay"
        subtitle="Pick your dates, tell us who's coming, and leave the rest to us. We confirm every request within 24 hours."
      />
      <section className="tropical-grid bg-[#dfff55] py-20 lg:py-28">
        <Suspense>
          <BookingForm />
        </Suspense>
      </section>
    </>
  );
}
