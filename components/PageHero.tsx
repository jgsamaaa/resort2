import Image from "next/image";
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
    <section className="grain relative flex h-[68vh] min-h-[460px] items-end overflow-hidden bg-ocean-950">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="animate-kenburns object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/95 via-ocean-950/25 to-ocean-950/45" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
        <Reveal>
          <p className="eyebrow-line mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-300">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-balance font-display text-5xl leading-[.95] text-sand-50 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-sand-100/80 sm:text-base">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
