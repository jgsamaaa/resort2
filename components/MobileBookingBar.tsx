"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function MobileBookingBar() {
  const pathname = usePathname();
  if (pathname === "/booking") return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between border-2 border-ocean-950 bg-sand-50 py-2 pl-4 pr-2 text-ocean-950 sticker-shadow-sm md:hidden">
      <div>
        <p className="text-[8px] font-black uppercase tracking-[0.2em] text-ocean-500">Direct rate</p>
        <p className="text-xs font-bold">FROM ₱6,500 / NIGHT</p>
      </div>
      <Link
        href="/booking"
        className="flex items-center gap-2 border-2 border-ocean-950 bg-gold-500 px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-ocean-950"
      >
        Book
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
