import Image from "next/image";

export default function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy?: string; image: string }) {
  return (
    <section className="paper-grain relative flex min-h-[66vh] items-end overflow-hidden bg-pine-black px-5 pb-16 pt-32 text-soft-white lg:px-10 lg:pb-24">
      <Image src={image} alt="" fill priority className="hero-breathe object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-black via-pine-black/30 to-pine-black/35" />
      <div className="relative mx-auto w-full max-w-[94rem]">
        <p className="eyebrow text-ember">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-balance font-display text-[clamp(4rem,9vw,8.5rem)] leading-[.82]">{title}</h1>
        {copy && <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{copy}</p>}
      </div>
    </section>
  );
}
