import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/BrandIcons";
import { heroImages, site } from "@/lib/data";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Reach Dalisay Cove by phone, email, WhatsApp or the inquiry form. Reservations answer daily, 8 AM to 8 PM Philippine time.",
};

const channels = [
  {
    icon: Phone,
    title: "Call or text",
    lines: [site.phone, site.landline],
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: "Reservations 8 AM – 8 PM (GMT+8)",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp / Viber",
    lines: [site.whatsapp],
    href: "https://wa.me/639175550148",
    note: "Fastest reply — usually within the hour",
  },
  {
    icon: Mail,
    title: "Email",
    lines: [site.email],
    href: `mailto:${site.email}`,
    note: "Answered within 24 hours, every day",
  },
  {
    icon: MapPin,
    title: "Visit",
    lines: [site.address],
    href: "/location",
    note: "Walk-ins welcome for lunch & tours",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={heroImages.contact}
        eyebrow="Contact Us"
        title="Say hello to the cove"
        subtitle="Real humans, island time zone, remarkably fast replies."
      />

      <section className="tropical-grid bg-[#dfff55] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-5 lg:px-8">
          <div className="space-y-5 lg:col-span-2">
            {channels.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 0.08}>
                <div className="flex gap-5 border-2 border-ocean-950 bg-white p-6 sticker-shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ocean-950 bg-gold-500">
                    <channel.icon className="h-5 w-5 text-ocean-700" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-ocean-950">
                      {channel.title}
                    </h3>
                    {channel.lines.map((line) => (
                      <a
                        key={line}
                        href={channel.href}
                        className="mt-1 block text-sm text-ocean-900/80 transition-colors hover:text-gold-600"
                      >
                        {line}
                      </a>
                    ))}
                    <p className="mt-1.5 text-xs text-ocean-900/50">
                      {channel.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.35}>
              <div className="border-2 border-ocean-950 bg-ocean-500 p-6 text-sand-100 sticker-shadow-sm">
                <h3 className="font-display text-lg text-gold-300">
                  Follow the cove
                </h3>
                <div className="mt-4 space-y-2.5 text-sm">
                  <p className="flex items-center gap-3">
                    <FacebookIcon className="h-4 w-4 text-gold-400" />
                    {site.facebook}
                  </p>
                  <p className="flex items-center gap-3">
                    <InstagramIcon className="h-4 w-4 text-gold-400" />
                    {site.instagram}
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-gold-400" />
                    {site.hours}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" className="lg:col-span-3">
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
