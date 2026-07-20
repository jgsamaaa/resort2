export const site = {
  name: "Amara Ridge",
  tagline: "A mountain sanctuary above the Philippine clouds.",
  email: "stay@amararidge.ph",
  phone: "+63 917 480 2200",
  address: "Private highland estate, Cordillera Administrative Region, Philippines",
};

export const navItems = [
  ["Stays", "/stays"],
  ["Experiences", "/experiences"],
  ["Wellness", "/wellness"],
  ["Dining", "/dining"],
  ["Offers", "/offers"],
  ["Journal", "/journal"],
  ["Location", "/location"],
  ["Gallery", "/gallery"],
] as const;

export const images = {
  hero: "/images/amara/hero.webp",
  villa: "/images/amara/villa.webp",
  bedroom: "/images/amara/bedroom.webp",
  wellness: "/images/amara/wellness.webp",
  dining: "/images/amara/dining.webp",
  firepit: "/images/amara/firepit.webp",
  trail: "/images/amara/trail.webp",
  night: "/images/amara/night.webp",
};

export type Stay = {
  slug: string;
  name: string;
  eyebrow: string;
  short: string;
  description: string;
  sleeps: number;
  bestFor: string;
  amenities: string[];
  included: string[];
  highlights: string[];
  image: string;
  gallery: string[];
};

export const stays: Stay[] = [
  {
    slug: "cloudline-villa",
    name: "Cloudline Villa",
    eyebrow: "Our signature ridge stay",
    short: "Glass, stone and firelight suspended above a valley of moving cloud.",
    description: "At the highest point of Amara Ridge, this one-bedroom villa opens completely to the Cordillera horizon. A stone hearth warms slow evenings; a private deck holds the first light of morning.",
    sleeps: 2,
    bestFor: "Honeymoons and private celebrations",
    amenities: ["King bedroom", "Valley-view soaking tub", "Stone fireplace", "Private ridge deck", "Personal host"],
    included: ["Daily highland breakfast", "Evening fire service", "Guided sunrise walk", "Arrival refreshments", "Concierge planning"],
    highlights: ["Coffee above the cloudline", "Private firepit supper", "In-villa hilot ritual"],
    image: images.hero,
    gallery: [images.bedroom, images.villa, images.firepit],
  },
  {
    slug: "pine-house-suite",
    name: "Pine House Suite",
    eyebrow: "Quiet among the Benguet pines",
    short: "A generous suite wrapped in pine shadows, warm timber and mountain air.",
    description: "Set within the oldest stand of pine on the estate, Pine House pairs a calm bedroom with a glass-walled lounge and a terrace for breakfast beneath the trees.",
    sleeps: 2,
    bestFor: "Restorative weekends for two",
    amenities: ["King bedroom", "Forest terrace", "Reading lounge", "Rain shower", "Fireplace"],
    included: ["Daily breakfast", "Slow coffee service", "Forest bathing guide", "Evening turndown"],
    highlights: ["Pine-scented mornings", "Long breakfast on the terrace", "Guided digital detox"],
    image: images.bedroom,
    gallery: [images.villa, images.wellness, images.trail],
  },
  {
    slug: "terrace-hearth-villa",
    name: "Terrace Hearth Villa",
    eyebrow: "Made for evenings by the fire",
    short: "An intimate villa with a private hearth terrace facing the western valley.",
    description: "This deeply private villa is arranged around fire and view: a warm stone living room, an open terrace, and a sunset hearth prepared each evening by your host.",
    sleeps: 2,
    bestFor: "Anniversaries and slow romantic stays",
    amenities: ["Sunset terrace", "Outdoor hearth", "King bed", "Deep soaking tub", "Private dining"],
    included: ["Breakfast for two", "Daily hearth set-up", "Welcome cacao", "Private transfer coordination"],
    highlights: ["Blue-hour cocktails", "Firepit tasting dinner", "Late breakfast in villa"],
    image: images.firepit,
    gallery: [images.bedroom, images.dining, images.night],
  },
  {
    slug: "forest-bathing-cabin",
    name: "Forest Bathing Cabin",
    eyebrow: "A quieter kind of luxury",
    short: "A secluded timber cabin beside the wellness trail and spring-fed plunge pool.",
    description: "Designed for deep rest, the cabin trades screens for forest views, a warm plunge, and a sheltered deck where mist drifts between the pines.",
    sleeps: 2,
    bestFor: "Wellness stays and digital detox",
    amenities: ["Heated plunge", "Meditation deck", "Tea pantry", "No television", "Wellness minibar"],
    included: ["Daily wellness breakfast", "One guided forest ritual", "Nightly herbal tea", "Sleep menu"],
    highlights: ["Dawn breathwork", "Warm plunge in the mist", "Phone-free evenings"],
    image: images.wellness,
    gallery: [images.trail, images.bedroom, images.villa],
  },
  {
    slug: "ridge-pool-villa",
    name: "Ridge Pool Villa",
    eyebrow: "Water at the edge of the valley",
    short: "A two-bedroom villa with a heated infinity pool and uninterrupted ridge views.",
    description: "Made for friends or two couples, the Ridge Pool Villa brings both bedrooms to the view and opens onto a heated pool set against the cool highland air.",
    sleeps: 4,
    bestFor: "Friends, couples travelling together",
    amenities: ["Two king bedrooms", "Heated infinity pool", "Dining room", "Butler pantry", "Outdoor lounge"],
    included: ["Breakfast for four", "Pool heating", "Daily cocktail hour", "Dedicated host"],
    highlights: ["Pool at first light", "Private chef evening", "Stargazing from the deck"],
    image: images.villa,
    gallery: [images.hero, images.dining, images.night],
  },
  {
    slug: "family-highland-lodge",
    name: "Family Highland Lodge",
    eyebrow: "Room for everyone to exhale",
    short: "A three-bedroom mountain home with a family hearth, garden and wide valley terrace.",
    description: "The lodge keeps everyone together without feeling crowded: three private bedrooms, one generous common room, and a garden for children to explore within sight of the terrace.",
    sleeps: 6,
    bestFor: "Families and multi-generational retreats",
    amenities: ["Three bedrooms", "Family hearth", "Garden terrace", "Dining kitchen", "Children’s amenities"],
    included: ["Breakfast for six", "Family concierge", "Daily children’s activity", "Evening cocoa service"],
    highlights: ["Family trail picnic", "Private long-table dinner", "Cacao by the fire"],
    image: images.night,
    gallery: [images.villa, images.trail, images.firepit],
  },
];

export const experiences = [
  { slug: "sunrise-ridge-walk", name: "Sunrise Ridge Walk", category: "Explore", description: "Follow a pine-lined trail to the eastern ridge as first light moves across the Cordillera valleys.", image: images.trail },
  { slug: "private-firepit-dinner", name: "Private Firepit Dinner", category: "Dine", description: "A private menu of smoke, mountain herbs and local produce served beside your own open fire.", image: images.firepit },
  { slug: "highland-spa-ritual", name: "Highland Spa Ritual", category: "Restore", description: "A contemporary hilot-inspired treatment using ginger, coconut and highland botanicals.", image: images.wellness },
  { slug: "farm-to-table", name: "Filipino Farm-to-Table Tasting", category: "Dine", description: "Meet the growers behind Sulo’s menu, then taste the harvest in a private chef-led lunch.", image: images.dining },
  { slug: "valley-cultural-tour", name: "Valley Cultural Tour", category: "Culture", description: "A respectful, host-led introduction to local craft, agriculture and living highland traditions.", image: images.hero },
  { slug: "coffee-cacao", name: "Slow Coffee & Cacao Ceremony", category: "Taste", description: "Local beans, stone-ground tablea and the quiet ritual of making both slowly beside the hearth.", image: images.dining },
  { slug: "forest-bathing", name: "Forest Bathing Trail", category: "Restore", description: "A guided sensory walk through pine, fern and mist, designed to return your attention to the present.", image: images.trail },
  { slug: "stargazing", name: "Stargazing at the Ridge", category: "Night", description: "Blankets, hot cacao and a guided reading of the night sky from Amara’s highest clearing.", image: images.night },
] as const;

export const offers = [
  { slug: "cloudline-romance", name: "Cloudline Romance", bestFor: "Honeymoons and anniversaries", length: "Three nights suggested", description: "A private ridge stay shaped around firelight, slow breakfasts and one evening entirely your own.", includes: ["Cloudline Villa", "Private firepit dinner", "Couples spa ritual", "Sunrise coffee service"] },
  { slug: "wellness-weekend", name: "The Wellness Weekend", bestFor: "Deep rest and reconnection", length: "Two or three nights", description: "A restorative sequence of warm water, forest air, nourishing food and unhurried sleep.", includes: ["Forest Bathing Cabin", "Highland spa ritual", "Guided breathwork", "Wellness tasting menu"] },
  { slug: "family-highland-retreat", name: "Family Highland Retreat", bestFor: "Families of up to six", length: "Four nights suggested", description: "A mountain home, shared adventures and concierge planning that leaves parents time to slow down too.", includes: ["Family Highland Lodge", "Private family picnic", "Children’s forest activity", "Long-table dinner"] },
  { slug: "work-from-the-ridge", name: "Work From the Ridge", bestFor: "Creative and executive stays", length: "Seven nights or longer", description: "Quiet workdays above the cloudline with reliable connectivity, daily movement and every meal considered.", includes: ["Dedicated work setting", "High-speed connectivity", "Daily breakfast and lunch", "Laundry and weekly massage"] },
] as const;

export type JournalPost = { slug: string; title: string; excerpt: string; date: string; readTime: string; image: string; content: string[] };
export const journalPosts: JournalPost[] = [
  { slug: "new-luxury-philippine-highlands", title: "The New Luxury of the Philippine Highlands", excerpt: "Why cool air, considered silence and a renewed relationship with landscape now feel more valuable than excess.", date: "Field Notes · 2026", readTime: "6 min read", image: images.hero, content: ["Luxury in the highlands begins with what is absent: traffic, urgency, the constant request for attention. At Amara Ridge, the landscape is not a backdrop. It sets the pace.", "The Cordillera rewards stillness. Morning mist reveals and conceals the valley by degrees. Pine carries the scent of rain. Coffee arrives warm, grown within the same mountain system visible from the terrace.", "Our villas use local stone, deep eaves and dark timber to sit quietly within that landscape. Comfort is precise, but never louder than the place itself."] },
  { slug: "slow-weekend-above-the-clouds", title: "A Slow Weekend Above the Clouds", excerpt: "A gentle itinerary for travelers who would rather measure a weekend in meals, walks and changes of light.", date: "Itineraries · 2026", readTime: "5 min read", image: images.firepit, content: ["Arrive before dusk and let the first evening remain simple: ginger tea, a warm hearth and dinner without a dress code.", "Walk the ridge at sunrise. Return to longganisa, garlic rice, soft egg and coffee poured at the table. Leave the afternoon intentionally empty.", "On your final morning, the valley may be clear or completely held in cloud. Both are reasons to stay at breakfast a little longer."] },
  { slug: "what-to-pack-mountain-retreat", title: "What to Pack for a Cool-Weather Mountain Retreat", excerpt: "Linen for the sun, a warm layer for the mist, and very little else.", date: "Travel Notes · 2026", readTime: "4 min read", image: images.bedroom, content: ["Philippine mountain weather changes with altitude and hour. Bring light layers rather than one heavy coat: breathable clothing for walks, a knit for breakfast, and a weatherproof shell for mist.", "Shoes should be comfortable on stone and pine trail. Everything else can remain easy. Villas include umbrellas, warm wraps, bath amenities and evening slippers.", "Pack one thing you have been meaning to read. The ridge is very good at giving it back your attention."] },
  { slug: "filipino-highland-dining", title: "Why Filipino Highland Dining Belongs on Your Travel List", excerpt: "Smoke, ginger, native chicken, mountain herbs and cacao—ingredients shaped by elevation and memory.", date: "At the Table · 2026", readTime: "7 min read", image: images.dining, content: ["Highland food is built for cool mornings and shared tables. It is warming without heaviness, direct in flavor and deeply connected to farmers, smoke and season.", "At Sulo, native chicken broth is clarified but not stripped of its ginger warmth. Mountain vegetables meet coconut vinaigrette. Tablea becomes a dark tart served beside local coffee.", "The point is not to make familiar food unrecognizable. It is to give each ingredient enough care to speak clearly."] },
];

export const galleryImages = [
  { src: images.hero, category: "Landscape", alt: "Amara Ridge above a mist-filled Cordillera valley" },
  { src: images.villa, category: "Villas", alt: "A private stone and timber villa among Benguet pines" },
  { src: images.bedroom, category: "Villas", alt: "Linen bedroom looking across the Philippine highlands" },
  { src: images.wellness, category: "Wellness", alt: "Open-air highland wellness pavilion" },
  { src: images.dining, category: "Dining", alt: "Filipino highland fine dining at Sulo" },
  { src: images.firepit, category: "Dining", alt: "Private firepit dinner above the valley" },
  { src: images.trail, category: "Experiences", alt: "Sunrise ridge walk in the Cordillera" },
  { src: images.night, category: "Landscape", alt: "Amara Ridge glowing among pines at night" },
  { src: images.villa, category: "Landscape", alt: "Mist moving through the pine forest" },
  { src: images.wellness, category: "Experiences", alt: "Warm plunge and native botanicals" },
] as const;
