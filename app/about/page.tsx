import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, HeartHandshake, Fish, Sprout } from "lucide-react";
import { heroImages, galleryImages } from "@/lib/data";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Dalisay Cove — a family-built beach resort in El Nido, Palawan rooted in Filipino hospitality and care for the sea.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Malasakit",
    text: "The Filipino word for care that goes beyond duty. Our team is 90% El Nido locals who treat guests the way we treat family — because to us, you are.",
  },
  {
    icon: Leaf,
    title: "Light Footprint",
    text: "Solar water heating, zero single-use plastic, and a kitchen that buys from Palawan farmers and day-boat fishers first.",
  },
  {
    icon: Fish,
    title: "Reef First",
    text: "We fund a house-reef restoration program and brief every guest on reef-safe sunscreen. The clearest water is the water everyone protects.",
  },
  {
    icon: Sprout,
    title: "Grown Slowly",
    text: "We opened with four bungalows in 2015 and grew one building at a time — never taller than a coconut tree, never louder than the tide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={heroImages.about}
        eyebrow="Our Story"
        title="Built by a family, kept by an island"
        subtitle="What started as four bamboo bungalows and a dream is now El Nido's most-loved little cove."
      />

      <section className="border-b-2 border-ocean-950 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal direction="left">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500">
              Since 2015
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ocean-950 sm:text-4xl">
              A cove worth keeping pure
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-ocean-900/70">
              <p>
                Lolo Ernesto fished this cove for fifty years. When his
                grandchildren came home from Manila with an idea — a small
                resort that would let the world see their Palawan without
                spoiling it — he gave two conditions: never block a neighbor&apos;s
                path to the sea, and never serve fish you wouldn&apos;t eat
                yourself.
              </p>
              <p>
                A decade later, both promises still stand. The bungalows are
                now twelve rooms and one villa, the kitchen has won awards, and
                Lolo&apos;s old bangka — restored and repainted — still takes guests
                to the lagoons every morning.
              </p>
              <p>
                We named the resort <em>Dalisay</em> — pure — after the water
                that made us fall in love with this place. Come see why we
                never left.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={galleryImages[7].src}
                  alt={galleryImages[7].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tropical-grid border-b-2 border-ocean-950 bg-[#dfff55] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Hospitality with roots"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="h-full border-2 border-ocean-950 bg-white p-8 sticker-shadow transition-transform duration-300 hover:-translate-y-1.5">
                  <value.icon
                    className="h-9 w-9 text-gold-500"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-display text-xl text-ocean-950">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ocean-900/70">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tropical-grid bg-gold-500 py-20 text-center lg:py-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold-500">
            Meet us at the shore
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-ocean-950 sm:text-4xl">
            The rest of the story is better told over a mango shake
          </h2>
          <Link
            href="/booking"
            className="mt-9 inline-block border-2 border-ocean-950 bg-ocean-500 px-10 py-4 text-xs font-black uppercase tracking-[0.16em] text-sand-50 sticker-shadow-sm"
          >
            Plan Your Stay
          </Link>
        </Reveal>
      </section>
    </>
  );
}
