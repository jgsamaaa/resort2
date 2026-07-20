"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function MobileBookingBar() {
  const pathname = usePathname();
  if (pathname === "/booking") return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between rounded-full border border-white/15 bg-ocean-950/95 py-2 pl-5 pr-2 text-sand-50 shadow-2xl backdrop-blur-xl md:hidden">
      <div>
        <p className="text-[9px] uppercase tracking-[0.2em] text-sand-200/60">Direct rate</p>
        <p className="text-sm">From ₱6,500 / night</p>
      </div>
      <Link
        href="/booking"
        className="flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ocean-950"
      >
        Book
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
