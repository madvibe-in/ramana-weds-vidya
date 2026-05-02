import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  CalendarClock,
  Car,
  Clock,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Utensils
} from "lucide-react";

export type Accent = "sage" | "lavender" | "champagne" | "blush" | "plum";

export type EventCard = {
  label: string;
  name: string;
  date: string;
  location: string;
  description: string;
  detail: string;
  Icon: LucideIcon;
  accent: Accent;
};

export type InfoPill = {
  Icon: LucideIcon;
  text: string;
};

export type Person = {
  role: string;
  name: string;
  tagline: string;
  description: string;
  favorites: string[];
  signature: string;
  accent: "blush" | "lavender";
  image: string;
  alt: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type TravelRow = {
  Icon: LucideIcon;
  text: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  detail: string;
  Icon: LucideIcon;
};

export const wedding = {
  couple: "Ramana & Vidhya",
  brideFirst: "Vidhya",
  groomFirst: "Ramana",
  brideFull: "Vidhya",
  groomFull: "Venkataramana Chari",
  date: "May 8, 2026",
  datePill: "08 / 05 / 2026",
  dateLong: "Friday, the Eighth of May, Two Thousand and Twenty-Six",
  day: "Friday",
  muhurthamTime: "10:35 AM",
  venue: "Vempally Gadi",
  city: "Mallapur, Jagitial",
  venueLine: "Vempally Gadi, Mallapur, Jagitial",
  venueCoordinates: "18.973448,78.781647",
  targetDate: "2026-05-08T10:35:00+05:30",
  rsvpDeadline: "May 5, 2026",
  email: "ramanavidhya2026@gmail.com",
  phone: "+919550840834",
  contactPhones: ["9550840834", "8500470834"],
  heroImage: "/app-icon.png",
  venueImage: "/app-icon.png",
  mapEmbed:
    "https://www.google.com/maps?q=18.973448,78.781647%20%28Vempally%20Gadi%2C%20Mallapur%2C%20Jagitial%29&output=embed",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=18.973448%2C78.781647&travelmode=driving"
} as const;

export const navItems = [
  { label: "Countdown", href: "#countdown" },
  { label: "Details", href: "#details" },
  { label: "Venue", href: "#venue" }
] as const;

export const eventCards: EventCard[] = [
  {
    label: "MARRIAGE",
    name: "Sumuhurtham",
    date: "May 8, 10:35 AM",
    location: "Vempally Gadi, Mallapur, Jagitial",
    description: "The marriage of Ramana and Vidhya",
    detail: "Wedding ceremony followed by lunch",
    Icon: Heart,
    accent: "blush"
  },
  {
    label: "VINDU",
    name: "Lunch & Reception",
    date: "After the wedding ceremony",
    location: "Vempally Gadi, Mallapur, Jagitial",
    description: "Lunch and reception follow the muhurtham at the venue",
    detail: "Family greetings with wedding lunch",
    Icon: Utensils,
    accent: "plum"
  }
];

export const infoPills: InfoPill[] = [
  {
    Icon: CalendarClock,
    text: "Wedding on Friday, May 8, 2026"
  },
  {
    Icon: BedDouble,
    text: "Contact the family for travel and stay guidance"
  }
];

export const people: Person[] = [
  {
    role: "Groom",
    name: "Venkataramana Chari",
    tagline: "Ramana",
    description:
      "Venkataramana Chari, lovingly called Ramana, begins this new chapter with the blessings of family and friends.",
    favorites: ["Family", "Tradition", "Celebration"],
    signature: "Ramana",
    accent: "lavender",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    alt: "Groom portrait in a tailored suit with a warm smile"
  },
  {
    role: "Bride",
    name: "Vidhya",
    tagline: "The Bride",
    description:
      "Vidhya is welcomed into this joyful union with warm wishes, family blessings, and a celebration of togetherness.",
    favorites: ["Blessings", "Family", "Tradition"],
    signature: "Vidhya",
    accent: "blush",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800",
    alt: "Bride in elegant traditional attire with soft natural light"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
    alt: "Couple embracing in a romantic outdoor wedding setting"
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600",
    alt: "Wedding couple walking through soft natural light"
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600",
    alt: "Elegant bridal details with flowers"
  },
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600",
    alt: "Couple holding hands during a wedding celebration"
  },
  {
    src: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600",
    alt: "Groom and bride in a softly lit portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600",
    alt: "Wedding couple laughing together outdoors"
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600",
    alt: "Romantic wedding couple portrait near a ceremony arch"
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600",
    alt: "Wedding reception table with candles and florals"
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600",
    alt: "Groom and bride walking through a garden path"
  },
  {
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600",
    alt: "Wedding celebration details with soft champagne tones"
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600",
    alt: "Outdoor wedding ceremony surrounded by guests"
  },
  {
    src: "https://images.unsplash.com/photo-1444171595173-93f25b4b6bc9?w=600",
    alt: "Wedding couple in a cinematic landscape portrait"
  }
];

export const weddingDayTimeline: ScheduleItem[] = [
  {
    time: "10:35 AM",
    title: "Marriage",
    detail: "Sumuhurtham and wedding ceremony.",
    Icon: Heart
  },
  {
    time: "After ceremony",
    title: "Lunch & Reception Follows",
    detail: "Lunch and reception begin after the marriage ceremony at the same venue.",
    Icon: Utensils
  }
];

export const travelRows: TravelRow[] = [
  {
    Icon: Car,
    text: "Open Google Maps for driving directions to the venue"
  }
];

export const venueAddress = [
  "Mallapur, Jagitial"
] as const;

export const footerLinks = [
  {
    label: "Call 9550840834",
    href: `tel:${wedding.phone}`,
    Icon: Phone
  }
] as const;

export const venueIcons = {
  Clock,
  MapPin,
  Navigation
};
