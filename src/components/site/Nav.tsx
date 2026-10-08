import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", hash: "work" },
  { label: "Services", hash: "services" },
  { label: "Process", hash: "process" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ hash }) => document.getElementById(hash))
      .filter((section): section is HTMLElement => section !== null);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusableItems = () =>
      mobileNavigationRef.current?.querySelectorAll<HTMLElement>(
        'a[href]:not([tabindex="-1"]), button:not([disabled])',
      );
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusableItems();
      if (!items?.length) return;
      const first = items.item(0);
      const last = items.item(items.length - 1);
      if (!first || !last) return;
      if (document.activeElement === menuButtonRef.current) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  const toggleMenu = () => {
    if (open) {
      closeMenu();
      return;
    }
    setOpen(true);
    window.requestAnimationFrame(() => {
      mobileNavigationRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-primary/25 bg-background/95 shadow-[0_8px_30px_rgb(0_0_0_/_18%)] backdrop-blur-xl"
          : "border-primary/15 bg-background/70 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-6 md:px-10">
        <Link
          to="/"
          hash="home"
          activeOptions={{ exact: true, includeHash: true }}
          aria-label="CRAFTLOGIC — home"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt=""
            width={50}
            height={50}
            className="h-11 w-auto shrink-0 object-contain drop-shadow-[0_0_10px_rgba(229,195,120,0.15)] md:h-[52px]"
            loading="eager"
            decoding="async"
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-[0.13em] uppercase">
              CRAFTLOGIC
            </span>
            <span className="mt-1 whitespace-nowrap text-[8px] tracking-[0.14em] text-muted-foreground uppercase">
              Full-Stack Digital Agency
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.hash}>
              <Link
                to="/"
                hash={l.hash}
                activeOptions={{ exact: true, includeHash: true }}
                aria-current={activeSection === l.hash ? "location" : undefined}
                className={cn(
                  "focus-ring group relative rounded-sm py-2 text-[13px] tracking-[0.01em] transition-colors duration-200 hover:text-foreground",
                  activeSection === l.hash ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-primary transition-transform duration-300",
                    activeSection === l.hash ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="start"
            activeOptions={{ exact: true, includeHash: true }}
            onClick={() => setOpen(false)}
            className="focus-ring hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-[0_0_0_1px_rgb(229_195_120_/_14%)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#E5C378] hover:shadow-[0_0_16px_rgba(229,195,120,0.25)] sm:inline-flex"
          >
            Start a Project <span aria-hidden="true">→</span>
          </Link>
          <button
            type="button"
            ref={menuButtonRef}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="hairline focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors hover:border-primary/50 hover:text-primary lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        ref={mobileNavigationRef}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={cn(
          "invisible fixed inset-x-0 top-[72px] bottom-0 origin-top border-t border-primary/20 bg-background/98 px-6 pb-10 pt-5 backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 lg:hidden",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-xl flex-col gap-1">
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
                activeOptions={{ exact: true, includeHash: true }}
                onClick={closeMenu}
                aria-current={activeSection === l.hash ? "location" : undefined}
                tabIndex={open ? undefined : -1}
                className={cn(
                  "focus-ring font-display flex items-center justify-between rounded-sm py-4 text-2xl font-semibold tracking-tight transition-colors hover:text-primary",
                  activeSection === l.hash ? "text-primary" : "text-foreground",
                )}
              >
                {l.label}
                {activeSection === l.hash && (
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-xl pt-7">
          <Link
            to="/"
            hash="start"
            activeOptions={{ exact: true, includeHash: true }}
            onClick={closeMenu}
            tabIndex={open ? undefined : -1}
            className="focus-ring flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-center text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_rgb(229_195_120_/_14%)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#E5C378] hover:shadow-[0_0_16px_rgba(229,195,120,0.25)]"
          >
            Start a Project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
