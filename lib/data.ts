const img = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const site = {
  name: "Dalisay Cove",
  fullName: "Dalisay Cove Beach Resort & Villas",
  tagline: "Where the island breathes",
  location: "Lio Beach, El Nido, Palawan, Philippines",
  phone: "+63 917 555 0148",
  landline: "+63 (48) 723 0148",
  email: "stay@dalisaycove.ph",
  whatsapp: "+63 917 555 0148",
  address: "Sitio Lio, Barangay Villa Libertad, El Nido, Palawan 5313, Philippines",
  facebook: "facebook.com/dalisaycove",
  instagram: "@dalisaycove",
  hours: "Front desk open 24/7 · Reservations 8:00 AM – 8:00 PM (GMT+8)",
  mapEmbed:
    "https://www.google.com/maps?q=Lio+Beach,+El+Nido,+Palawan,+Philippines&z=12&output=embed",
};

export const heroImages = {
  home: "/images/dalisay-hero.webp",
  rooms: img("1582719508461-905c673771fd", 2200),
  about: img("1519046904884-53103b34b206", 2200),
  location: img("1518509562904-e7ef99cdcc86", 2200),
  booking: img("1540541338287-41700207dee6", 2200),
  contact: img("1510414842594-a61c69b5ae57", 2200),
};

export type Room = {
  slug: string;
  name: string;
  kind: "Room" | "Suite" | "Villa";
  shortDescription: string;
  description: string;
  pricePHP: number;
  priceUSD: number;
  size: string;
  guests: number;
  bed: string;
  view: string;
  image: string;
  features: string[];
};

export const rooms: Room[] = [
  {
    slug: "garden-bungalow",
    name: "Garden Bungalow",
    kind: "Room",
    shortDescription:
      "A native-inspired hideaway wrapped in frangipani and palms, steps from the shore.",
    description:
      "Built with warm narra wood and woven sawali accents, the Garden Bungalow blends traditional Filipino craftsmanship with quiet modern comfort. Wake to birdsong, sip barako coffee on your private veranda, and let the sea breeze drift through.",
    pricePHP: 6500,
    priceUSD: 115,
    size: "32 sqm",
    guests: 2,
    bed: "1 Queen bed",
    view: "Tropical garden",
    image: img("1590490360182-c33d57733427"),
    features: [
      "Private veranda with hammock",
      "Rain shower with organic amenities",
      "Air-conditioning + ceiling fan",
      "Daily breakfast for two",
    ],
  },
  {
    slug: "deluxe-ocean-room",
    name: "Deluxe Ocean Room",
    kind: "Room",
    shortDescription:
      "Floor-to-ceiling views of Bacuit Bay from a king bed you will not want to leave.",
    description:
      "Every sunrise performs just for you. The Deluxe Ocean Room pairs a plush king bed with a picture window over the bay, a deep soaking tub, and a balcony made for slow mornings and mango shakes.",
    pricePHP: 8900,
    priceUSD: 157,
    size: "38 sqm",
    guests: 2,
    bed: "1 King bed",
    view: "Bacuit Bay",
    image: img("1611892440504-42a792e24d32"),
    features: [
      "Ocean-view balcony",
      "Deep soaking tub",
      "Smart TV + high-speed Wi-Fi",
      "Daily breakfast for two",
    ],
  },
  {
    slug: "beachfront-suite",
    name: "Beachfront Suite",
    kind: "Suite",
    shortDescription:
      "Zero steps between your terrace and the sand. Our most-loved stay.",
    description:
      "Slide the doors open and the beach is your living room. The Beachfront Suite offers a separate lounge, an outdoor daybed for two, and front-row seats to El Nido's famous tangerine sunsets.",
    pricePHP: 12500,
    priceUSD: 220,
    size: "52 sqm",
    guests: 3,
    bed: "1 King bed + daybed",
    view: "Direct beachfront",
    image: img("1583417319070-4a69db38a482"),
    features: [
      "Direct beach access",
      "Outdoor sunset daybed",
      "Separate lounge area",
      "Evening turndown with local sweets",
    ],
  },
  {
    slug: "family-loft",
    name: "Family Loft",
    kind: "Suite",
    shortDescription:
      "Two storeys of space for the whole barkada — sleeps five in breezy comfort.",
    description:
      "Downstairs, a king bed and living space; upstairs, a loft the kids will fight over. The Family Loft keeps everyone together without anyone feeling squeezed, with a wide balcony overlooking the pool and the sea beyond.",
    pricePHP: 10900,
    priceUSD: 192,
    size: "64 sqm",
    guests: 5,
    bed: "1 King + 3 singles (loft)",
    view: "Pool & partial sea",
    image: img("1566073771259-6a8506099945"),
    features: [
      "Two-storey loft layout",
      "Kid-friendly amenities",
      "Wide pool-view balcony",
      "Daily breakfast for four",
    ],
  },
  {
    slug: "villa-dalisay",
    name: "Villa Dalisay",
    kind: "Villa",
    shortDescription:
      "The crown of the cove — a two-bedroom pool villa with its own slice of ocean.",
    description:
      "Our signature villa sits on the quiet northern tip of the cove: two bedrooms, an infinity plunge pool that melts into the horizon, a private chef on request, and a dedicated villa host. Honeymoons, milestones, or simply because — Villa Dalisay is the memory you keep.",
    pricePHP: 24000,
    priceUSD: 423,
    size: "140 sqm + pool deck",
    guests: 4,
    bed: "2 King bedrooms",
    view: "Panoramic ocean, private pool",
    image: img("1571896349842-33c89424de2d"),
    features: [
      "Private infinity plunge pool",
      "Dedicated villa host",
      "Private chef on request",
      "Sunset cocktail set-up included",
    ],
  },
];

export type Review = {
  name: string;
  origin: string;
  rating: number;
  date: string;
  title: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Maria Santos",
    origin: "Manila, Philippines",
    rating: 5,
    date: "June 2026",
    title: "Sobrang ganda — better than the photos",
    text: "We stayed three nights in the Beachfront Suite and honestly did not want to leave. The staff remembered our names by day one, the halo-halo by the pool is dangerous, and the sunset... iba talaga. Booking again for our anniversary.",
  },
  {
    name: "James & Olivia Carter",
    origin: "Sydney, Australia",
    rating: 5,
    date: "May 2026",
    title: "The best resort we've stayed at in Asia",
    text: "We've done Bali, Phuket and the Maldives — Dalisay Cove beat them all on warmth alone. Villa Dalisay's plunge pool at sunrise is something else. The island-hopping tour the resort arranged was the highlight of our year.",
  },
  {
    name: "Ji-woo Park",
    origin: "Seoul, South Korea",
    rating: 5,
    date: "April 2026",
    title: "Perfect honeymoon 💛",
    text: "Everything was effortless. Airport pickup was waiting, flower petals in the room, and the private chef dinner on the beach made my wife cry (happy tears!). El Nido is paradise and this is the best seat in it.",
  },
  {
    name: "Lena Hoffmann",
    origin: "Berlin, Germany",
    rating: 4,
    date: "March 2026",
    title: "Stunning, peaceful, real",
    text: "Not a mega-resort — and that is exactly the point. It feels personal and rooted in the community. Kayaked straight off the beach in the morning, massage in the garden pavilion in the afternoon. Wi-Fi was solid enough to work a little, sadly.",
  },
  {
    name: "Daniel Reyes",
    origin: "San Diego, USA",
    rating: 5,
    date: "February 2026",
    title: "Brought my mom back to Palawan",
    text: "First trip home in 15 years and I wanted it to be special. The team went above and beyond — they even prepared her favorite kinilaw without us asking twice. My mom said it felt like the Palawan of her childhood, but with better pillows.",
  },
  {
    name: "Sophie Tan",
    origin: "Singapore",
    rating: 5,
    date: "January 2026",
    title: "Weekend escape done right",
    text: "90 minutes from the airstrip to a mango shake on my balcony. The Deluxe Ocean Room is immaculate, breakfast is generous, and the staff's 'no problem, ma'am' energy is unmatched. Already told my whole office.",
  },
  {
    name: "Tom Whitfield",
    origin: "London, UK",
    rating: 5,
    date: "December 2025",
    title: "Worth every mile of the journey",
    text: "Yes, it takes a couple of flights to get here. Then you wade into water so clear it looks rendered, someone hands you a fresh buko, and the jet lag evaporates. The Family Loft handled our three kids with room to spare.",
  },
];

export const amenities = [
  {
    title: "Infinity Pool",
    description: "A 25-metre edge that dissolves into Bacuit Bay, ringed by daybeds and palms.",
    image: img("1540541338287-41700207dee6", 1200),
  },
  {
    title: "Kubo Spa",
    description: "Hilot massage and coconut rituals in open-air garden pavilions.",
    image: img("1544161515-4ab6ce6db874", 1200),
  },
  {
    title: "Talahib Restaurant",
    description: "Modern Filipino cooking — day-boat catch, wood-fire, and heirloom rice.",
    image: img("1414235077428-338989a2e8c0", 1200),
  },
  {
    title: "Island Hopping",
    description: "Private lagoon tours A–D with our own bangka boats and guides.",
    image: img("1544551763-46a013bb70d5", 1200),
  },
  {
    title: "Beach Bar",
    description: "Barefoot cocktails, local rum, and front-row sunsets every evening.",
    image: img("1559339352-11d035aa65de", 1200),
  },
  {
    title: "Water Sports",
    description: "Kayaks, paddleboards and snorkel gear — free for every guest, every day.",
    image: img("1573790387438-4da905039392", 1200),
  },
];

export const galleryImages = [
  { src: img("1506929562872-bb421503ef21", 1200), alt: "White sand beach at Dalisay Cove" },
  { src: img("1573843981267-be1999ff37cd", 1200), alt: "Island viewpoint over turquoise water" },
  { src: img("1520250497591-112f2f40a3f4", 1200), alt: "Resort pool at golden hour" },
  { src: img("1540202404-a2f29016b523", 1200), alt: "Floating breakfast tray" },
  { src: img("1468413253725-0d5181091126", 1200), alt: "Sunset over Bacuit Bay" },
  { src: img("1600334129128-685c5582fd35", 1200), alt: "Spa treatment in the garden pavilion" },
  { src: img("1582610116397-edb318620f90", 1200), alt: "Poolside loungers under palms" },
  { src: img("1559128010-7c1ad6e1b6a5", 1200), alt: "Limestone cliffs of El Nido" },
];
