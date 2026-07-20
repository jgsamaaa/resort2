"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryImages } from "@/lib/amara-data";

const categories = ["All", ...Array.from(new Set(galleryImages.map((item) => item.category)))];

export default function GalleryGrid() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryImages)[number] | null>(null);
  const filtered = category === "All" ? galleryImages : galleryImages.filter((item) => item.category === category);
  return <><div className="mb-10 flex flex-wrap justify-center gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`border px-5 py-3 text-[9px] font-bold uppercase tracking-[.18em] transition-colors ${category === item ? "border-pine-black bg-pine-black text-white" : "border-pine-black/20 hover:border-pine-black"}`}>{item}</button>)}</div><div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[300px]">{filtered.map((item, index) => <button key={`${item.alt}-${index}`} onClick={() => setSelected(item)} className={`group relative overflow-hidden text-left ${index % 5 === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`} aria-label={`Open ${item.alt}`}><Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /><span className="absolute inset-0 bg-pine-black/0 transition-colors group-hover:bg-pine-black/25" /><span className="absolute bottom-4 left-4 translate-y-4 text-[9px] font-bold uppercase tracking-[.18em] text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">{item.category}</span></button>)}</div>{selected && <div className="fixed inset-0 z-[80] grid place-items-center bg-pine-black/95 p-4" role="dialog" aria-modal="true" aria-label={selected.alt}><button onClick={() => setSelected(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center border border-white/30 text-white" aria-label="Close image"><X /></button><div className="relative h-[78vh] w-full max-w-6xl"><Image src={selected.src} alt={selected.alt} fill className="object-contain" sizes="100vw" /></div><p className="absolute bottom-5 px-5 text-center text-xs uppercase tracking-[.15em] text-white/70">{selected.alt}</p></div>}</>;
}
