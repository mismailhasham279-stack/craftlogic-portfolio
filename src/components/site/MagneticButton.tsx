import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function MagneticButton({ href, children, variant = "solid", className }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.22;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.32;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        "group relative inline-flex items-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-[transform,background-color,border-color,color] duration-300 ease-out",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "hairline text-foreground hover:border-primary/60 hover:bg-primary/5",
        className,
      )}
    >
      <span>{children}</span>
    </a>
  );
}
