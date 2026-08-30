import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-border" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <a href="#home" className="font-display text-sm font-bold tracking-[0.22em] uppercase">
          M.<span className="text-primary">Ismail</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-primary transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Start a Project
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="hairline grid h-10 w-10 shrink-0 place-items-center rounded-full lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-x-0 top-[68px] bottom-0 origin-top bg-background/98 backdrop-blur-xl transition-all duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 pt-8">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: `${open ? i * 45 : 0}ms` }}
              className={cn(
                "border-b border-border/60 transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display block py-5 text-3xl font-semibold tracking-tight"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-8">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-primary px-6 py-4 text-center text-base font-medium text-primary-foreground"
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}
