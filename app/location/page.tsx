import type { Metadata } from "next";
import Link from "next/link";
import { Plane, Bus, Ship, CarFront, MapPin, Clock } from "lucide-react";
import { heroImages, site } from "@/lib/data";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Location & How to Reach Us",
  description:
    "Dalisay Cove sits on Lio Beach, El Nido, Palawan — 15 minutes from Lio Airport. Flights, vans, ferries and transfers explained.",
};

const routes = [
  {
    icon: Plane,
    title: "By Air — the fast way",
    duration: "≈ 1h 15m from Manila",
    steps: [
      "Fly Manila (MNL) or Cebu (CEB) direct to Lio Airport, El Nido (ELN) with AirSWIFT.",
      "Our driver meets you at arrivals with a cold buko juice.",
      "15 minutes by resort van to your room. That's it.",
    ],
  },
  {
    icon: Plane,
    title: "Via Puerto Princesa",
    duration: "≈ 1h flight + 5h van",
    steps: [
      "Fly any major airline to Puerto Princesa (PPS) — usually the cheapest fares.",
      "Take a shared or private van north to El Nido town (5–6 hours, scenic).",
      "We pick you up from El Nido terminal, 20 minutes to the cove.",
    ],
  },
  {
    icon: Ship,
    title: "By Sea — from Coron",
    duration: "≈ 3.5–4h fast ferry",
    steps: [
      "Island-hopping from Coron? Daily fast ferries cross to El Nido port.",
      "Book the morning trip for calmer seas and lagoon views on arrival.",
      "Resort transfer from the port is 25 minutes.",
    ],
  },
  {
    icon: Bus,
    title: "Overland — the adventure",
    duration: "For the road-trippers",
    steps: [
      "RORO buses and vans run the full Puerto Princesa – Taytay – El Nido route daily.",
      "Stop at Nacpan Beach on the way if you have time — you won't regret it.",
      "Tell us your ETA and dinner will be waiting.",
    ],
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        image={heroImages.location}
        eyebrow="Where We Are"
        title="The last easy paradise"
        subtitle="Lio Beach, El Nido — where the limestone cliffs of Bacuit Bay meet four kilometres of walkable white sand."
      />

      {/* Map + address */}
      <section className="border-b-2 border-ocean-950 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5 lg:px-8">
          <Reveal direction="left" className="lg:col-span-3">
            <div className="overflow-hidden border-2 border-ocean-950 sticker-shadow">
              <iframe
                src={site.mapEmbed}
                title="Map of Dalisay Cove, Lio Beach, El Nido, Palawan"
                className="h-[420px] w-full border-0 lg:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
          <Reveal direction="right" className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500">
              Find Us
            </p>
            <h2 className="mt-3 font-display text-3xl text-ocean-950">
              Dalisay Cove
            </h2>
            <ul className="mt-7 space-y-5 text-sm leading-relaxed text-ocean-900/75">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-4">
                <Plane className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <span>
                  15 minutes from Lio Airport (ELN) · free transfers on 3+
                  night stays
                </span>
              </li>
              <li className="flex gap-4">
                <CarFront className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <span>
                  20 minutes from El Nido town proper — close enough for
                  dinner, far enough for quiet
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <span>{site.hours}</span>
              </li>
            </ul>
            <div className="mt-9 border-2 border-ocean-950 bg-[#dfff55] p-6 sticker-shadow-sm">
              <h3 className="font-display text-lg text-ocean-950">
                GPS coordinates
              </h3>
              <p className="mt-2 font-mono text-sm text-ocean-900/70">
                11.2074° N, 119.4167° E
              </p>
              <p className="mt-3 text-xs text-ocean-900/60">
                Tip: tell any El Nido tricycle or van driver
                &ldquo;Dalisay Cove, Lio&rdquo; — everyone knows the way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How to reach us */}
      <section className="tropical-grid bg-gold-500 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="How to Reach Us"
            title="Four ways to the cove"
            subtitle="However you travel, tell us your plans and we'll arrange every transfer — you just watch the window."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {routes.map((route, i) => (
              <Reveal key={route.title} delay={(i % 2) * 0.12}>
                <div className="h-full border-2 border-ocean-950 bg-white p-8 sticker-shadow">
                  <div className="flex items-center justify-between">
                    <route.icon
                      className="h-8 w-8 text-gold-500"
                      strokeWidth={1.5}
                    />
                    <span className="rounded-full bg-ocean-50 px-4 py-1.5 text-xs font-medium text-ocean-800">
                      {route.duration}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ocean-950">
                    {route.title}
                  </h3>
                  <ol className="mt-4 space-y-3">
                    {route.steps.map((step, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-ocean-900/70">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand-100 font-display text-xs text-ocean-900">
                          {j + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <p className="text-sm text-ocean-900/70">
              Not sure which route fits your dates?{" "}
              <Link
                href="/contact"
                className="font-medium text-ocean-800 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-gold-600"
              >
                Message us
              </Link>{" "}
              — we plan arrivals every day and love doing it.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
