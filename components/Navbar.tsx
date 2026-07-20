"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["STAYS", "/rooms"],
  ["OUR PLACE", "/about"],
  ["GET HERE", "/location"],
  ["SAY HELLO", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${scrolled ? "shadow-[0_4px_0_#0a1433]" : ""}`}>
      <div className="overflow-hidden bg-ocean-500 py-2 text-sand-50">
        <div className="animate-ticker flex w-max whitespace-nowrap text-[9px] font-bold uppercase tracking-[.24em]">
          {[...Array(2)].map((_, group) => (
            <span key={group} className="flex">
              {["PALAWAN, PHILIPPINES", "BEST RATE DIRECT", "BREAKFAST INCLUDED", "AIRPORT PICKUP ON 3+ NIGHTS"].map((item) => (
                <span key={`${group}-${item}`} className="mx-7">✦ {item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <nav className="flex h-[68px] items-stretch border-b-2 border-ocean-950 bg-sand-50">
        <Link href="/" className="flex items-center border-r-2 border-ocean-950 px-5 sm:px-7" aria-label="Dalisay Cove home">
          <span className="font-display text-3xl tracking-wide text-ocean-500 sm:text-4xl">DALISAY!</span>
        </Link>

        <ul className="ml-auto hidden items-stretch lg:flex">
          {links.map(([label, href]) => (
            <li key={href} className="flex">
              <Link
                href={href}
                className={`flex items-center border-l-2 border-ocean-950 px-7 text-[11px] font-black tracking-[.12em] transition-colors hover:bg-[#dfff55] ${pathname === href ? "bg-[#dfff55]" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="flex">
            <Link href="/booking" className="flex items-center gap-2 border-l-2 border-ocean-950 bg-gold-500 px-8 text-[11px] font-black tracking-[.12em] transition-colors hover:bg-[#dfff55]">
              BOOK IT <ArrowUpRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="ml-auto flex w-[68px] items-center justify-center border-l-2 border-ocean-950 bg-[#dfff55] lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <div className={`overflow-hidden border-b-2 border-ocean-950 bg-gold-500 transition-[max-height] duration-500 lg:hidden ${open ? "max-h-[580px]" : "max-h-0 border-b-0"}`}>
        <ul>
          {[["HOME", "/"], ...links].map(([label, href], index) => (
            <li key={href} className="border-b-2 border-ocean-950 last:border-0">
              <Link href={href} onClick={() => setOpen(false)} className="flex items-center justify-between px-5 py-4 font-display text-4xl tracking-wide text-ocean-950">
                <span><span className="mr-4 font-sans text-[10px] font-bold">0{index + 1}</span>{label}</span>
                <ArrowUpRight />
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/booking" onClick={() => setOpen(false)} className="m-4 flex items-center justify-between border-2 border-ocean-950 bg-[#dfff55] p-4 font-black uppercase sticker-shadow-sm">
          Check your dates <ArrowUpRight />
        </Link>
      </div>
    </header>
  );
}
