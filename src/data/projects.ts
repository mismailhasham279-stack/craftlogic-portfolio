import type { LucideIcon } from "lucide-react";
import {
  Layout,
  ShoppingBag,
  Sparkles,
  MessageCircle,
  Search,
  CalendarCheck,
  Images,
  Truck,
  HelpCircle,
  Smartphone,
  Tag,
  ClipboardList,
  Mail,
  BookOpen,
} from "lucide-react";

import luxeviaDesktop from "@/assets/projects/luxevia-desktop.jpg.asset.json";
import luxeviaDesktop2 from "@/assets/projects/luxevia-desktop-2.jpg.asset.json";
import luxeviaMobile from "@/assets/projects/luxevia-mobile.jpg.asset.json";
import luxeviaMobile2 from "@/assets/projects/luxevia-mobile-2.jpg.asset.json";
import usaluxeDesktop from "@/assets/projects/usaluxe-desktop.jpg.asset.json";
import usaluxeDesktop2 from "@/assets/projects/usaluxe-desktop-2.jpg.asset.json";
import usaluxeMobile from "@/assets/projects/usaluxe-mobile.jpg.asset.json";
import usaluxeMobile2 from "@/assets/projects/usaluxe-mobile-2.jpg.asset.json";
import graceDesktop from "@/assets/projects/nailsbygrace-desktop.jpg.asset.json";
import graceDesktop2 from "@/assets/projects/nailsbygrace-desktop-2.jpg.asset.json";
import graceMobile from "@/assets/projects/nailsbygrace-mobile.jpg.asset.json";
import graceMobile2 from "@/assets/projects/nailsbygrace-mobile-2.jpg.asset.json";
import shoptopDesktop from "@/assets/projects/shoptop-desktop.jpg.asset.json";
import shoptopDesktop2 from "@/assets/projects/shoptop-desktop-2.jpg.asset.json";
import shoptopMobile from "@/assets/projects/shoptop-mobile.jpg.asset.json";
import shoptopMobile2 from "@/assets/projects/shoptop-mobile-2.jpg.asset.json";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  device: "desktop" | "mobile";
};

export type AnatomyItem = {
  id: string;
  label: string;
  copy: string;
  view: "desktop" | "desktop2" | "mobile";
  /** Highlight rectangle in % of the screenshot. */
  rect: { top: number; left: number; width: number; height: number };
};

export type Project = {
  id: string;
  slug: string;
  index: string;
  name: string;
  category: string;
  description: string;
  businessChallenge: string;
  solution: string;
  businessValue: string[];
  liveUrl: string;
  thumbnail: string;
  heroImage: string;
  mobileImage: string;
  gallery: GalleryImage[];
  features: { icon: LucideIcon; title: string; copy: string }[];
  technologies: string[];
  projectType: string;
  services: string[];
  status: "live";
  anatomy: AnatomyItem[];
};

export const projects: Project[] = [
  {
    id: "luxevia",
    slug: "luxevia-purse",
    index: "01",
    name: "Luxevia Purse",
    category: "Luxury E-Commerce / Fashion",
    description:
      "A premium digital shopping experience created around luxury fashion, curated products and refined editorial presentation.",
    businessChallenge:
      "A luxury fashion catalogue needs more than a product list. Handbags, watches, footwear and accessories have to be presented with the same care as the products themselves, so that browsing feels considered rather than transactional and customers can move from discovery to purchase without losing the sense of a premium brand.",
    solution:
      "The website is structured as an editorial shopping journey. A curated hero introduces the collection, product discovery is organised by category, product cards carry clear imagery and pricing, and quick-view interactions let customers inspect a piece without leaving the flow. Storytelling around craftsmanship, the unboxing experience and a private concierge section support the purchase decision, and an FAQ answers practical questions before they become obstacles.",
    businessValue: [
      "Presents a luxury catalogue with the visual quality customers expect from the category.",
      "Makes handbags, watches, footwear and accessories easy to browse and compare.",
      "Supports the buying decision with craftsmanship and unboxing storytelling.",
      "Offers a private concierge route for higher-intent customers.",
      "Answers common questions through a structured FAQ.",
      "Keeps the full experience intact on mobile, tablet and desktop.",
    ],
    liveUrl: "https://luxevia-edit-m964.vercel.app/",
    thumbnail: luxeviaDesktop.url,
    heroImage: luxeviaDesktop.url,
    mobileImage: luxeviaMobile.url,
    gallery: [
      {
        src: luxeviaDesktop.url,
        alt: "Luxevia Purse homepage hero on desktop",
        caption: "Editorial hero",
        device: "desktop",
      },
      {
        src: luxeviaDesktop2.url,
        alt: "Luxevia Purse product discovery section on desktop",
        caption: "Curated product discovery",
        device: "desktop",
      },
      {
        src: luxeviaMobile.url,
        alt: "Luxevia Purse homepage on a mobile device",
        caption: "Mobile hero",
        device: "mobile",
      },
      {
        src: luxeviaMobile2.url,
        alt: "Luxevia Purse product listing on a mobile device",
        caption: "Mobile product cards",
        device: "mobile",
      },
    ],
    features: [
      {
        icon: BookOpen,
        title: "Editorial Hero",
        copy: "A magazine-style opening that sets the tone of the collection.",
      },
      {
        icon: Search,
        title: "Curated Discovery",
        copy: "Handbags, watches, footwear and accessories organised for browsing.",
      },
      {
        icon: ShoppingBag,
        title: "Product Cards & Pricing",
        copy: "Clear product imagery with pricing and quick-view interactions.",
      },
      {
        icon: Sparkles,
        title: "Craftsmanship Story",
        copy: "Storytelling around craftsmanship and the unboxing experience.",
      },
      {
        icon: MessageCircle,
        title: "Private Concierge",
        copy: "A direct route for customers who want personal assistance.",
      },
      {
        icon: HelpCircle,
        title: "FAQ",
        copy: "Practical answers presented without breaking the editorial tone.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    projectType: "E-Commerce Website",
    services: ["UI Design", "Front-End Development", "Responsive Build"],
    status: "live",
    anatomy: [
      {
        id: "hero",
        label: "Hero",
        copy: "An editorial hero introduces the collection and sets the luxury tone immediately.",
        view: "desktop",
        rect: { top: 12, left: 2, width: 96, height: 78 },
      },
      {
        id: "navigation",
        label: "Navigation",
        copy: "A restrained top bar with shop, discover, search, wishlist, account and cart.",
        view: "desktop",
        rect: { top: 5, left: 2, width: 96, height: 9 },
      },
      {
        id: "products",
        label: "Product Experience",
        copy: "Curated categories and product cards with imagery, naming and pricing.",
        view: "desktop2",
        rect: { top: 15, left: 3, width: 94, height: 70 },
      },
      {
        id: "sections",
        label: "Feature Sections",
        copy: "Craftsmanship, unboxing and concierge sections support the buying decision.",
        view: "desktop2",
        rect: { top: 60, left: 3, width: 94, height: 38 },
      },
      {
        id: "cta",
        label: "Call To Action",
        copy: "Explore the collection and discover actions sit directly under the hero copy.",
        view: "desktop",
        rect: { top: 72, left: 3, width: 42, height: 14 },
      },
      {
        id: "enquiry",
        label: "Concierge & FAQ",
        copy: "A private concierge entry point and FAQ handle higher-intent questions.",
        view: "desktop",
        rect: { top: 5, left: 72, width: 22, height: 9 },
      },
      {
        id: "mobile",
        label: "Mobile Experience",
        copy: "The editorial layout reflows into a single, comfortable mobile column.",
        view: "mobile",
        rect: { top: 4, left: 3, width: 94, height: 92 },
      },
    ],
  },
  {
    id: "usaluxe",
    slug: "usa-luxe-import",
    index: "02",
    name: "USA Luxe Import",
    category: "International Commerce / Product Curation",
    description:
      "A business-focused digital experience designed to connect customers with curated products sourced from the United States.",
    businessChallenge:
      "An import and sourcing business has two very different types of customer: people who want something that is ready to ship, and people who want a specific item sourced for them. Both need to understand what is available, how the process works and how to start a conversation quickly.",
    solution:
      "The website separates the ready-to-ship collection from custom sourcing. A product catalogue with imagery, details and pricing covers what is available now, while a custom order request flow covers everything else. WhatsApp enquiry keeps the conversation immediate, and process, delivery and FAQ sections explain how ordering works before a customer has to ask.",
    businessValue: [
      "Presents the curated catalogue clearly to international customers.",
      "Separates ready-to-ship products from custom sourcing requests.",
      "Turns interest into direct conversations through WhatsApp enquiry.",
      "Explains the sourcing and delivery process up front.",
      "Reduces repetitive questions with a structured FAQ.",
      "Works comfortably on the phones most customers browse from.",
    ],
    liveUrl: "https://usa-luxe-curated.vercel.app/",
    thumbnail: usaluxeDesktop.url,
    heroImage: usaluxeDesktop.url,
    mobileImage: usaluxeMobile.url,
    gallery: [
      {
        src: usaluxeDesktop.url,
        alt: "USA Luxe Import homepage on desktop",
        caption: "Homepage",
        device: "desktop",
      },
      {
        src: usaluxeDesktop2.url,
        alt: "USA Luxe Import product collection on desktop",
        caption: "Product catalogue",
        device: "desktop",
      },
      {
        src: usaluxeMobile.url,
        alt: "USA Luxe Import homepage on a mobile device",
        caption: "Mobile homepage",
        device: "mobile",
      },
      {
        src: usaluxeMobile2.url,
        alt: "USA Luxe Import products on a mobile device",
        caption: "Mobile catalogue",
        device: "mobile",
      },
    ],
    features: [
      {
        icon: Layout,
        title: "Collection",
        copy: "A curated collection view introducing what the business sources.",
      },
      {
        icon: ShoppingBag,
        title: "Product Catalogue",
        copy: "Product details, imagery and pricing in one consistent system.",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp Enquiry",
        copy: "Direct enquiry so interest becomes a conversation immediately.",
      },
      {
        icon: Search,
        title: "Custom Sourcing",
        copy: "A request flow for items that are not in the ready-to-ship range.",
      },
      {
        icon: Truck,
        title: "Delivery Information",
        copy: "Delivery and service information presented without ambiguity.",
      },
      {
        icon: HelpCircle,
        title: "Process & FAQ",
        copy: "A step-by-step explanation of how ordering works, plus an FAQ.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    projectType: "Business Website",
    services: ["UI Design", "Front-End Development", "Enquiry Flow"],
    status: "live",
    anatomy: [
      {
        id: "hero",
        label: "Hero",
        copy: "The hero states what the business sources and who it is for.",
        view: "desktop",
        rect: { top: 12, left: 2, width: 96, height: 76 },
      },
      {
        id: "navigation",
        label: "Navigation",
        copy: "A simple top navigation leading to collection, process and enquiry.",
        view: "desktop",
        rect: { top: 2, left: 2, width: 96, height: 10 },
      },
      {
        id: "products",
        label: "Product Experience",
        copy: "The catalogue presents product imagery, detail and pricing consistently.",
        view: "desktop2",
        rect: { top: 12, left: 3, width: 94, height: 72 },
      },
      {
        id: "sections",
        label: "Feature Sections",
        copy: "Ready-to-ship, custom orders and process sections explain the offer.",
        view: "desktop2",
        rect: { top: 55, left: 3, width: 94, height: 42 },
      },
      {
        id: "cta",
        label: "Call To Action",
        copy: "Primary actions push customers toward browsing or enquiring.",
        view: "desktop",
        rect: { top: 62, left: 3, width: 46, height: 16 },
      },
      {
        id: "enquiry",
        label: "Enquiry",
        copy: "WhatsApp enquiry and custom sourcing requests capture demand directly.",
        view: "desktop2",
        rect: { top: 78, left: 3, width: 94, height: 20 },
      },
      {
        id: "mobile",
        label: "Mobile Experience",
        copy: "Catalogue and enquiry remain fully usable on a small screen.",
        view: "mobile",
        rect: { top: 4, left: 3, width: 94, height: 92 },
      },
    ],
  },
  {
    id: "nailsbygrace",
    slug: "nailsbygrace",
    index: "03",
    name: "NailsByGrace",
    category: "Local Service Business / Beauty",
    description:
      "A professional service-business website designed to present nail services, pricing, portfolio work and appointment requests in a clear and polished digital experience.",
    businessChallenge:
      "A local service business is usually judged on two things online: whether the work looks good, and how easy it is to book. Service details, pricing and availability often live in messages and social posts, which makes it hard for a new client to understand the offer and take the next step.",
    solution:
      "The website puts services, pricing and portfolio work in one place, then leads directly into an appointment request form that captures everything needed for a booking conversation: contact details, preferred date and time, service, nail length, nail art and inspiration notes. Location information and an FAQ round out the practical detail.",
    businessValue: [
      "Presents Gel-X full sets, custom nail art, add-ons and removals clearly.",
      "Shows real portfolio work in a gallery that builds confidence.",
      "Publishes service pricing so clients arrive already informed.",
      "Captures structured appointment requests instead of scattered messages.",
      "Provides location details and answers common questions.",
      "Gives a local business a professional presence beyond social profiles.",
    ],
    liveUrl: "https://grace-nails-studio.vercel.app/",
    thumbnail: graceDesktop.url,
    heroImage: graceDesktop.url,
    mobileImage: graceMobile.url,
    gallery: [
      {
        src: graceDesktop.url,
        alt: "NailsByGrace homepage on desktop",
        caption: "Homepage",
        device: "desktop",
      },
      {
        src: graceDesktop2.url,
        alt: "NailsByGrace services and pricing on desktop",
        caption: "Services and pricing",
        device: "desktop",
      },
      {
        src: graceMobile.url,
        alt: "NailsByGrace homepage on a mobile device",
        caption: "Mobile homepage",
        device: "mobile",
      },
      {
        src: graceMobile2.url,
        alt: "NailsByGrace services on a mobile device",
        caption: "Mobile services",
        device: "mobile",
      },
    ],
    features: [
      {
        icon: Sparkles,
        title: "Service Presentation",
        copy: "Gel-X full sets, custom nail art, add-ons and removal services.",
      },
      {
        icon: Tag,
        title: "Service Pricing",
        copy: "Transparent pricing so clients know what to expect.",
      },
      {
        icon: Images,
        title: "Portfolio Gallery",
        copy: "Real portfolio images that demonstrate the quality of the work.",
      },
      {
        icon: CalendarCheck,
        title: "Appointment Requests",
        copy: "Date, time, service, nail length, nail art and inspiration notes.",
      },
      {
        icon: ClipboardList,
        title: "Appointment Workflow",
        copy: "A structured flow that arrives ready to confirm.",
      },
      {
        icon: HelpCircle,
        title: "Location & FAQ",
        copy: "Location information and answers to recurring questions.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    projectType: "Business Website",
    services: ["UI Design", "Front-End Development", "Booking Form"],
    status: "live",
    anatomy: [
      {
        id: "hero",
        label: "Hero",
        copy: "The hero names the service and location, then leads straight to booking.",
        view: "desktop",
        rect: { top: 12, left: 2, width: 96, height: 80 },
      },
      {
        id: "navigation",
        label: "Navigation",
        copy: "Home, services, pricing, gallery, about and FAQ with a booking button.",
        view: "desktop",
        rect: { top: 2, left: 2, width: 96, height: 9 },
      },
      {
        id: "products",
        label: "Service Experience",
        copy: "Services and pricing are laid out so a new client can self-qualify.",
        view: "desktop2",
        rect: { top: 12, left: 3, width: 94, height: 72 },
      },
      {
        id: "sections",
        label: "Feature Sections",
        copy: "Gallery, about and FAQ sections build trust around the service.",
        view: "desktop2",
        rect: { top: 55, left: 3, width: 94, height: 42 },
      },
      {
        id: "cta",
        label: "Call To Action",
        copy: "Book your appointment and view my work sit at the end of the hero.",
        view: "desktop",
        rect: { top: 70, left: 3, width: 34, height: 14 },
      },
      {
        id: "enquiry",
        label: "Appointment Form",
        copy: "The request form captures every detail needed to confirm a booking.",
        view: "desktop2",
        rect: { top: 74, left: 3, width: 94, height: 24 },
      },
      {
        id: "mobile",
        label: "Mobile Experience",
        copy: "Booking works comfortably on the phone most clients use.",
        view: "mobile",
        rect: { top: 4, left: 3, width: 94, height: 92 },
      },
    ],
  },
  {
    id: "shoptop",
    slug: "shoptop",
    index: "04",
    name: "ShopTop",
    category: "Fashion / Pre-Order Commerce",
    description:
      "An editorial streetwear experience designed around curated Asian fashion, pre-orders and direct customer reservations.",
    businessChallenge:
      "Pre-order commerce works differently from stock-on-hand retail. Customers need to understand what a drop is, what is available, how reserving works and what happens with shipping and payment — otherwise interest stalls before it becomes an order.",
    solution:
      "The site is built around drops. An editorial hero introduces the current pre-order, a drop index and category structure organise streetwear, knits and tops and accessories, and quick reserve plus WhatsApp concierge make reserving a piece immediate. Shipping, payment and delivery information is explicit, and email lead capture keeps interested customers connected to the next drop.",
    businessValue: [
      "Frames pre-orders as a considered editorial experience rather than a risk.",
      "Organises drops and categories so browsing stays clear.",
      "Turns interest into reservations with quick reserve and concierge chat.",
      "Sets expectations with shipping, payment and delivery information.",
      "Builds an audience for future drops through email capture.",
      "Keeps the editorial presentation intact across devices.",
    ],
    liveUrl: "https://curated-streetwear-showcase.vercel.app/",
    thumbnail: shoptopDesktop.url,
    heroImage: shoptopDesktop.url,
    mobileImage: shoptopMobile.url,
    gallery: [
      {
        src: shoptopDesktop.url,
        alt: "ShopTop homepage on desktop",
        caption: "Editorial hero",
        device: "desktop",
      },
      {
        src: shoptopDesktop2.url,
        alt: "ShopTop drop index on desktop",
        caption: "Drop index",
        device: "desktop",
      },
      {
        src: shoptopMobile.url,
        alt: "ShopTop homepage on a mobile device",
        caption: "Mobile hero",
        device: "mobile",
      },
      {
        src: shoptopMobile2.url,
        alt: "ShopTop products on a mobile device",
        caption: "Mobile drop",
        device: "mobile",
      },
    ],
    features: [
      {
        icon: BookOpen,
        title: "Editorial Fashion Hero",
        copy: "A drop-led opening that frames the current pre-order.",
      },
      {
        icon: Layout,
        title: "Drop Index & Categories",
        copy: "Streetwear, knits & tops and accessories organised by drop.",
      },
      {
        icon: ShoppingBag,
        title: "Quick Reserve",
        copy: "Reserving a piece takes a single, obvious action.",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp Concierge",
        copy: "Direct chat for sizing, availability and reservation questions.",
      },
      {
        icon: Truck,
        title: "Shipping & Payment",
        copy: "Shipping, payment and delivery information stated clearly.",
      },
      {
        icon: Mail,
        title: "Email Lead Capture",
        copy: "Interested customers stay connected to the next drop.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    projectType: "E-Commerce Website",
    services: ["UI Design", "Front-End Development", "Reservation Flow"],
    status: "live",
    anatomy: [
      {
        id: "hero",
        label: "Hero",
        copy: "The editorial hero introduces the current pre-order drop.",
        view: "desktop",
        rect: { top: 12, left: 2, width: 96, height: 78 },
      },
      {
        id: "navigation",
        label: "Navigation",
        copy: "Navigation moves between drops, categories and information.",
        view: "desktop",
        rect: { top: 2, left: 2, width: 96, height: 10 },
      },
      {
        id: "products",
        label: "Product Experience",
        copy: "Product presentation and the drop index carry the shopping journey.",
        view: "desktop2",
        rect: { top: 12, left: 3, width: 94, height: 72 },
      },
      {
        id: "sections",
        label: "Feature Sections",
        copy: "Editorial gallery and information sections support the drop.",
        view: "desktop2",
        rect: { top: 55, left: 3, width: 94, height: 42 },
      },
      {
        id: "cta",
        label: "Call To Action",
        copy: "Quick reserve keeps the path from interest to reservation short.",
        view: "desktop",
        rect: { top: 66, left: 3, width: 44, height: 16 },
      },
      {
        id: "enquiry",
        label: "Concierge & Email",
        copy: "WhatsApp concierge and email capture keep customers in contact.",
        view: "desktop2",
        rect: { top: 76, left: 3, width: 94, height: 22 },
      },
      {
        id: "mobile",
        label: "Mobile Experience",
        copy: "The drop experience is designed for mobile-first browsing.",
        view: "mobile",
        rect: { top: 4, left: 3, width: 94, height: 92 },
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Reserved slot rendered after the live projects. */
export const futureProject = {
  index: "05",
  name: "Future Project",
  copy: "Reserved for an upcoming project.",
};

/** Enable once genuine client testimonials are available. */
export const TESTIMONIALS_ENABLED = false;
export const testimonials: { quote: string; author: string; role: string }[] = [];

export const EMAIL = "mismailhasham279@gmail.com";

/** Editable — replace "#" with the real profile URLs. */
export const SOCIAL = {
  instagram: "#",
  linkedin: "#",
};

/** Editable technology list. Add, remove or reorder freely. */
export const TECHNOLOGIES = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
];
