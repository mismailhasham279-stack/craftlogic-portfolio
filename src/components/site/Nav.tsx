import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const links = [
  { label: "Home", hash: "home" },
  { label: "Services", hash: "services" },
  { label: "Work", hash: "work" },
  { label: "Process", hash: "process" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
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
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-3.5 md:px-10">
        <Link
          to="/"
          hash="home"
          aria-label="M. Ismail — home"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Logo size={38} />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[13px] font-bold tracking-[0.18em] uppercase">
              M. Ismail
            </span>
            <span className="mt-1 text-[9px] tracking-[0.24em] text-muted-foreground uppercase">
              Web Developer
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.hash}>
              <Link
                to="/"
                hash={l.hash}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-primary transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="start"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Start a Project
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="hairline grid h-10 w-10 shrink-0 place-items-center rounded-full lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        aria-hidden
        className="h-px origin-left bg-primary/70 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div
        className={cn(
          "fixed inset-x-0 top-[64px] bottom-0 origin-top bg-background/98 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 pt-6">
          {links.map((l, i) => (
            <li
              key={l.hash}
              style={{ transitionDelay: `${open ? i * 45 : 0}ms` }}
              className={cn(
                "border-b border-border/60 transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
            >
              <Link
                to="/"
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="font-display block py-5 text-3xl font-semibold tracking-tight"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-8">
          <Link
            to="/"
            hash="start"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-primary px-6 py-4 text-center text-base font-medium text-primary-foreground"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
