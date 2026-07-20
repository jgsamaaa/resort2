import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="grid min-h-[650px] border-b-2 border-ocean-950 pt-[100px] lg:grid-cols-2">
      <div className="tropical-grid flex flex-col justify-end bg-ocean-500 px-5 pb-14 pt-20 text-sand-50 sm:px-10 lg:px-14 lg:pb-20">
        <Reveal>
          <p className="inline-flex border-2 border-ocean-950 bg-[#dfff55] px-3 py-2 text-[9px] font-black uppercase tracking-[.18em] text-ocean-950 sticker-shadow-sm">
            {eyebrow}
          </p>
          <h1 className="mt-7 max-w-3xl text-balance font-display text-[clamp(4.5rem,9vw,8rem)] leading-[.78] tracking-[.01em]">
            {title}
          </h1>
          {subtitle && <p className="mt-7 max-w-xl border-l-4 border-[#dfff55] pl-5 text-sm font-medium leading-7 text-white/80 sm:text-base">{subtitle}</p>}
        </Reveal>
      </div>
      <div className="relative min-h-[430px] border-t-2 border-ocean-950 lg:min-h-full lg:border-l-2 lg:border-t-0">
        <Image src={image} alt={title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        <div className="absolute bottom-5 right-5 flex h-20 w-20 items-center justify-center border-2 border-ocean-950 bg-gold-500 sticker-shadow-sm">
          <ArrowDownRight className="h-8 w-8" strokeWidth={2.5} />
        </div>
      </div>
    </section>
  );
}
