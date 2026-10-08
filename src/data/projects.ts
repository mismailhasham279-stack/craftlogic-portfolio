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

export const PROJECT_ASSETS = {
  luxevia: {
    thumbnail: "/images/projects/luxevia/thumbnail.webp",
    desktop: "/images/projects/luxevia/desktop.webp",
    mobile: "/images/projects/luxevia/mobile.webp",
  },
  usaLuxe: {
    thumbnail: "/images/projects/usa-luxe/thumbnail.webp",
    desktop: "/images/projects/usa-luxe/desktop.webp",
    mobile: "/images/projects/usa-luxe/mobile.webp",
  },
  nailsByGrace: {
    thumbnail: "/images/projects/nailsbygrace/thumbnail.webp",
    desktop: "/images/projects/nailsbygrace/desktop.webp",
    mobile: "/images/projects/nailsbygrace/mobile.webp",
  },
  shopTop: {
    thumbnail: "/images/projects/shoptop/thumbnail.webp",
    desktop: "/images/projects/shoptop/desktop.webp",
    mobile: "/images/projects/shoptop/mobile.webp",
  },
} as const;

const PROJECT_PREVIEWS = {
  luxevia: null,
  haider: "/project-previews/haider-stillbok.svg",
  aurevane: "/project-previews/aurevane.svg",
  usaLuxe: null,
  nailsByGrace: null,
  shopTop: null,
} as const;

export type GalleryImage = {
  src: string | null;
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
  thumbnail: string | null;
  heroImage: string | null;
  mobileImage: string | null;
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
    category: "E-Commerce Website",
    description:
      "A luxury purse storefront with a sample catalogue; the live site identifies product details as illustrative.",
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
    thumbnail: PROJECT_PREVIEWS.luxevia,
    heroImage: null,
    mobileImage: null,
    gallery: [
      {
        src: PROJECT_PREVIEWS.luxevia,
        alt: "Luxevia Purse homepage hero on desktop",
        caption: "Editorial hero",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.luxevia,
        alt: "Luxevia Purse product discovery section on desktop",
        caption: "Curated product discovery",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.luxevia,
        alt: "Luxevia Purse homepage on a mobile device",
        caption: "Mobile hero",
        device: "mobile",
      },
      {
        src: PROJECT_PREVIEWS.luxevia,
        alt: "Luxevia Purse product listing on a mobile device",
        caption: "Mobile product cards",
        device: "mobile",
      },
    ],
    features: [
      {
        icon: ShoppingBag,
        title: "Sample Catalogue",
        copy: "The live site identifies its product details as illustrative.",
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
    id: "haider-stillbok",
    slug: "haider-stillbok-premium",
    index: "02",
    name: "Haider Stillbok Premium",
    category: "Commercial Tech Catalog",
    description:
      "A premium laptop catalog for business users, creators and professionals, presenting imported HP and Dell laptops with clear specifications, condition details and direct WhatsApp ordering.",
    businessChallenge:
      "Laptop buyers need to compare processor, memory, storage, display and condition before they can make a confident choice. A broad catalog can feel difficult to navigate when product details, pricing and availability are spread across separate listings or conversations.",
    solution:
      "The site groups business laptops, EliteBooks, workstations and convertibles into clear collections, then presents selected listings with their key specifications, condition notes and pricing. Product discovery is paired with direct WhatsApp contact, while delivery, ordering steps and frequently asked questions explain what to expect before a customer gets in touch.",
    businessValue: [
      "Organises business laptops, workstations and convertibles into distinct collections.",
      "Makes key specifications easier to scan and compare across listings.",
      "Displays condition and pricing details alongside each laptop.",
      "Provides a direct WhatsApp path for availability and ordering questions.",
      "Explains ordering, delivery and common pre-purchase questions.",
      "Serves professional buyers across desktop and mobile browsing.",
    ],
    liveUrl: "https://haider-stillbok-premium.vercel.app/",
    thumbnail: PROJECT_PREVIEWS.haider,
    heroImage: PROJECT_PREVIEWS.haider,
    mobileImage: PROJECT_PREVIEWS.haider,
    gallery: [
      {
        src: PROJECT_PREVIEWS.haider,
        alt: "Premium business laptop shown on a dark studio background",
        caption: "Premium laptop hero",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.haider,
        alt: "Business laptop collection",
        caption: "Business laptops",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.haider,
        alt: "Professional mobile workstation",
        caption: "Workstations",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.haider,
        alt: "Convertible business laptop",
        caption: "x360 convertibles",
        device: "mobile",
      },
    ],
    features: [
      {
        icon: Layout,
        title: "Product Collections",
        copy: "Business laptops, EliteBooks, workstations, convertibles and other focused collections.",
      },
      {
        icon: Search,
        title: "Specification-Led Browsing",
        copy: "Processor, memory, storage and display details help customers compare listings.",
      },
      {
        icon: Tag,
        title: "Clear Listing Details",
        copy: "Pricing, condition and charger notes appear with the product information.",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp Ordering",
        copy: "Direct contact gives customers a route to ask questions and confirm availability.",
      },
      {
        icon: Truck,
        title: "Delivery Information",
        copy: "Delivery details and nationwide service information support purchase planning.",
      },
      {
        icon: HelpCircle,
        title: "Ordering Guidance",
        copy: "A three-step ordering outline and FAQ cover common pre-purchase questions.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    projectType: "Commercial Technology Catalog",
    services: ["UI Design", "Front-End Development", "Product Catalog"],
    status: "live",
    anatomy: [
      {
        id: "hero",
        label: "Product Hero",
        copy: "The opening introduces premium imported laptops and directs visitors to browse or ask a question.",
        view: "desktop",
        rect: { top: 8, left: 5, width: 90, height: 55 },
      },
      {
        id: "collections",
        label: "Collections",
        copy: "Dedicated categories help visitors browse by laptop type and work requirement.",
        view: "desktop2",
        rect: { top: 8, left: 5, width: 90, height: 55 },
      },
      {
        id: "listings",
        label: "Laptop Listings",
        copy: "Product cards present model names, specifications, condition and pricing together.",
        view: "desktop",
        rect: { top: 14, left: 5, width: 90, height: 65 },
      },
      {
        id: "ordering",
        label: "Ordering",
        copy: "WhatsApp actions connect product research to a direct conversation with the business.",
        view: "desktop2",
        rect: { top: 20, left: 5, width: 90, height: 60 },
      },
      {
        id: "delivery",
        label: "Delivery Details",
        copy: "Delivery information and order guidance answer practical questions before purchase.",
        view: "desktop",
        rect: { top: 30, left: 5, width: 90, height: 55 },
      },
      {
        id: "mobile",
        label: "Mobile Product",
        copy: "The laptop catalog is available to customers browsing on mobile devices.",
        view: "mobile",
        rect: { top: 8, left: 5, width: 90, height: 75 },
      },
    ],
  },
  {
    id: "aurevane",
    slug: "aurevane",
    index: "03",
    name: "Aurevane",
    category: "Luxury Brand Showcase",
    description:
      "A considered designer-luxury storefront presenting handbags, timepieces, footwear, apparel and accessories through an editorial collection and private concierge experience.",
    businessChallenge:
      "A multi-category luxury collection needs a consistent point of view without making browsing feel like an ordinary product list. Customers also need practical guidance on availability, sizing, delivery and ordering while retaining the sense of a personal, premium service.",
    solution:
      "The experience introduces the seasonal edit with an editorial hero and a clear brand philosophy, then organizes the collection by category. Product details, craftsmanship storytelling and gift presentation support discovery, while concierge guidance and client-service information give customers a direct route to ask about availability, fit and orders.",
    businessValue: [
      "Presents a coherent luxury identity across several product categories.",
      "Lets customers explore handbags, watches, footwear, apparel and accessories.",
      "Uses craftsmanship and product storytelling to add context to the collection.",
      "Connects product discovery with a private concierge experience.",
      "Surfaces shipping, payment and client-service information for purchase confidence.",
      "Maintains an editorial presentation from collection discovery to product detail.",
    ],
    liveUrl: "https://aurevane-edit.vercel.app/",
    thumbnail: PROJECT_PREVIEWS.aurevane,
    heroImage: PROJECT_PREVIEWS.aurevane,
    mobileImage: PROJECT_PREVIEWS.aurevane,
    gallery: [
      {
        src: PROJECT_PREVIEWS.aurevane,
        alt: "Structured tan leather satchel from the AUREVANE edit",
        caption: "Seasonal edit",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.aurevane,
        alt: "Gold-tone skeleton automatic timepiece on black silk",
        caption: "Timepieces",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.aurevane,
        alt: "Macro detail of leather grain, stitching and a gold-tone ring",
        caption: "Craftsmanship detail",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.aurevane,
        alt: "Vesper patent pump from the AUREVANE collection",
        caption: "Footwear",
        device: "mobile",
      },
    ],
    features: [
      {
        icon: BookOpen,
        title: "Editorial Brand Story",
        copy: "A seasonal introduction and brand philosophy establish the collection's point of view.",
      },
      {
        icon: ShoppingBag,
        title: "Curated Collection",
        copy: "Handbags, timepieces, footwear, apparel and accessories are organized for discovery.",
      },
      {
        icon: Sparkles,
        title: "Craftsmanship Details",
        copy: "Material, construction and finishing receive dedicated editorial attention.",
      },
      {
        icon: Images,
        title: "Product Presentation",
        copy: "Featured edits and collection browsing keep product discovery visual and considered.",
      },
      {
        icon: MessageCircle,
        title: "Private Concierge",
        copy: "Customers can ask about availability, sizing, product details and order assistance.",
      },
      {
        icon: HelpCircle,
        title: "Client Services",
        copy: "Shipping, payment and frequently asked questions support informed decisions.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    projectType: "Luxury E-Commerce / Brand Showcase",
    services: ["UI Design", "Front-End Development", "E-Commerce Experience"],
    status: "live",
    anatomy: [
      {
        id: "hero",
        label: "Seasonal Edit",
        copy: "The opening introduces the current edit and guides visitors toward collection discovery.",
        view: "desktop",
        rect: { top: 8, left: 5, width: 90, height: 55 },
      },
      {
        id: "philosophy",
        label: "Brand Philosophy",
        copy: "The brand story frames the selection around proportion, material and lasting use.",
        view: "desktop2",
        rect: { top: 8, left: 5, width: 90, height: 55 },
      },
      {
        id: "collection",
        label: "Collection",
        copy: "Product categories organize handbags, timepieces, footwear, apparel and accessories.",
        view: "desktop",
        rect: { top: 14, left: 5, width: 90, height: 65 },
      },
      {
        id: "craftsmanship",
        label: "Craftsmanship",
        copy: "Material and finishing details add context to the product presentation.",
        view: "desktop2",
        rect: { top: 20, left: 5, width: 90, height: 60 },
      },
      {
        id: "concierge",
        label: "Private Concierge",
        copy: "Personal assistance connects product interest to availability and order guidance.",
        view: "desktop",
        rect: { top: 30, left: 5, width: 90, height: 55 },
      },
      {
        id: "mobile",
        label: "Mobile Collection",
        copy: "Collection discovery and concierge information adapt to mobile browsing.",
        view: "mobile",
        rect: { top: 8, left: 5, width: 90, height: 75 },
      },
    ],
  },
  {
    id: "usaluxe",
    slug: "usa-luxe-import",
    index: "04",
    name: "USA Luxe Import",
    category: "Business Website",
    description:
      "A business page directing visitors to Instagram for new arrivals, products and launches.",
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
    thumbnail: PROJECT_PREVIEWS.usaLuxe,
    heroImage: null,
    mobileImage: null,
    gallery: [
      {
        src: PROJECT_PREVIEWS.usaLuxe,
        alt: "USA Luxe Import homepage on desktop",
        caption: "Homepage",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.usaLuxe,
        alt: "USA Luxe Import product collection on desktop",
        caption: "Product catalogue",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.usaLuxe,
        alt: "USA Luxe Import homepage on a mobile device",
        caption: "Mobile homepage",
        device: "mobile",
      },
      {
        src: PROJECT_PREVIEWS.usaLuxe,
        alt: "USA Luxe Import products on a mobile device",
        caption: "Mobile catalogue",
        device: "mobile",
      },
    ],
    features: [
      {
        icon: MessageCircle,
        title: "Instagram Updates",
        copy: "The live page points visitors to Instagram for new arrivals, products and launches.",
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
    index: "05",
    name: "NailsByGrace",
    category: "Beauty Service Website",
    description: "A clear introduction to Gel-X, nail art and custom nail sets.",
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
    thumbnail: PROJECT_PREVIEWS.nailsByGrace,
    heroImage: null,
    mobileImage: null,
    gallery: [
      {
        src: PROJECT_PREVIEWS.nailsByGrace,
        alt: "NailsByGrace homepage on desktop",
        caption: "Homepage",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.nailsByGrace,
        alt: "NailsByGrace services and pricing on desktop",
        caption: "Services and pricing",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.nailsByGrace,
        alt: "NailsByGrace homepage on a mobile device",
        caption: "Mobile homepage",
        device: "mobile",
      },
      {
        src: PROJECT_PREVIEWS.nailsByGrace,
        alt: "NailsByGrace services on a mobile device",
        caption: "Mobile services",
        device: "mobile",
      },
    ],
    features: [
      {
        icon: Sparkles,
        title: "Gel-X",
        copy: "Listed among the services on the live site.",
      },
      {
        icon: Sparkles,
        title: "Nail Art",
        copy: "Listed among the services on the live site.",
      },
      {
        icon: Sparkles,
        title: "Custom Sets",
        copy: "Listed among the services on the live site.",
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
    index: "06",
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
    thumbnail: PROJECT_PREVIEWS.shopTop,
    heroImage: null,
    mobileImage: null,
    gallery: [
      {
        src: PROJECT_PREVIEWS.shopTop,
        alt: "ShopTop homepage on desktop",
        caption: "Editorial hero",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.shopTop,
        alt: "ShopTop drop index on desktop",
        caption: "Drop index",
        device: "desktop",
      },
      {
        src: PROJECT_PREVIEWS.shopTop,
        alt: "ShopTop homepage on a mobile device",
        caption: "Mobile hero",
        device: "mobile",
      },
      {
        src: PROJECT_PREVIEWS.shopTop,
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

const PUBLIC_PROJECT_IDS = new Set(["luxevia", "usaluxe", "nailsbygrace", "shoptop"]);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug && PUBLIC_PROJECT_IDS.has(project.id));

/** Enable once genuine client testimonials are available. */
export const TESTIMONIALS_ENABLED = false;
export const testimonials: { quote: string; author: string; role: string }[] = [];

export const EMAIL = "foundercraftlogic@gmail.com";

/** Add profile URLs only when the official account links are available. */
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
