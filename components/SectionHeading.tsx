import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
        <p className={`text-[10px] font-black uppercase tracking-[.2em] ${light ? "text-[#dfff55]" : "text-ocean-500"}`}>✦ {eyebrow}</p>
        <h2 className={`mt-4 text-balance font-display text-5xl leading-[.86] tracking-wide sm:text-7xl lg:text-8xl ${light ? "text-sand-50" : "text-ocean-950"}`}>{title}</h2>
        {subtitle && <p className={`mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 sm:text-base ${light ? "text-sand-50/70" : "text-ocean-950/65"}`}>{subtitle}</p>}
      </div>
    </Reveal>
  );
}
