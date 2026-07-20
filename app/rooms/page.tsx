import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { heroImages, rooms } from "@/lib/data";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description:
    "Garden bungalows, ocean rooms, beachfront suites and a private pool villa in El Nido, Palawan. See rates and inclusions.",
};

const inclusions = [
  "Daily à la carte breakfast at Talahib Restaurant",
  "Welcome drink & chilled towel on arrival",
  "Free use of kayaks, paddleboards & snorkel gear",
  "Drinking water refills & locally-made toiletries",
  "High-speed Starlink Wi-Fi across the resort",
  "Evening turndown with Filipino sweets",
];

export default function RoomsPage() {
  return (
    <>
      <PageHero
        image={heroImages.rooms}
        eyebrow="Rooms & Rates"
        title="Sleep beside the sea"
        subtitle="Twelve rooms and suites, one signature villa — each one facing a different shade of blue."
      />

      <section className="border-b-2 border-ocean-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-12 px-5 lg:px-8">
          {rooms.map((room, i) => (
            <RoomCard key={room.slug} room={room} index={i} />
          ))}
        </div>
      </section>

      {/* Rates table */}
      <section className="tropical-grid bg-gold-500 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Rates at a Glance"
            title="Simple, honest pricing"
            subtitle="Published rates are per night for two guests (Family Loft: four), inclusive of taxes and service charge. Peak season (Dec 20 – Jan 5, Holy Week) +20%."
          />
          <Reveal className="mt-12 overflow-x-auto border-2 border-ocean-950 bg-white sticker-shadow">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-sand-200 text-xs uppercase tracking-[0.2em] text-ocean-900/60">
                  <th className="px-6 py-5">Accommodation</th>
                  <th className="px-6 py-5">Guests</th>
                  <th className="px-6 py-5">Low Season</th>
                  <th className="px-6 py-5">High Season</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr
                    key={room.slug}
                    className="border-b border-sand-100 transition-colors last:border-0 hover:bg-sand-50"
                  >
                    <td className="px-6 py-5">
                      <p className="font-display text-base text-ocean-950">
                        {room.name}
                      </p>
                      <p className="text-xs text-ocean-900/50">{room.view}</p>
                    </td>
                    <td className="px-6 py-5 text-ocean-900/80">
                      {room.guests}
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-medium text-ocean-950">
                        ₱{Math.round(room.pricePHP * 0.85).toLocaleString()}
                      </span>
                      <span className="text-ocean-900/50"> /night</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-medium text-ocean-950">
                        ₱{room.pricePHP.toLocaleString()}
                      </span>
                      <span className="text-ocean-900/50"> /night</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="mt-12 border-2 border-ocean-950 bg-ocean-500 p-8 text-sand-100 sticker-shadow lg:p-10">
            <h3 className="font-display text-2xl text-gold-300">
              Every stay includes
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-sand-200/60">
              Free round-trip Lio Airport transfers on stays of 3 nights or
              more. Children under 7 stay free with existing bedding.
            </p>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <Link
              href="/booking"
              className="inline-block border-2 border-ocean-950 bg-[#dfff55] px-10 py-4 text-xs font-black uppercase tracking-[0.16em] text-ocean-950 sticker-shadow-sm"
            >
              Check Availability
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
