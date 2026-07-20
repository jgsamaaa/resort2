import Reveal from "@/components/Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }: { eyebrow: string; title: string; subtitle?: string; align?: "center" | "left"; light?: boolean }) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
        <p className={`eyebrow ${light ? "text-ember" : "text-clay"}`}>{eyebrow}</p>
        <h2 className={`mt-5 text-balance font-display text-5xl leading-[.94] sm:text-6xl lg:text-7xl ${light ? "text-soft-white" : "text-pine-black"}`}>{title}</h2>
        {subtitle && <p className={`mt-6 max-w-2xl text-sm leading-7 sm:text-base ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/58" : "text-pine-black/60"}`}>{subtitle}</p>}
      </div>
    </Reveal>
  );
}
