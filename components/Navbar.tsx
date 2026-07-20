"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Shell, X } from "lucide-react";
import { site } from "@/lib/data";

const links = [
  { href: "/rooms", label: "Stay" },
  { href: "/about", label: "Our story" },
  { href: "/location", label: "Find us" },
  { href: "/contact", label: "Inquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-white/10 bg-ocean-950/95 shadow-lg shadow-ocean-950/10 backdrop-blur-xl"
          : "bg-gradient-to-b from-ocean-950/70 via-ocean-950/20 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" aria-label="Dalisay Cove home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/45 transition-colors group-hover:bg-gold-500">
            <Shell
              className="h-5 w-5 text-gold-300 transition-colors group-hover:text-ocean-950"
              strokeWidth={1.35}
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[1.65rem] font-medium tracking-wide text-sand-50">
              {site.name}
            </span>
            <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.34em] text-sand-200/65">
              El Nido · Palawan
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`relative py-3 text-[11px] font-semibold uppercase tracking-[0.19em] transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:bg-gold-300 after:transition-transform ${
                  pathname === link.href
                    ? "text-gold-300 after:scale-x-100"
                    : "text-sand-100 after:scale-x-0 hover:text-gold-300 hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sand-100/70 transition-colors hover:text-gold-300"
          >
            {site.phone}
          </a>
          <Link
            href="/booking"
            className="group flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ocean-950 transition-all hover:bg-gold-300 hover:shadow-xl hover:shadow-black/10"
          >
            Book direct
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-sand-50 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-ocean-950 transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[34rem]" : "max-h-0 border-transparent"
        }`}
      >
        <div className="px-5 py-6">
          <ul className="divide-y divide-white/10">
            {[{ href: "/", label: "Home" }, ...links].map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-2xl text-sand-50"
                >
                  <span><span className="mr-4 text-xs text-gold-400">0{index + 1}</span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-gold-400" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ocean-950"
          >
            Check availability
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
