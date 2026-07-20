"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Mountain, X } from "lucide-react";
import { navItems } from "@/lib/amara-data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-pine-black/95 shadow-xl backdrop-blur-xl" : "bg-gradient-to-b from-pine-black/70 to-transparent"}`}>
      <nav className="mx-auto flex h-20 max-w-[100rem] items-center px-5 lg:h-24 lg:px-10">
        <Link href="/" className="group flex items-center gap-3 text-soft-white" aria-label="Amara Ridge home">
          <Mountain className="h-7 w-7 stroke-[1.25] text-ember transition-transform group-hover:-translate-y-1" />
          <span>
            <span className="block font-display text-2xl font-semibold leading-none tracking-[.12em] lg:text-3xl">AMARA RIDGE</span>
            <span className="mt-1 hidden text-[8px] uppercase tracking-[.32em] text-soft-white/55 sm:block">Philippine Highlands</span>
          </span>
        </Link>

        <ul className="ml-auto hidden items-center gap-5 xl:flex 2xl:gap-7">
          {navItems.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className={`text-[10px] font-semibold uppercase tracking-[.14em] transition-colors hover:text-ember ${pathname.startsWith(href) ? "text-ember" : "text-soft-white/78"}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/booking" className="ml-auto hidden items-center gap-2 border border-ember bg-ember px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] text-pine-black transition-colors hover:bg-soft-white xl:ml-8 xl:inline-flex">
          Reserve <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        <button onClick={() => setOpen((value) => !value)} className="ml-auto grid h-11 w-11 place-items-center border border-soft-white/25 text-soft-white xl:hidden" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={`overflow-hidden bg-pine-black transition-[max-height] duration-500 xl:hidden ${open ? "max-h-[calc(100vh-5rem)] border-t border-white/10" : "max-h-0"}`}>
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-5 py-8">
          <ul className="grid sm:grid-cols-2">
            {[["Home", "/"], ...navItems].map(([label, href], index) => (
              <li key={href} className="border-b border-white/10 sm:odd:border-r">
                <Link href={href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 sm:px-5">
                  <span className="font-display text-3xl text-soft-white"><small className="mr-3 font-sans text-[9px] text-ember">0{index + 1}</small>{label}</span>
                  <ArrowUpRight className="h-4 w-4 text-ember" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/booking" onClick={() => setOpen(false)} className="mt-6 flex items-center justify-between bg-ember px-5 py-4 text-xs font-bold uppercase tracking-[.16em] text-pine-black">Reserve your stay <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </header>
  );
}
