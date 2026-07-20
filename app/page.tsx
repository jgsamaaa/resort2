import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Leaf,
  MapPin,
  Quote,
  Sparkles,
  Waves,
} from "lucide-react";
import { amenities, galleryImages, heroImages, reviews, rooms, site } from "@/lib/data";
import AvailabilityBar from "@/components/AvailabilityBar";
import Reveal from "@/components/Reveal";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import SectionHeading from "@/components/SectionHeading";
import Stars from "@/components/Stars";

const featured = [rooms[1], rooms[2], rooms[4]];

const directPerks = [
  "Best rate, always",
  "Breakfast included",
  "Free transfers for 3+ nights",
];

export default function HomePage() {
  return (
    <>
      <section className="grain relative flex min-h-[720px] h-[94svh] items-end overflow-hidden bg-ocean-950">
        <Image
          src={heroImages.home}
          alt="Dalisay Cove at sunrise in El Nido, Palawan"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-[57%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,39,46,.78)_0%,rgba(4,39,46,.32)_48%,rgba(4,39,46,.06)_72%),linear-gradient(0deg,rgba(4,39,46,.72)_0%,transparent_48%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[90rem] items-end gap-10 px-5 pb-28 pt-36 md:pb-32 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-4xl">
            <Reveal direction="fade">
              <p className="eyebrow-line text-[10px] font-semibold uppercase tracking-[0.34em] text-gold-300 sm:text-xs">
                A private cove in Palawan
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="mt-7 max-w-4xl text-balance font-display text-[clamp(4rem,9vw,8.4rem)] font-medium leading-[0.78] tracking-[-0.045em] text-sand-50">
                Find your way
                <span className="mt-3 block pl-[12vw] italic text-gold-300 sm:pl-32">
                  back to blue.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-col items-start gap-7 sm:flex-row sm:items-center">
                <p className="max-w-md text-sm leading-7 text-sand-100/85 sm:text-base">
                  Twelve thoughtful rooms, one remarkable villa, and a stretch of El Nido shore that still feels wonderfully undiscovered.
                </p>
                <Link
                  href="/rooms"
                  className="group flex shrink-0 items-center gap-3 border-b border-gold-300/70 pb-2 text-[11px] font-semibold uppercase tracking-[0.21em] text-sand-50 transition-colors hover:text-gold-300"
                >
                  Explore the stays
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal direction="fade" delay={0.38}>
            <div className="hidden w-44 rounded-t-full border border-white/25 bg-ocean-950/25 px-5 pb-6 pt-12 text-center text-sand-50 backdrop-blur-md lg:block">
              <Waves className="mx-auto h-6 w-6 text-gold-300" strokeWidth={1.25} />
              <p className="mt-4 font-display text-4xl">4.9</p>
              <Stars rating={5} className="mx-auto mt-2 h-3 w-3" />
              <p className="mt-3 text-[9px] uppercase leading-4 tracking-[0.2em] text-sand-100/65">
                Guest-loved<br />since 2015
              </p>
            </div>
          </Reveal>
        </div>

        <a
          href="#welcome"
          aria-label="Scroll to discover"
          className="absolute bottom-8 right-8 z-10 hidden h-14 w-14 items-center justify-center rounded-full border border-white/30 text-sand-50 transition-colors hover:border-gold-300 hover:text-gold-300 md:flex"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      <AvailabilityBar />

      <section id="welcome" className="overflow-hidden pb-24 pt-10 lg:pb-36 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <Reveal direction="left">
            <div className="relative pb-12 pr-7 sm:pr-16">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[9rem] rounded-b-[1.5rem]">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 right-0 w-[43%] overflow-hidden rounded-[1.25rem] border-[6px] border-sand-50 shadow-2xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={galleryImages[3].src}
                    alt={galleryImages[3].alt}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -left-3 bottom-24 flex h-28 w-28 rotate-[-8deg] items-center justify-center rounded-full bg-gold-500 text-center text-[9px] font-bold uppercase leading-4 tracking-[0.18em] text-ocean-950 shadow-xl sm:h-32 sm:w-32">
                Barefoot<br />luxury<br />naturally
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="eyebrow-line text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-600">
              Mabuhay from {site.name}
            </p>
            <h2 className="mt-6 text-balance font-display text-5xl font-medium leading-[0.98] tracking-[-0.03em] text-ocean-950 sm:text-6xl lg:text-7xl">
              Intimate by design.
              <span className="block italic text-ocean-600">Unforgettable by nature.</span>
            </h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-[1fr_auto]">
              <p className="max-w-xl text-sm leading-7 text-ocean-900/68 sm:text-base">
                Dalisay means “pure” in Filipino. It is our promise to keep this place personal: no crowds, no high-rises, no rush. Just thoughtful island living, food with a story, and a team who will know your name by sunset.
              </p>
              <div className="border-l border-sand-300 pl-7">
                <p className="font-display text-4xl text-ocean-950">13</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-ocean-900/50">Total stays</p>
                <p className="mt-4 font-display text-4xl text-ocean-950">50m</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-ocean-900/50">To the bay</p>
              </div>
            </div>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ocean-950 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-50 transition-all hover:bg-ocean-800"
            >
              Read our story
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-100 py-24 lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Rest Easy"
              title="A room for every reason"
              subtitle="Wake to birdsong, the bay, or your own private pool. Every stay includes breakfast, water adventures, and our best direct-booking rate."
              align="left"
            />
            <Link
              href="/rooms"
              className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-ocean-900"
            >
              All rooms & rates
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ocean-900/20 transition-all group-hover:bg-ocean-950 group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {featured.map((room, index) => (
              <Reveal
                key={room.slug}
                delay={index * 0.1}
                className={index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-3" : "lg:col-span-4"}
              >
                <article className={`group relative overflow-hidden rounded-[1.75rem] ${index === 1 ? "lg:mt-16" : ""}`}>
                  <Link href={`/booking?room=${room.slug}`} className="block">
                    <div className={`relative ${index === 1 ? "aspect-[4/6]" : "aspect-[4/5]"}`}>
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/5 to-transparent" />
                      <span className="absolute left-5 top-5 rounded-full border border-white/35 bg-ocean-950/15 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-sand-50 backdrop-blur-md">
                        {room.kind}
                      </span>
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <div className="flex items-end justify-between gap-5">
                          <div>
                            <h3 className="font-display text-3xl font-medium text-sand-50 sm:text-4xl">{room.name}</h3>
                            <p className="mt-2 text-xs text-sand-100/70">{room.view} · Up to {room.guests} guests</p>
                          </div>
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ocean-950 transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                        <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-sand-100/75">
                          <p className="text-[10px] uppercase tracking-[0.18em]">From</p>
                          <p className="font-display text-xl text-sand-50">₱{room.pricePHP.toLocaleString()} <span className="font-sans text-[10px] uppercase tracking-wide text-sand-100/60">/ night</span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ocean-950 py-24 text-sand-50 lg:py-36">
        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full border border-white/5" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <Reveal direction="left">
              <p className="eyebrow-line text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-300">Island rhythm</p>
              <h2 className="mt-6 text-balance font-display text-5xl leading-[.95] sm:text-6xl">Fill your days.<br /><span className="italic text-gold-300">Or don’t.</span></h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-sand-100/65">Follow the bangka toward secret lagoons, learn a traditional hilot massage, or let an afternoon disappear beside the pool. There is no wrong pace here.</p>
              <div className="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
                {[[Compass, "4", "Lagoon routes"], [Waves, "24/7", "Ocean access"], [Leaf, "100%", "Local rituals"]].map(([Icon, value, label]) => {
                  const ExperienceIcon = Icon as typeof Compass;
                  return <div key={String(label)}><ExperienceIcon className="h-5 w-5 text-gold-400" strokeWidth={1.4} /><p className="mt-3 font-display text-2xl">{String(value)}</p><p className="mt-1 text-[8px] uppercase tracking-[.16em] text-sand-100/45">{String(label)}</p></div>;
                })}
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {amenities.slice(0, 4).map((amenity, index) => (
                <Reveal key={amenity.title} delay={index * 0.08} direction="zoom">
                  <div className={`group relative overflow-hidden rounded-[1.5rem] ${index % 2 === 1 ? "sm:translate-y-10" : ""}`}>
                    <div className="relative aspect-[5/4]">
                      <Image src={amenity.image} alt={amenity.title} fill sizes="(max-width: 640px) 100vw, 35vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="font-display text-2xl">{amenity.title}</p>
                        <p className="mt-1 text-xs leading-5 text-sand-100/60">{amenity.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image src={galleryImages[7].src} alt={galleryImages[7].alt} fill sizes="25vw" className="object-cover" />
                </div>
                <div className="relative mt-14 aspect-[3/4] overflow-hidden rounded-t-[6rem] rounded-b-[1.5rem]">
                  <Image src={galleryImages[1].src} alt={galleryImages[1].alt} fill sizes="25vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <MapPin className="h-7 w-7 text-gold-600" strokeWidth={1.4} />
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-600">Closer than it feels</p>
              <h2 className="mt-5 text-balance font-display text-5xl leading-[.98] text-ocean-950 sm:text-6xl">Paradise without<br /><span className="italic text-ocean-600">the hard part.</span></h2>
              <p className="mt-7 max-w-lg text-sm leading-7 text-ocean-900/65">Fly directly from Manila to El Nido. We will meet you at Lio Airport with a cold buko, and fifteen minutes later your feet are in the sand.</p>
              <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-y border-sand-300 py-6 text-center">
                {[["1h 15m", "Manila flight"], ["15 min", "Airport transfer"], ["0", "Travel stress"]].map(([value, label]) => <div key={label}><p className="font-display text-2xl text-ocean-950">{value}</p><p className="mt-1 text-[8px] uppercase tracking-[.16em] text-ocean-900/45">{label}</p></div>)}
              </div>
              <Link href="/location" className="group mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] text-ocean-950">Plan your journey <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-sand-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <Reveal direction="left">
              <Quote className="h-9 w-9 text-gold-600" strokeWidth={1.3} />
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[.28em] text-gold-600">Notes from the cove</p>
              <h2 className="mt-5 font-display text-5xl leading-[.98] text-ocean-950 sm:text-6xl">The kind of place people <span className="italic text-ocean-600">keep talking about.</span></h2>
              <div className="mt-7 flex items-center gap-4"><Stars rating={5} /><p className="text-xs text-ocean-900/55">4.9 from 300+ stays</p></div>
            </Reveal>
            <Reveal direction="right">
              <figure className="rounded-[2rem] bg-white p-8 shadow-xl shadow-ocean-950/5 sm:p-11">
                <div className="flex items-center justify-between"><Stars rating={reviews[1].rating} /><Sparkles className="h-5 w-5 text-gold-500" /></div>
                <blockquote className="mt-7 font-display text-2xl leading-snug text-ocean-950 sm:text-3xl">“{reviews[1].text}”</blockquote>
                <figcaption className="mt-8 flex items-center justify-between border-t border-sand-200 pt-5"><div><p className="text-sm font-semibold text-ocean-950">{reviews[1].name}</p><p className="mt-1 text-xs text-ocean-900/45">{reviews[1].origin}</p></div><p className="text-[9px] uppercase tracking-[.18em] text-ocean-900/40">{reviews[1].date}</p></figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        <div className="mt-14"><ReviewsMarquee /></div>
      </section>

      <section className="relative overflow-hidden bg-ocean-950">
        <Image src={galleryImages[4].src} alt="Sunset over Bacuit Bay" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950 via-ocean-950/78 to-ocean-950/25" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8 lg:py-32">
          <Reveal direction="left">
            <p className="eyebrow-line text-[10px] font-semibold uppercase tracking-[.28em] text-gold-300">Your island chapter</p>
            <h2 className="mt-6 max-w-3xl text-balance font-display text-5xl leading-[.94] text-sand-50 sm:text-7xl">Stay long enough to <span className="italic text-gold-300">forget what day it is.</span></h2>
            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {directPerks.map((perk) => <li key={perk} className="flex items-center gap-2 text-xs text-sand-100/70"><Check className="h-3.5 w-3.5 text-gold-400" />{perk}</li>)}
            </ul>
          </Reveal>
          <Reveal direction="right">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/booking" className="group flex items-center justify-center gap-3 rounded-full bg-gold-500 px-9 py-4 text-[11px] font-bold uppercase tracking-[.2em] text-ocean-950 transition-colors hover:bg-gold-300">Check availability <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
              <Link href="/contact" className="flex items-center justify-center rounded-full border border-white/35 px-9 py-4 text-[11px] font-semibold uppercase tracking-[.2em] text-sand-50 transition-colors hover:border-gold-300 hover:text-gold-300">Ask a question</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
