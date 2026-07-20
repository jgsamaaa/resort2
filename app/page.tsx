import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, MapPin, Quote, Star, Waves } from "lucide-react";
import { amenities, galleryImages, heroImages, reviews, rooms } from "@/lib/data";
import AvailabilityBar from "@/components/AvailabilityBar";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const featured = [rooms[2], rooms[4], rooms[0]];

export default function HomePage() {
  return (
    <>
      <section className="grid min-h-[780px] border-b-2 border-ocean-950 pt-[100px] lg:h-svh lg:grid-cols-[1.04fr_.96fr]">
        <div className="tropical-grid relative flex flex-col justify-between overflow-hidden bg-sand-50 px-5 pb-10 pt-14 sm:px-10 lg:px-12 lg:pb-12 lg:pt-16">
          <div>
            <Reveal direction="fade">
              <div className="flex flex-wrap gap-2">
                <span className="border-2 border-ocean-950 bg-[#dfff55] px-3 py-2 text-[9px] font-black uppercase tracking-[.15em] sticker-shadow-sm">El Nido, Palawan</span>
                <span className="border-2 border-ocean-950 bg-white px-3 py-2 text-[9px] font-black uppercase tracking-[.15em]">13 stays only</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-9 max-w-3xl font-display text-[clamp(4rem,7.4vw,7.5rem)] leading-[.72] tracking-[.015em] text-ocean-500">
                NO SHOES.<br />NO SCHEDULE.<br /><span className="text-gold-500">NO PROBLEM.</span>
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.22}>
            <div className="mt-12 flex flex-col justify-between gap-7 border-t-2 border-ocean-950 pt-6 sm:flex-row sm:items-end">
              <p className="max-w-sm text-sm font-semibold leading-6 text-ocean-950/70">A small Filipino beach resort for big swims, slow breakfasts, louder sunsets, and absolutely nowhere else to be.</p>
              <div className="flex gap-3">
                <Link href="/booking" className="flex items-center gap-2 border-2 border-ocean-950 bg-gold-500 px-5 py-4 text-[10px] font-black uppercase tracking-[.14em] sticker-shadow-sm transition-transform hover:-translate-y-1">BOOK IT <ArrowUpRight className="h-4 w-4" /></Link>
                <Link href="/rooms" aria-label="Explore stays" className="flex h-[52px] w-[52px] items-center justify-center border-2 border-ocean-950 bg-[#dfff55] sticker-shadow-sm"><ArrowRight /></Link>
              </div>
            </div>
          </Reveal>

          <div className="animate-bob absolute right-8 top-36 hidden h-24 w-24 items-center justify-center rounded-full border-2 border-ocean-950 bg-ocean-950 text-center text-[9px] font-black uppercase leading-4 tracking-[.14em] text-white sm:flex lg:right-10">Best<br />rate<br />direct</div>
        </div>

        <div className="relative min-h-[620px] overflow-hidden border-t-2 border-ocean-950 lg:min-h-0 lg:border-l-2 lg:border-t-0">
          <Image src={heroImages.home} alt="Aerial view of Dalisay Cove in Palawan" fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute bottom-0 left-0 border-r-2 border-t-2 border-ocean-950 bg-ocean-500 p-5 text-white sm:p-7">
            <p className="font-display text-5xl leading-none">4.9 / 5</p>
            <p className="mt-2 text-[9px] font-black uppercase tracking-[.16em]">300+ happy castaways</p>
          </div>
          <div className="absolute right-4 top-4 border-2 border-ocean-950 bg-sand-50 p-3 sticker-shadow-sm">
            <Waves className="h-7 w-7 text-ocean-500" strokeWidth={2.5} />
          </div>
        </div>
      </section>

      <AvailabilityBar />

      <div className="overflow-hidden border-b-2 border-ocean-950 bg-gold-500 py-4">
        <div className="animate-ticker flex w-max whitespace-nowrap font-display text-3xl tracking-wide text-ocean-950 sm:text-4xl">
          {[...Array(2)].map((_, group) => <span key={group}>{["SWIM BEFORE BREAKFAST", "NAP AFTER LUNCH", "CHASE THE SUNSET", "REPEAT TOMORROW"].map((item) => <span key={`${group}-${item}`} className="mx-7">✦ {item}</span>)}</span>)}
        </div>
      </div>

      <section className="overflow-hidden border-b-2 border-ocean-950 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10">
          <Reveal direction="left">
            <div className="relative pr-6 pt-6 sm:pr-16">
              <div className="relative aspect-[4/5] border-2 border-ocean-950 bg-ocean-500 sticker-shadow">
                <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-7 right-0 w-[45%] rotate-3 border-2 border-ocean-950 bg-white p-2 sticker-shadow-sm">
                <div className="relative aspect-square"><Image src={galleryImages[3].src} alt={galleryImages[3].alt} fill sizes="240px" className="object-cover" /></div>
                <p className="py-2 text-center text-[8px] font-black uppercase tracking-[.14em]">Breakfast floats here</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-ocean-500">01 / THE BIG IDEA</p>
            <h2 className="mt-5 text-balance font-display text-7xl leading-[.78] tracking-wide text-ocean-950 sm:text-8xl lg:text-[8rem]">SMALL RESORT.<br /><span className="text-ocean-500">HUGE FEELING.</span></h2>
            <p className="mt-8 max-w-2xl text-base font-medium leading-8 text-ocean-950/65">We built Dalisay for people who want the Philippines without the mega-resort. Thirteen keys, one private cove, a team who knows your name, and nothing taller than a coconut tree.</p>
            <div className="mt-8 grid grid-cols-3 border-l-2 border-t-2 border-ocean-950">
              {[["13", "ROOMS + VILLA"], ["50M", "TO THE WATER"], ["2015", "BORN IN PALAWAN"]].map(([value,label]) => <div key={label} className="border-b-2 border-r-2 border-ocean-950 p-4"><p className="font-display text-4xl text-gold-500 sm:text-5xl">{value}</p><p className="mt-1 text-[7px] font-black uppercase tracking-[.12em]">{label}</p></div>)}
            </div>
            <Link href="/about" className="mt-8 inline-flex items-center gap-3 border-b-2 border-ocean-950 pb-2 text-[10px] font-black uppercase tracking-[.15em]">MEET THE FAMILY <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="tropical-grid border-b-2 border-ocean-950 bg-[#dfff55] py-20 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
          <SectionHeading eyebrow="PICK YOUR PILLOW" title="STAY SOMEWHERE FUN" subtitle="Garden hideaway, front-row suite, or the full private-villa fantasy. Breakfast and water toys come with every key." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featured.map((room, index) => (
              <Reveal key={room.slug} delay={index * .1}>
                <Link href={`/booking?room=${room.slug}`} className="group block border-2 border-ocean-950 bg-sand-50 sticker-shadow transition-transform hover:-translate-y-2">
                  <div className="relative aspect-[4/3] border-b-2 border-ocean-950"><Image src={room.image} alt={room.name} fill sizes="(max-width:1024px)100vw,33vw" className="object-cover" /><span className="absolute left-3 top-3 border-2 border-ocean-950 bg-gold-500 px-3 py-2 text-[8px] font-black uppercase sticker-shadow-sm">0{index + 1} / {room.kind}</span></div>
                  <div className="p-5">
                    <h3 className="font-display text-5xl leading-none text-ocean-500">{room.name}</h3>
                    <p className="mt-3 min-h-12 text-xs font-medium leading-5 text-ocean-950/65">{room.shortDescription}</p>
                    <div className="mt-5 flex items-center justify-between border-t-2 border-ocean-950 pt-4"><p className="font-display text-3xl">₱{room.pricePHP.toLocaleString()}<span className="font-sans text-[8px] font-bold"> / NIGHT</span></p><span className="flex h-10 w-10 items-center justify-center border-2 border-ocean-950 bg-gold-500 transition-transform group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center"><Link href="/rooms" className="inline-flex items-center gap-3 border-2 border-ocean-950 bg-ocean-500 px-7 py-4 text-[10px] font-black uppercase tracking-[.15em] text-white sticker-shadow-sm">SEE ALL ROOMS + RATES <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="border-b-2 border-ocean-950 bg-ocean-500 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <Reveal direction="left">
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#dfff55]">02 / DO EVERYTHING. OR NOTHING.</p>
              <h2 className="mt-5 font-display text-7xl leading-[.78] sm:text-8xl">YOUR DAY.<br /><span className="text-gold-400">YOUR RULES.</span></h2>
              <p className="mt-7 max-w-md text-sm font-medium leading-7 text-white/65">Paddle out. Float around. Eat something smoky. Book a massage. Change your mind. Island time is extremely forgiving.</p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {amenities.slice(0,4).map((amenity,index) => <Reveal key={amenity.title} delay={index*.08}><div className="group relative aspect-[5/3] overflow-hidden border-2 border-ocean-950 bg-white sticker-shadow-sm"><Image src={amenity.image} alt={amenity.title} fill sizes="(max-width:640px)100vw,35vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 border-t-2 border-ocean-950 bg-sand-50 p-4 text-ocean-950"><p className="font-display text-3xl">{amenity.title}</p><p className="text-[10px] font-medium">{amenity.description}</p></div></div></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ocean-950 py-20 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
          <SectionHeading eyebrow="HEARD AT THE BEACH BAR" title="PEOPLE SAY NICE THINGS" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reviews.slice(0,3).map((review,index)=><Reveal key={review.name} delay={index*.1}><figure className={`h-full border-2 border-ocean-950 p-6 sticker-shadow ${index===1?"bg-gold-500":index===2?"bg-[#dfff55]":"bg-sand-50"}`}><div className="flex justify-between"><Quote className="h-8 w-8 text-ocean-500" /><div className="flex">{[...Array(review.rating)].map((_,i)=><Star key={i} className="h-3 w-3 fill-ocean-950" />)}</div></div><blockquote className="mt-7 font-display text-3xl leading-[1.02]">“{review.text}”</blockquote><figcaption className="mt-8 border-t-2 border-ocean-950 pt-4 text-[9px] font-black uppercase tracking-[.13em]">{review.name} · {review.origin}</figcaption></figure></Reveal>)}
          </div>
        </div>
      </section>

      <section className="grid border-b-2 border-ocean-950 lg:grid-cols-2">
        <div className="relative min-h-[520px] border-b-2 border-ocean-950 lg:border-b-0 lg:border-r-2"><Image src={galleryImages[7].src} alt="Limestone islands of El Nido" fill sizes="(max-width:1024px)100vw,50vw" className="object-cover" /><div className="absolute left-5 top-5 border-2 border-ocean-950 bg-[#dfff55] p-4 sticker-shadow-sm"><MapPin className="h-7 w-7" /></div></div>
        <div className="tropical-grid flex flex-col justify-center bg-gold-500 p-7 sm:p-12 lg:p-16">
          <Reveal direction="right"><p className="text-[10px] font-black uppercase tracking-[.2em]">03 / GETTING HERE</p><h2 className="mt-5 font-display text-7xl leading-[.8] sm:text-8xl">PARADISE.<br />15 MINUTES<br />FROM ELN.</h2><p className="mt-7 max-w-lg text-sm font-semibold leading-7">Fly direct from Manila to Lio Airport. We meet you with a cold buko. Fifteen minutes later: toes in sand, phone on silent.</p><Link href="/location" className="mt-8 inline-flex w-fit items-center gap-3 border-2 border-ocean-950 bg-sand-50 px-6 py-4 text-[10px] font-black uppercase tracking-[.15em] sticker-shadow-sm">PLAN THE TRIP <ArrowUpRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>

      <section className="tropical-grid bg-[#dfff55] px-5 py-20 text-center lg:py-28">
        <Reveal><p className="text-[10px] font-black uppercase tracking-[.2em] text-ocean-500">THE WATER IS RIDICULOUSLY BLUE</p><h2 className="mx-auto mt-5 max-w-6xl font-display text-[clamp(5rem,12vw,11rem)] leading-[.72] tracking-wide">COME SEE FOR YOURSELF.</h2><p className="mx-auto mt-8 max-w-xl text-sm font-semibold leading-7">Book direct for the best rate, breakfast every morning, and free airport pickup when you stay three nights or more.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/booking" className="flex items-center justify-center gap-3 border-2 border-ocean-950 bg-ocean-500 px-8 py-4 text-[10px] font-black uppercase tracking-[.15em] text-white sticker-shadow-sm">CHECK YOUR DATES <ArrowUpRight className="h-4 w-4" /></Link><Link href="/contact" className="flex items-center justify-center gap-3 border-2 border-ocean-950 bg-sand-50 px-8 py-4 text-[10px] font-black uppercase tracking-[.15em] sticker-shadow-sm">ASK US ANYTHING <ArrowDownRight className="h-4 w-4" /></Link></div></Reveal>
      </section>
    </>
  );
}
