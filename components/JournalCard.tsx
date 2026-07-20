import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { JournalPost } from "@/lib/amara-data";

export default function JournalCard({ post }: { post: JournalPost }) {
  return <article className="group"><Link href={`/journal/${post.slug}`} className="relative block aspect-[4/3] overflow-hidden"><Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" /></Link><p className="mt-5 text-[9px] font-bold uppercase tracking-[.18em] text-clay">{post.date} · {post.readTime}</p><h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl"><Link href={`/journal/${post.slug}`}>{post.title}</Link></h2><p className="mt-3 text-sm leading-6 text-pine-black/60">{post.excerpt}</p><Link href={`/journal/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.17em]">Read the story <ArrowUpRight className="h-4 w-4" /></Link></article>;
}
